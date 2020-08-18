import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import session from 'express-session';
import dotenv from 'dotenv';
import fs from 'fs';
import User from './src/db/User.js';
import Challenge from './src/db/Challenge.js';
import Game from './src/db/Game.js';

dotenv.config();

const app = express();

const saltRounds = 10;

// Подключаем mongoose.
mongoose.connect('mongodb://localhost:27017/coderacer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  'error',
  console.error.bind(console, 'Ошибка соединения с MongoDB:')
);

app.use(express.json());
app.use(
  session({
    secret: 'asgaerhgse',
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

// app.use(express.static('../client/build'));

// отправление запроса логин
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await User.find({});
  const user = users.find((user) => user.email === email);
  console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    delete user.password;
    // подняли сессии
    req.session.user = user;
    return res.end();
  }
  res.status(401).end();
});

// запрашивает аутенфикацию
app.get(
  '/api/home',
  (req, res, next) => {
    if (req.session.user) {
      return next();
    }
    res.status(401).end();
  },
  (req, res) => {
    res.json({
      email: req.session.user.email,
    });
  }
);

// регистрация
app.post('/api/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds),
    });
    req.session.user = user;
    await user.save();
    console.log('ok');
    // req.session.user = user;
    res.json({ isOkay: true });
  } catch (error) {
    console.log(error.message);
    res.json({ isOkay: false, errorMessage: error.message });
  }
});

// app.get('*', async () => {
//   const index = await fs.promises.readFile(
//     '../client/build/index.html',
//     'utf-8'
//   );
//   res.send(index);
// });

app.get('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.end();
    });
  } else {
    res.end();
  }
});

// выдает все задания из БД (только для разработки, в продакшене не использовать)
app.get('/api/challenges', async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
});

app.get('/api/challenges/:id', async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);
  res.json(challenge);
});

// выдает массив всех еще не начавшихся игр (без заданий), отсортированных по дате старта
app.get('/api/game/gameList', async (req, res) => {
  const games = await Game.findUpcoming();
  // console.log(games)
  res.json(games);
});

// выдает полную информацию по игре. id - это _id игры в БД
app.get('/api/game/:id', async (req, res) => {
  const game = await Game.findById(req.params.id).populate('players.player');
  res.json(game);
});

// добавляет игрока в игру, id игрока берет из сессии
app.post('/api/game/join/:id', async (req, res) => {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  const game = await Game.findById(req.params.id);
  if (game.startDate > Date.now) {
    return res
      .status(400)
      .json({ isOkay: false, errorMessage: 'Игра уже началась' });
  }
  const playerIndex = game.players.findIndex(
    (player) => player.player.toString() === req.session.user._id
  );
  if (playerIndex === -1) {
    game.players.push({
      player: req.session.user._id,
      challengeTimes: [],
    });
  }
  await game.save();
  return res.json(game);
});

// удаляет игрока из игры, id игрока берет из сессии
app.post('/api/game/quit/:id', async (req, res) => {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  try {
    const game = await Game.findById(req.params.id);
    const playerIndex = game.players.findIndex(
      (player) => player.player.toString() === req.session.user._id
    );
    game.players.splice(playerIndex, 1);
    await game.save();
    return res.json(game);
  } catch (error) {
    console.log(error.message);
    return res.json({ isOkay: false, errorMessage: error.message });
  }
});

// добавляет в массив дат выполнения задания игрока новое время
app.post('/api/game/postScore/:id', async (req, res) => {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  try {
    const game = await Game.findById(req.params.id);
    const playerIndex = game.players.findIndex(
      (player) => player.player.toString() === req.session.user._id
    );
    game.players[playerIndex].challengeTimes.push(Date.now);
    await game.save();
    return res.status(200).json(game);
  } catch (error) {
    console.log(error.message);
    return res.json({ isOkay: false, errorMessage: error.message });
  }
});

// создает новую игру, пока без заданий
app.post('/api/game/new', async (req, res) => {
  const { date } = req.body;
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  if (!date || date < Date.now()) {
    return res.status(400).send('Некорректная дата начала');
  }
  const game = await Game.create({
    author: req.session.user._id,
    challenges: [],
    startDate: date,
    players: [
      {
        player: req.session.user._id,
        challengeTimes: [],
      },
    ],
  });
  res.json(game);
});

// get user statistics
app.get('/api/userstat', (req, res) => {
  if (req.session) {
    // get users info from db
    const users = [{ name: 'user1' }, { name: 'user2' }, { name: 'user3' }];
    res.json(users);
  } else {
    // get error message
    res.json({ name: 'error' });
  }
});

app.listen(3001);

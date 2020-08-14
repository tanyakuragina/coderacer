import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import session from 'express-session';
import dotenv from 'dotenv';
import User from './src/db/User.js';
import Challenge from './src/db/Challenge.js'
import fs from 'fs';
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

// app.use(express.static('../client/build'));

//отправление запроса логин
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await User.find({});
  const user = users.find((user) => user.email === email);
  console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    delete user.password;
    //подняли сессии
    req.session.user = user;
    return res.end();
  }
  res.status(401).end();
});

//запрашивает аутенфикацию
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

//регистрация
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

app.get('/api/challenges', async (req, res) => {
  const challenges = await Challenge.find()
    res.json(challenges);
  }
);

app.listen(process.env.PORT ?? 3001);

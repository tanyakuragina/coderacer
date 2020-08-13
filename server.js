import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './src/db/User.js';
import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import FileStoreOption from 'session-file-store';
// FileStoreOption(session);
import logger from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// подключаем сессии куки.
// app.use(
//   session({
//     store: new FileStoreOption(),
//     key: 'user_sid',
//     secret: 'anything here',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 600000,
//     },
//   })
// );

app.use(cookieParser());

app.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds),
    });
    await user.save();
    console.log('ok');
    // req.session.user = user;
    res.json({ isOkay: true });
  } catch (error) {
    console.log(error.message);
    res.json({ isOkay: false, errorMessage: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);
  if (user) {
    console.log('вы вошли');
    res.json(200);
    // res.json({user})
  } else {
    console.log('вы не вошли');
    res.json(404);
  }
});

// app.get('/api/restaurants', (req, res) => {
//   res.json(
//     db.map(({ id, name }) => ({
//       id,
//       name,
//     }))
//   );
// });

// app.get('/api/restaurant/:id', (req, res) => {
//   const { id } = req.params;
//   res.json(db.find((restaurant) => restaurant.id.toString() === id));
// });

app.listen(3001, () => console.log('Listening on 3001'));

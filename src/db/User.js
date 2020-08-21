import mongoose from 'mongoose';

// Создаём схемы.
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'Такой username уже существует'],
    required: [true, 'Введите username'],
    validate: [
      function (username) {
        const re = /^[\w.-]{0,19}[0-9a-z]/;
        return re.test(username);
      },
      'Используется символы от a-z, 0-9',
    ],
    match: [/^[\w.-]{0,19}[0-9a-z]/, 'Используется символы от a-z, 0-9'],
  },
  email: {
    type: String,
    unique: [true, 'Такой email уже существует'],
    required: [true, 'Введите email'],
    validate: [
      function (email) {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
      },
      'Пожалуйста, введите корректный email',
    ],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Пожалуйста, введите корректный email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Введите пароль'],
  },
});

userSchema.methods.findPastGames = function () {
  return this.model('Game').find({ 'players.player': this._id }).where('startDate')
    .lte(new Date())
    .sort({ startDate: -1 });
};

export default mongoose.model('User', userSchema);

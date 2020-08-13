import mongoose from 'mongoose';

// Создаём схемы.
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'Такой username уже существует'],
    required: [true, 'Введите username'],
  },
  email: {
    type: String,
    unique: [true, 'Такой email уже существует'],
    required: [true, 'Введите email'],
    validate: [
      function (email) {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

export default mongoose.model('User', userSchema);

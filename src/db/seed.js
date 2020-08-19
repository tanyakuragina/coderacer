import mongoose from 'mongoose';
import Challenge from './Challenge.js';
import Game from './Game.js';
import User from './User.js';

mongoose.connect('mongodb://localhost:27017/coderacer', { useNewUrlParser: true, useUnifiedTopology: true });

Challenge.create({
  name: 'Перемножение чисел в массиве',
  difficulty: 1,
  description: 'Необходимо вывести массив элементов исходного массива arr, умноженных на два.',
  startParameters: 'arr',
  sampleInput: '[1,2,3,4,5]',
  sampleOutput: '[2,4,6,8,10]',
  tests: {
    sample: { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
    main: [
      { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
      { in: [[10, 20, 30, 40, 50]], out: [20, 40, 60, 80, 100] },
      { in: [[124, 634, 234, 85, 31, 1346, 8467, 1234]], out: [248, 1268, 468, 170, 62, 2692, 16934, 2468] },
      { in: [[]], out: [] },
      { in: [[-1, -2, -3, -4]], out: [-2, -4, -6, -8] },
      { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
      { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
      { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
    ],
  },
});

Challenge.create({
  name: 'Убрать гласные',
  difficulty: 1,
  description: 'Напишите функцию, которая уберет все гласные из строки. Строка состоит из латинских символов в нижнем регистре.\nГласные латинские буквы: a, e, i, o, u, y.',
  startParameters: 'str',
  sampleInput: 'coderacer is fun',
  sampleOutput: 'cdrcr s fn',
  tests: {
    sample: { in: ['abracadabra'], out: 'brcdbr' },
    main: [
      { in: ['all your base are belong to us'], out: 'll r bs r blng t s' },
      { in: ['eval is evil'], out: 'vl s vl' },
      { in: ['goodbye'], out: 'gdby' },
      { in: [''], out: '' },
    ],
  },
});

// const seed = async () => {
//   const challenges = await Challenge.find();
//   const users = await User.find();
//   Game.create({
//     challenges,
//     author: users[0],
//     startDate: new Date('2020-08-18T14:57:08.633Z'),
//     players: users.map((user) => ({
//       player: user._id,
//       challengeTimes: [],
//     })),
//   });
// };

// seed();

Challenge.create({
  name: 'Найди среднюю букву',
  difficulty: 1,
  description: 'Напиши функцию, которая принимает строку и возвращает средний символ этой строки. Если длина строки нечетная, верни два средних символа (в виде строки)',
  startParameters: 'str',
  sampleInput: 'testing',
  sampleOutput: 't',
  tests: {
    sample: { in: ['testing'], out: 't' },
    main: [
      { in: ['middle'], out: 'dd' },
      { in: ['A'], out: 'A' },
      { in: ['coderacer'], out: 'r' },
      { in: ['1115999'], out: '5' },
      { in: ['test'], out: 'es' },
    ],
  },
});

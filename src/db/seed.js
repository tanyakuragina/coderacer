import mongoose from 'mongoose';
import Challenge from './Challenge.js';
import Game from './Game.js';
import User from './User.js';

mongoose.connect('mongodb://localhost:27017/coderacer', { useNewUrlParser: true, useUnifiedTopology: true });

// Challenge.create({
//   name: 'Убрать гласные',
//   difficulty: 1,
//   describtion: 'Напишите функцию, которая уберет все гласные из строки. Строка состоит из латинских символов в нижнем регистре.',
//   startParameters: 'str',
//   sampleInput: 'coderacer is fun',
//   sampleOutput: 'cdrcr s fn',
//   tests: {
//     sample: { in: ['coderacer is fun'], out: 'cdrcr s fn' },
//     main: [
//       { in: ['abracadabra'], out: 'brcdbr' },
//       { in: ['all your base are belong to us'], out: 'll r bs r blng t s' },
//       { in: ['eval is evil'], out: 'vl s vl' },
//       { in: ['goodbye'], out: 'gdby' },
//       { in: [''], out: '' },
//     ],
//   },
// });

// Challenge.create({
//   name: 'Найти все делители',
//   difficulty: 1,
//   describtion: 'Напиши функцию, которая принимает целое и возвращает массив всех делителей введенного числа, в порядке возрастания значения. Если делителей нет, выведи  строку "(integer) is prime"',
//   startParameters: 'num',
//   sampleInput: '12',
//   sampleOutput: '[2,3,4,6]',
//   tests: {
//     sample: { in: [25], out: [5] },
//     main: [
//       { in: [123456789], out: [3, 9, 3607, 3803, 10821, 11409, 32463, 34227, 13717421, 41152263] },
//       { in: [12345], out: [3, 5, 15, 823, 2469, 4115] },
//       { in: [13], out: '13 is prime' },
//       { in: [42], out: [2, 3, 6, 7, 14, 21] },
//       { in: [1337], out: [7, 191] },
//     ],
//   },
// });

// Challenge.create({
//   name: 'Убывающее число',
//   difficulty: 1,
//   describtion: 'Напиши функцию, которая принимает неотрицательное целое число и возвращает его цифры в убывающем порядке. Другими словами - переставь цифры местами, чтобы получить максимально возможное значение',
//   startParameters: 'num',
//   sampleInput: '42145',
//   sampleOutput: '54421',
//   tests: {
//     sample: { in: [145263], out: 654321 },
//     main: [
//       { in: [123456789], out: 987654321 },
//       { in: [12345], out: 54321 },
//       { in: [926387145], out: 987654321 },
//       { in: [11111555577], out: 77555511111 },
//       { in: [2340234120120], out: 4433222211000 },
//     ],
//   },
// });

// Challenge.create({
//   name: 'Перемножение чисел в массиве',
//   difficulty: 1,
//   description: 'Необходимо вывести массив элементов исходного массива arr, умноженных на два.',
//   startParameters: 'arr',
//   sampleInput: '[1,2,3,4,5]',
//   sampleOutput: '[2,4,6,8,10]',
//   tests: {
//     sample: { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
//     main: [
//       { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
//       { in: [[10, 20, 30, 40, 50]], out: [20, 40, 60, 80, 100] },
//       { in: [[124, 634, 234, 85, 31, 1346, 8467, 1234]], out: [248, 1268, 468, 170, 62, 2692, 16934, 2468] },
//       { in: [[]], out: [] },
//       { in: [[-1, -2, -3, -4]], out: [-2, -4, -6, -8] },
//       { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
//       { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
//       { in: [[1, 2, 3, 4, 5]], out: [2, 4, 6, 8, 10] },
//     ],
//   },
// });

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

// Challenge.create({
//   name: 'Найди среднюю букву',
//   difficulty: 1,
//   description: 'Напиши функцию, которая принимает строку и возвращает средний символ этой строки. Если длина строки нечетная, верни два средних символа (в виде строки)',
//   startParameters: 'str',
//   sampleInput: 'testing',
//   sampleOutput: 't',
//   tests: {
//     sample: { in: ['testing'], out: 't' },
//     main: [
//       { in: ['middle'], out: 'dd' },
//       { in: ['A'], out: 'A' },
//       { in: ['coderacer'], out: 'r' },
//       { in: ['1115999'], out: '5' },
//       { in: ['test'], out: 'es' },
//     ],
//   },
// });

// Challenge.create({
//   tests: { sample: { in: [true], out: 'YES' }, main: [{ in: [false], out: 'NO' }, { in: [true], out: 'YES' }] }, name: 'Правда или ложь', difficulty: 1, description: 'Напиши функцию, который принимает булевое значение и возвращает "YES" в случае true и "NO" в случае false', startParameters: 'bool', sampleInput: 'false', sampleOutput: 'NO',
// });

// Challenge.create({
//   name: 'FizzBuzz',
//   difficulty: 2,
//   describtion: 'Напишите функцию, возвращающую массив от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями: вывод Fizz вместо чисел, кратных 3,  вывод Buzz вместо чисел, кратных 5, вывод Fizzbuzz вместо чисел, кратных как 3, так и 5.',
//   startParameters: 'n',
//   sampleInput: '5',
//   sampleOutput: '[1, 2, \'Fizz\', 4, \'Buzz\']',
//   tests: {
//     sample: { in: [5], out: [1, 2, 'Fizz', 4, 'Buzz'] },
//     main: [
//       { in: [1], out: [1] },
//       { in: [2], out: [2] },
//       { in: [6], out: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz'] },
//       { in: [15], out: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'] },
//     ],
//   },
// });

// Challenge.create({
//   name: 'Сумма элементов массива',
//   difficulty: 1,
//   describtion: 'Напишите функцию, которая принимает массив чисел, и выводит сумму этого массива',
//   startParameters: 'arr',
//   sampleInput: '[1, 2, 3]',
//   sampleOutput: '6',
//   tests: {
//     sample: { in: [[1, 2, 3]], out: 6 },
//     main: [
//       { in: [[1, 2, 3]], out: 6 },
//       { in: [[4, 5, 6]], out: 15 },
//       { in: [[10, 11, 13]], out: 34 },
//       { in: [[1, 2, 3, 4, 5]], out: 15 },
//     ],
//   },
// });

// Challenge.create({
//   name: 'Cреднее арифметическое',
//   difficulty: 1,
//   describtion: 'Дан массив с числами. Напишите функцию, которая вернет среднее арифметическое его элементов',
//   startParameters: 'arr',
//   sampleInput: '[1, 2, 3]',
//   sampleOutput: '2',
//   tests: {
//     sample: { in: [1, 2, 3], out: 2 },
//     main: [
//       { in: [[1, 2, 6]], out: 3 },
//       { in: [[4, 5, 6]], out: 5 },
//       { in: [[10, 11, 12]], out: 11 },
//       { in: [[1, 2, 3, 4, 5]], out: 3 },
//     ],
//   },
// });

const func = async () => {
  const user = await User.findOne({ username: 'test1' });
  const games = await user.findPastGames();
  console.log(games);
};

func();

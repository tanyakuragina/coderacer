//SCHEMA
({
  name: String,
  difficulty: Number,
  description: String,
  startParameters: String,
  sampleInput: String,
  sampleOutput: String,
  tests: {
    sample: { in: {}, out: {} },
    main: [{ in: {}, out: {} }],
  },
}); (edited)

// TASKS
const s = {
  name: "Убрать гласные",
  difficulty: 1,
  describtion: 'Напишите функцию, которая уберет все гласные из строки. Строка состоит из латинских символов в нижнем регистре.',
  startParameters: 'str',
  sampleInput: 'coderacer is fun',
  sampleOutput: 'cdrcr s fn',
  tests: {
    sample: { in: ['coderacer is fun'], out: 'cdrcr s fn' },
    main: [
      { in: ['abracadabra'], out: 'brcdbr' },
      { in: ['all your base are belong to us'], out: 'll r bs r blng t s' },
      { in: ['eval is evil'], out: 'vl s vl' },
      { in: ['goodbye'], out: 'gdby' },
      { in: [''], out: '' },
    ]
  }
};

//*************************************/

const s = {
  name: "Правда или ложь",
  difficulty: 1,
  describtion: 'Напиши метод, который принимает булевое значение и возвращает "YES" в случае true и "NO" в случае false',
  startParameters: 'bool',
  sampleInput: 'false',
  sampleOutput: 'NO',
  tests: {
    sample: { in: [true], out: 'YES' },
    main: [
      { in: [false], out: 'NO' },
      { in: [true], out: 'YES' },
    ]
  }
};

//решение
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

//************************************ */

const s = {
  name: "Убывающее число",
  difficulty: 1,
  describtion: 'Напиши функцию, которая принимает неотрицательное целое число и возвращает его цифры в убывающем порядке. Другими словами - переставь цифры местами, чтобы получить максимально возможное значение',
  startParameters: 'num',
  sampleInput: '42145',
  sampleOutput: '54421',
  tests: {
    sample: { in: [145263], out: 654321 },
    main: [
      { in: [123456789], out: 987654321 },
      { in: [12345], out: 54321 },
      { in: [926387145], out: 987654321 },
      { in: [11111555577], out: 77555511111 },
      { in: [2340234120120], out: 4433222211000 },
    ]
  }
};

// решение
function descendingOrder(n) {
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

//********************************************************* */

const s = {
  name: "Найти все делители",
  difficulty: 1,
  describtion: 'Напиши функцию, которая принимает целое и возвращает массив всех делителей введенного числа, в порядке возрастания значения. Если делителей нет, выведи  строку "(integer) is prime"',
  startParameters: 'num',
  sampleInput: '12',
  sampleOutput: '[2,3,4,6]',
  tests: {
    sample: { in: [25], out: [5] },
    main: [
      { in: [123456789], out: [3, 9, 3607, 3803, 10821, 11409, 32463, 34227, 13717421, 41152263] },
      { in: [12345], out: [3, 5, 15, 823, 2469, 4115] },
      { in: [13], out: "13 is prime" },
      { in: [42], out: [2, 3, 6, 7, 14, 21] },
      { in: [1337], out: [7, 191] },
    ]
  }
};

// решение
function divisors(integer) {
  let res = []
  for (let i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};


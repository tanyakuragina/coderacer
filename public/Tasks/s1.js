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
    sample: { in: ['abracadabra'], out: 'brcdbr' },
    main: [
      { in: ['all your base are belong to us'], out: 'll r bs r blng t s' },
      { in: ['eval is evil'], out: 'vl s vl' },
      { in: ['goodbye'], out: 'gdby' },
      { in: [''], out: '' },
    ]
  }
};

//************************************ */

const s = {
  name: "Правда или ложь",
  difficulty: 1,
  describtion: 'Напиши метод, который принимает булевое значение и возвращает "YES" в случае true и "NO" в случае false',
  startParameters: 'str',
  sampleInput: 'false',
  sampleOutput: 'NO',
  tests: {
    sample: { in: ['true'], out: 'YES' },
    main: [
      { in: ['false'], out: 'NO' },
      { in: ['true'], out: 'YES' },
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
  startParameters: 'str',
  sampleInput: '42145',
  sampleOutput: '54421',
  tests: {
    sample: { in: ['145263'], out: '654321' },
    main: [
      { in: ['123456789'], out: '987654321' },
      { in: ['12345'], out: '54321' },
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
  describtion: 'Напиши функцию с именем divisors которая принимает целое и возвращает массив всех делителей введенного числа, в порядке возрастания значения, если делителей нет, выведи  строку "(integer) is prime"',
  startParameters: 'str',
  sampleInput: 'divisors(12);',
  sampleOutput: '[2,3,4,6]',
  tests: {
    sample: { in: ['divisors(25);'], out: '[5]' },
    main: [
      { in: ['123456789'], out: '987654321' },
      { in: ['12345'], out: '54321' },
      { in: ['divisors(13);'], out: '"13 is prime"' },
    ]
  }
};

// решение
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};


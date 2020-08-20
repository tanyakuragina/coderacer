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
});

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

<<<<<<< HEAD
// 2 ************************************ */
=======
//*************************************/
>>>>>>> 79298f3c7d273aec3d383fe849dae1698e0b2932

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

// 3 ************************************ */

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

// 4 ********************************************************* */

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

// 5 ********************************************************* */

const s = {
  name: "FizzBuzz",
  difficulty: 2,
  describtion: 'Напишите функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями: вывод fizz вместо чисел, кратных 3,  вывод buzz вместо чисел, кратных 5, вывод fizzbuzz вместо чисел, кратных как 3, так и 5.',
  startParameters: 'num',
  sampleInput: '3',
  sampleOutput: `[1, 2, 'fizz']`,
  tests: {
    sample: { in: [5], out: [1, 2, 'fizz', 4, 'buzz'] },
    main: [
      { in: 1, out: [1] },
      { in: 2, out: [2] },
      { in: 6, out: [1, 2, 'fizz', 4, 'buzz', 'fizz'] },
    ]
  }
};

// решение

const fizzBuzz = num => {
  const res = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('fizzbuzz');
    } else if (i % 3 === 0) {
      res.push('fizz');
    } else if (i % 5 === 0) {
      res.push('buzz');
    } else {
      res.push(i);
    }
  }
  return res;
}

// 6 ********************************************************* */

const s = {
  name: "Фибоначчи",
  difficulty: 2,
  describtion: 'Напиши функцию fib(n) которая возвращает n-е число Фибоначчи.',
  startParameters: 'num',
  sampleInput: '3',
  sampleOutput: `2`,
  tests: {
    sample: { in: 7, out: 13 },
    main: [
      { in: 77, out: 5527939700884757 },
    ]
  }
};

// решение
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// 7 ********************************************************* */
const s = {
  name: "Поиск гласных",
  difficulty: 2,
  describtion: 'Напиши функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u»',
  startParameters: 'str',
  sampleInput: 'hello',
  sampleOutput: `2`,
  tests: {
    sample: { in: 'peter', out: 2 },
    main: [
      { in: 'why', out: 1 },
      { in: 'length', out: 1 },
      { in: 'false', out: 2 },
    ]
  }
};

// решение
const findVowels = str => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// 8 ********************************************************* */
const s = {
  name: "Сумма элементов массива",
  difficulty: 1,
  describtion: 'Дан массив с числами. С помощью цикла найдите сумму элементов этого массива',
  startParameters: 'arr',
  sampleInput: '[1,2,3,4,5]',
  sampleOutput: `15`,
  tests: {
    sample: { in: [1, 2, 3], out: 6 },
    main: [
      { in: [1, 2, 3], out: 6 },
      { in: [4, 5, 6], out: 15 },
      { in: [10, 11, 13], out: 34 },
    ]
  }
};

// решение
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

// 9 ********************************************************* */
const s = {
  name: "Сумма квадратов элементов массива",
  difficulty: 1,
  describtion: 'Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.',
  startParameters: 'arr',
  sampleInput: '[1,2,3,4,5]',
  sampleOutput: `15`,
  tests: {
    sample: { in: [1, 2, 3], out: 6 },
    main: [
      { in: [1, 2, 3], out: 6 },
      { in: [4, 5, 6], out: 15 },
      { in: [10, 11, 13], out: 34 },
    ]
  }
};

// решение
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * arr[i];
  }
  return res;
}

// 10 ********************************************************* */
const s = {
  name: "Cреднее арифметическое",
  difficulty: 1,
  describtion: 'Дан массив с числами. Найдите среднее арифметическое его элементов',
  startParameters: 'arr',
  sampleInput: '[1,2,3,4,5]',
  sampleOutput: `3`,
  tests: {
    sample: { in: [1, 2, 3], out: 2 },
    main: [
      { in: [1, 2, 6], out: 3 },
      { in: [4, 5, 6], out: 5 },
      { in: [10, 11, 12], out: 11 },
    ]
  }
};

// решение
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res / arr.length;
}

// 11 ********************************************************* */
const s = {
  name: "Массив массивов",
  difficulty: 1,
  describtion: 'Дан двумерный массив с числами. Найдите сумму элементов этого массива.',
  startParameters: 'arr',
  sampleInput: '[[1,2,3],[4,5], [6]]',
  sampleOutput: `21`,
  tests: {
    sample: { in: [[1, 2, 3], [4, 5]], out: 15 },
    main: [
      { in: [[1, 2, 6], [2, 3]], out: 14 },
      { in: [[4], [5], [6]], out: 15 },
      { in: [[10, 11], [12, 13]], out: 46 },
    ]
  }
};

// решение
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res += arr[i][j];
    }
  }
  return res;
}

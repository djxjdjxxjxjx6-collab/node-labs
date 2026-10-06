// Задания 1–4: подключение своих и встроенных модулей
const os = require('os');
const greet = require('./greet');
const { add, subtract } = require('./math'); // деструктуризация (задание 2)
const { isPositive, isEven } = require('./validator');

// Задание 1
console.log('--- Задание 1 ---');
console.log(greet('Юрий'));

// Задание 2
console.log('--- Задание 2 ---');
console.log('add(10, 4) =', add(10, 4));
console.log('subtract(10, 4) =', subtract(10, 4));

// Задание 3: встроенный модуль os
console.log('--- Задание 3 ---');
const totalGb = (os.totalmem() / 1024 ** 3).toFixed(2);
console.log('Платформа:', os.platform());
console.log('Имя компьютера:', os.hostname());
console.log('Домашняя папка:', os.homedir());
console.log('Оперативная память:', totalGb, 'ГБ');

// Задание 4
console.log('--- Задание 4 ---');
for (const n of [7, -3, 0, 12, 15]) {
  console.log(`${n}: положительное — ${isPositive(n)}, чётное — ${isEven(n)}`);
}

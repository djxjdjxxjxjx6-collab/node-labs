// Задание 1. __dirname, __filename и методы path
const path = require('path');

console.log('__dirname :', __dirname);
console.log('__filename:', __filename);
console.log('Имя файла :', path.basename(__filename));
console.log('Расширение:', path.extname(__filename));
console.log('Папка     :', path.dirname(__filename));

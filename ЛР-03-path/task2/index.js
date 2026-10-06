// Задание 2. Путь к data/info.txt и его разбор
const path = require('path');

const infoPath = path.join(__dirname, 'data', 'info.txt');
console.log('Путь к файлу:', infoPath);
console.log('Разбор пути:', path.parse(infoPath));

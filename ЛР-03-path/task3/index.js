// Задание 3. Абсолютный путь к файлу из аргумента командной строки
// Запуск: node index.js report.txt
const path = require('path');

const fileName = process.argv[2];
if (!fileName) {
  console.log('Использование: node index.js <имя_файла>');
  process.exit(1);
}

// path.basename защищает от выхода за пределы папки (например, "../../secret")
const fullPath = path.join(__dirname, 'files', path.basename(fileName));
console.log(fullPath);

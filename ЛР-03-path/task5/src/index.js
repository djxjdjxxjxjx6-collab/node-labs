// Задание 5. Путь из src/index.js к config/app.json
const path = require('path');

const configPath = path.join(__dirname, '..', 'config', 'app.json');
console.log('Путь к конфигу:', configPath);
console.log('Имя файла:', path.basename(configPath));
console.log('Расширение:', path.extname(configPath));

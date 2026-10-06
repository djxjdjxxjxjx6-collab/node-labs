// Задание 4. Расширения и пути файлов в папке uploads
const path = require('path');

const files = ['photo.jpg', 'document.pdf', 'music.mp3', 'script.js'];

for (const file of files) {
  console.log(`${file}: расширение ${path.extname(file)}, путь ${path.join(__dirname, 'uploads', file)}`);
}

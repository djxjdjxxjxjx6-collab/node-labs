// ЛР-5. Асинхронная работа с файловой системой (fs.promises)
// Вариант 1: «Асинхронный архиватор логов»
const fs = require('fs/promises');
const path = require('path');

const STORAGE = path.join(__dirname, 'storage');

// Задание 1. Создание структуры
async function setup() {
  try {
    await fs.mkdir(STORAGE, { recursive: true }); // не падает, если папка уже есть
    await fs.writeFile(path.join(STORAGE, 'status.txt'), 'Система готова', 'utf8');
    console.log('storage/status.txt: Система готова');
  } catch (err) {
    console.error('Ошибка setup:', err.message);
  }
}

// Задание 2. Асинхронное чтение tasks.txt в верхнем регистре
async function readTasks() {
  try {
    const text = await fs.readFile(path.join(__dirname, 'tasks.txt'), 'utf8');
    console.log(text.toUpperCase());
  } catch (err) {
    console.log('Файл задач не найден');
  }
}

// Задание 3. Логирование с меткой времени
async function addLog(message) {
  try {
    const line = `[${new Date().toLocaleString('ru-RU')}] ${message}\n`;
    await fs.appendFile(path.join(STORAGE, 'activity.log'), line, 'utf8');
    console.log('Записано в лог:', line.trim());
  } catch (err) {
    console.error('Ошибка записи лога:', err.message);
  }
}

// Задание 4. Цепочка: прочитать source.txt -> создать copy.txt -> удалить оригинал
async function moveSource() {
  const src = path.join(__dirname, 'source.txt');
  const copy = path.join(__dirname, 'copy.txt');
  try {
    const data = await fs.readFile(src);
    await fs.writeFile(copy, data);
    await fs.unlink(src);
    console.log('source.txt скопирован в copy.txt, оригинал удалён');
  } catch (err) {
    console.log('Цепочка прервана:', err.code === 'ENOENT' ? 'source.txt не найден' : err.message);
  }
}

// Задание 5. Параллельная проверка существования файлов (Promise.all)
async function checkFiles(names) {
  const results = await Promise.all(
    names.map(async (name) => {
      try {
        await fs.access(path.join(__dirname, name));
        return `${name}: существует`;
      } catch {
        return `${name}: не найден`;
      }
    })
  );
  results.forEach((r) => console.log(r));
}

async function main() {
  console.log('--- Задание 1 ---'); await setup();
  console.log('--- Задание 2 ---'); await readTasks();
  console.log('--- Задание 3 ---'); await addLog('Запуск архиватора'); await addLog('Проверка завершена');
  console.log('--- Задание 4 ---'); await moveSource();
  console.log('--- Задание 5 ---'); await checkFiles(['tasks.txt', 'copy.txt', 'source.txt', 'storage/status.txt']);
}

main();

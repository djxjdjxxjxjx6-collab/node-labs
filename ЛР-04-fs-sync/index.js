// ЛР-4. Синхронная работа с файловой системой
// Вариант 1: «Система управления инвентарем»
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const INVENTORY = path.join(DATA_DIR, 'inventory.txt');

// Задание 1. Инициализация: папка data и файл inventory.txt
function init() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR);
      console.log('Папка data создана');
    }
    fs.writeFileSync(INVENTORY, 'Название товара: Количество', 'utf8');
    console.log('Файл inventory.txt создан');
  } catch (err) {
    console.error('Ошибка инициализации:', err.message);
  }
}

// Задание 2. Чтение данных
function readInventory() {
  try {
    const content = fs.readFileSync(INVENTORY, 'utf8');
    if (!content.trim()) {
      console.log('Инвентарь не инициализирован');
      return;
    }
    console.log('Содержимое инвентаря:\n' + content);
  } catch (err) {
    console.log('Инвентарь не инициализирован');
  }
}

// Задание 3. Добавление записи в конец файла (флаг 'a')
function addItem(name, count) {
  try {
    fs.writeFileSync(INVENTORY, `\n${name}: ${count}`, { flag: 'a' });
    console.log(`Добавлено: ${name}: ${count}`);
  } catch (err) {
    console.error('Ошибка добавления:', err.message);
  }
}

// Задание 4. Ещё два файла и список содержимого папки
function listFiles() {
  try {
    fs.writeFileSync(path.join(DATA_DIR, 'categories.txt'), '');
    fs.writeFileSync(path.join(DATA_DIR, 'suppliers.txt'), '');
    const files = fs.readdirSync(DATA_DIR);
    console.log(`Файлов в папке data: ${files.length}`);
    files.forEach((f) => console.log(' -', f));
  } catch (err) {
    console.error('Ошибка чтения папки:', err.message);
  }
}

// Задание 5. Очистка: удалить temp_log.txt и переименовать inventory.txt
function cleanup() {
  const tempLog = path.join(DATA_DIR, 'temp_log.txt');
  try {
    if (fs.existsSync(tempLog)) {
      fs.unlinkSync(tempLog);
      console.log('temp_log.txt удалён');
    } else {
      console.log('temp_log.txt не найден — удалять нечего');
    }
    fs.renameSync(INVENTORY, path.join(DATA_DIR, 'inventory_final.txt'));
    console.log('inventory.txt переименован в inventory_final.txt');
  } catch (err) {
    console.error('Ошибка очистки:', err.message);
  }
}

console.log('--- Задание 1 ---');
init();
console.log('--- Задание 2 ---');
readInventory();
console.log('--- Задание 3 ---');
addItem('Монитор', 10);
addItem('Клавиатура', 25);
readInventory();
console.log('--- Задание 4 ---');
listFiles();
console.log('--- Задание 5 ---');
fs.writeFileSync(path.join(DATA_DIR, 'temp_log.txt'), 'временный лог'); // для демонстрации удаления
cleanup();

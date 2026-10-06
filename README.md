# ПМ4 Node.js — РО4.1, лабораторные работы 1–12 (Вариант 1)

Студент: **Стариков Юрий**, группа **15 ТИС**

Нужен Node.js 18+ (`node -v`). Каждая ЛР — отдельная папка. Все команды выполняются **из папки ЛР**.
ЛР-1…9 — на Node.js. ЛР-10…12 выполнены на **Firebase + Cloud Firestore** (своя тема «Интернет-магазин»):
они открываются статическим сервером (`python3 -m http.server 8080`), данные берутся из облака.

| ЛР | Тема | Папка |
|---|---|---|
| 1 | Введение в Node.js | `ЛР-01-Введение` |
| 2 | Модули | `ЛР-02-Модули` |
| 3 | Модуль path, `__dirname` | `ЛР-03-path` |
| 4 | fs — синхронно («Система управления инвентарем») | `ЛР-04-fs-sync` |
| 5 | fs — асинхронно («Асинхронный архиватор логов») | `ЛР-05-fs-async` |
| 6 | JSON-файлы («Система управления библиотекой») | `ЛР-06-json` |
| 7 | Потоки («Логирование и фильтрация») | `ЛР-07-stream` |
| 8 | NPM («Организация рабочего окружения») | `ЛР-08-npm` |
| 9 | Конфигурация и EventEmitter («Мониторинг банковских транзакций») | `ЛР-09-EventEmitter` |
| 10 | Firebase и Firestore («Интернет-магазин») | `ЛР-10-Магазин` |
| 11 | Firebase Authentication («Интернет-магазин») | `ЛР-11-Магазин` |
| 12 | Управление каталогом по ролям («Интернет-магазин») | `ЛР-12-Магазин` |

---

## ЛР-1. Введение в Node.js
```bash
node info.js          # версия Node.js и ОС
node hello.js Юрий    # Привет, Юрий!   (без имени — Привет, Незнакомец!)
node timer.js         # Запуск... → через 2 с Готово!
node calc.js 5 3      # 5 + 3 = 8
node counter.js       # 1…5 с интервалом 1 с, затем process.exit()
```

## ЛР-2. Модули
- `greet.js`, `math.js`, `validator.js` — свои модули (`module.exports`), подключаются в `index.js`
  (`math` — через деструктуризацию).
- Задание 3 — встроенный модуль `os` (платформа, имя компьютера, домашняя папка, ОЗУ в ГБ).
```bash
node index.js         # задания 1–4
npm install           # установит chalk@4 (задание 5)
node colors.js        # зелёный / жёлтый / красный жирный текст
```

## ЛР-3. Модуль path
```bash
node task1/index.js               # __dirname, __filename, basename/extname/dirname
node task2/index.js               # путь к data/info.txt + path.parse()
node task3/index.js report.txt    # абсолютный путь files/report.txt
node task4/index.js               # расширения и пути в uploads
node task5/src/index.js           # путь ../config/app.json из src
```

## ЛР-4. fs — синхронные методы
```bash
node index.js
```
Создаёт `data/inventory.txt`, читает его, дописывает товары флагом `'a'`, создаёт `categories.txt`
и `suppliers.txt`, выводит список файлов, удаляет `temp_log.txt` и переименовывает
`inventory.txt` → `inventory_final.txt`. Все операции в `try...catch`, пути — через `path.join(__dirname, …)`.

## ЛР-5. fs.promises — асинхронно
```bash
node index.js
```
`setup()` → `storage/status.txt`; чтение `tasks.txt` в верхнем регистре; `addLog()` с меткой времени
в `storage/activity.log`; цепочка `source.txt` → `copy.txt` → удаление оригинала;
параллельная проверка файлов через `Promise.all` + `fs.access`.
Для повторного запуска верните файл `source.txt` (он удаляется в задании 4).

## ЛР-6. JSON-файлы
```bash
node library.js
```
`init()` создаёт `books.json` с `[]`; `addBook()`, `findBooksByAuthor()`, `issueBook(id)`,
`deleteOldBooks(currentYear)` удаляет книги старше 50 лет. Перед повторным запуском удалите
`books.json`, чтобы книги не добавлялись второй раз.

## ЛР-7. Потоки
```bash
node task1-events.js          # события open / data / end
node task2-buffer.js          # highWaterMark 512 байт, количество чанков
node task3-search.js ERROR    # индекс слова в чанке и пауза 3 с
node task4-append.js          # поток записи с флагом 'a' (журнал journal.txt)
node task5-pipe.js            # копирование pipe() одной строкой, «Готово»
```

## ЛР-8. NPM
Папка `lab-npm-1` уже содержит результат: версия `0.1.0`, зависимость `uuid`, devDependency `nodemon`,
скрипты `start` и `dev`. Порядок выполнения для отчёта:
```bash
mkdir lab-npm-1 && cd lab-npm-1
npm init -y                       # быстрая инициализация
npm version 0.1.0 --no-git-tag-version
npm install uuid                  # основная зависимость
npm install -D nodemon            # зависимость для разработки
npm start                         # Сгенерированный ID: …
npm run dev                       # измените текст в app.js — nodemon перезапустит
rm -rf node_modules && npm start  # ошибка: Cannot find module 'uuid'
npm install                       # восстановление по package.json
```

## ЛР-9. dotenv + EventEmitter
```bash
npm install
npm run dev     # nodemon следит за .js и .env
```
Параметры (`LIMIT`, `INTERVAL_MS`, диапазон сумм, имя банка) — в `.env`. Модули общаются через общую
шину `src/bus.js` (EventEmitter): `generator.js` раз в 3 с выбрасывает `transfer` или `fraud-alert`,
`monitor.js` выводит «Успешный перевод…» или «[ALARM] Подозрительная активность…».

## ЛР-10. Firebase и Firestore («Интернет-магазин»)
Firebase-проект **shop-sy** (ID `shop-sy-71ed8`), `firebaseConfig` уже вставлен в `index.html`.
SDK подключён через CDN (12.8.0 compat); каталог загружается из коллекции `products` методом `get()`
с сортировкой `orderBy("name")`, у товаров индикатор наличия по `quantity > 0`.
```bash
python3 -m http.server 8080     # открыть http://localhost:8080
```
Подробности и скриншоты консоли — в `ЛР-10-Магазин/README.md` и `ЛР-10-Магазин/скриншоты/`.

## ЛР-11. Firebase Authentication («Интернет-магазин»)
Тот же проект **shop-sy**. Регистрация/вход/выход по email и паролю, профиль покупателя
в `users/{uid}` (`email`, `displayName`, `createdAt`, `role: "customer"`), состояние входа
сохраняется между перезагрузками через `onAuthStateChanged`.
```bash
python3 -m http.server 8080     # открыть http://localhost:8080
```
Подробности и скриншоты — в `ЛР-11-Магазин/README.md` и `ЛР-11-Магазин/скриншоты/`.

## ЛР-12. Управление каталогом по ролям («Интернет-магазин»)
Полноценный мини-магазин TechShop: разграничение прав `customer` / `admin`, корзина и заказы
(коллекция `orders`), обновление каталога в реальном времени через `onSnapshot`, списание
остатков транзакцией. Правила безопасности — в `ЛР-12-Магазин/firestore.rules`.
```bash
python3 -m http.server 8080     # открыть http://localhost:8080
```
Как назначить администратора и проверить работу — в `ЛР-12-Магазин/README.md`,
скриншоты консоли — в `ЛР-12-Магазин/скриншоты/`.

---

ЛР-1…9 проверены запуском (Node.js 22): вывод совпадает с заданием.
ЛР-10…12 работают на Firebase + Cloud Firestore (проект **shop-sy**), открываются через `http.server`.

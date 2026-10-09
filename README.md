# Node.js Projects & Labs

A collection of back-end JavaScript projects and exercises built while learning
server-side development with **Node.js** and **Firebase**. The code is organized
as 12 self-contained projects, from core Node.js fundamentals to a full
Firebase-powered online store.

**Author:** Yurii Starikov · Web Developer

---

## 🛒 Featured: TechShop — Online Store (Firebase)

A complete web shop built on **Firebase + Cloud Firestore**:

- Product catalog loaded from Firestore, updated in **real time** (`onSnapshot`)
- **Authentication** with email/password, customer accounts and profiles
- **Role-based access** — customer vs. admin, enforced on the server with
  **Firestore Security Rules**
- Shopping cart, order checkout and an admin panel to manage products
- Stock updated safely with **transactions** (no overselling)

> Folders `ЛР-10` … `ЛР-12` build this app up step by step (Firestore → Auth →
> full catalog management).

---

## 📚 What's inside

| # | Topic | What it shows |
|---|-------|---------------|
| 1 | Node.js basics | CLI args, `process`, timers (`setTimeout` / `setInterval`) |
| 2 | Modules | `module.exports` / `require`, npm packages |
| 3 | Paths & `fs` | `path`, `__dirname`, working with the file system |
| 4 | fs (sync) | Reading/writing files, error handling |
| 5 | fs (async) | `fs.promises`, `Promise.all`, async flows |
| 6 | JSON storage | A small JSON-based data store (CRUD) |
| 7 | Streams | Readable streams, buffering, `pipe()` |
| 8 | npm | Dependencies, scripts, semantic versioning |
| 9 | EventEmitter | Event-driven architecture, config via `.env` |
| 10 | Firebase + Firestore | Catalog from the cloud (TechShop) |
| 11 | Firebase Auth | Sign up / in / out, user profiles |
| 12 | Catalog management | Roles, orders, real-time updates, transactions |

---

## 🛠️ Tech used

`JavaScript (ES6+)` · `Node.js` · `Firebase` · `Cloud Firestore` ·
`HTML5` · `CSS3` · `REST` · `Streams` · `npm` · `Git`

---

## ▶️ How to run

**Node.js projects (1–9)** — run from inside each project folder:

```bash
cd <project-folder>
npm install      # only where a package.json exists
node index.js    # or the specific file for that project
```

**Firebase web apps (10–12)** — serve the folder and open it in a browser:

```bash
cd <project-folder>
python3 -m http.server 8080
# then open http://localhost:8080
```

Each folder has its own README with exact commands.

---

## 📬 Contact

Open to freelance work — websites, web apps and Node.js back-ends.

- **Email:** djxjdjxxjxjx6@gmail.com
- **GitHub:** [github.com/djxjdjxxjxjx6-collab](https://github.com/djxjdjxxjxjx6-collab)

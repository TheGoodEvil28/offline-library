const express = require("express");
const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const db = new Database("books.db");

// Buat tabel kalau belum ada
db.exec(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    category TEXT,
    link TEXT
  )
`);

// GET semua buku
app.get("/api/books", (req, res) => {
  const stmt = db.prepare("SELECT * FROM books");
  const books = stmt.all();
  res.json(books);
});

// POST buku baru
app.post("/api/books", (req, res) => {
  const { title, author, category, link } = req.body;
  const stmt = db.prepare(
    "INSERT INTO books (title, author, category, link) VALUES (?, ?, ?, ?)"
  );
  stmt.run(title, author, category, link);
  res.json({ message: "Buku ditambahkan!" });
});

// Fallback ke React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(5000, () => console.log("📚 Backend running at http://localhost:5000"));

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());

// Serve React static files
app.use(express.static(path.join(__dirname, "public")));

// API Endpoint
app.get("/api/books", (req, res) => {
  const books = JSON.parse(fs.readFileSync("books.json"));
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const books = JSON.parse(fs.readFileSync("books.json"));
  books.push(req.body);
  fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
  res.json({ message: "Buku ditambahkan!" });
});

// Fallback ke index.html (React routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});

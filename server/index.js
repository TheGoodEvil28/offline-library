import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;
const FILE_PATH = "./books.json";

app.use(cors());
app.use(express.json());

app.get("/api/books", (req, res) => {
  const books = fs.existsSync(FILE_PATH)
    ? JSON.parse(fs.readFileSync(FILE_PATH))
    : [];
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const { title, author, category, link } = req.body;
  if (!title || !author || !category || !link)
    return res.status(400).json({ message: "All fields required" });

  const books = fs.existsSync(FILE_PATH)
    ? JSON.parse(fs.readFileSync(FILE_PATH))
    : [];
  books.push({ title, author, category, link });

  fs.writeFileSync(FILE_PATH, JSON.stringify(books, null, 2));
  res.json({ message: "Book added!" });
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));

import React, { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import AddBookForm from "./components/AddBookForm";

import "./index.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/api/books")

      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const fetchBooks = () => {
  fetch("http://localhost:5000/api/books")

    .then((res) => res.json())
    .then((data) => setBooks(data));
};

useEffect(() => {
  fetchBooks();
}, []);


  const filteredBooks = books.filter((book) => {
    const matchText =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || book.category === category;
    return matchText && matchCategory;
  });

  return (
    <div className="container">
      <h1>📚 Perpustakaan Digital</h1>

      <input
        type="text"
        placeholder="Cari judul atau penulis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
<h2>Tambah Buku Baru</h2>
<AddBookForm onBookAdded={fetchBooks} />



      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Semua Kategori</option>
        <option value="Informatika">Informatika</option>
        <option value="Biologi">Biologi</option>
      </select>

      <div className="book-list">
        {filteredBooks.length === 0 ? (
          <p>Tidak ada buku ditemukan.</p>
        ) : (
          filteredBooks.map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

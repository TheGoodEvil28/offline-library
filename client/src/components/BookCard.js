import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Penulis:</strong> {book.author}</p>
      <p><strong>Kategori:</strong> {book.category}</p>
      <a href={book.link} target="_blank" rel="noopener noreferrer">
  Lihat Buku
</a>

    </div>
  );
};

export default BookCard;

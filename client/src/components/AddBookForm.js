import { useState } from "react";

export default function AddBookForm({ onBookAdded }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    link: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      onBookAdded(); // Refresh book list
      setForm({ title: "", author: "", category: "", link: "" });
    } else {
      alert("Gagal menambahkan buku");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Judul buku"
        required
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Penulis"
        required
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
      >
        <option value="">Pilih Kategori</option>
        <option value="Informatika">Informatika</option>
        <option value="Biologi">Biologi</option>
      </select>
      <input
        name="link"
        value={form.link}
        onChange={handleChange}
        placeholder="Link Google Drive"
        required
      />
      <button type="submit">Tambah Buku</button>
    </form>
  );
}

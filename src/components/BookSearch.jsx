import { useState } from "react";
import BookList from "./BookList";
import "./SharedStyles.css";

export default function BookSearch() {
  const [query, setQuery] = useState("");

  const [books, setBooks] = useState([
    { id: 1, title: "Matemáticas Avanzadas", author: "Carlos Pérez", subject: "Matemáticas", favorite: false },
    { id: 2, title: "Historia de Colombia", author: "Laura Gómez", subject: "Historia", favorite: false },
    { id: 3, title: "Física para principiantes", author: "Andrés Martínez", subject: "Física", favorite: false },
    { id: 4, title: "Química Orgánica I", author: "Ana Ramírez", subject: "Química", favorite: false },
    { id: 5, title: "Biología Celular", author: "José Torres", subject: "Biología", favorite: false },
    { id: 6, title: "Lengua Castellana", author: "Marta Rodríguez", subject: "Lenguaje", favorite: false },
    { id: 7, title: "Programación en Python", author: "Juan López", subject: "Informática", favorite: false },
    { id: 8, title: "Introducción a la Economía", author: "María Fernández", subject: "Economía", favorite: false },
    { id: 9, title: "Filosofía Moderna", author: "Ricardo Díaz", subject: "Filosofía", favorite: false },
    { id: 10, title: "Arte y Creatividad", author: "Isabel Ramírez", subject: "Arte", favorite: false },
  ]);

  const toggleFavorite = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, favorite: !book.favorite } : book
    );
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter((book) =>
    book.subject.toLowerCase().includes(query.toLowerCase()) ||
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const favoriteBooks = books.filter((book) => book.favorite);

  return (
    <section
      className="card"
      style={{ marginTop: "20px", maxWidth: "1000px" }}  // ✅ aquí aplicamos la opción rápida
    >
      <h2 className="title">Buscar libros por materia</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe la materia o título..."
        className="status-input"
        style={{ marginBottom: "20px" }}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Columna izquierda - Resultados */}
        <div style={{ flex: 2 }}>
          <h3>Resultados de búsqueda</h3>
          <BookList books={filteredBooks} onToggleFavorite={toggleFavorite} />
        </div>

        {/* Columna derecha - Favoritos */}
        <div style={{ flex: 1 }}>
          <h3>Libros favoritos ⭐</h3>
          {favoriteBooks.length === 0 ? (
            <p className="text-muted">Aún no has marcado libros como favoritos.</p>
          ) : (
            <BookList books={favoriteBooks} onToggleFavorite={toggleFavorite} />
          )}
        </div>
      </div>
    </section>
  );
}

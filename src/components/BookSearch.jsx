import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BookSearch() {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const books = [
    { id: 1, title: "Cálculo I", author: "James Stewart" },
    { id: 2, title: "Programación en JavaScript", author: "Douglas Crockford" },
    { id: 3, title: "Historia de la Humanidad", author: "Yuval Noah Harari" }
  ];

  const addFavorite = (book) => {
    if (!favorites.some((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFavorite = (book) => {
    setFavorites(favorites.filter((fav) => fav.id !== book.id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="book-search-section">
      <h2 className="section-title">{t("booksearch.title")}</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={t("booksearch.search_placeholder")}
        className="status-input"
        style={{ marginBottom: "20px" }}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Libros encontrados */}
        <div style={{ flex: 1 }} className="card">
          <h3>{t("booksearch.results")}</h3>
          {filteredBooks.length === 0 ? (
            <p className="text-muted">{t("booksearch.no_results")}</p>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
                <strong>{book.title}</strong> - {book.author}
                <button
                  onClick={() => addFavorite(book)}
                  className="button-primary"
                  style={{ marginLeft: "10px" }}
                >
                  {t("booksearch.add_favorite")}
                </button>
              </div>
            ))
          )}
        </div>

        {/* Favoritos */}
        <div style={{ flex: 1 }} className="card">
          <h3>{t("booksearch.favorites")}</h3>
          {favorites.length === 0 ? (
            <p className="text-muted">{t("booksearch.no_favorites")}</p>
          ) : (
            favorites.map((book) => (
              <div key={book.id} style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
                <strong>{book.title}</strong> - {book.author}
                <button
                  onClick={() => removeFavorite(book)}
                  className="button-secondary"
                  style={{ marginLeft: "10px" }}
                >
                  {t("booksearch.remove_favorite")}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

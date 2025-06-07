export default function BookItem({ book, onToggleFavorite }) {
  if (!book) return null;

  return (
    <div
      className="card"
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "60px",
            height: "80px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            marginRight: "16px",
          }}
        ></div>
        <div>
          <h3 style={{ margin: "0 0 8px 0" }}>{book.title}</h3>
          <p style={{ margin: "0 0 4px 0", fontSize: "14px", color: "#555" }}>
            Autor: {book.author}
          </p>
          <span className="tag">{book.subject}</span>
        </div>
      </div>
      
      {/* Botón estrella */}
      <button
        onClick={() => onToggleFavorite(book.id)}
        style={{
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          color: book.favorite ? "gold" : "#ccc",
        }}
        title={book.favorite ? "Quitar de favoritos" : "Marcar como favorito"}
      >
        ⭐
      </button>
    </div>
  );
}

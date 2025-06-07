import BookItem from "./BookItem";

export default function BookList({ books, onToggleFavorite }) {
  if (!books || books.length === 0) {
    return <p className="text-muted">No se encontraron libros para esta búsqueda.</p>;
  }

  return (
    <div style={{ display: "grid", gap: "16px" }}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onToggleFavorite={onToggleFavorite} />
      ))}
    </div>
  );
}

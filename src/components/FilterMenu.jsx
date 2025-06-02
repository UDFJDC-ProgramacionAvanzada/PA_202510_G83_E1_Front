import { useState } from "react";
import "./FilterMenu.css";

const categories = [
  "Todas",
  "Matemáticas",
  "Física",
  "Programación",
  "Redes",
  "Idiomas"
];

export default function FilterMenu() {
  const [selected, setSelected] = useState("Todas");

  return (
    <section className="filter-menu">
      <h2 className="filter-title">Filtrar Contenido</h2>
      <div className="filter-options">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-button ${selected === cat ? "active" : ""}`}
            onClick={() => setSelected(cat)}
            aria-pressed={selected === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="filter-result">
        Mostrando resultados para: <strong>{selected}</strong>
      </div>
    </section>
  );
}

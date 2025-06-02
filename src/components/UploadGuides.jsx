import { useState } from "react";
import "./UploadGuides.css";

export default function UploadGuides() {
  const [guides, setGuides] = useState([]);
  const [message, setMessage] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setGuides((prev) => [...prev, file.name]);
      setMessage("✅ Libro subido correctamente.");
    } else {
      setMessage("❌ Solo se permiten archivos PDF.");
    }
  };

  return (
    <section className="guides-section" aria-labelledby="guides-title">
      <h2 id="guides-title" className="guides-title">Mis Libros Guía</h2>

      <label htmlFor="guide-upload" className="guides-label">
        Selecciona un archivo PDF:
      </label>
      <input
        type="file"
        id="guide-upload"
        accept="application/pdf"
        onChange={handleUpload}
        className="guides-input"
      />

      <div className="guides-message" role="status" aria-live="polite">
        {message}
      </div>

      <ul className="guides-list">
        {guides.map((name, idx) => (
          <li key={idx} className="guide-item">📘 {name}</li>
        ))}
      </ul>
    </section>
  );
}

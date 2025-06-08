import { useState } from "react";
import "./SharedStyles.css"; // asegúrate de importar tu CSS compartido

export default function PDFUpload() {
  const [pdfs, setPdfs] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const pdfFiles = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPdfs((prev) => [...prev, ...pdfFiles]);
  };

  const handleRemove = (urlToRemove) => {
    setPdfs((prev) => prev.filter((pdf) => pdf.url !== urlToRemove));
  };

  return (
    <div className="card">
      <h2 className="title">📚 Cargar libros guía (PDF)</h2>

      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleFileChange}
        style={{ marginBottom: "20px" }}
      />

      {pdfs.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pdfs.map((pdf, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <span>{pdf.name}</span>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  Ver
                </a>
                <button
                  onClick={() => handleRemove(pdf.url)}
                  style={{
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">
          No has subido ningún libro guía todavía.
        </p>
      )}
    </div>
  );
}

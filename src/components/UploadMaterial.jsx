import { useState } from "react";
import "./UploadMaterial.css";

export default function UploadMaterial() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setMessage("");
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("⚠️ Debes seleccionar un archivo para subir.");
      setSuccess(false);
      return;
    }

    setTimeout(() => {
      setMessage(`✅ Archivo "${file.name}" subido correctamente.`);
      setSuccess(true);
      setFile(null);
    }, 1000);
  };

  return (
    <section className="upload-container" aria-labelledby="upload-title">
      <h2 id="upload-title" className="upload-title">Subir Material de Estudio</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        <label htmlFor="file" className="upload-label">
          Archivo (PDF, DOCX, PPT):
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf,.docx,.ppt"
          onChange={handleChange}
          className="upload-input"
        />

        <button
          type="submit"
          className="upload-button"
          aria-label="Subir material"
        >
          Subir archivo
        </button>
      </form>

      <div
        className="upload-message"
        role="status"
        aria-live="polite"
        style={{ color: success ? "green" : "#ffd700" }}
      >
        {message}
      </div>
    </section>
  );
}

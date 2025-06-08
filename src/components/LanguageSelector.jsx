import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <label htmlFor="language-select" style={{ fontSize: "14px", color: "#555" }}>
        🌐 Idioma:
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleChange}
        style={{
          padding: "6px 10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "14px"
        }}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

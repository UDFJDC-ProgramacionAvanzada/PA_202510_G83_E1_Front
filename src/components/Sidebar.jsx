import gradHatImg from "../assets/logo.png";  // tu imagen de sombrero

export default function Sidebar({ onSectionChange }) {
  return (
    <aside className="sidebar">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src={gradHatImg}
          alt="Logo EduSync+"
          style={{
            width: "32px",
            height: "32px",
            marginRight: "10px",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "flex-end",  // baja un poco el texto
          }}
        >
          <span style={{ color: "#000" }}>Edu</span>
          <span style={{ color: "#2d8cff" }}>Sync+</span>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li onClick={() => onSectionChange("home")}>Home</li>
          <li onClick={() => onSectionChange("books")}>Buscar libros</li>
          <li onClick={() => onSectionChange("tasks")}>Tasks</li>
        </ul>
      </nav>
    </aside>
  );
}

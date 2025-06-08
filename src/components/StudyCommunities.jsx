import { useState } from "react";

export default function StudyCommunities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: "Matemáticas Avanzadas",
      description: "Comunidad para estudiantes de cálculo, álgebra y matemáticas superiores",
      members: 1247,
      category: "Matemáticas",
      isJoined: true,
      recentPosts: 23,
    },
    {
      id: 2,
      name: "Programación Web",
      description: "Aprende desarrollo web con HTML, CSS, JavaScript y frameworks modernos",
      members: 892,
      category: "Tecnología",
      isJoined: false,
      recentPosts: 45,
    },
    {
      id: 3,
      name: "Historia Universal",
      description: "Discusiones sobre eventos históricos, culturas y civilizaciones",
      members: 634,
      category: "Historia",
      isJoined: true,
      recentPosts: 12,
    },
    {
      id: 4,
      name: "Ciencias Naturales",
      description: "Física, química, biología y ciencias de la tierra",
      members: 756,
      category: "Ciencias",
      isJoined: false,
      recentPosts: 18,
    },
  ]);

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleJoin = (id) => {
    setCommunities((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isJoined: !c.isJoined } : c
      )
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div className="card">
        <h2 className="title">Comunidades de Estudio</h2>
        <p className="text-muted">
          {communities.filter(c => c.isJoined).length} comunidades unidas · {communities.length} disponibles
        </p>
        <input
          type="text"
          className="status-input"
          placeholder="Buscar comunidades..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "16px" }}
        />

        {filteredCommunities.map((community) => (
          <div key={community.id} className="card" style={{ marginBottom: "12px" }}>
            <h3 className="title" style={{ fontSize: "18px", marginBottom: "8px" }}>{community.name}</h3>
            <p style={{ marginBottom: "8px" }}>{community.description}</p>
            <div style={{ marginBottom: "8px" }}>
              <span className="tag" style={{ marginRight: "8px" }}>{community.category}</span>
              <span className="tag">{community.members.toLocaleString()} miembros</span>
            </div>
            <div style={{ marginBottom: "8px", fontSize: "14px", color: "#555" }}>
              {community.recentPosts} publicaciones recientes
            </div>
            <button
              className="button-primary"
              onClick={() => toggleJoin(community.id)}
            >
              {community.isJoined ? "Salir de la comunidad" : "Unirse a la comunidad"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

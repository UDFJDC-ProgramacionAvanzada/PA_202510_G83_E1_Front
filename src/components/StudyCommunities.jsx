import "./StudyCommunities.css";

const communities = [
  {
    id: 1,
    name: "Física I",
    description: "Grupo de apoyo para estudiantes de primer semestre de física.",
    tags: ["Cálculo", "Ondas"],
  },
  {
    id: 2,
    name: "Lógica y Algoritmos",
    description: "Aprende lógica proposicional y algoritmos básicos.",
    tags: ["Programación", "Lógica"],
  },
  {
    id: 3,
    name: "Redes y Comunicaciones",
    description: "Discusión sobre redes, protocolos y simulaciones.",
    tags: ["TCP/IP", "OSI", "Simulación"],
  },
];

export default function StudyCommunities() {
  return (
    <section className="communities-section">
      <h2 className="communities-title">Comunidades de Estudio</h2>
      <p className="communities-subtitle">Únete a grupos que se alinean con tus intereses académicos</p>

      <div className="communities-list">
        {communities.map((community) => (
          <div key={community.id} className="community-card">
            <h3 className="community-name">{community.name}</h3>
            <p className="community-description">{community.description}</p>
            <div className="community-tags">
              {community.tags.map((tag, index) => (
                <span key={index} className="community-tag">{tag}</span>
              ))}
            </div>
            <button className="join-button">Unirse</button>
          </div>
        ))}
      </div>
    </section>
  );
}

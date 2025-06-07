import postLogo from "../assets/publicacion.png";

export default function CommunitySection() {
  return (
    <section className="community-section">
      <div className="community-header">
        <h2 className="section-title">Publicaciones de la Comunidad</h2>
      </div>
      <div className="post-area">
        <div className="post-list">
          {[1, 2, 3].map((n) => (
            <div key={n} className="post-card card">
              <img
                src={postLogo}
                alt="Imagen del recurso"
                className="post-image"
              />
              <div className="post-content">
                <h3 className="post-title">Título de la publicación {n}</h3>
                <p className="post-description">
                  Texto breve del recurso o evento compartido.
                </p>
                <div className="post-tags">
                  <span className="tag">Etiqueta 1</span>
                  <span className="tag">Etiqueta 2</span>
                </div>
                <div className="post-author">👤 Autor del recurso</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

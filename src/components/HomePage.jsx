import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="layout">
      {/* Barra lateral */}
      <aside className="sidebar">
        <div className="logo">EduSync+</div>
        <nav className="nav">
          <ul>
            <li>Profile</li>
            <li>Saved</li>
            <li>Tasks</li>
            <li>Workspace</li>
            <li>Notifications</li>
            <li>Friends</li>
            <li>Messages</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="main">
        <header className="top-header">
          <div className="user-info">
            <div className="avatar"></div>
            <div>
              <h2 className="user-name">Juan Carlos</h2>
              <div className="user-tags">
                <span className="tag">Estudiante</span>
                <span className="tag">Segundo año</span>
              </div>
              <p className="user-desc">Emocionado por conocer a otros compañer@s !!!</p>
            </div>
          </div>

          <div className="user-actions">
            <button className="btn btn-outline">Configuración</button>
            <button className="btn btn-black">Editar perfil</button>
          </div>
        </header>

        <section className="welcome-section">
          <h1>Bienvenido, Juan Carlos.</h1>
          <p className="subtitle">Conéctate con Compañer@s</p>
          <input
            type="text"
            className="status-input"
            placeholder="¿En qué estás pensando, Juan Carlos?"
          />
        </section>

        {/* Publicaciones */}
        <section className="community-section">
          <div className="community-header">
            <h2 className="section-title">Publicaciones de la Comunidad</h2>
            <p className="section-subtitle">Ve lo que otros están compartiendo</p>
          </div>
          <div className="post-area">
            <div className="post-list">
              {[1, 2, 3].map((n) => (
                <div key={n} className="post-card">
                  <img
                    src={`https://via.placeholder.com/100x70?text=Img+${n}`}
                    alt="Imagen del recurso"
                    className="post-image"
                  />
                  <div className="post-content">
                    <h3 className="post-title">Título de la publicación {n}</h3>
                    <p className="post-description">Texto breve del recurso o evento compartido.</p>
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

        {/* Mensaje motivacional */}
        <div className="footer-message">
          Stay connected and engaged with your student community.
        </div>

        {/* Footer */}
        <footer className="footer">
          © 2025 EduPlatform. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
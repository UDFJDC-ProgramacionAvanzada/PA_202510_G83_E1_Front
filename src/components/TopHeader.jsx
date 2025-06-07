import avatarImg from "../assets/avatar.png";

export default function TopHeader() {
  return (
    <header className="top-header">
      <div className="user-info">
        <img
          src={avatarImg}
          alt="Foto de Juan Carlos"
          className="avatar"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            marginRight: "16px",
            objectFit: "cover",
          }}
        />
        
        <div>
          <h2 className="user-name">Juan Carlos</h2>
          <div className="user-tags">
            <span className="tag">Estudiante</span>
            <span className="tag">Segundo año</span>
          </div>
          <p className="user-desc">
            Emocionado por conocer a otros compañer@s !!!
          </p>
        </div>
      </div>

      <div className="user-actions">
        <button className="btn btn-outline">Configuración</button>
        <button className="btn btn-black">Editar perfil</button>
      </div>
    </header>
  );
}

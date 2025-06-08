import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import avatarImg from "../assets/avatar.png";

export default function TopHeader() {
  const { t } = useTranslation();

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
            <span className="tag">{t("student")}</span>
            <span className="tag">{t("second_year")}</span>
          </div>
          <p className="user-desc">
            {t("user_description")}
          </p>
        </div>
      </div>

      <div className="user-actions">
        <button className="button-secondary">{t("settings")}</button>
        <button className="button-primary">{t("edit_profile")}</button>
        <LanguageSelector />
      </div>
    </header>
  );
}

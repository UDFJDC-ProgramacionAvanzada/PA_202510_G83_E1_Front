import { useTranslation } from "react-i18next";
import postLogo from "../assets/publicacion.png";

export default function CommunitySection() {
  const { t } = useTranslation();

  return (
    <section className="community-section">
      <div className="community-header">
        <h2 className="section-title">{t("community.title")}</h2>
      </div>
      <div className="post-area">
        <div className="post-list">
          {[1, 2, 3].map((n) => (
            <div key={n} className="post-card card">
              <img
                src={postLogo}
                alt={t("community.post_image_alt")}
                className="post-image"
              />
              <div className="post-content">
                <h3 className="post-title">{t("community.post_title", { number: n })}</h3>
                <p className="post-description">
                  {t("community.post_description")}
                </p>
                <div className="post-tags">
                  <span className="tag">{t("community.tag1")}</span>
                  <span className="tag">{t("community.tag2")}</span>
                </div>
                <div className="post-author">👤 {t("community.author")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

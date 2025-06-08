import { useTranslation } from "react-i18next";

export default function WelcomeSection() {
  const { t } = useTranslation();

  return (
    <section className="welcome-section">
      <h1>{t("welcome", { name: "Juan Carlos" })}</h1>
      <input
        type="text"
        className="status-input"
        placeholder={t("search_placeholder", { name: "Juan Carlos" })}
      />
    </section>
  );
}

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" style={{ textAlign: "center", padding: "10px 0", fontSize: "14px", color: "#777" }}>
      © 2025 EduPlatform. {t("footer.rights")}
    </footer>
  );
}

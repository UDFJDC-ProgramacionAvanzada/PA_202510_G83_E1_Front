import { useTranslation } from "react-i18next";

export default function Sidebar({ onSectionChange }) {
  const { t } = useTranslation();

  return (
    <aside className="sidebar">
      <div className="logo">EduSync+</div>
      <nav className="nav">
        <ul>
          <li onClick={() => onSectionChange("home")}>{t("sidebar.home")}</li>
          <li onClick={() => onSectionChange("tasks")}>{t("sidebar.tasks")}</li>
          <li onClick={() => onSectionChange("books")}>{t("sidebar.books")}</li>
          <li onClick={() => onSectionChange("pdfUpload")}>{t("sidebar.upload_pdf")}</li>
          <li onClick={() => onSectionChange("planner")}>{t("sidebar.planner")}</li>
          <li onClick={() => onSectionChange("chatbot")}>{t("sidebar.chatbot")}</li>
        </ul>
      </nav>
    </aside>
  );
}

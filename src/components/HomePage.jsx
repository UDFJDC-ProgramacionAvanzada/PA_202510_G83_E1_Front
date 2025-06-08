import { useState } from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import WelcomeSection from "./WelcomeSection";
import CommunitySection from "./CommunitySection";
import BookSearch from "./BookSearch";
import TaskList from "./TaskList";
import UploadPDF from "./PDFUpload";
import Planner from "./Planner";
import ChatBot from "./ChatBot";
import Footer from "./Footer";
import "./HomePage.css";

export default function HomePage() {
  const [selectedSection, setSelectedSection] = useState("home");

  return (
    <div className="layout">
      <Sidebar onSectionChange={setSelectedSection} />
      <div className="main">
        <TopHeader />
        <WelcomeSection />

        {/* Sección que cambia según el botón que elijas */}
        {selectedSection === "home" && <CommunitySection />}
        {selectedSection === "books" && <BookSearch />}
        {selectedSection === "tasks" && <TaskList />}
        {selectedSection === "pdfUpload" && <UploadPDF />}
        {selectedSection === "planner" && <Planner />}
        {selectedSection === "chatbot" && <ChatBot />}

        <Footer />
      </div>
    </div>
  );
}

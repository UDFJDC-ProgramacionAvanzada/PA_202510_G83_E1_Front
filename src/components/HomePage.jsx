import { useState } from "react";
import "./HomePage.css";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import WelcomeSection from "./WelcomeSection";
import CommunitySection from "./CommunitySection";
import BookSearch from "./BookSearch";
import Footer from "./Footer";
import TaskList from "./TaskList";

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

        {/* Puedes agregar más secciones aquí según sea necesario */}
        
        <Footer />
      </div>
    </div>
  );
}

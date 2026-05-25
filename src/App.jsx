import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import SkillsPage from "./components/SkillsPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  // console.log("Render App");
  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
      />
      {currentPage === "home" && <HomePage />}
      {currentPage === "skills" && <SkillsPage />}
      {currentPage === "projects" && <ProjectsPage />}
    </>
  );
}

export default App;

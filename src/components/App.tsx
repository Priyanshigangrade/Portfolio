import { ThemeProvider } from "./context/ThemeContext.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar.tsx";
import Footer from "../Footer.tsx";
import BackToTop from "../BackToTop.tsx";

// Pages
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Projects from "../pages/Projects.tsx";
import Experience from "../pages/Experience.tsx";
import Extracurricular from "../pages/Extracurricular.tsx";
import Achievements from "../pages/Achievements.tsx";
import Education from "../pages/Education.tsx";
import Resume from "../pages/Resume.tsx";
import Contact from "../pages/Contact.tsx";



function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-navy transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/extracurricular" element={<Extracurricular />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/education" element={<Education />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

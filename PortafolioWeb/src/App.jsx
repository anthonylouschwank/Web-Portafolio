// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SkillTreePage from './pages/Skilltreepage';
import BiographyPage from './pages/biography/Biography';
import ProjectsPage from './pages/projects/Projects';
import CreditsPage from './pages/credits/Credits'; // Nueva importación

console.log("App component mounted");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skilltree" element={<SkillTreePage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/credits" element={<CreditsPage />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
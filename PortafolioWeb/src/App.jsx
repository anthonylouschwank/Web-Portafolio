// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SkillTreePage from './pages/Skilltreepage';
import BiographyPage from './pages/biography/Biography'; // Nueva importación

console.log("App component mounted");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skilltree" element={<SkillTreePage />} />
        <Route path="/biography" element={<BiographyPage />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
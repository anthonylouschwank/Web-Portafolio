// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Skilltree from './pages/Skilltreepage';

console.log("App component mounted"); // ¡Verifica en la consola del navegador!

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skilltree" element={<Skilltree />} />
      </Routes>
    </Router>
  );
};

export default App;
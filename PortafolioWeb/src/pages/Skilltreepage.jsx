import React from 'react';
import { useNavigate } from 'react-router-dom';
import SkillTree from './skilltree/Skilltree.jsx';

const SkillTreePage = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <SkillTree onNavigateHome={handleNavigateHome} />
  );
};

export default SkillTreePage;
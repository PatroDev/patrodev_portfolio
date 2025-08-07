import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToSection = ({ sectionId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Laisse le temps à la page de se charger
  }, [navigate, sectionId]);

  return null;
};

export default ScrollToSection;

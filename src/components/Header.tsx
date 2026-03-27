import React, { useState, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  onReserve: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReserve }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-premium ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-premium">
          <span className="logo-main">ANCESTRAL</span>
          <span className="logo-sub">BEACH CLUB</span>
        </div>
        <nav className="nav-premium">
          <a href="#hero">Inicio</a>
          <a href="#gallery">Experiencia</a>
          <a href="#plans">Planes</a>
        </nav>
        <button 
          className="btn-header-reserve"
          onClick={onReserve}
        >
          Reservar
        </button>
      </div>
    </header>
  );
};

export default Header;

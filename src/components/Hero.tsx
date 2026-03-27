import { type FC } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  onReserve: () => void;
}

const Hero: FC<HeroProps> = ({ onReserve }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-wrapper">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80')" }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="hero-subtitle">Cartagena | Tierra Bomba</span>
          <h1 className="hero-title">EL LUJO SE SIENTE EN LA ARENA</h1>
          <p className="hero-description">Una experiencia inmersiva donde el Caribe se encuentra con la exclusividad ancestral.</p>
          <div className="hero-cta-group">
            <button 
              className="btn-apple-primary"
              onClick={onReserve}
            >
              Reservar Ahora
            </button>
            <button className="btn-apple-secondary">Explorar Galería</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

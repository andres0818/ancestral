import { FC } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

interface FooterProps {
  onReserve: () => void;
}

const Footer: FC<FooterProps> = ({ onReserve }) => {
  return (
    <footer className="footer-full-cinematic">
      {/* Background with Ken Burns Effect */}
      <div className="footer-bg-wrapper">
        <motion.div 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.2 }}
          transition={{ 
            duration: 30, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="footer-bg-img"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="footer-bg-overlay"></div>
        <div className="footer-grain-overlay"></div>
      </div>

      <div className="footer-content-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="footer-text-block"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "20px" }}
            whileInView={{ opacity: 1, letterSpacing: "12px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="footer-subtitle-gold"
          >
            ÚLTIMOS CUPOS DISPONIBLES
          </motion.span>
          
          <h2 className="footer-title-huge">
            EL PARAÍSO <br /> NO ESPERA
          </h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="footer-description-wide"
          >
            Asegura tu lugar en el club más exclusivo de Tierra Bomba. <br />
            Vive la experiencia Ancestral hoy mismo.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="footer-cta-group-wide"
          >
            <button 
              className="btn-rockstar btn-rockstar-primary"
              onClick={onReserve}
            >
              RESERVAR MI LUGAR
            </button>
            <a href="https://wa.me/573000000000" className="btn-rockstar btn-rockstar-secondary">
              HABLAR CON UN AGENTE
            </a>
          </motion.div>
        </motion.div>
        
        <div className="footer-sub-bottom">
          <p>&copy; 2026 ANCESTRAL BEACH CLUB | CARTAGENA, COLOMBIA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

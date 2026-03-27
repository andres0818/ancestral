import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Plans from './components/Plans';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import './styles/global.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (planName: string = '') => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <Header onReserve={() => openModal()} />
      <main>
        <Hero onReserve={() => openModal()} />
        
        <section id="about" className="about-minimalist">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="about-text-center"
            >
              <span className="subtitle">Nuestra Filosofía</span>
              <h2 className="title-large">ANCESTRAL ES LIBERTAD</h2>
              <div className="divider-gold"></div>
              <p className="description-premium">
                Ubicado en las costas doradas de Tierra Bomba, Ancestral Beach Club es más que un destino; 
                es un refugio para aquellos que buscan lo extraordinario. Aquí, el lujo no se mide en 
                posesiones, sino en momentos de serenidad absoluta.
              </p>
            </motion.div>
          </div>
        </section>

        <Gallery />

        <section id="gastronomy" className="gastronomy-section-v3" style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
          <div className="gastro-flex-container" style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'stretch' }}>
            
            {/* Panel 1: El Mar */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="gastro-panel-v3"
              style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
            >
              <div className="gastro-bg-image" style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80')",
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 
              }}></div>
              <div className="gastro-overlay-v3" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.85) 100%)', zIndex: 2 }}></div>
              <div className="gastro-content-v3" style={{ position: 'absolute', bottom: '80px', width: '100%', textAlign: 'center', zIndex: 3, color: 'white' }}>
                <span className="gastro-num">01</span>
                <h3 className="gastro-title">EL MAR</h3>
                <p className="gastro-desc">PESCA DEL DÍA & TRADICIÓN CARIBEÑA</p>
              </div>
            </motion.div>

            {/* Panel 2: El Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="gastro-panel-v3 featured-panel"
              style={{ flex: 1.2, position: 'relative', overflow: 'hidden' }}
            >
              <div className="gastro-bg-image" style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&?auto=format&fit=crop&w=1200&q=80')",
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 
              }}></div>
              <div className="gastro-overlay-v3" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.85) 100%)', zIndex: 2 }}></div>
              <div className="gastro-content-v3" style={{ position: 'absolute', bottom: '80px', width: '100%', textAlign: 'center', zIndex: 3, color: 'white' }}>
                <span className="gastro-num">02</span>
                <h3 className="gastro-title">EL BAR</h3>
                <p className="gastro-desc">MIXOLOGÍA DE AUTOR & BOTÁNICOS</p>
              </div>
            </motion.div>

            {/* Panel 3: La Tierra */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="gastro-panel-v3"
              style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
            >
              <div className="gastro-bg-image" style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&?auto=format&fit=crop&w=1200&q=80')",
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 
              }}></div>
              <div className="gastro-overlay-v3" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.85) 100%)', zIndex: 2 }}></div>
              <div className="gastro-content-v3" style={{ position: 'absolute', bottom: '80px', width: '100%', textAlign: 'center', zIndex: 3, color: 'white' }}>
                <span className="gastro-num">03</span>
                <h3 className="gastro-title">LA TIERRA</h3>
                <p className="gastro-desc">DULCE TROPICAL & FRUTOS DE LA ISLA</p>
              </div>
            </motion.div>

          </div>
        </section>

        <Plans onSelectPlan={(name) => openModal(name)} />
      </main>
      
      <Footer onReserve={() => openModal()} />

      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPlan={selectedPlan}
      />

    </div>
  );
}

export default App;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    title: 'NUESTRA PLAYA',
    category: 'Exclusividad'
  },
  {
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=80',
    title: 'RELAX TOTAL',
    category: 'Camas Balinesas'
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80',
    title: 'SABORES DEL MAR',
    category: 'Gastronomía'
  }
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="gallery-title"
          >
            LA EXPERIENCIA
          </motion.h2>
          <div className="gallery-nav">
             {images.map((_, i) => (
                <button 
                  key={i} 
                  className={`nav-dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
             ))}
          </div>
        </div>

        <div className="gallery-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="gallery-item glass"
            >
              <img src={images[index].url} alt={images[index].title} className="gallery-img" />
              <div className="gallery-info">
                <span className="info-cat">{images[index].category}</span>
                <h3 className="info-title">{images[index].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

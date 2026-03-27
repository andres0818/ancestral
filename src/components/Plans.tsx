import { FC } from 'react';
import { motion } from 'framer-motion';
import './Plans.css';

const plans = [
  {
    name: 'BRONCE',
    price: '$120K',
    desc: 'La esencia del Caribe',
    features: ['Transporte lancha', 'Almuerzo típico', 'Asoleadora']
  },
  {
    name: 'PLATA',
    price: '$220K',
    desc: 'El equilibrio perfecto',
    features: ['Cama Balinesa', 'Almuerzo a la carta', '2 Cócteles']
  },
  {
    name: 'ORO (VIP)',
    price: '$350K',
    desc: 'Exclusividad absoluta',
    features: ['Transporte privado', 'Crédito $150k', 'Barra libre']
  }
];

interface PlansProps {
  onSelectPlan: (planName: string) => void;
}

const Plans: FC<PlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="plans">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Membresías</span>
          <h2 className="title">ELIGE TU NIVEL</h2>
        </div>
        
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`plan-card glass ${plan.name.includes('PLATA') ? 'featured' : ''}`}
            >
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
              <div className="plan-price">{plan.price}</div>
              <ul className="plan-list">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <button 
                className="btn-plan" 
                onClick={() => onSelectPlan(plan.name)}
              >
                Reservar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

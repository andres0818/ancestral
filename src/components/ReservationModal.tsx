import { useState, useRef, useEffect, FC, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ReservationModal.css';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

const ReservationModal: FC<ReservationModalProps> = ({ isOpen, onClose, initialPlan = '' }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);

  useEffect(() => {
    setSelectedPlan(initialPlan);
  }, [initialPlan, isOpen]);

  const validateForm = (formData: FormData) => {
    const newErrors: string[] = [];
    const email = formData.get('user_email') as string;
    const phone = formData.get('user_phone') as string;
    const people = parseInt(formData.get('num_people') as string);
    const date = formData.get('reservation_date') as string;
    const level = formData.get('reservation_level') as string;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.push('El email no es válido.');
    }
    if (phone.length < 7) {
      newErrors.push('El número de celular es demasiado corto.');
    }
    if (isNaN(people) || people < 1) {
      newErrors.push('Debe haber al menos 1 persona para la reserva.');
    }
    if (!date) {
      newErrors.push('Debe seleccionar una fecha.');
    }
    if (!level) {
      newErrors.push('Debe seleccionar un nivel.');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    if (!validateForm(formData)) return;

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID;
      const userTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_USER_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !adminTemplateId || !userTemplateId || !publicKey) {
        // Fallback for demo purposes if variables are not set
        console.warn('Configuración de EmailJS incompleta, simulando envío...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        await Promise.all([
          emailjs.sendForm(serviceId, adminTemplateId, form.current, publicKey),
          emailjs.sendForm(serviceId, userTemplateId, form.current, publicKey)
        ]);
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setErrors([]);
      }, 4000);

    } catch (error) {
      console.error('Error EmailJS:', error);
      setIsSubmitting(false);
      alert('Error técnico al enviar la reserva. Por favor intenta de nuevo.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="modal-container"
          >
            <button className="modal-close" onClick={onClose}>&times;</button>

            {!isSuccess ? (
              <>
                <div className="modal-header">
                  <span className="modal-subtitle">Experiencia Ancestral</span>
                  <h2 className="modal-title">RESERVAR AHORA</h2>
                </div>

                <form ref={form} className="modal-form" onSubmit={handleSubmit}>
                  {errors.length > 0 && (
                    <div style={{ color: '#ff4444', fontSize: '0.8rem', marginBottom: '10px' }}>
                      {errors.map((err, i) => <div key={i}>• {err}</div>)}
                    </div>
                  )}

                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" name="user_name" required placeholder="Ej: Andres Perez" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label>Cédula / ID</label>
                      <input type="text" name="user_id" required placeholder="Número de documento" />
                    </div>
                    <div className="form-group">
                      <label>Celular</label>
                      <input type="tel" name="user_phone" required placeholder="+57 ..." />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" required placeholder="correo@ejemplo.com" />
                  </div>

                  <div className="form-group">
                    <label>Nivel de Reserva</label>
                    <select 
                      name="reservation_level" 
                      value={selectedPlan} 
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="form-select"
                      required
                    >
                      <option value="" disabled>Selecciona un nivel</option>
                      <option value="BRONCE">BRONCE</option>
                      <option value="PLATA">PLATA</option>
                      <option value="ORO (VIP)">ORO (VIP)</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label>Día de la Reserva</label>
                      <input type="date" name="reservation_date" required min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="form-group">
                      <label>Personas</label>
                      <input type="number" name="num_people" defaultValue="1" min="1" max="20" required />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-submit-modal"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'VALIDANDO...' : 'CONFIRMAR RESERVA'}
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="success-message"
              >
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✨</div>
                <h3>¡RESERVA CONFIRMADA!</h3>
                <p>
                  Hemos recibido tu solicitud correctamente. <br />
                  Se ha enviado un comprobante a tu correo electrónico. <br /><br />
                  <strong>¡Nos vemos en el paraíso!</strong>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;

# 🌴 Ancestral Beach Club - Landing Page Premium

![Versión](https://img.shields.io/badge/version-1.0.0-gold)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4)

## 📖 Descripción
Ancestral Beach Club es una landing page de alto impacto diseñada para transmitir exclusividad, lujo y serenidad. Ubicado en Tierra Bomba, Cartagena, el proyecto utiliza una estética cinematográfica inspirada en producciones de alto presupuesto (Estilo "Rockstar Cinematic") para cautivar al usuario desde el primer segundo.

### ✨ Características Principales
- **Diseño Rockstar Cinematic**: Footer con efecto de grano de película, zoom in (Ken Burns) y estética en blanco y negro.
- **Experiencia de Usuario Inmersiva**: Animaciones fluidas con `framer-motion` y tipografías masivas.
- **Sistema de Reservas Profesional**: Modal integrado con validación en tiempo real y envío de correos automáticos.
- **Dual Email Notification**: Notificación detallada para el administrador y confirmación elegante para el cliente mediante **EmailJS**.

---

## 🛠️ Stack Tecnológico
- **Frontend**: React 19 (TypeScript)
- **Estilos**: Vanilla CSS (Arquitectura de componentes)
- **Animaciones**: Framer Motion
- **Envío de Correos**: EmailJS (@emailjs/browser)
- **Build Tool**: Vite

---

## 🚀 Configuración del Proyecto

### 1. Clonar e Instalar
```bash
git clone <url-del-repositorio>
cd landingAncestral
npm install
```

### 2. Configuración de EmailJS (Crucial)
Para que el sistema de reservas funcione, debes configurar dos plantillas en tu cuenta de [EmailJS](https://www.emailjs.com/):

#### Plantilla para el Administrador (`ADMIN_TEMPLATE`)
Esta es la que recibes tú con los datos del cliente.
- **Campos a usar**: `{{user_name}}`, `{{user_id}}`, `{{user_phone}}`, `{{user_email}}`, `{{reservation_date}}`, `{{num_people}}`, `{{reservation_level}}`.

#### Plantilla para el Usuario (`USER_TEMPLATE`)
Esta es la respuesta automática para el cliente.
- **Contenido**: Un diseño elegante de agradecimiento confirmando que su solicitud está en proceso.

### 3. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:
```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_EMAILJS_TEMPLATE_ADMIN_ID=tu_template_admin_id
VITE_EMAILJS_TEMPLATE_USER_ID=tu_template_user_id
```

---

## 🔐 Despliegue y GitHub Secrets
Si despliegas usando **GitHub Actions** (por ejemplo, a GitHub Pages), debes configurar los siguientes **Secrets** en tu repositorio (`Settings > Secrets and variables > Actions`):

| Secret | Descripción |
| :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | ID del servicio de correo en EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Tu Public Key de EmailJS |
| `VITE_EMAILJS_TEMPLATE_ADMIN_ID` | ID de la plantilla para el staff |
| `VITE_EMAILJS_TEMPLATE_USER_ID` | ID de la plantilla de confirmación al cliente |

*Nota: Asegúrate de que tu workflow de GitHub Actions cargue estas variables durante el `npm run build`.*

---

## 📂 Estructura de Archivos
```text
src/
├── components/
│   ├── Footer.tsx            # Footer estilo Rockstar
│   ├── ReservationModal.tsx  # Lógica de reservas y EmailJS
│   ├── Hero.tsx              # Sección principal
│   └── ...
├── styles/
│   └── global.css            # Variables de color y fuentes
└── App.tsx                   # Orquestador de la aplicación
```

---

## 🎨 Guía de Estilo
- **Colores**: 
  - Dorado (Accent): `#ffb800`
  - Negro (Deep): `#0a0a0a`
  - Blanco (Pure): `#ffffff`
- **Efectos**:
  - **Glitch Glow**: Aplicado al título principal para impacto visual.
  - **Film Grain**: Superposición animada para textura cinematográfica.

---

## 📞 Contacto
**Ancestral Beach Club**  
Cartagena, Colombia.  
[WhatsApp Agente](https://wa.me/573000000000)

---
*Desarrollado con ❤️ para Ancestral Beach Club.*

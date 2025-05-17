import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Importação de estilos para o carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importação para animações de scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicialização das animações
AOS.init({
  duration: 800,
  once: false,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
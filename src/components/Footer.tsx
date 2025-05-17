import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-gray-400 mt-4">
              Especialistas em componentes diesel para veículos leves, pesados e linha agrícola.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-montserrat font-semibold text-white mb-4">
              Produtos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#bombas" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Bombas de Alta Pressão
                </a>
              </li>
              <li>
                <a href="#injetores" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Injetores Diesel
                </a>
              </li>
              <li>
                <a href="#sensores" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Sensores e Válvulas
                </a>
              </li>
              <li>
                <a href="#reparos" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Kits de Reparo
                </a>
              </li>
              <li>
                <a href="#peças" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Peças e Componentes
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-montserrat font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Contato
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#termos" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#politica" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-montserrat font-semibold text-white mb-4">
              Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Segunda-Sexta:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-montserrat font-semibold text-white mt-6 mb-4">
              Contato
            </h4>
            <p className="text-gray-400">
              <strong>Email:</strong> contato@neotechdiesel.com.br<br />
              <strong>Telefone:</strong> +55 (11) 4002-8922<br />
              <strong>WhatsApp:</strong> +55 (11) 98765-4321
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} NeoTech Diesel Components. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
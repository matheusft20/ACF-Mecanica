import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const menuItems = [
    { 
      title: 'Produtos', 
      dropdown: [
        { name: 'Injetores', url: '#injetores' },
        { name: 'Bombas', url: '#bombas' },
        { name: 'Sensores', url: '#sensores' },
        { name: 'Válvulas', url: '#valvulas' },
      ] 
    },
    { 
      title: 'Veículos', 
      dropdown: [
        { name: 'Pickups', url: '#pickups' },
        { name: 'Caminhões', url: '#caminhoes' },
        { name: 'Linha Agrícola', url: '#linha-agricola' },
      ] 
    },
    { title: 'Sobre Nós', url: '#sobre' },
    { title: 'Contato', url: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <button 
                  className="text-white font-montserrat hover:text-primary transition-colors duration-300 flex items-center"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.title}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              ) : (
                <a 
                  href={item.url} 
                  className="text-white font-montserrat hover:text-primary transition-colors duration-300"
                >
                  {item.title}
                </a>
              )}
              
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-gray py-2 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {item.dropdown.map((dropItem, idx) => (
                    <a 
                      key={idx} 
                      href={dropItem.url}
                      className="block px-4 py-2 text-white hover:bg-primary hover:text-dark transition-colors duration-300"
                    >
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Botão CTA */}
        <a 
          href="#contato" 
          className="hidden lg:block bg-primary hover:bg-primary-dark text-dark font-bold py-2 px-6 rounded-md transition-all duration-300"
        >
          Faça um Orçamento
        </a>

        {/* Menu Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-gray transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.dropdown ? (
                <div>
                  <button 
                    className="text-white font-montserrat hover:text-primary transition-colors duration-300 flex items-center justify-between w-full"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${activeDropdown === index ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
                    {item.dropdown.map((dropItem, idx) => (
                      <a 
                        key={idx} 
                        href={dropItem.url}
                        className="block py-2 text-white hover:text-primary transition-colors duration-300"
                        onClick={toggleMenu}
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  href={item.url} 
                  className="block text-white font-montserrat hover:text-primary transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
          
          <div className="mt-4">
            <a 
              href="#contato" 
              className="block w-full bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-6 rounded-md text-center transition-all duration-300"
              onClick={toggleMenu}
            >
              Faça um Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
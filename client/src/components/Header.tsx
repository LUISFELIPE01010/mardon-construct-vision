
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center pl-4">
            <img 
              src="/logo.png" 
              alt="Mardon Construtora" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Menu - Perfeitamente Centralizado */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-10">
              {['servicos', 'projetos', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 capitalize text-lg"
                >
                  {item === 'servicos' ? 'Serviços' : 
                   item === 'projetos' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {['servicos', 'projetos', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 capitalize"
                >
                  {item === 'servicos' ? 'Serviços' : 
                   item === 'projetos' ? 'Projetos' : 'Contato'}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-left w-fit"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

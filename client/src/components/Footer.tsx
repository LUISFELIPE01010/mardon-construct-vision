
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Mardon</span>
                <span className="text-red-400 text-sm font-medium block">Construtora</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Construindo com excelência, responsabilidade e transparência há mais de 15 anos. 
              Sua obra dos sonhos é nossa missão.
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>R. Altinópolis, 410 - Água Fria</p>
              <p>São Paulo - SP, 02334-001</p>
              <p>(11) 2291-4980</p>
              <p>orcamento@mardon.com.br</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Sobre Nós', id: 'sobre' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Projetos', id: 'projetos' },
                { name: 'Depoimentos', id: 'depoimentos' },
                { name: 'Contato', id: 'contato' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Execução de Obras Civis</li>
              <li>Gerenciamento de Obras</li>
              <li>Mão de Obra Civil</li>
              <li>Mão de Obra Estrutural</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Mardon Construtora. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com/mardon_construtora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-200"
            >
              Instagram
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

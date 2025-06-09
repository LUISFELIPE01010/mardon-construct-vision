
import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")'
           }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Construindo com
            <span className="block text-red-500">Excelência</span>
            <span className="block text-4xl md:text-5xl font-medium">
              Responsabilidade e Transparência
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed opacity-90">
            Transformamos sonhos em realidade através da engenharia de qualidade, 
            cumprimento de prazos e atendimento transparente em cada projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Solicite um Orçamento
            </button>
            <button
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Conheça Nosso Trabalho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

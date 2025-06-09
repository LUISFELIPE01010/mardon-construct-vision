
import React from 'react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '200+', label: 'Obras Concluídas' },
    { number: '100%', label: 'Satisfação do Cliente' },
    { number: '24h', label: 'Atendimento Disponível' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a 
                <span className="text-red-600"> Mardon Construtora</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Com mais de 15 anos de experiência no mercado da construção civil, 
                a Mardon Construtora se consolidou como referência em São Paulo, 
                oferecendo soluções completas em engenharia e construção.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é entregar projetos de excelência, respeitando prazos 
                e orçamentos, sempre com transparência e comunicação clara com nossos clientes.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Qualidade', desc: 'Materiais premium e técnicas avançadas' },
                { title: 'Prazo', desc: 'Compromisso rigoroso com cronogramas' },
                { title: 'Transparência', desc: 'Comunicação clara em todas as etapas' }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Obra da Mardon Construtora"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">200+</div>
                <div className="text-sm text-gray-600">Obras Entregues</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

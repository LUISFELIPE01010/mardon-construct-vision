
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Proprietário Residencial',
      content: 'A Mardon Construtora superou todas as nossas expectativas. Entregaram nossa casa dos sonhos no prazo e com qualidade impecável. Recomendo a todos!',
      project: 'Casa Residencial - 250m²'
    },
    {
      name: 'Maria Santos',
      role: 'Diretora Comercial',
      content: 'Profissionalismo exemplar desde o primeiro contato. O edifício comercial foi entregue dentro do cronograma e orçamento. Parceria de confiança.',
      project: 'Edifício Comercial - 15 andares'
    },
    {
      name: 'João Oliveira',
      role: 'Empresário Industrial',
      content: 'Execução perfeita do nosso galpão industrial. Equipe técnica competente e comunicação transparente em todas as etapas do projeto.',
      project: 'Galpão Industrial - 3000m²'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que dizem nossos <span className="text-red-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles falam sobre nossos projetos.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-8 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center -mt-4">
              <span className="text-white text-lg font-bold">"</span>
            </div>
            
            <div className="mt-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                {testimonials[currentTestimonial].content}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 mb-2">{testimonials[currentTestimonial].role}</p>
                  <p className="text-sm text-red-600 font-semibold">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100%', label: 'Satisfação Garantida' },
            { number: '200+', label: 'Clientes Satisfeitos' },
            { number: '15+', label: 'Anos de Confiança' },
            { number: '5★', label: 'Avaliação Média' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { years: 15, projects: 250, clients: 300 };
    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  return (
    <section id="sobre" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-red-600">Mardon</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Há mais de uma década no mercado, a Mardon Construtora é sinônimo de 
                excelência em execução de obras civis. Nossa expertise combina tradição 
                e inovação para entregar projetos que superam expectativas.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Engenharia de Qualidade
                  </h3>
                  <p className="text-gray-600">
                    Processos rigorosos e tecnologia de ponta garantem a máxima qualidade em cada projeto.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Compromisso com o Prazo
                  </h3>
                  <p className="text-gray-600">
                    Planejamento detalhado e gestão eficiente para entregas sempre no prazo estabelecido.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Atendimento Transparente
                  </h3>
                  <p className="text-gray-600">
                    Comunicação clara e transparente em todas as etapas do projeto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  {counts.years}+
                </div>
                <div className="text-gray-700 font-medium">Anos de Experiência</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  {counts.projects}+
                </div>
                <div className="text-gray-700 font-medium">Projetos Concluídos</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  {counts.clients}+
                </div>
                <div className="text-gray-700 font-medium">Clientes Satisfeitos</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-xl">
              <Award className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Certificação e Qualidade
              </h3>
              <p className="text-gray-600">
                Empresa certificada com os mais altos padrões de qualidade e segurança do setor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

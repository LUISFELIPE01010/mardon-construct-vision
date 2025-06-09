import React from 'react';

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossa <span className="text-red-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veja de perto como transformamos projetos em realidade com nossa equipe especializada
            e tecnologia de ponta na construção civil.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Auto-playing video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              {/* Fallback image if video doesn't load */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </video>

            {/* Video Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">
                Mardon Construtora em Ação
              </h3>
              <p className="text-white/90">
                Acompanhe nossos processos construtivos e a dedicação de nossa equipe
              </p>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed">
            "Cada projeto é uma oportunidade de transformar sonhos em realidade sólida"
          </blockquote>
          <cite className="text-red-600 font-semibold mt-4 block">Mardon Construtora</cite>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
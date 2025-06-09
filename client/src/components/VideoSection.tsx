
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
            {/* Video Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")'
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group bg-red-600 hover:bg-red-700 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
              >
                <Play className="w-12 h-12 ml-1" fill="currentColor" />
              </button>
            </div>

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

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200"
            >
              <X size={32} />
            </button>
            <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-white text-xl">
                Vídeo institucional da Mardon Construtora
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;

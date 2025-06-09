
import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Projetos' },
    { id: 'residencial', name: 'Residencial' },
    { id: 'comercial', name: 'Comercial' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Residencial Luxury',
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Casa de alto padrão com 400m²'
    },
    {
      id: 2,
      title: 'Edifício Comercial',
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Complexo comercial de 20 andares'
    },
    {
      id: 3,
      title: 'Galpão Industrial',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Galpão logístico de 5000m²'
    },
    {
      id: 4,
      title: 'Condomínio Residencial',
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Condomínio com 50 unidades'
    },
    {
      id: 5,
      title: 'Centro Empresarial',
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Centro empresarial moderno'
    },
    {
      id: 6,
      title: 'Complexo Industrial',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Complexo industrial sustentável'
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos <span className="text-red-600">Realizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Conheça alguns dos nossos principais projetos entregues com excelência 
            e dentro do prazo estabelecido.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Solicite seu Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

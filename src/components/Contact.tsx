
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solicite seu <span className="text-red-600">Orçamento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e receba uma proposta personalizada para seu projeto. 
            Estamos prontos para transformar seus sonhos em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Serviço Desejado
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="execucao-obras">Execução de Obras Civis</option>
                  <option value="gerenciamento">Gerenciamento de Obras</option>
                  <option value="mao-obra-civil">Mão de Obra Civil</option>
                  <option value="mao-obra-estrutural">Mão de Obra Estrutural</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-red-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Telefone</h4>
                  <p className="text-red-100">(11) 2291-4980</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">E-mail</h4>
                  <p className="text-red-100">orcamento@mardon.com.br</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Instagram</h4>
                  <p className="text-red-100">@mardon_construtora</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Endereço</h4>
                  <p className="text-red-100">
                    R. Altinópolis, 410 - Água Fria<br/>
                    São Paulo - SP, 02334-001
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8234!2d-46.6356!3d-23.4892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5d7c2f5a9ab%3A0x1234567890abcdef!2sR.%20Altin%C3%B3polis%2C%20410%20-%20%C3%81gua%20Fria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002334-001!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

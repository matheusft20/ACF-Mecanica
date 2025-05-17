import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductInfo: React.FC = () => {
  const pickupsInfo = [
    "Bombas e Injetores Completos Novos e Reman.",
    "Reparos para Injetores.",
    "Reparos para Bombas de Alta (CP1, CP3 e CP4)",
    "Sensores e Válvulas do Rail.",
    "Melhores Marcas: Bosch, Denso, Neotech, Delphi..."
  ];

  const trucksInfo = [
    "Bombas e Injetores Completos Novos e Reman.",
    "Reparos para Injetores Eletrônicos e Mecânicos.",
    "Reparos para Bombas de Alta (CP1, CP2, CP3 e CP4)",
    "Reparos para Bombas Mecânicas (VE, CAV e em linha)",
    "Sensores e Válvulas do Rail.",
    "Melhores Marcas: Bosch, Denso, Neotech, Delphi..."
  ];

  return (
    <section id="produtos-info" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-primary" data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-6 text-center">
              O QUE TEMOS PARA PICKUPS<br />E UTILITÁRIOS?
            </h3>
            
            <ul className="space-y-4">
              {pickupsInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-dark font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-center">
              <div className="bg-gray-800 p-4 rounded-lg inline-block">
                <p className="text-white mb-2">ESTAREMOS PRESENTES</p>
                <p className="text-primary font-bold">Autopar 2024 - De quarta 8 a sábado 11 maio</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-primary" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-6 text-center">
              O QUE TEMOS PARA CAMINHÕES<br />E LINHA AGRÍCOLA?
            </h3>
            
            <ul className="space-y-4">
              {trucksInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-dark font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-center">
              <div className="bg-gray-800 p-4 rounded-lg inline-block">
                <p className="text-white mb-2">ESTAREMOS PRESENTES</p>
                <p className="text-primary font-bold">Autopar 2024 - De quarta 8 a sábado 11 maio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg max-w-2xl mx-auto" data-aos="fade-up">
            <h4 className="text-xl font-montserrat font-bold text-white mb-4">
              Por que escolher a NeoTech Diesel?
            </h4>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <CheckCircle className="text-primary mr-2 w-5 h-5" />
                <span className="text-gray-200">Produtos de alta qualidade com garantia</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary mr-2 w-5 h-5" />
                <span className="text-gray-200">Suporte técnico especializado</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary mr-2 w-5 h-5" />
                <span className="text-gray-200">Entregas para todo o Brasil</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary mr-2 w-5 h-5" />
                <span className="text-gray-200">Melhores preços do mercado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
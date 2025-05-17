import React from 'react';

interface Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Válvula SCI",
      code: "55493549",
      description: "S10 2.8 200CV - Válvula para sistemas de injeção diesel",
      price: 599,
      imageUrl: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&h=750",
      category: "valvulas"
    },
    {
      id: 2,
      name: "Bomba de Alta Nova",
      code: "0445020175 | 020007",
      description: "CUMMINS ISB | CP3 - Bomba de alta pressão para sistema common rail",
      price: 2990,
      imageUrl: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&h=750",
      category: "bombas"
    },
    {
      id: 3,
      name: "Injetor Recon Hilux 3.0",
      code: "RECON",
      description: "Recon a base de troca - Quantidade limitada - Garantia de 6 meses",
      price: 1790.90,
      imageUrl: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&h=750",
      category: "injetores"
    },
    {
      id: 4,
      name: "Válvula de Controle",
      code: "F00GX17004 | 17005",
      description: "IVECO DAILY - AMAROK - Válvula de controle para injetores diesel",
      price: 899,
      imageUrl: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&h=750",
      category: "valvulas"
    }
  ];

  return (
    <section id="produtos-destaque" className="py-20 bg-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Produtos em Destaque
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça nossos produtos mais procurados com os melhores preços e qualidade do mercado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-black rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-primary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              <div className="relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary text-dark font-bold py-1 px-3 rounded-bl-lg">
                  Cod: {product.code.split(' | ')[0]}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-primary font-bold">
                    <span className="text-sm align-top">R$</span>
                    <span className="text-2xl">{Math.floor(product.price)}</span>
                    {product.price % 1 !== 0 && (
                      <span className="text-sm align-top">,{(product.price % 1).toFixed(2).substring(2)}</span>
                    )}
                  </div>
                  <a 
                    href="#contato" 
                    className="bg-primary hover:bg-primary-dark text-dark font-bold py-2 px-4 rounded-md transition-all duration-300"
                  >
                    Orçamento
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#catalogo" 
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-dark font-bold py-3 px-8 rounded-md transition-all duration-300"
            data-aos="fade-up"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
import React from 'react';
import { Truck, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  imageUrl: string;
  link: string;
}

const ProductCategories: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      title: "Para Pickups e Utilitários",
      description: "Soluções completas para veículos leves e utilitários",
      icon: <Truck className="w-10 h-10 text-primary" />,
      imageUrl: "https://images.pexels.com/photos/10390697/pexels-photo-10390697.jpeg?auto=compress&cs=tinysrgb&h=750",
      link: "#pickups"
    },
    {
      id: 2,
      title: "Para Caminhões",
      description: "Componentes de alta performance para transporte pesado",
      icon: <Truck className="w-10 h-10 text-primary" />,
      imageUrl: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&h=750",
      link: "#caminhoes"
    },
    {
      id: 3,
      title: "Linha Agrícola",
      description: "Especializados em maquinário agrícola e tratores",
      icon: <Truck className="w-10 h-10 text-primary" />,
      imageUrl: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&h=750",
      link: "#linha-agricola"
    }
  ];

  return (
    <section id="categorias" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Categorias de Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções completas para diversos tipos de veículos diesel, desde pickups até máquinas agrícolas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative overflow-hidden rounded-lg group"
              data-aos="fade-up"
              data-aos-delay={category.id * 100}
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center mb-3">
                  {category.icon}
                  <h3 className="ml-3 text-xl font-montserrat font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                <a 
                  href={category.link}
                  className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-300"
                >
                  <span>Saiba mais</span>
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:ml-2 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
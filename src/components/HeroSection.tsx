import React from 'react';
import Slider from 'react-slick';

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
  };

  const slides = [
    {
      id: 1,
      title: "Especialistas em Componentes Diesel",
      subtitle: "Soluções completas para veículos diesel com as melhores marcas do mercado",
      imageUrl: "https://images.pexels.com/photos/2800150/pexels-photo-2800150.jpeg?auto=compress&cs=tinysrgb&h=750",
      ctaText: "Conheça Nossos Produtos",
      ctaLink: "#produtos"
    },
    {
      id: 2,
      title: "Bombas e Injetores Completos",
      subtitle: "Novos e remanufaturados para pickups, caminhões e máquinas agrícolas",
      imageUrl: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&h=750",
      ctaText: "Ver Catálogo",
      ctaLink: "#catalogo"
    },
    {
      id: 3,
      title: "Autopar 2024",
      subtitle: "De 8 a 11 de maio - Venha nos visitar e conhecer nossos produtos",
      imageUrl: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&h=750",
      ctaText: "Saiba Mais",
      ctaLink: "#evento"
    }
  ];

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div
              className="w-full h-screen bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.imageUrl})`,
              }}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-3xl" data-aos="fade-right">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-8 rounded-md transition-all duration-300"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Rolar para baixo</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
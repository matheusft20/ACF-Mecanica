import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductInfo from './components/ProductInfo';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "NeoTech Diesel | Especialistas em Componentes Diesel";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <ProductInfo />
      <ContactForm />
      <Footer />
      <WhatsAppButton phoneNumber="5511987654321" />
    </div>
  );
}

export default App;
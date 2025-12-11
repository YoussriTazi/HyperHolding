import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import ProductShowcase from './components/ProductShowcase';
import Innovation from './components/Innovation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen relative overflow-hidden flex flex-col max-w-[1600px] mx-auto bg-transparent">
        <Navbar />
        <Hero />
        <FeaturesGrid />
        <ProductShowcase />
        <Innovation />
        <Footer />
      </main>
    </>
  );
};

export default App;
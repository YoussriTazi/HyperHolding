import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIuEJ2Z3acbxdlYE2TkIaaZVYP9m8wAi8Kib2iWLnNB0GEvAylqusEzRLL2gSrJ--YANBwyWQXweEr7Ar-YI8oPGmr6BhAT7jBXca4pQh7VXGlccaA3ZCJfTKrW6f9nR8cacyW_3zuj8e3quKVLXRad_7lNaFbRCDpMyAjfVooPNaXR3lI_ufTxSQAG4rQ8BLviSy7_ZOEuf6UugpNq8sk_kXLD8GH-5JeD-VyZxI94ilu8fursz04Olx_MGSMVzBHarvtbUBeZpZt",
      title: "Custom Battery Packs",
      subtitle: "Engineering Excellence Since 1994"
    },
    {
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=2000",
      title: "High-Performance Energy",
      subtitle: "Powering Major Industrial Tools"
    },
    {
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2000",
      title: "R&D Precision",
      subtitle: "Advanced BMS & Thermal Analysis"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Wrapper div uses padding to match Navbar alignment (px-4 md:px-8) instead of margins
    <div className="w-full px-4 md:px-8 mb-8 lg:mb-16">
      <section className="relative w-full flex flex-col justify-center min-h-[650px] overflow-hidden rounded-3xl shadow-2xl group border border-gray-800">
        {/* Slider Images */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            <img 
              alt={slide.title} 
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[10s]" 
              src={slide.image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102216] via-[#102216]/90 to-transparent sm:via-[#102216]/60"></div>
          </div>
        ))}

        <div className="container mx-auto px-6 sm:px-12 relative z-10 py-16">
          <div className="flex flex-col text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md w-fit mb-6 animate-fade-in-up">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <span className="text-primary text-xs font-bold tracking-widest uppercase font-display">30+ Years of Experience</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.0] tracking-tight text-white mb-6 drop-shadow-xl uppercase transition-all duration-500">
              {slides[currentSlide].title.split(' ').slice(0, -2).join(' ')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">
                {slides[currentSlide].title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed font-light drop-shadow-md border-l-2 border-primary pl-4">
              We engineer high-performance energy solutions through a collaborative "four-handed" design process, from analysis to mass production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-primary hover:bg-primary-hover text-background-dark px-8 py-4 rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_30px_rgba(19,236,91,0.5)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2 uppercase text-sm">
                Discover Our Services
                <span className="material-icons text-sm">arrow_downward</span>
              </button>
              <button className="group border border-white/20 bg-black/20 backdrop-blur-md text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-sm">
                Contact Sales
                <span className="material-symbols-outlined text-xl opacity-70 group-hover:opacity-100 transition-opacity text-primary">
                  mail
                </span>
              </button>
            </div>
            
            {/* Slider Indicators */}
            <div className="flex gap-2 mb-8">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-primary' : 'w-4 bg-gray-600 hover:bg-gray-400'}`}
                />
              ))}
            </div>

            {/* Partners Strip */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Strategic Partners</span>
              <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-white font-display font-bold text-lg">Panasonic</div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="text-white font-display font-bold text-lg">Saft</div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="text-white font-display font-bold text-lg">Samsung SDI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
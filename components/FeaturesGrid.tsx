import React from 'react';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-16 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display tracking-tight uppercase">
            Product Ecosystem
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Advanced modular architecture meets robust industrial design.
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors group">
          View all specifications
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
        
        {/* Card 1: Advanced Integration (White/Light) */}
        <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-500 min-h-[400px] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(19,236,91,0.3)] hover:border-primary/50">
          <div className="absolute top-8 right-8 opacity-10 dark:opacity-5 transform rotate-12">
             {/* Grid pattern graphic */}
             <div className="grid grid-cols-3 gap-3">
               {[...Array(9)].map((_, i) => (
                 <div key={i} className="w-10 h-10 rounded-md bg-current text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white"></div>
               ))}
             </div>
          </div>
          
          <div className="z-10 mt-4">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide uppercase">Engineered Precision</span>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 leading-tight font-display">
              Advanced<br/>Integration
            </h3>
          </div>

          <div className="z-10 border-t border-gray-100 dark:border-gray-700 pt-6 flex items-center justify-between mt-auto">
            <div>
              <span className="text-5xl font-bold text-gray-900 dark:text-white block font-display">IP68</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Protection Rating</span>
            </div>
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase border border-primary/20">Certified</span>
          </div>
        </div>

        {/* Card 2: Intelligent Energy (Dark) */}
        <div className="bg-[#102216] dark:bg-black rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group border border-gray-800 shadow-2xl transition-all duration-500 min-h-[400px] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(19,236,91,0.3)] hover:border-primary/50">
          {/* Background dots/pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#13ec5b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Avatars */}
            <div className="flex -space-x-4 mb-8">
               {[1,2].map((i) => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-[#102216] bg-gray-600 flex items-center justify-center text-xs text-white overflow-hidden shadow-lg">
                    <span className="material-symbols-outlined text-xl text-gray-300">person</span>
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-[#102216] bg-gray-800 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                 +2k
               </div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary text-base">verified</span>
              <span className="text-gray-200 text-xs font-medium tracking-wide">Trusted Partner</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-snug mb-8">
              "Intelligent Energy<br/>for <span className="text-primary">Custom</span> Solutions"
            </h3>

            <div className="flex items-center gap-2 text-primary/80">
              <span className="material-symbols-outlined text-xl">shield</span>
              <span className="text-xs font-bold uppercase tracking-wider">ISO 9001 Certified Manufacturing</span>
            </div>
          </div>
        </div>

        {/* Card 3: Powering Innovation (Updated to full image) */}
        <div className="rounded-3xl relative overflow-hidden group border border-gray-200 dark:border-gray-800 transition-all duration-500 min-h-[400px] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(19,236,91,0.3)] hover:border-primary/50">
          {/* Full background image */}
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
               alt="HyperHolding Battery Drill" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             {/* Gradient overlay for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
               {/* Text with backdrop blur for legibility on varied image backgrounds */}
               <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-white/10 max-w-[70%]">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-display leading-none">
                    Powering<br/>Innovation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-xs leading-relaxed font-medium">
                    Compatible with next-gen high-drain tools.
                  </p>
               </div>
               
                <button className="w-12 h-12 bg-white dark:bg-surface-dark/80 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer text-gray-900 dark:text-white border border-transparent dark:border-white/10">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
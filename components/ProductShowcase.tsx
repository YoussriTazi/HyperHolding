import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full py-16 px-4 md:px-8 bg-gray-50/80 dark:bg-[#0a160e]/80 backdrop-blur-sm rounded-3xl my-8 border border-white/20 dark:border-white/5">
      {/* Section Header */}
      <div className="pb-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Product Catalog</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4 uppercase text-slate-900 dark:text-white font-display">
            Engineered Solutions
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-2xl">
            Specialized power systems for two main verticals. Choose the architecture that fits your application requirements.
          </p>
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        
        {/* Category 1: Rechargeable (Power Tools) */}
        <div className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gray-900">
             <img 
               src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1000&auto=format&fit=crop" 
               alt="HyperHolding Rechargeable Battery on Power Drill" 
               className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-[#102216]/60 to-transparent"></div>
          
          <div className="absolute top-6 right-6">
             <span className="bg-primary text-background-dark font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
               Flagship Series
             </span>
          </div>

          <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                 <span className="material-symbols-outlined text-primary">battery_charging_full</span>
               </div>
               <span className="text-primary text-sm font-bold uppercase tracking-widest">Cyclic Application</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display uppercase tracking-wide">Rechargeable Packs</h3>
            <p className="text-gray-300 mb-8 max-w-md text-sm leading-relaxed">
              Lithium-Ion solutions featuring custom BMS for power tools, e-mobility, and robotics. High discharge rates (100C) and rapid charging.
            </p>
            <div className="flex gap-4">
               <button className="flex-1 bg-primary hover:bg-primary-hover text-background-dark py-3 rounded font-bold uppercase text-xs tracking-wider transition-colors">
                 View Catalogue
               </button>
               <button className="flex-1 border border-gray-600 hover:border-white text-white py-3 rounded font-bold uppercase text-xs tracking-wider transition-colors backdrop-blur-md">
                 Specs
               </button>
            </div>
          </div>
        </div>

        {/* Category 2: Primary (Static/Industrial) */}
        <div className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gray-900">
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
               alt="HyperHolding Primary Battery IoT Application" 
               className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#102216] via-[#102216]/60 to-transparent"></div>
          
          <div className="absolute top-6 right-6">
             <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
               Long Life
             </span>
          </div>

          <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                 <span className="material-symbols-outlined text-white">battery_full</span>
               </div>
               <span className="text-white/80 text-sm font-bold uppercase tracking-widest">Static Application</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display uppercase tracking-wide">Primary Batteries</h3>
            <p className="text-gray-300 mb-8 max-w-md text-sm leading-relaxed">
              Non-rechargeable cells (Li-SOCl2, Li-MnO2) designed for metering, IoT, and backup systems. 10+ year shelf life reliability.
            </p>
             <div className="flex gap-4">
               <button className="flex-1 bg-white hover:bg-gray-200 text-background-dark py-3 rounded font-bold uppercase text-xs tracking-wider transition-colors">
                 View Catalogue
               </button>
               <button className="flex-1 border border-gray-600 hover:border-white text-white py-3 rounded font-bold uppercase text-xs tracking-wider transition-colors backdrop-blur-md">
                 Specs
               </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;
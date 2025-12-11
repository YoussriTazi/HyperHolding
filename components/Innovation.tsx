import React from 'react';

const Innovation: React.FC = () => {
  return (
    <section className="relative px-4 md:px-8 py-20 bg-[#f8faf9]/80 dark:bg-[#0c1a11]/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 overflow-hidden rounded-3xl my-8 border border-white/20 dark:border-white/5 mx-4 md:mx-0">
      {/* Drafting Paper Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #13ec5b 1px, transparent 1px), linear-gradient(to bottom, #13ec5b 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Schematic Image Side */}
        <div className="relative group order-2 lg:order-1">
           {/* Technical markers */}
           <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50 z-20"></div>
           <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/50 z-20"></div>
           
           <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#102216]">
             <img 
               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
               alt="HyperHolding Custom Battery Schematic and Internal Layout" 
               className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-normal filter contrast-125 min-h-[400px]"
             />
             
             {/* Schematic Overlays */}
             <div className="absolute top-[20%] right-[10%] flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#13ec5b]"></div>
                <span className="bg-black/80 backdrop-blur text-primary text-[10px] px-2 py-0.5 rounded font-mono border border-primary/30">BMS_Active_State</span>
             </div>
             <div className="absolute bottom-[30%] left-[10%] flex items-center gap-2">
                <span className="bg-black/80 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded font-mono border border-white/20">Cell_Array_18650</span>
                <div className="w-16 h-px bg-primary/80"></div>
             </div>
           </div>
        </div>

        {/* Text Side */}
        <div className="flex flex-col order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
             <span className="w-10 h-10 flex items-center justify-center border border-primary text-primary rounded font-mono text-sm bg-primary/5">
               04
             </span>
             <span className="text-primary text-sm font-bold uppercase tracking-widest">Technical Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display uppercase tracking-tight leading-none">
            Automatic Sorting &<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Precision Assembly</span>
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              Our <strong>Automatic Sorting Machine</strong> ensures 100% uniformity. Every cell is tested for internal resistance (IR) and voltage before welding, ensuring perfectly matched packs.
            </p>
            <p className="text-sm border-l-2 border-primary pl-4 italic">
              "From custom BMS architecture to thermal management integration, our R&D team designs utilizing CAD/CAM workflows to meet strict UN 38.3 standards."
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
             <div className="p-5 bg-white dark:bg-[#193322] border border-gray-200 dark:border-primary/20 rounded-xl hover:-translate-y-1 transition-transform duration-300">
               <span className="material-symbols-outlined text-primary mb-3 text-3xl">precision_manufacturing</span>
               <h4 className="font-bold text-sm uppercase mb-1 font-display">Automated Welding</h4>
               <p className="text-xs text-gray-500 dark:text-gray-400">Micro-precision spot welds for minimal resistance</p>
             </div>
             <div className="p-5 bg-white dark:bg-[#193322] border border-gray-200 dark:border-primary/20 rounded-xl hover:-translate-y-1 transition-transform duration-300">
               <span className="material-symbols-outlined text-primary mb-3 text-3xl">analytics</span>
               <h4 className="font-bold text-sm uppercase mb-1 font-display">Digital Tracking</h4>
               <p className="text-xs text-gray-500 dark:text-gray-400">Full traceability per pack via QR Code</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Innovation;
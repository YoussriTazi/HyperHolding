import React from 'react';

const Navbar: React.FC = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Products", href: "#" },
    { name: "Innovation", href: "#" },
    { name: "Contacts", href: "#" },
  ];

  return (
    <nav className="flex justify-between items-center z-50 py-6 px-4 md:px-8 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 relative transition-transform group-hover:scale-110 duration-300 bg-primary rounded flex items-center justify-center text-background-dark">
           <span className="material-symbols-outlined text-2xl">battery_charging_full</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-xl tracking-wider uppercase leading-none">HyperHolding</span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest">Custom Battery Packs</span>
        </div>
      </div>
      
      <div className="hidden xl:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400 font-display">
        {links.map((link) => (
          <a key={link.name} className="hover:text-primary transition-colors uppercase tracking-wide text-xs" href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-surface-dark px-3 py-1.5 rounded-full border border-transparent focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-gray-400 text-lg">search</span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:ring-0 text-xs w-24 md:w-32 text-gray-800 dark:text-gray-200 placeholder-gray-500"
          />
        </div>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 text-xs font-bold font-display">
          <span className="text-primary cursor-pointer">EN</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">IT</span>
        </div>

        {/* Mobile Menu Icon */}
        <button className="xl:hidden text-gray-800 dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
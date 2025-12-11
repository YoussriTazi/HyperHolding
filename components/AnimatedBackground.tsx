import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none">
       {/* Light Mode Background */}
      <div className="absolute inset-0 bg-[#f8faf9] dark:hidden"></div>
      
      {/* Dark Mode Background */}
      <div className="absolute inset-0 hidden dark:block bg-[#0a160e]">
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'radial-gradient(#13ec5b 1px, transparent 1px)',
               backgroundSize: '40px 40px' 
             }}>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
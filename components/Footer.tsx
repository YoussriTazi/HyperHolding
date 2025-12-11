import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a160e]/90 backdrop-blur-md text-white pt-16 pb-8 px-4 md:px-8 mt-auto border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">battery_charging_full</span>
            <span className="font-display font-bold text-2xl uppercase tracking-wide">HyperHolding</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Leading the industry in custom battery pack realization for over 30 years. Powering your innovation with safety and precision.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-colors">
              <span className="text-xs font-bold">in</span>
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-gray-500">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-sm mt-0.5">location_on</span>
              <span>Via Graveglia, 12<br/>16040 Carasco (GE), Italy</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-primary text-sm">phone</span>
              <a href="tel:+390185351825" className="hover:text-primary transition-colors">+39 0185 351825</a>
            </li>
             <li className="flex items-center gap-3">
              <span className="material-icons text-primary text-sm">fax</span>
              <span>+39 0185 351825</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-primary text-sm">email</span>
              <a href="mailto:info@hyperholding.com" className="hover:text-primary transition-colors">info@hyperholding.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-primary text-sm">verified_user</span>
              <a href="mailto:info@pec.hyperholding.com" className="hover:text-primary transition-colors">info@pec.hyperholding.com</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-gray-500">Company</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Quality Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Innovation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Work with us</a></li>
          </ul>
        </div>

        {/* Products */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-gray-500">Solutions</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-primary transition-colors">Primary Batteries</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Rechargeable Packs</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Custom BMS</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Industrial Applications</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} HyperHolding S.r.l. All rights reserved. P.IVA 01234567890</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
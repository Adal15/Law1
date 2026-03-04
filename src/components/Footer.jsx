import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import logo from '../assets/image-removebg-preview.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pagebg-secondary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Info */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center">
              <img src={logo} alt="TAXNEX LLP Logo" className="h-20 w-25 bg-white rounded-lg p-1" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professionally managed advisory firm providing comprehensive Legal, Tax, Property and Documentation Support Services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-pagebg-accent border border-white/5 rounded-lg text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-pagebg-accent border border-white/5 rounded-lg text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-pagebg-accent border border-white/5 rounded-lg text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Contact Us</h4>
            <div className="flex items-start space-x-3 text-sm group">
              <MapPin className="text-primary shrink-0 transition-transform group-hover:scale-110" size={20} />
              <span className="text-gray-400">
                16, G/F, Shop No. 06, Jaswant Apartment, Okhla Village, Jamia Nagar, New Delhi – 110025
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm group">
              <Phone className="text-primary shrink-0 transition-transform group-hover:scale-110" size={20} />
              <div className="flex flex-col text-gray-400">
                <a href="tel:+919811167059" className="hover:text-primary">98111 67059</a>
                <a href="tel:+918920868922" className="hover:text-primary">89208 68922</a>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm group">
              <Mail className="text-primary shrink-0 transition-transform group-hover:scale-110" size={20} />
              <a href="mailto:infotaxnexllp@gmail.com" className="text-gray-400 hover:text-primary">
                infotaxnexllp@gmail.com
              </a>
            </div>
          </div>

          {/* Identification */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Official Details</h4>
            <div className="glass-card p-4 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 uppercase tracking-wider">GSTIN</span>
                <span className="text-primary font-mono select-all">07AAZFT1701C1Z8</span>
              </div>
              <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                <span className="text-gray-500 uppercase tracking-wider">LLPIN</span>
                <span className="text-primary font-mono select-all">ACT-2135</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} TAXNEX LLP. All Rights Reserved.</p>
          <button 
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors uppercase tracking-[0.1em] font-bold"
          >
            Back to Top <ArrowUp size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

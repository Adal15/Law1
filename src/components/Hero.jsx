import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">
                Professional Legal & Tax Advisory
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
              Reliable Legal & <span className="gold-gradient">Tax Advisory</span> Services
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Providing professional GST, Income Tax, Property Documentation, Business Registration and Legal Drafting Services under one roof.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="group bg-primary hover:bg-primary-light text-black px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center space-x-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
              >
                <span>Get Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, label: '7+ Years Exp' },
                { icon: Clock, label: 'Timely Delivery' },
                { icon: FileText, label: 'Compliant' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start">
                  <item.icon className="text-primary mb-2" size={24} />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl transform rotate-2 animate-pulse" />
              <div className="glass-card p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Legal Advisory" 
                  className="rounded-xl object-cover w-full h-[500px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 glass-card p-6 border-primary/20 bg-black/60 backdrop-blur-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <ShieldCheck className="text-black" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold">100% Tax Compliant</div>
                      <div className="text-gray-400 text-sm">Professional accuracy guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

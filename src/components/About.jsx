import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Users2 } from 'lucide-react';

const About = () => {
  const highlights = [
    { text: '7+ Years Professional Experience', icon: Award },
    { text: 'Transparent Communication', icon: Users2 },
    { text: 'Timely Service Delivery', icon: Briefcase },
    { text: 'Complete Documentation Support', icon: CheckCircle2 },
    { text: 'Professional Compliance Handling', icon: CheckCircle2 },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">About TAXNEX LLP</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold mb-8 leading-tight text-white">
              7+ Years of <span className="gold-gradient">Professional Excellence</span> in Advisory
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed mb-10">
              <p>
                TAXNEX LLP is a professionally managed advisory firm providing comprehensive Legal, Tax, Property and Documentation Support Services under one roof.
              </p>
              <p>
                The firm is led by <span className="text-white font-bold tracking-wide italic underline decoration-primary/30 underline-offset-4">Adv. Hasan Abbas (Managing Partner)</span> and focuses on transparency, accuracy and timely service delivery. For startups and seasoned businesses alike, we deliver reliable, compliant and result-oriented solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 glass-card border-white/5 hover:border-primary/20 transition-all group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={16} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-3xl transform -rotate-3" />
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="space-y-6 mt-12">
                <div className="glass-card p-8 border-primary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-heading font-extrabold text-white mb-2">7+</div>
                  <div className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Years Experience</div>
                </div>
                <div className="glass-card p-8 border-white/5 bg-white/5 hover:scale-105 transition-transform">
                  <div className="text-4xl font-heading font-extrabold text-white mb-2">100%</div>
                  <div className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Compliance Rate</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-8 border-white/5 bg-white/5 hover:scale-105 transition-transform">
                  <div className="text-4xl font-heading font-extrabold text-white mb-2">500+</div>
                  <div className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Satisfied Clients</div>
                </div>
                <div className="glass-card p-8 border-primary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-heading font-extrabold text-white mb-2">24/7</div>
                  <div className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Client Support</div>
                </div>
              </div>
            </div>
            {/* Callout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 glass-card p-6 border-primary/30 bg-black/80 backdrop-blur-2xl shadow-2xl max-w-[240px]"
            >
              <p className="text-sm italic text-gray-300 leading-relaxed">
                "Our mission is to simplify legal & tax complexities for every individual and business."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary" />
                <div className="text-xs font-bold text-white uppercase tracking-wider">Adv. Hasan Abbas</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

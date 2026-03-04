import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  CreditCard, 
  Building2, 
  Home, 
  UserSquare2, 
  Zap, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'gst',
    name: 'GST Services',
    icon: CreditCard,
    services: [
      'GST Registration', 'GST Return Filing', 'GST Notice Reply', 
      'GST Refund Processing', 'GST Appeal Filing', 'GSTR-9 & 9C Filing', 
      'E-Way Bill Management', 'Vendor Compliance Review'
    ]
  },
  {
    id: 'it',
    name: 'Income Tax',
    icon: FileText,
    services: [
      'ITR Filing', 'Tax Planning', 'Income Tax Notice Reply', 
      'TDS Filing', 'PAN Application', 'Capital Gain Computation', 
      'NRI Taxation', 'Tax Audit Support'
    ]
  },
  {
    id: 'business',
    name: 'Business Reg.',
    icon: Building2,
    services: [
      'Private Limited Company', 'LLP Registration', 'Partnership Firm', 
      'MSME Registration', 'Shop & Establishment', 'Startup India', 
      'Trademark Registration', 'ISO Certification'
    ]
  },
  {
    id: 'property',
    name: 'Property Doc.',
    icon: Home,
    services: [
      'Sale Deed Drafting', 'Lease / Rent Agreement', 'Property Due Diligence', 
      'Title Verification', 'Mutation Documentation', 'Property Registration Support'
    ]
  },
  {
    id: 'gov',
    name: 'Govt. Doc.',
    icon: UserSquare2,
    services: [
      'Birth Certificate', 'Death Certificate', 'Income Certificate', 
      'Domicile Certificate', 'Marriage Registration', 'Passport Documentation', 
      'Driving Licence Assistance', 'Ration Card Documentation'
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  return (
    <section id="services" className="py-24 bg-pagebg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6"
          >
            Comprehensive <span className="gold-gradient">Solutions</span> Under One Roof
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We provide specialized advisory and documentation services for individuals, 
            startups, and established businesses with a focus on accuracy and results.
          </motion.p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all border ${
                activeTab === cat.id 
                ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20' 
                : 'bg-pagebg border-white/5 text-gray-400 hover:border-primary/30 hover:text-white'
              }`}
            >
              <cat.icon size={18} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {serviceCategories.find(c => c.id === activeTab).services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-6 border-white/5 bg-pagebg hover:bg-pagebg-accent hover:border-primary/20 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Zap className="text-primary group-hover:text-black" size={18} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{activeTab.toUpperCase()}</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{service}</h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Reliable {service} support handled by experts with years of experience.
                  </p>
                  <a href="#contact" className="flex items-center text-xs font-bold text-primary uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Enquire Now <ChevronRight size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 glass-card border-primary/20 bg-gradient-to-r from-primary/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
              <ShieldCheck className="text-black" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Need a custom solution for your business?</h4>
              <p className="text-gray-400 text-sm">Schedule a free consultation with our managing partner today.</p>
            </div>
          </div>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary transition-all whitespace-nowrap">
            Consultation Request
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

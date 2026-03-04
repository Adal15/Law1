import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-pagebg">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-8 leading-tight">
              Let's Discuss Your <span className="gold-gradient">Legal Needs</span>
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Have questions about GST, ITR, or property documentation? Our expert team is here to provide you with the most reliable advice.
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: MapPin, 
                  title: 'Visit Our Office', 
                  content: '16, G/F, Shop No. 06, Jaswant Apartment, Okhla Village, Jamia Nagar, New Delhi – 110025',
                  link: 'https://maps.google.com'
                },
                { 
                  icon: Phone, 
                  title: 'Call Us Directly', 
                  content: '+91 98111 67059 / +91 89208 68922',
                  link: 'tel:+919811167059'
                },
                { 
                  icon: Mail, 
                  title: 'Email Us', 
                  content: 'infotaxnexllp@gmail.com',
                  link: 'mailto:infotaxnexllp@gmail.com'
                }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link}
                  className="flex items-start space-x-4 p-6 glass-card border-white/5 bg-pagebg-accent hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <item.icon className="text-primary group-hover:text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-primary/10 bg-primary/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Clock className="text-primary" size={20} />
                <div>
                  <div className="text-white text-sm font-bold">Business Hours</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">Mon - Sat: 10AM - 7PM</div>
                </div>
              </div>
              <div className="text-primary font-bold text-xs bg-primary/10 px-3 py-1 rounded-full px-2">OPEN NOW</div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-white/10"
          >
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-2">Send a Message</h4>
              <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-pagebg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 00000 00000"
                    className="w-full bg-pagebg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-pagebg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all appearance-none">
                  <option>GST Advisory</option>
                  <option>Income Tax Filing</option>
                  <option>Property Documentation</option>
                  <option>Business Registration</option>
                  <option>Other Services</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?"
                  className="w-full bg-pagebg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all ${
                  formState === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-primary hover:bg-primary-light text-black shadow-lg shadow-primary/20'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </>
                )}
                {formState === 'submitting' && (
                  <span className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                )}
                {formState === 'success' && (
                  <>
                    <span>Message Sent Successfully</span>
                    <ShieldCheck size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

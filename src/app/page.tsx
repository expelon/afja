"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBasket, 
  Truck, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Leaf,
  Coffee,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Distribution', href: '#distribution' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <ShoppingBasket className="text-white w-6 h-6" />
          </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <span className="text-emerald-500">Afja</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20">
            Partner With Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-emerald-600 text-white py-3 rounded-xl font-semibold mt-2">
              Partner With Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920" 
          alt="FMCG Distribution" 
          fill
          className="object-cover opacity-40 scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
            Trusted FMCG Partner
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Delivering <span className="text-emerald-500">Quality</span> to Every Doorstep.
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
            Afja is a premier FMCG distribution leader, bridging the gap between global brands and local consumers with efficiency and integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group">
              Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all">
              Our Network
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
            <Image 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Goods" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Truck className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">500+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Daily Deliveries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CategoryCard = ({ icon: Icon, title, description, image, color }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
  >
    <div className="h-48 overflow-hidden relative">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className={`absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    </div>
    <div className="p-8">
      <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
        <Icon className="text-white w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <a href="#" className="text-emerald-600 font-bold text-sm flex items-center gap-1 group/link">
        View Catalog <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  </motion.div>
);

const Categories = () => {
  const categories = [
    {
      icon: Leaf,
      title: "Fresh Produce",
      description: "Sourcing the finest organic fruits and vegetables directly from local farms to ensure peak freshness.",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800",
      color: "bg-emerald-500"
    },
    {
      icon: Coffee,
      title: "Pantry Staples",
      description: "Premium grains, oils, and packaged goods from world-renowned brands that every household trusts.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      color: "bg-amber-500"
    },
    {
      icon: Sparkles,
      title: "Home & Personal Care",
      description: "Essential hygiene and cleaning products designed to keep your living spaces safe and sparkling.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">Our Portfolio</h2>
          <p className="text-4xl font-bold text-slate-900 mb-6">Diverse Range of Daily Essentials</p>
          <p className="text-slate-600">We manage a comprehensive supply chain for a wide variety of FMCG categories, ensuring availability and quality.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { icon: Truck, label: "Distribution Hubs", value: "24" },
    { icon: Users, label: "Happy Retailers", value: "15k+" },
    { icon: ShieldCheck, label: "Quality Checks", value: "100%" },
    { icon: MapPin, label: "Cities Covered", value: "120+" },
  ];

  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                <stat.icon className="text-white w-8 h-8" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to grow your business with us?</h2>
            <p className="text-slate-400 mb-12 leading-relaxed">
              Whether you're a manufacturer looking for distribution or a retailer wanting to stock premium products, we're here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-emerald-500/20 p-4 rounded-2xl border border-emerald-500/30">
                  <Phone className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-bold text-lg">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-emerald-500/20 p-4 rounded-2xl border border-emerald-500/30">
                  <Mail className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-bold text-lg">partners@afja.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white/5 p-12 md:p-20 border-l border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-400 text-sm font-medium">Full Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-sm font-medium">Business Type</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                    <option className="bg-slate-900">Retailer</option>
                    <option className="bg-slate-900">Distributor</option>
                    <option className="bg-slate-900">Manufacturer</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-medium">Email Address</label>
                <input type="email" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-medium">Message</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <ShoppingBasket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                <span className="text-emerald-500">Afja</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the way in FMCG distribution with a commitment to quality, reliability, and sustainable growth for our partners.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Our Products</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Distribution Network</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Partner Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Stay updated with our latest products and news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 w-full" />
              <button className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2026 Afja FMCG Distribution. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><X className="w-4 h-4" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Users className="w-4 h-4" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Sparkles className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Stats />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl aspect-video">
                <Image 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Warehouse" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full z-0 blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full z-0 blur-3xl opacity-60"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Decades of Excellence in Distribution</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to streamline the supply chain for essential goods, Afja has grown into a regional powerhouse. We don't just move boxes; we build lasting relationships between brands and the communities they serve.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our state-of-the-art logistics network and data-driven approach ensure that products are always where they need to be, exactly when they're needed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <ShieldCheck className="text-emerald-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Certified Quality</p>
                    <p className="text-xs text-slate-500">ISO 9001:2015 Standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <Truck className="text-emerald-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Rapid Delivery</p>
                    <p className="text-xs text-slate-500">24/7 Logistics Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

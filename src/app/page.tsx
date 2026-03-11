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
  Sparkles,
  Package,
  Boxes,
  Microscope,
  Award
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger white background when scrolled past most of the Hero section
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Distribution', href: '#distribution' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Left: Brand Name */}
        <div className="flex justify-start">
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Afja General Trading
          </span>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 hover:text-emerald-500 whitespace-nowrap ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex justify-end items-center gap-4">
          <button className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
            Contact
          </button>
          
          <button 
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-600/20 mt-2">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920", // Retail/Grocery
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1920", // Modern Warehouse
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920", // Logistics
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1920"  // Multi-brand Consumer Products
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" } 
            }}
            className="absolute inset-0"
          >
            <Image 
              src={bgImages[currentBg]} 
              alt="Afja Distribution Background" 
              fill
              className="object-cover opacity-40"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-brightness-[0.7]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-transparent to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
            Trusted FMCG Partner
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
            Delivering <span className="text-emerald-500">Quality</span> <br className="hidden sm:block" />
            to Every Doorstep.
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Afja is a premier FMCG distribution leader, bridging the gap between global brands and local consumers with efficiency, integrity, and excellence.
          </p>
          <div className="flex justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4.5 rounded-full font-bold text-base transition-all flex items-center gap-2 shadow-xl shadow-emerald-500/25 group">
              Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const CategoryCard = ({ icon: Icon, title, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100/80 flex flex-col h-full"
  >
    <div className="h-64 overflow-hidden relative">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Category Icon Badge */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-white/95 backdrop-blur-md w-14 h-14 rounded-xl flex items-center justify-center shadow-xl border border-white/20 group-hover:bg-emerald-600 transition-colors duration-300">
          <Icon className="text-emerald-600 w-7 h-7 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
    
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
        <a href="#" className="text-emerald-600 font-bold text-sm flex items-center gap-2 group/link">
          Explore Catalog 
          <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover/link:bg-emerald-600 group-hover/link:text-white transition-all">
            <ChevronRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  </motion.div>
);

const Categories = () => {
  const categories = [
    {
      icon: Leaf,
      title: "Fresh Produce",
      description: "Our direct partnerships with farms ensure that only the most vibrant and nutritious fruits and vegetables reach your shelves daily.",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Boxes,
      title: "Pantry Essentials",
      description: "A curated selection of premium grains, oils, and dry goods from trusted global brands, maintaining consistently high standards.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: ShieldCheck,
      title: "Home & Hygiene",
      description: "Setting the standard for safety and cleanliness with a portfolio of essential personal care and household cleaning solutions.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Premium Range of <br className="hidden sm:block" />
              <span className="text-emerald-600">Daily Essentials.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm md:text-right pb-2">
            We bridge the gap between world-class manufacturers and local retailers through a seamless, tech-enabled supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
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
        <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
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
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Afja General Trading
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
      
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 skew-x-12 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Content Side */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                Decades of <span className="text-emerald-500">Excellence</span> <br className="hidden sm:block" />
                in Global Distribution.
              </h2>

              {/* Mobile Image: Visible only on mobile, placed between heading and paragraph */}
              <div className="lg:hidden w-full relative mb-10">
                <div className="w-full relative z-10 rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Our State-of-the-Art Warehouse" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Founded with a vision to streamline the supply chain for essential goods, Afja has grown into a regional powerhouse. We don't just move products; we build lasting bridges between world-class brands and the communities they serve.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <p className="font-bold text-slate-900">Certified ISO 9001:2015</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <p className="font-bold text-slate-900">Global Sourcing Ethics</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <p className="font-bold text-slate-900">24/7 Logistics Network</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <p className="font-bold text-slate-900">Direct Farm-to-Retail</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4.5 rounded-full font-bold text-base transition-all shadow-xl shadow-slate-900/10">
                Read Full Story
              </button>
            </div>

            {/* Desktop Image Side: Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2 relative group">
              <div className="w-full relative z-10 rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our State-of-the-Art Warehouse" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
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

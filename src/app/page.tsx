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
  MapPin,
  ArrowRight,
  Leaf,
  Coffee,
  Sparkles,
  Package,
  Boxes,
  Microscope,
  Award,
  TrendingUp,
  Globe,
  Building2, 
  Hexagon, 
  Triangle, 
  CircleDot, 
  Layers, 
  Focus, 
  Infinity as InfinityIcon, 
  Target, 
  Zap,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1920"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900"></div>
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
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-base transition-all flex items-center gap-2 shadow-xl shadow-emerald-500/25 group">
              Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Brands = () => {
  const brands = [
    { name: "Unilever", icon: Leaf },
    { name: "Procter & Gamble", icon: ShieldCheck },
    { name: "Nestlé", icon: Coffee },
    { name: "Kraft Heinz", icon: ShoppingBasket },
    { name: "Coca-Cola", icon: Globe },
    { name: "PepsiCo", icon: Zap },
    { name: "Mars", icon: Package },
    { name: "Mondelez", icon: Award },
    { name: "L'Oréal", icon: Sparkles },
    { name: "Johnson & Johnson", icon: Microscope }
  ];

  const marqueeItems = [...brands, ...brands];

  return (
    <section className="py-12 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center flex items-center justify-center gap-4 opacity-70">
        <div className="h-[1px] w-12 bg-slate-600"></div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
          Our Global Brand Partners
        </p>
        <div className="h-[1px] w-12 bg-slate-600"></div>
      </div>

      <div className="relative flex overflow-hidden py-4">
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex w-max items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {marqueeItems.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center mx-12 md:mx-16 group cursor-default transition-all duration-500 flex-shrink-0"
            >
              <div className="flex items-center gap-3 text-slate-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
                <brand.icon className="w-8 h-8 group-hover:text-emerald-500 transition-colors duration-500 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">{brand.name}</span>
              </div>
            </div>
          ))}
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
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-white/95 backdrop-blur-md w-14 h-14 rounded-xl flex items-center justify-center shadow-xl border border-white/20 group-hover:bg-emerald-600 transition-colors duration-300">
          <Icon className="text-emerald-600 w-7 h-7 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
    
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{description}</p>
      
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

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Truck,
      title: "Strategic Logistics",
      subtitle: "Speed & Scale",
      description: "Optimized delivery routes combined with our state-of-the-art warehousing network ensure your products move at the speed of market demand."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      subtitle: "Rigorous Standards",
      description: "We implement international-grade quality control protocols at every touchpoint, from farm sourcing to final shelf placement."
    },
    {
      icon: TrendingUp,
      title: "Retailer Growth",
      subtitle: "Partner Success",
      description: "More than a distributor, we provide data-driven insights and logistical support that empower our retail partners to scale and thrive."
    },
    {
      icon: Globe,
      title: "Global Reach",
      subtitle: "World-Class Brands",
      description: "Our direct links with global manufacturers offer exclusive access to premium FMCG brands, bringing the world's best to your doorstep."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
                The Afja Advantage
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Why Industry Leaders <br />
                <span className="text-emerald-500">Choose Excellence.</span>
              </h2>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 text-slate-400 text-lg leading-relaxed border-l border-emerald-500/30 pl-8"
          >
            We&apos;ve refined FMCG distribution into an art form, focusing on reliability, quality, and the success of our partners across the region.
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 flex flex-col justify-between transition-all duration-500 group-hover:bg-white/10 group-hover:border-emerald-500/30 shadow-2xl">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:rotate-[10deg] transition-all duration-500">
                    <reason.icon className="text-emerald-500 w-7 h-7 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-emerald-500/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">
                    {reason.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {reason.description}
                  </p>
                </div>
                <div className="w-8 h-[2px] bg-emerald-500/20 group-hover:w-full transition-all duration-700"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { icon: Truck, label: "Distribution Hubs", value: "24", suffix: "+", desc: "Across the region" },
    { icon: Users, label: "Happy Retailers", value: "15k", suffix: "+", desc: "Active accounts" },
    { icon: ShieldCheck, label: "Quality Checks", value: "100", suffix: "%", desc: "Every shipment" },
    { icon: MapPin, label: "Cities Covered", value: "120", suffix: "+", desc: "And growing" },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
            Our Impact In Numbers
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500">
                <stat.icon className="text-emerald-400 w-6 h-6 group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Value */}
              <p className="text-5xl font-black text-white tracking-tight leading-none mb-1">
                {stat.value}<span className="text-emerald-400">{stat.suffix}</span>
              </p>

              {/* Accent line */}
              <div className="w-8 h-[2px] bg-emerald-500/40 group-hover:w-16 transition-all duration-500 my-4"></div>

              {/* Label */}
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.desc}</p>
            </motion.div>
          ))}
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

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2026 Afja FMCG Distribution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- New Sections ---

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We switched to Afja for our supermarket's FMCG sourcing two years ago and have never looked back. Orders arrive on schedule, products are always fresh, and the variety they offer is unmatched.",
      author: "Ahmed Al Rashid",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Running a convenience store chain means I can't afford stockouts. Afja keeps our shelves full without me having to chase anyone. Their team is always a call away.",
      author: "Priya Menon",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "The quality of goods from Afja is consistently top-tier. From personal care to pantry staples, everything I stock in my store comes from them. My customers trust what I sell.",
      author: "Khalid Nasser",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative"
            >
              <Quote className="text-emerald-100 w-12 h-12 absolute top-6 right-6" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow relative z-10 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-emerald-100 bg-slate-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerCTA = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/40 via-slate-900 to-slate-900"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              Let&apos;s Build Your <span className="text-emerald-500">FMCG Supply Chain</span> Together
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              From farm to shelf, Afja delivers speed, scale, and quality. Whether you&apos;re a grocery chain seeking reliable stock replenishment or a global brand entering new markets — we are your distribution backbone.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-end w-full">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-emerald-500/25 flex-1 sm:flex-none text-center">
              Stock My Store
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base transition-all flex-1 sm:flex-none text-center">
              Distribute My Brand
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Brands />
      <Categories />
      <Stats />
      <WhyChooseUs />

      {/* About Us Section */}
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 skew-x-12 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                Decades of <span className="text-emerald-500">Excellence</span>{' '}
                <br className="hidden sm:block" />
                in Global Distribution.
              </h2>

              {/* Mobile Image */}
              <div className="lg:hidden w-full relative mb-10 group">
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
                Founded with a vision to streamline the supply chain for essential goods, Afja has grown into a regional powerhouse. We don&apos;t just move products; we build lasting bridges between world-class brands and the communities they serve.
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

              <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-slate-900/10">
                Read Full Story
              </button>
            </div>

            {/* Desktop Image Side */}
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

      <Testimonials />
      <PartnerCTA />
      <Footer />
    </main>
  );
}

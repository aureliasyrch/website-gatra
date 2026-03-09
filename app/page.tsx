'use client';

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Fuel, Sun } from "lucide-react";

export default function Home() {
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
      `}</style>
      
      {/* 1. HERO SECTION - Responsive text & padding */}
      <section className="relative pt-32 pb-16 md:pt-56 md:pb-32 overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4">
        {/* Dekorasi tetap ada namun disesuaikan */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white/5 md:skew-x-12 md:translate-x-32 z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-orange-500/10 blur-3xl rounded-full z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center reveal active">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-orange-400 text-xs md:text-sm font-bold tracking-widest uppercase">
              Reliable Engineering Solutions
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-md px-2">
            Rise Beyond <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent inline-block">
              Energy Excellence
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-base md:text-xl leading-relaxed mb-10 opacity-90 px-4">
            PT Gatra Energi Teknik delivers high-reliability power solutions, 
            integrating advanced genset systems, industrial fabrication, and 
            sustainable solar technology.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6">
            <Link href="/services" 
              className="w-full sm:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/40 transform hover:-translate-y-1 text-center">
              Explore Our Services
            </Link>
            <Link href="/contact" 
              className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-md transition-all text-center">
              Contact Expert
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE - Better text spacing */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-blue-950 text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-4">
            About The Company
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            Commitment to <span className="text-blue-700">Quality & Precision</span>
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            PT Gatra Energi Teknik is a fast-growing engineering company dedicated to providing high-reliability power solutions. 
            We specialize in genset maintenance, precision tank fabrication, and cutting-edge solar energy systems.
          </p>
          <div className="h-1.5 w-20 md:w-24 bg-orange-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* 3. CORE SERVICES - Optimized Grid */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 reveal">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-3">
                Expertise Area
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-blue-950">
                Our Core <span className="text-blue-700">Capabilities</span>
              </h3>
            </div>
            <Link href="/services" className="text-blue-700 font-bold flex items-center gap-2 hover:text-orange-600 transition-colors text-sm md:text-base">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-500 transition-all group reveal delay-1">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Zap size={28} />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-blue-950 mb-3">Genset Systems</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                End-to-end installation and professional maintenance for industrial generator sets.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-orange-500 transition-all group reveal delay-2">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Fuel size={28} />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-blue-950 mb-3">Fuel Pump System</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrated fuel management and automated pump systems for industrial efficiency.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-500 transition-all group reveal delay-3">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Sun size={28} />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-blue-950 mb-3">Solar Technology</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transition to sustainable energy with our high-performance PLTS installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS - Responsive Grid for mobile */}
      <section className="py-16 md:py-20 bg-blue-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center reveal">
          <div className="transition-transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">100+</div>
            <div className="text-blue-200 text-[10px] md:text-xs uppercase tracking-widest font-bold">Projects Done</div>
          </div>
          <div className="transition-transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">24/7</div>
            <div className="text-blue-200 text-[10px] md:text-xs uppercase tracking-widest font-bold">Support</div>
          </div>
          <div className="transition-transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">100%</div>
            <div className="text-blue-200 text-[10px] md:text-xs uppercase tracking-widest font-bold">Reliable</div>
          </div>
          <div className="transition-transform hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">High</div>
            <div className="text-blue-200 text-[10px] md:text-xs uppercase tracking-widest font-bold">Safety Standards</div>
          </div>
        </div>
      </section>
    </div>
  );
}
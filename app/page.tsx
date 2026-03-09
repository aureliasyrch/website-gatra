'use client';

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Fuel, Sun } from "lucide-react";

export default function Home() {
  
  // Script untuk mendeteksi scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Elemen muncul jika 10% sudah masuk layar
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
      {/* CSS Animasi Langsung di Dalam Komponen */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
      `}</style>
      
      {/* 1. HERO SECTION (Animasi Muncul Otomatis) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center reveal active">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">
              Reliable Engineering Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-md">
            Rise Beyond <br />
            <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Energy Excellence
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-lg md:text-xl leading-relaxed mb-10 opacity-90">
            PT Gatra Energi Teknik delivers high-reliability power solutions, 
            integrating advanced genset systems, industrial fabrication, and 
            sustainable solar technology for your business growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/40 transform hover:-translate-y-1">
              Explore Our Services
            </Link>
            <Link href="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-md transition-all">
              Contact Expert
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Animasi Scroll Muncul) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h2 className="text-blue-950 text-sm font-black tracking-[0.3em] uppercase mb-4">
            About The Company
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Commitment to <span className="text-blue-700">Quality & Precision</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            PT Gatra Energi Teknik is a fast-growing engineering company dedicated to providing high-reliability power solutions. 
            We specialize in genset maintenance, precision tank fabrication, and cutting-edge solar energy systems.
          </p>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* 3. CORE SERVICES (Animasi Muncul Bergantian/Staggered) */}
      <section className="py-24 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3">
                Expertise Area
              </h2>
              <h3 className="text-4xl font-black text-blue-950">
                Our Core <span className="text-blue-700">Capabilities</span>
              </h3>
            </div>
            <Link href="/services" className="text-blue-700 font-bold flex items-center gap-2 hover:text-orange-600 transition-colors">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - Delay 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-500 transition-all group reveal delay-1">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-4">Genset Systems</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                End-to-end installation and professional maintenance for industrial generator sets.
              </p>
            </div>

            {/* Service 2 - Delay 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-orange-500 transition-all group reveal delay-2">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Fuel size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-4">Fuel Pump System</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Integrated fuel management and automated pump systems for industrial efficiency.
              </p>
            </div>

            {/* Service 3 - Delay 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-500 transition-all group reveal delay-3">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Sun size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-4">Solar Technology</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Transition to sustainable energy with our high-performance PLTS installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS (Animasi Scroll Muncul) */}
      <section className="py-20 bg-blue-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center reveal">
          <div className="hover:scale-110 transition-transform">
            <div className="text-4xl font-black text-orange-500 mb-2">100+</div>
            <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Projects Done</div>
          </div>
          <div className="hover:scale-110 transition-transform delay-100">
            <div className="text-4xl font-black text-orange-500 mb-2">24/7</div>
            <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Support</div>
          </div>
          <div className="hover:scale-110 transition-transform delay-200">
            <div className="text-4xl font-black text-orange-500 mb-2">100%</div>
            <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Reliable</div>
          </div>
          <div className="hover:scale-110 transition-transform delay-300">
            <div className="text-4xl font-black text-orange-500 mb-2">High</div>
            <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Safety Standards</div>
          </div>
        </div>
      </section>

    </div>
  );
}
'use client';

import Link from "next/link"; // Tambahkan import ini

const services = [
  {
    title: "Genset Installation & Maintenance",
    description: "Comprehensive installation services and periodic maintenance for generator systems to ensure uninterrupted power supply.",
    icon: "⚡",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Industrial Tank Fabrication",
    description: "High-precision fabrication of industrial fuel storage tanks (diesel/solar) built with the highest safety standards.",
    icon: "🛢️",
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "Fuel Pump System",
    description: "Installation and integration of automated fuel pump systems for efficient industrial fuel distribution.",
    icon: "⛽",
    color: "from-blue-700 to-orange-600"
  },
  {
    title: "Mechanical & Electrical Works",
    description: "Integrated engineering solutions for complex mechanical and electrical systems across various industrial facilities.",
    icon: "⚙️",
    color: "from-blue-900 to-blue-700"
  },
  {
    title: "Solar Power System (PLTS)",
    description: "Implementation of renewable solar energy systems for enhanced energy efficiency and sustainable operations.",
    icon: "☀️",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Industrial Piping System",
    description: "Design and installation of industrial piping systems for gas, water, and various liquid fuel transport.",
    icon: "🚿",
    color: "from-blue-800 to-blue-600"
  }
];

export default function Services() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-500px bg-linear-to-b from-blue-50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
            What We Do
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-blue-950 mb-6 drop-shadow-sm leading-tight">
            Our Professional <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Providing integrated energy and engineering solutions with high-quality standards to support your industrial growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm border border-gray-100 p-8 rounded-2rem shadow-sm 
                         hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 rounded-t-2rem bg-linear-to-r ${service.color}`} />

              {/* Icon Container */}
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-3xl mb-6 
                              group-hover:scale-110 transition-transform duration-300 border border-gray-50">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Decorative Arrow */}
              <div className="mt-6 flex items-center text-orange-600 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Contact for info 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area - FIXED LINK */}
        <div className="mt-20 bg-blue-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl mx-4 sm:mx-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-20 -mb-20 blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
              Need a Specialized Project Consultation?
            </h3>
            <p className="text-blue-100 mb-10 text-base md:text-lg max-w-2xl mx-auto opacity-90">
              Our expert team is ready to help you design an efficient and reliable energy system tailored to your specific business needs.
            </p>
            
            {/* Menggunakan Link untuk navigasi internal */}
            <Link 
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-12 rounded-full transition-all 
                         shadow-lg hover:shadow-orange-500/40 transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
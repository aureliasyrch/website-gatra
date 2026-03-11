'use client';

import Link from "next/link";
import Image from "next/image"; // Import Image dari Next.js
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Genset Installation & Maintenance",
    description: "Comprehensive installation services and periodic maintenance for generator systems to ensure uninterrupted power supply.",
    icon: "⚡",
    image: "/genset.png", // Pastikan file gambar ada di folder /public/services/
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Industrial Tank Fabrication",
    description: "High-precision fabrication of industrial fuel storage tanks (diesel/solar) built with the highest safety standards.",
    icon: "🛢️",
    image: "/tanki.png",
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "Fuel Pump System",
    description: "Installation and integration of automated fuel pump systems for efficient industrial fuel distribution.",
    icon: "⛽",
    image: "/girpam.jpeg",
    color: "from-blue-700 to-orange-600"
  },
  {
    title: "Mechanical & Electrical Works",
    description: "Integrated engineering solutions for complex mechanical and electrical systems across various industrial facilities.",
    icon: "⚙️",
    image: "/maintenanceril.png",
    color: "from-blue-900 to-blue-700"
  },
  {
    title: "Solar Power System (PLTS)",
    description: "Implementation of renewable solar energy systems for enhanced energy efficiency and sustainable operations.",
    icon: "☀️",
    image: "/solar panel.png",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "Industrial Piping System",
    description: "Design and installation of industrial piping systems for gas, water, and various liquid fuel transport.",
    icon: "🚿",
    image: "/piping.jpg",
    color: "from-blue-800 to-blue-600"
  },
  {
    title: "Spare Parts & Consumables",
    description: "Genuine overhaul parts for Mitsubishi, Caterpillar, Cummins, Komatsu, MTU engines, and consumable parts like air, oil, and fuel filters.",
    icon: "🔧",
    image: "/sperpart.jpeg",
    color: "from-gray-700 to-gray-900"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2rem shadow-sm overflow-hidden 
                         hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                {/* Menggunakan Image Placeholder jika gambar belum ada */}
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 relative flex-1">
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-8 h-1 w-12 transition-all duration-500 group-hover:w-24 bg-linear-to-r ${service.color}`} />

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area */}
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
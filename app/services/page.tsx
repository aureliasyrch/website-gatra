'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Genset Installation & Maintenance",
    description: "Comprehensive installation services and periodic maintenance for generator systems to ensure uninterrupted power supply.",
    icon: "⚡",
    image: "/genset.png",
    color: "from-blue-600 to-blue-800",
    features: [
      { label: "Commissioning", detail: "Performance testing and safety system verification before operational handover." },
      { label: "Maintenance", detail: "Periodic routine checks (daily/monthly) to ensure power stability and prevent failure." },
      { label: "Top Overhaul", detail: "Intensive maintenance on the cylinder head and upper components for optimal combustion." },
      { label: "Semi Overhaul", detail: "Cleaning carbon residue and checking piston rings to prevent compression leaks." },
      { label: "Major Overhaul", detail: "Total engine restoration to factory standards, returning the unit to 'zero-hour' condition." }
    ]
  },
  {
    title: "Mechanical & Electrical Works",
    description: "Integrated engineering solutions for complex mechanical and electrical systems across various industrial facilities.",
    icon: "⚙️",
    image: "/maintenanceril.png",
    color: "from-blue-900 to-blue-700",
    features: [
      { label: "Engine Service", detail: "Routine maintenance and repair of mechanical primary mover components." },
      { label: "Synchronization", detail: "Automated load-sharing systems between multiple generators for seamless power." },
      { label: "Termination", detail: "High-precision cable connections in control panels to ensure electrical safety." }
    ]
  },
  {
    title: "Spare Parts & Consumables",
    description: "Genuine overhaul parts for world-class engines and high-quality consumable materials.",
    icon: "🔧",
    image: "/sperpart.jpeg",
    color: "from-gray-700 to-gray-900",
    features: [
      { label: "Overhaul Parts", detail: "Genuine parts for Caterpillar (CAT), Mitsubishi, Cummins, Komatsu, MTU, etc." },
      { label: "Consumables", detail: "High-grade air filters, oil filters, fuel filters, and housings to protect internal components." }
    ]
  },
  {
    title: "Industrial Piping System",
    description: "Design and installation of industrial piping systems for gas, water, and various liquid fuel transport.",
    icon: "🚿",
    image: "/pipinggatra.png",
    color: "from-blue-800 to-blue-600",
    features: [
      { label: "Compressed Air Piping", detail: "High-pressure air line installation for pneumatic production tools." },
      { label: "Fuel Piping System", detail: "Distribution networks from storage tanks to operational units with anti-corrosion protection." },
      { label: "Gas Piping", detail: "Certified gas line installation with strict safety standards and pressure testing." }
    ]
  },
  {
    title: "Industrial Tank Fabrication",
    description: "High-precision fabrication of industrial fuel storage tanks built with the highest safety standards.",
    icon: "🛢️",
    image: "/tanki.png",
    color: "from-orange-500 to-orange-700",
    features: [
      { label: "Capacity Range", detail: "Custom fabrication for tanks ranging from 1 kL to 8,000 kL according to API 650 standards." }
    ]
  },
  {
    title: "Fuel Pump System",
    description: "Installation and integration of automated fuel pump systems for efficient industrial fuel distribution.",
    icon: "⛽",
    image: "/pump.png",
    color: "from-blue-700 to-orange-600",
    features: [
      { label: "Unloading Pump", detail: "High-flow systems designed for fuel discharge from tankers to main storage." },
      { label: "Forwarding Pump", detail: "Distribution systems to push fuel to daily tanks or engine units with stable pressure." },
      { label: "Transfer Pump", detail: "Inter-tank fuel movement solutions for stock management and maintenance." }
    ]
  },
  {
    title: "Solar Power System (PLTS)",
    description: "Implementation of renewable solar energy systems for enhanced energy efficiency and sustainable operations.",
    icon: "☀️",
    image: "/solar panel.png",
    color: "from-orange-400 to-orange-600",
    features: [
      { label: "Hybrid System (PLTD)", detail: "Smart integration between solar power and diesel generators to slash fuel costs." },
      { label: "Rooftop Solar", detail: "Utilization of building rooftops for clean energy and reduced monthly electricity bills." },
      { label: "On-Grid & Off-Grid", detail: "Grid-connected systems for efficiency or battery-backed independent power for remote areas." }
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              onClick={() => setSelectedService(service)}
              className="group relative bg-white border border-gray-100 rounded-2rem shadow-sm overflow-hidden 
                         hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 relative flex-1">
                <div className={`absolute top-0 left-8 h-1 w-12 transition-all duration-500 group-hover:w-24 bg-linear-to-r ${service.color}`} />
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

        {/* Technical Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
              >
                <div className="p-8 md:p-12 overflow-y-auto max-h-[85vh]">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{selectedService.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-blue-950">{selectedService.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {selectedService.features.map((item, i) => (
                      <div key={i} className="flex gap-4 border-l-2 border-orange-500 pl-4 py-1">
                        <div>
                          <h4 className="font-bold text-blue-900 flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-orange-500" />
                            {item.label}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Link 
                      href="/contact"
                      className="inline-flex w-full items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/30"
                    >
                      Inquire About This Service
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Area */}
        <div className="mt-20 bg-blue-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl mx-4 sm:mx-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
              Need a Specialized Project Consultation?
            </h3>
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
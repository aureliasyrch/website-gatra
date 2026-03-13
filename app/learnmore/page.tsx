'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Genset Installation & Maintenance",
    icon: "⚡",
    image: "/genset.png",
    color: "from-blue-600 to-blue-800",
    description: "Full lifecycle services for power generation, from initial placement to large-scale engine restoration, ensuring industrial energy stability.",
    longContent: [
      { label: "Commissioning", text: "A crucial stage after physical installation. We perform load tests, protection system synchronization, and technical parameter verification to ensure the unit is 100% operational according to manufacturer specifications." },
      { label: "Genset Maintenance", text: "Preventive maintenance programs designed to prevent sudden breakdowns. Includes oil level checks, cooling system cleaning, battery voltage testing, and periodic filter replacements based on running hours." },
      { label: "Top Overhaul", text: "Maintenance focused on the upper part of the engine, specifically the cylinder head. This involves valve adjustment, carbon deposit cleaning, and injector testing to re-optimize efficient combustion." },
      { label: "Semi Overhaul", text: "Medium-level repairs involving the disassembly of the upper and side engine blocks. We check piston rings and con-rod bearings, and replace gaskets to prevent compression leaks." },
      { label: "Major Overhaul", text: "Total engine restoration. The entire engine is disassembled down to the crankshaft. We replace worn internal components, recalibrate fuel pumps, and check for engine block cracks to return performance to zero-hour condition." }
    ]
  },
  {
    title: "Mechanical & Electrical Works",
    icon: "⚙️",
    image: "/maintenanceril.png",
    color: "from-blue-900 to-blue-700",
    description: "Synergy of mechanical strength and automated electrical control for safe and precise industrial systems.",
    longContent: [
      { label: "Engine Service", text: "Specific handling of industrial primary movers, including mechanical fault diagnosis, governor system calibration, and fuel efficiency optimization for various diesel and gas engine types." },
      { label: "Synchronization", text: "Control panel setup services to allow two or more generators to operate in parallel. This system enables automatic load sharing and ensures an uninterrupted power supply if one unit fails." },
      { label: "Termination", text: "High-level technical work in connecting large cables to panel terminals, transformers, or busbars. We ensure every connection has low resistance and strong insulation to prevent sparks or short circuits." }
    ]
  },
  {
    title: "Spare Parts & Consumables",
    icon: "🔧",
    image: "/sperpart.jpeg",
    color: "from-gray-700 to-gray-900",
    description: "Original component logistical support to minimize operational downtime for your company.",
    longContent: [
      { label: "Overhaul Spare Parts", text: "Direct access to original and high-quality OEM spare parts for leading brands like Caterpillar (CAT), Mitsubishi, Cummins, Komatsu, Perkins, and MTU. Includes vital components like pistons, liners, main bearings, and turbochargers." },
      { label: "Consumables", text: "Provision of daily operational consumables, such as oil, air, and fuel filters along with their housings. We guarantee high filtration standards to protect internal engine components." }
    ]
  },
  {
    title: "Industrial Piping System",
    icon: "🚿",
    image: "/pipinggatra.png",
    color: "from-blue-800 to-blue-600",
    description: "Liquid and gas distribution systems designed with head loss calculations and high-pressure safety standards.",
    longContent: [
      { label: "Compressed Air Piping", text: "Installation of pressurized air lines to power factory pneumatic tools. We ensure the piping design is free of water traps and has minimal leakage to save compressor energy." },
      { label: "Fuel Piping System", text: "Construction of fuel distribution networks from main storage tanks to engine units. Features include safety valves, line filtration systems, and corrosion protection." },
      { label: "Gas Piping", text: "Installation of gas lines under strict oil and gas safety standards. The process involves certified welding and pressure testing to guarantee zero gas leaks." }
    ]
  },
  {
    title: "Industrial Tank Fabrication",
    icon: "🛢️",
    image: "/tanki.png",
    color: "from-orange-500 to-orange-700",
    description: "Manufacturing solutions for medium to large-scale liquid storage with mature industrial construction standards.",
    longContent: [
      { label: "Capacity 1 kL to 8,000 kL", text: "Gatra has the manufacturing capability to produce tanks ranging from 1,000-liter daily units to massive 8-million-liter strategic storage tanks. Each unit is designed with corrosion-resistant material structure calculations following oil and gas industry standards." }
    ]
  },
  {
    title: "Fuel Pump System",
    icon: "⛽",
    image: "/pump.png",
    color: "from-blue-700 to-orange-600",
    description: "Integration of automated fuel pump systems to ensure smooth and measurable distribution flow.",
    longContent: [
      { label: "Unloading Pump", text: "Pump systems specifically designed to transfer fuel from tank trucks or tankers to the main storage tank with high flow rates while prioritizing safety." },
      { label: "Forwarding Pump", text: "Pumps that function to forward fuel from the main storage tank to daily tanks or directly to engine units with stable pressure." },
      { label: "Transfer Pump", text: "Solutions for transferring fuel between storage tanks within a facility for stock management, maintenance, or tank cleaning purposes." }
    ]
  },
  {
    title: "Solar Power System (PLTS)",
    icon: "☀️",
    image: "/solar panel.png",
    color: "from-orange-400 to-orange-600",
    description: "Renewable energy implementation through solar systems for a more efficient and environmentally friendly industrial future.",
    longContent: [
      { label: "Hybrid System with PLTD", text: "A smart solution combining solar panels with diesel generators. The system automatically prioritizes solar energy during the day to significantly reduce diesel consumption and cut operational costs." },
      { label: "Residential Rooftop PLTS", text: "Optimizing building roof areas to capture solar energy. Highly effective for residential or office needs to drastically reduce monthly electricity bills." },
      { label: "On-Grid & Off-Grid PLTS", text: "On-Grid systems allow integration with the national grid for cost efficiency, while Off-Grid systems use batteries as independent power storage for remote, isolated areas." }
    ]
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-6 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-500px bg-linear-to-b from-blue-50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-3">
            Industrial Expertise
          </motion.h2>
          <h1 className="text-3xl md:text-5xl font-black text-blue-950 mb-6">
            Our Professional <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Gatra provides integrated engineering solutions with high-quality standards to support your industrial operational sustainability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-fit transition-all duration-300 ${
                expandedIndex === index ? "ring-2 ring-orange-500 shadow-xl" : ""
              }`}
            >
              {/* Image Header */}
              <div className="relative h-56 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl bg-white/20 backdrop-blur-md p-2 rounded-xl">{service.icon}</span>
                    <h3 className="text-white font-bold text-xl leading-tight">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className={`h-1.5 w-12 mb-6 bg-linear-to-r ${service.color} rounded-full`} />
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Animated Detailed Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-6 border-t border-gray-100">
                        {service.longContent.map((item, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="mt-1.5 shrink-0">
                              <CheckCircle2 size={16} className="text-orange-500" />
                            </div>
                            <div>
                              <h4 className="font-bold text-blue-950 text-sm mb-1">{item.label}</h4>
                              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Learn More Toggle Button */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="mt-8 flex items-center gap-2 text-orange-600 font-bold text-sm group"
                >
                  {expandedIndex === index ? (
                    <>Show Less <ChevronUp size={18} /></>
                  ) : (
                    <>Learn More <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /></>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-blue-950 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full -mr-40 -mt-40 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-white text-2xl md:text-4xl font-black mb-6">Need a Specialized Project Consultation?</h2>
            <p className="text-blue-100/70 mb-10 max-w-2xl mx-auto">
              Contact our technical team to get efficient energy system specifications and tank fabrication quotes tailored for your industry.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
            >
              CONTACT US NOW <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
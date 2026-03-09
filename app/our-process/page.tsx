'use client';

import { useEffect, useState } from "react";
import { Search, Lightbulb, Truck, Wrench, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    title: "Discovery & Consultation",
    description: "Initial technical discussion and site surveys to understand your specific energy requirements.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Strategy & Engineering Design",
    description: "Our experts create precise blueprints and energy strategies tailored for maximum efficiency.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Procurement & Sourcing",
    description: "Selecting high-grade materials from trusted global manufacturers for long-term reliability.",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: "Execution & Installation",
    description: "Professional implementation by certified technicians following strict engineering protocols.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: "Testing & Commissioning",
    description: "Rigorous stress-testing and validation to ensure everything operates at peak performance.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Maintenance & Reporting",
    description: "Ongoing support and performance analytics to keep your infrastructure running smoothly 24/7.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".process-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Workflow Methodology
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Our Technical <span className="text-blue-700">Process</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A structured, engineering-driven approach to deliver reliable energy solutions 
            from initial concept to final operation.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              data-index={index}
              className={`process-card bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-white 
                         hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-700 group
                         ${visibleSteps.includes(index) 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index % 3) * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-slate-50 text-blue-700 rounded-2xl flex items-center justify-center 
                                group-hover:bg-blue-700 group-hover:text-white transition-all duration-500 shadow-inner">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-slate-400 group-hover:text-orange-100 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
              
              <div className="mt-8 h-1 w-12 bg-orange-500 rounded-full group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
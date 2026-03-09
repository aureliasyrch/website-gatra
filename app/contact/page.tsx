'use client';

import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-slate-50 overflow-hidden">
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/5 blur-3xl rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-blue-950 mb-6">
            Contact <span className="text-blue-700">Our Experts</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to discuss your next energy project? We are here to provide 
            technical support and professional engineering consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Sisi Kiri: Contact Information Card */}
          <div className="lg:col-span-2 bg-blue-950 text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <Phone size={22} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg font-medium">021-29062111</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <Mail size={22} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg font-medium">gatraenergiteknik@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <MapPin size={22} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Office Location</p>
                    <p className="text-sm leading-relaxed text-blue-100">
                      Ruko CBD Cibubur Cluster Fraser Park <br />
                      Blok FR01 No. 9, Jatirangga, Bekasi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <Clock size={22} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-sm text-blue-100 italic">Mon - Fri: 08:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-950 transition-all cursor-pointer">
                <Globe size={18} />
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-950 mb-8">Send us a Message</h3>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-blue-950 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-blue-950 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-blue-950 ml-1">Subject</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none cursor-pointer">
                  <option>Genset Systems & Maintenance</option>
                  <option>Industrial Tank Fabrication</option>
                  <option>Solar Power Solutions</option>
                  <option>General Engineering Inquiry</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-blue-950 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Describe your project needs..." 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button className="group w-full md:w-auto px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-blue-700/30 active:scale-95">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
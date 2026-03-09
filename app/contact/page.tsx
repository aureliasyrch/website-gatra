'use client';

import { Mail, Phone, MapPin, Clock, Globe, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  // URL untuk membuka aplikasi Google Maps secara langsung
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Ruko+CBD+Cibubur+Cluster+Fraser+Park+Blok+FR01+No.+9+Jatirangga+Bekasi";

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
          <h1 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Contact <span className="text-blue-700">Our Experts</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed px-4">
            Ready to discuss your next energy project? We are here to provide 
            technical support and professional engineering consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Sisi Kiri: Contact Information Card */}
          <div className="bg-blue-950 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-between transition-transform hover:scale-[1.01] duration-500">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
                Corporate Office
                <span className="h-px w-12 bg-orange-500 hidden sm:block"></span>
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 shadow-lg">
                    <Phone size={24} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-bold tracking-tight">021-29062111</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 shadow-lg">
                    <Mail size={24} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg md:text-xl font-bold break-all text-blue-50">gatraenergiteknik@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 shadow-lg">
                    <MapPin size={24} className="text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-1">Location</p>
                    <p className="text-base md:text-lg leading-relaxed text-blue-50 font-medium">
                      Ruko CBD Cibubur Cluster Fraser Park <br className="hidden md:block" />
                      Blok FR01 No. 9, Jatirangga, Bekasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-blue-950 transition-all cursor-pointer border border-white/10">
                    <Globe size={20} />
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <Clock size={18} className="text-orange-500" />
                  <span className="text-sm font-medium text-blue-200 italic">Office Hours: Mon - Fri (08:00 - 17:00)</span>
               </div>
            </div>
          </div>

          {/* Sisi Kanan: WhatsApp & Live Google Maps */}
          <div className="flex flex-col gap-8">
            {/* Kartu WhatsApp */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-center items-center text-center group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Fast Response Support</h3>
              <p className="text-gray-600 mb-6 text-sm max-w-sm">
                Need immediate assistance? Chat with our representative directly via WhatsApp.
              </p>
              <Link 
                href="https://wa.me/6281213789549" 
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-600/20 active:scale-95 w-full sm:w-auto"
              >
                Chat via WhatsApp
              </Link>
            </div>

            {/* Google Maps Live */}
            <div className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-gray-100 h-full min-h-400px overflow-hidden flex flex-col">
              <div className="relative flex-1 rounded-2rem overflow-hidden border border-gray-100 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2152664955365!2d106.92484767475184!3d-6.366184893623946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992a7e727503f%3A0x88496924d6736ca!2sCluster%20Fraser%20Park!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Floating Button untuk navigasi langsung */}
                <Link 
                  href={googleMapsUrl}
                  target="_blank"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-blue-950 px-6 py-3 rounded-xl font-bold text-xs shadow-2xl flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all border border-gray-100 uppercase tracking-tighter"
                >
                  <ExternalLink size={14} />
                  Open in Google Maps
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black tracking-tight">
            PT GATRA <span className="text-orange-500">ENERGI</span> TEKNIK
          </h2>
          <p className="text-blue-100/70 text-sm leading-relaxed">
            Leading engineering company specializing in high-reliability power solutions, 
            genset systems, and sustainable solar energy technology for industrial excellence.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Facebook size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            Quick Links <span className="h-px w-8 bg-orange-500"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            {['Home', 'Services', 'Our Process', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-100/70 hover:text-orange-400 flex items-center group transition-all"
                >
                  <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            Contact Us <span className="h-px w-8 bg-orange-500"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-blue-100/70">
              <MapPin size={20} className="text-orange-500 shrink-0" />
              <span>
                Ruko CBD Cibubur Cluster Fraser Park <br />
                Blok FR01 No. 9, Jatirangga, Bekasi
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm text-blue-100/70">
              <Phone size={18} className="text-orange-500 shrink-0" />
              <span>021-29062111</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-blue-100/70">
              <Mail size={18} className="text-orange-500 shrink-0" />
              <span>gatraenergiteknik@gmail.com</span>
            </li>
          </ul>
        </div>



      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200/50 uppercase tracking-widest font-medium">
        <p>© {currentYear} PT Gatra Energi Teknik. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
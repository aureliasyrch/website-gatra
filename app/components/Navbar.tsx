'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Our Process", href: "/our-process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup menu saat navigasi (mobile)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 
      ${isScrolled 
        ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" 
        : "bg-white/60 backdrop-blur-md py-5"}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-12">
          
          {/* LOGO SECTION - Diperbaiki agar tidak overlap di HP */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-md transition-transform group-hover:scale-110">
                <Image 
                  src="/Logo_gatra.png" 
                  alt="Logo Gatra" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm md:text-lg leading-tight tracking-tight bg-linear-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
                  PT GATRA ENERGI TEKNIK
                </span>
                <span className="text-[8px] md:text-[10px] font-bold tracking-0.1em md:tracking-[0.2em] text-blue-900/70 uppercase">
                  RISE BEYOND ENERGY
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300
                  ${isActive(link.href) 
                    ? "text-orange-600" 
                    : "text-blue-950 hover:text-blue-600"
                  }`}
              >
                {link.name}
                {/* Underline animatif */}
                <span className={`absolute -bottom-1 left-0 h-2px bg-orange-500 transition-all duration-300
                  ${isActive(link.href) ? "w-full" : "w-0 hover:w-full"}`} 
                />
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE - Dibuat lebih modern */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 text-blue-950 bg-white/50 hover:bg-white rounded-xl transition-all shadow-sm border border-blue-900/10 focus:ring-2 focus:ring-orange-500/20"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL - Animasi Sliding yang lebih rapi */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl border-t border-gray-100 transition-all duration-500 ease-in-out shadow-2xl overflow-hidden
          ${isMenuOpen ? 'max-h-400px opacity-100 border-b' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-8 space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-base font-black p-4 rounded-2xl transition-all duration-300 transform
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-10'}
                ${isActive(link.href)
                  ? "bg-blue-900 text-white shadow-lg shadow-blue-200"
                  : "text-blue-950 hover:bg-blue-50 border border-transparent hover:border-blue-100"
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center">
                {link.name}
                {isActive(link.href) && <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
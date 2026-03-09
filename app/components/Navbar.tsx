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

  // Efek deteksi scroll untuk mengubah shadow/opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 
      ${isScrolled 
        ? "bg-white/40 backdrop-blur-xl shadow-xl border-b border-white/20 py-2" 
        : "bg-white/60 backdrop-blur-md shadow-md py-4"}`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-10">
          
          {/* LOGO SECTION */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-15 h-15 drop-shadow-md transition-transform group-hover:scale-110">
                {/* Pastikan file logo ada di /public/logo.png */}
                <Image 
                  src="/Logo_gatra.png" 
                  alt="Logo Gatra" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tight bg-linear-to-r from-blue-800 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                  PT GATRA ENERGI TEKNIK
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-900/70 uppercase">
                  RISE BEYOND ENERGY
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU (Hanya 4 Fitur) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative text-sm font-bold uppercase tracking-wider transition-colors duration-300
                  ${isActive(link.href) 
                    ? "text-orange-600" 
                    : "text-blue-950 hover:text-blue-600"
                  }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span className={`absolute -bottom-1 left-0 h-2px bg-orange-500 transition-all duration-300
                  ${isActive(link.href) ? "w-full" : "w-0 hover:w-full"}`} 
                />
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-blue-950 hover:bg-white/50 rounded-lg transition-all shadow-sm border border-white/50"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-gray-100 transition-all duration-300 ease-in-out shadow-2xl
                    ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-bold p-3 rounded-xl transition-all
                ${isActive(link.href)
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-blue-950 hover:bg-blue-50"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
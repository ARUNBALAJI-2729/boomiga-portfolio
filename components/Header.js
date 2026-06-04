"use client";

import { useState, useEffect } from "react";
import Icon from "./Icon";

const navItems = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Skills", href: "#skill", icon: "palette" },
  { label: "Designs", href: "#design-gallery", icon: "layers" },
  { label: "Contact", href: "#contact", icon: "mail" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP RIGHT-SIDE NAVIGATION DOCK */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-8 rounded-3xl border border-white/5 bg-[#0b0f19]/80 px-4 py-8 backdrop-blur-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-cyan-500/20 transition-all duration-300">
        {/* Brand Logo */}
        <a href="#home" className="group flex flex-col items-center gap-1.5" aria-label="Go to top">
          <div className="relative h-6 w-6 rounded-full border-2 border-cyan-500 transition-transform group-hover:rotate-185 duration-500">
            <div className="absolute top-[2px] bottom-[2px] left-1/2 w-[2px] -translate-x-1/2 bg-cyan-500" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-cyan-500 uppercase mt-1">B</span>
        </a>

        <div className="h-[1px] w-8 bg-white/5" />

        {/* Navigation Items (Vertical List) */}
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href} className="group relative">
                <a
                  href={item.href}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 scale-105"
                      : "text-zinc-500 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {/* Clean standard icon names */}
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {item.label.substring(0, 2)}
                  </span>
                </a>
                
                {/* Desktop Hover Tooltip (Positioned to the left of the right dock) */}
                <div className="absolute right-14 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 bg-zinc-950 border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap z-50">
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="h-[1px] w-8 bg-white/5" />

        {/* Resume Icon Button */}
        <a
          href="/assets/home/Boomiga_Resume.pdf"
          download="Boomiga_Resume.pdf"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/20 hover:scale-105 transition-all duration-300 group"
          title="Download Resume"
        >
          <Icon name="download" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </nav>

      {/* MOBILE HEADER & DRAWER */}
      <header className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-2xl border border-white/5 bg-[#0b0f19]/90 px-5 py-3.5 backdrop-blur-md shadow-lg">
        <a href="#home" className="flex items-center gap-2 font-medium text-white">
          <div className="relative h-5 w-5 rounded-full border-2 border-cyan-500">
            <div className="absolute top-[2px] bottom-[2px] left-1/2 w-[2px] -translate-x-1/2 bg-cyan-500" />
          </div>
          <span className="font-bold tracking-wide text-sm">Boomiga</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-8 items-center justify-center text-white"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 rounded-2xl border border-white/5 bg-zinc-950/95 p-6 shadow-2xl backdrop-blur-lg animate-fade-in">
            <ul className="flex flex-col gap-4 text-center">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-sm font-semibold tracking-wide transition-colors ${
                        isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-white/5">
                <a
                  href="/assets/home/Boomiga_Resume.pdf"
                  download="Boomiga_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/10"
                >
                  <Icon name="download" className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

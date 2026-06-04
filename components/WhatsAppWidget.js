"use client";

import { useState, useEffect } from "react";
import Icon from "./Icon";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the tooltip after 3 seconds for a premium interactive feel
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
  };

  const whatsappUrl = `https://wa.me/916369697901?text=${encodeURIComponent("Hii would like to connect")}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2 font-sans select-none">
      {/* Tooltip Chat Bubble */}
      {showTooltip && (
        <div className="relative animate-fade-in flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-[#0b0f19]/90 px-4 py-3 text-xs text-white backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] border-l-4 border-l-emerald-500 max-w-[240px] select-none">
          <div className="flex-1">
            <p className="font-bold text-emerald-400 mb-0.5">Boomiga's AI Bot</p>
            <p className="text-zinc-300 leading-relaxed">Hi! Let's connect on WhatsApp to discuss your project!</p>
          </div>
          <button
            onClick={handleCloseTooltip}
            className="text-zinc-500 hover:text-white transition-colors p-0.5 text-lg font-bold leading-none cursor-pointer"
            aria-label="Close message"
          >
            &times;
          </button>
          {/* Bubble Pointer Arrow */}
          <div className="absolute left-6 bottom-[-6px] h-3 w-3 rotate-45 border-r border-b border-emerald-500/20 bg-[#0b0f19]/95" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)]"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulsing Back Glow */}
        <div className="absolute -inset-1 rounded-full bg-emerald-500/30 opacity-75 blur-md animate-ping group-hover:animate-none pointer-events-none" />

        {/* AI Robot face SVG */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 text-white transition-transform group-hover:rotate-6 duration-300"
        >
          {/* Antennas */}
          <path d="M12 6V3" />
          <circle cx="12" cy="2" r="0.5" fill="currentColor" />
          {/* Head */}
          <rect x="4" y="6" width="16" height="12" rx="3" />
          {/* Eyes */}
          <circle cx="9" cy="11" r="1.2" fill="currentColor" />
          <circle cx="15" cy="11" r="1.2" fill="currentColor" />
          {/* Mouth */}
          <path d="M9 15h6" />
          {/* Ears */}
          <path d="M4 11H2" />
          <path d="M22 11H20" />
        </svg>

        {/* Tiny Floating WhatsApp badge overlay in bottom right */}
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0b0f19] border border-emerald-500/30 p-1 shadow-md">
          <Icon name="whatsapp" className="h-full w-full text-emerald-400" />
        </div>
      </a>
    </div>
  );
}

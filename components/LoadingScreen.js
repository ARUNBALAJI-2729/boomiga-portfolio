"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Lock body scroll during preloader display
    document.body.style.overflow = "hidden";

    // Wait 1.8 seconds before starting the fade-out exit animation
    const fadeTimer = setTimeout(() => {
      setFade(true);
      // Restore normal page scroll
      document.body.style.overflow = "unset";
    }, 1800);

    // Completely unmount/remove from DOM after the fade transition completes (700ms)
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted) return null;

  const letters = ["B", "O", "O", "M", "I", "G", "A"];

  return (
    <div
      className={`fixed inset-0 bg-[#030712] z-[9999] flex flex-col items-center justify-center select-none transition-[opacity,transform] duration-700 ease-in-out ${
        fade ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Decorative ambient glowing orbs - GPU accelerated */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none animate-preloader-orb-1" />
      <div className="absolute top-1/2 left-1/2 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none animate-preloader-orb-2" />

      <div className="relative flex flex-col items-center gap-8 z-10 text-center">
        {/* Animated Name */}
        <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-[0.25em] flex items-center justify-center pl-[0.25em]">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-preloader-reveal"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Sleek loading bar */}
        <div className="relative w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 rounded-full animate-preloader-progress" />
        </div>
      </div>
    </div>
  );
}

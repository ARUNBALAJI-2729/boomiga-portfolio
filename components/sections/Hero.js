"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-transparent py-28 px-6 md:px-12 lg:px-24"
    >
      {/* Dynamic Rotating Ambient Background Orbs */}
      <div className="absolute top-[10%] left-[5%] h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[140px] animate-orbit-slow-1 pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] h-[400px] w-[400px] rounded-full bg-cyan-600/5 blur-[150px] animate-orbit-slow-2 pointer-events-none" />

      {/* Hero Grid Container */}
      <div className="mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 z-10">
        
        {/* Left Column: Heading Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Work
          </div>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Brand & UI/UX
            <br />
            <span className="animate-text-gradient bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              Designer
            </span>{" "}
            based
            <br />
            in Madurai
          </h1>
        </div>

        {/* Center Column: Portrait Photo with Glowing Rings */}
        <div className="relative flex justify-center">
          {/* Neon trailing back-glow ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-500 opacity-35 blur-md animate-pulse pointer-events-none" />
          
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_70px_rgba(6,182,212,0.35)] sm:h-[300px] sm:w-[300px]">
            <Image
              src="/assets/home/img1.png"
              alt="Boomiga Portrait"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 250px, 300px"
            />
          </div>
        </div>

        {/* Right Column: Bio Copy & CTA */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-sm mx-auto lg:mx-0">
          <p className="mb-8 text-base leading-relaxed text-zinc-300">
            Hi, I'm <span className="font-semibold text-white hover:text-cyan-400 transition-colors">Boomiga S</span> — a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
          </p>
          <a
            href="#design-gallery"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-1.5 pr-6 font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-cyan-600 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
            See my designs
          </a>
        </div>
      </div>

      {/* Large Bottom Watermark Text - HIGH VISIBILITY SOLID STROKE */}
      <div className="pointer-events-none select-none z-0 w-full flex justify-center text-center animate-float">
        <h2 
          className="text-[13vw] font-black uppercase tracking-tighter select-none leading-none text-white/30"
          style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)" }}
        >
          Boomiga
        </h2>
      </div>
    </section>
  );
}

"use client";

import Icon from "../Icon";

export default function Experience() {
  const maghilHubLogo = (
    <svg viewBox="0 0 100 100" className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left Red segment of 'M' */}
      <path d="M25 80V25L50 50" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right Blue segment of 'M' */}
      <path d="M75 80V25L50 50" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Horizontal connector */}
      <path d="M40 60H60" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
    </svg>
  );

  return (
    <section id="experience" className="relative bg-transparent py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Professional <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 text-sm md:text-base">
            My career journey in designing digital interfaces and crafting user experiences.
          </p>
        </div>

        {/* Experience Bento Card Container */}
        <div className="group bento-card p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            
            {/* Left: Company Logo Block */}
            <div className="flex flex-col items-center text-center shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/5 bg-[#0b0f19]/80 shadow-md group-hover:border-rose-500/20 group-hover:bg-[#0f1424] transition-all duration-500">
                {maghilHubLogo}
              </div>
              <span className="mt-3 text-[10px] font-black tracking-widest text-[#f43f5e] uppercase">
                MAGHIL <span className="text-[#3b82f6]">HUB</span>
              </span>
            </div>

            {/* Right: Job Details */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide transition-colors group-hover:text-cyan-400 duration-300">
                    UI/UX Designer
                  </h3>
                  <p className="text-sm font-semibold text-zinc-300 mt-1 flex items-center gap-2">
                    MAGHIL HUB <span className="text-zinc-500">&middot;</span> Full-time
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="inline-block rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400 border border-cyan-500/20">
                    Oct 2025 - Present
                  </span>
                  <p className="text-xs text-zinc-400 mt-1 font-semibold">9 mos</p>
                </div>
              </div>

              {/* Location metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
                <Icon name="mapPin" className="h-4 w-4 text-zinc-500" />
                <span>Madurai, Tamil Nadu, India &middot; On-site</span>
              </div>

              <div className="h-[1px] w-full bg-white/5 my-4" />

              {/* Skills and core responsibility badge */}
              <div className="inline-flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-950/40 p-4 transition-all duration-300 group-hover:border-violet-500/30 group-hover:bg-zinc-950/80">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/10">
                  {/* Diamond Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M2.7 10.3a2.4 2.4 0 0 0 0 3.4l7.6 7.6a2.4 2.4 0 0 0 3.4 0l7.6-7.6a2.4 2.4 0 0 0 0-3.4L13.7 2.7a2.4 2.4 0 0 0-3.4 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Core Domain</h4>
                  <p className="text-xs md:text-sm font-semibold text-white mt-0.5">
                    User Interface Design and User Experience Design (UED)
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

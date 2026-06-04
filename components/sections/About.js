"use client";

import Icon from "../Icon";

export default function About() {
  return (
    <section id="about" className="relative bg-transparent py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left Side: Bio Text */}
          <div className="space-y-6 text-zinc-300">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-white hover:text-cyan-400 transition-colors">Boomiga</span>, a UI/UX Designer and recent Computer Science Engineering graduate.
            </p>
            <p className="leading-relaxed">
              I'm passionate about creating intuitive and user-friendly designs that enhance the
              overall user experience. As a fresher, I'm eager to learn, explore new design trends,
              and combine my technical CSE foundation with pure creative layout design to deliver impactful solutions.
            </p>
            <p className="leading-relaxed">
              My approach combines analytical structure with artistic vision, ensuring every project
              not only looks stunning but also functions flawlessly and meets clear user needs. Let's connect and build something awesome!
            </p>

            {/* Quick Stats Grid (Bento Boxes) */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bento-card p-6 text-center">
                <span className="block text-2xl font-bold text-cyan-400">B.E.</span>
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Computer Science</span>
              </div>
              <div className="bento-card p-6 text-center">
                <span className="block text-2xl font-bold text-violet-400">20+</span>
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Designs Crafted</span>
              </div>
            </div>
          </div>

          {/* Right Side: Glassmorphic Features (Bento Box) */}
          <div className="relative group">
            {/* Glow backing */}
            <div className="absolute -inset-1 rounded-[20px] bg-gradient-to-r from-violet-600 to-cyan-600 opacity-15 blur-xl transition duration-1000 group-hover:opacity-25" />
            
            <div className="bento-card p-8 md:p-12 space-y-8 relative">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Icon name="lightbulb" className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Innovation First</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Always pushing boundaries to create distinct, modern visuals and interfaces that stand out.
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/5" />

              <div className="text-zinc-400 text-sm italic font-light relative pl-4 border-l-2 border-cyan-500">
                "Design is not just what it looks like and feels like. Design is how it works."
                <span className="block mt-2 text-xs font-semibold text-white not-italic">— Steve Jobs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

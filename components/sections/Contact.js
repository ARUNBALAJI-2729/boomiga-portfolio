"use client";

import Icon from "../Icon";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for connecting.");
  };

  return (
    <section id="contact" className="relative bg-transparent py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Connect With <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">ME</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 text-sm md:text-base">
            Let's create something amazing together. Reach out and connect!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          
          {/* Info Details & Social Links */}
          <div className="space-y-6">
            
            {/* Email Card */}
            <div className="flex items-center gap-5 bento-card p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/10">
                <Icon name="mail" className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email</h4>
                <a href="mailto:sanaboomiga@gmail.com" className="mt-1 block text-base font-semibold text-white hover:text-cyan-400 transition-colors">
                  sanaboomiga@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="flex items-center gap-5 bento-card p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/10">
                <Icon name="whatsapp" className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">WhatsApp</h4>
                <a
                  href="https://wa.me/916369697901"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  +91 63696 97901
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-5 bento-card p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/10">
                <Icon name="mapPin" className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</h4>
                <p className="mt-1 text-base font-semibold text-white">
                  Madurai, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="pt-6">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-400">Find Me Online</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* WhatsApp Chat Button */}
                <a
                  href="https://wa.me/916369697901"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/20 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:-translate-y-0.5 hover:border-violet-500/40 hover:text-cyan-400 group"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Boomiga17"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/20 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:-translate-y-0.5 hover:border-violet-500/40"
                >
                  <img src="/assets/contact/github.png" alt="GitHub Logo" className="h-5 w-5 object-contain" />
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/boomiga-s/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/20 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:-translate-y-0.5 hover:border-violet-500/40"
                >
                  <img src="/assets/contact/linkedin.png" alt="LinkedIn Logo" className="h-5 w-5 object-contain" />
                  LinkedIn
                </a>

                {/* Behance */}
                <a
                  href="https://www.behance.net/boomigas"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/20 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:-translate-y-0.5 hover:border-violet-500/40"
                >
                  <img src="/assets/contact/behance.png" alt="Behance Logo" className="h-5 w-5 object-contain" />
                  Behance
                </a>

              </div>
            </div>

          </div>

          {/* Form Message Block (Bento Box) */}
          <div className="bento-card p-8 md:p-10 backdrop-blur-md hover:border-violet-500/40">
            <h3 className="mb-6 text-xl font-bold text-white">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="first-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/5 bg-zinc-900/40 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl border border-white/5 bg-zinc-900/40 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full rounded-xl border border-white/5 bg-zinc-900/40 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

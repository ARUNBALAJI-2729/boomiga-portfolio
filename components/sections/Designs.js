"use client";

import { useState } from "react";

const mainCategories = ["Graphic Design", "Frontend Development", "UI UX Design"];
const designCategories = ["All", "Posters", "Banners", "Identity", "Creative Art"];

const designsList = [
  { title: "Fanta Poster Design", file: "fanta poster.jpg", category: "Posters" },
  { title: "Kiwi Poster Illustration", file: "kiwi poster.jpg", category: "Posters" },
  { title: "Cookie Poster Design", file: "Cookie Poster.jpg", category: "Posters" },
  { title: "Blossom Cosmetics Mockup", file: "Blossom Mockup.jpg", category: "Posters" },
  { title: "Blossom Brand Identity", file: "Blossom.jpg", category: "Posters" },
  { title: "Big Hero 6 Fan Art", file: "Big Hero 6.jpg", category: "Creative Art" },
  { title: "3D Typography", file: "3D Typography.jpg", category: "Creative Art" },
  { title: "Word Typography", file: "Word Typography.jpg", category: "Creative Art" },
  { title: "Rabbit Word Art", file: "rabbit word art.jpg", category: "Creative Art" },
  { title: "Double Exposure Art", file: "double exposure.jpg", category: "Creative Art" },
  { title: "Digital Art Portrait", file: "Digital Art.jpg", category: "Creative Art" },
  { title: "Super Mario Icon Art", file: "Super Mario Icon.jpg", category: "Creative Art" },
  { title: "A2B Corporate Web Banner", file: "A2B Banner .jpg", category: "Banners" },
  { title: "A2B Banner (Mobile Format)", file: "A2B Web Banner Mobile .jpg", category: "Banners" },
  { title: "A2B Banner (Tablet Format)", file: "A2B Web Banner Tablet .jpg", category: "Banners" },
  { title: "Tak Tak Main Web Banner", file: "Tak Tak Web Banner.png", category: "Banners" },
  { title: "Hyderabad House Display Banner", file: "Hyderabad House Display Banner.jpg", category: "Banners" },
  { title: "Vallalar Banner Design", file: "Vallalar Banner 2.jpg", category: "Banners" },
  { title: "SRRB TV Display - Version 1", file: "SRRB TV Display - 1.png", category: "Banners" },
  { title: "SRRB TV Display - Version 2", file: "SRRB TV Display - 2.png", category: "Banners" },
  { title: "Dragon Esports Logo", file: "Dragon logo.jpg", category: "Identity" },
  { title: "Zynux Branding Logo", file: "Zynux Logo.jpg", category: "Identity" },
  { title: "Corporate Visiting Card Front", file: "Visiting Card-01.jpg", category: "Identity" },
  { title: "Corporate Visiting Card Back", file: "Visiting Card-02.jpg", category: "Identity" },
  { title: "Visiting Card Compilation", file: "Visiting Card.jpg", category: "Identity" },
  { title: "Eat Street Social Media Poster", file: "Eat Street Social Media Poster.jpg", category: "Posters" },
  { title: "Elysium Social Media Poster", file: "Elysium Social media poster.jpg", category: "Posters" },
  { title: "SRRB Social Media Campaign", file: "SRRB Social media poster.jpg", category: "Posters" },
  { title: "Utsav Grand Social Media Poster", file: "Utsav Grand social media poster.jpg", category: "Posters" },
  { title: "Thanjai Mess Web Poster", file: "Thanjai Mess Poster Web 2 .jpg", category: "Posters" },
  { title: "Thanjai Mess Print Poster", file: "Thanjai Mess Poster.jpg", category: "Posters" },
  { title: "Soy Milk Pack Mockup", file: "Soy Milk mockup.jpg", category: "Identity" },
  { title: "Soy Milk Brand Concept", file: "Soy milk.jpg", category: "Identity" },
  { title: "Potato Chips Pack Mockup", file: "chips mockup.jpg", category: "Identity" },
  { title: "Matcha Ice-Cream Magazine Ad", file: "Matcha ice-cream Magazine.jpg", category: "Creative Art" },
  { title: "Retro Street Art Layout", file: "Retro Street.jpg", category: "Creative Art" },
  { title: "Creative Story Board - Time Travel", file: "Time Travel Story Board.jpg", category: "Creative Art" },
  { title: "Sict Brochure Design Page 1", file: "Sict-01.jpg", category: "Identity" },
  { title: "Sict Brochure Design Page 2", file: "Sict-02.jpg", category: "Identity" },
  { title: "Sict Corporate Brochure 2", file: "sict brochure 2.jpg", category: "Identity" },
  { title: "Retro Poster Edition 2", file: "Retro poster 2.jpg", category: "Posters" },
  { title: "Retro Poster Edition 3", file: "Retro Poster 3.jpg", category: "Posters" },
  { title: "Pongal Festival Poster English", file: "Pongal Poster English-01.jpg", category: "Posters" },
  { title: "Creative Memes Compilation", file: "Memes.jpg", category: "Creative Art" },
  { title: "Fashion Branding Poster", file: "fashion poster.jpg", category: "Posters" },
  { title: "Brand Poster Edition 1", file: "Banner poster 1.jpg", category: "Posters" },
  { title: "Brand Poster Edition 2", file: "Banner poster.jpg", category: "Posters" },
  { title: "Brand Poster Edition 3", file: "banner poster 3.jpg", category: "Posters" },
];

const frontendProjects = [
  {
    title: "Photo Gallery Webpage",
    tool: "HTML / CSS",
    description: "A clean visual gallery for exploring wildlife and nature photography with full responsiveness.",
    image: "/assets/work/photo-gallery.png",
    link: "https://boomiga17.github.io/Photo-Gallery-Webpage/",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "E-commerce Website",
    tool: "HTML / CSS / Bootstrap",
    description: "A responsive e-commerce web platform featuring modern card listings and promotional banners.",
    image: "/assets/work/e-commerce.png",
    link: "https://boomiga17.github.io/E-Commerce-Webpage/",
    gradient: "from-violet-600 to-pink-500",
  },
  {
    title: "Sleek Calculator",
    tool: "HTML / CSS / JS",
    description: "A minimalist, responsive calculator app designed for quick, precise operations with clean styling.",
    image: "/assets/work/calculator.png",
    link: "https://boomiga17.github.io/Simple-Calculator/",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const uiuxProjects = [
  {
    title: "MilkyMist Chocolate Webpage",
    tool: "Figma Concept",
    description: "A visually rich chocolate brand interface mockup designed in Figma, focusing on luxury layouts.",
    image: "/assets/work/main-frame.jpg",
    gradient: "from-violet-600 to-indigo-600",
  },
];

export default function Designs() {
  const [activeCategory, setActiveCategory] = useState("Graphic Design");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredDesigns = activeTab === "All"
    ? designsList
    : designsList.filter((d) => d.category === activeTab);

  // Split filtered list into odd/even to populate two marquee rows
  const evenDesigns = filteredDesigns.filter((_, idx) => idx % 2 === 0);
  const oddDesigns = filteredDesigns.filter((_, idx) => idx % 2 !== 0);

  // Helper to repeat items to ensure the marquee container width is wider than screen for looping
  const getMarqueeItems = (list) => {
    if (list.length === 0) return [];
    let items = [...list];
    while (items.length < 10) {
      items = [...items, ...list];
    }
    return [...items, ...items];
  };

  const marqueeItems1 = getMarqueeItems(evenDesigns);
  const marqueeItems2 = getMarqueeItems(oddDesigns);

  // 3D Card Tilt Mouse Handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    const glow = card.querySelector(".card-glow");
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(168, 85, 247, 0.15) 0%, transparent 65%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    const glow = card.querySelector(".card-glow");
    if (glow) {
      glow.style.background = `transparent`;
    }
  };

  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      setSelectedDesign({
        title: project.title,
        category: project.tool,
        rawPath: project.image,
      });
    }
  };

  return (
    <section id="my-work" className="relative bg-transparent py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            My <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 text-sm md:text-base">
            Explore my professional portfolio projects spanning graphic design, frontend development, and interactive UI/UX designs.
          </p>
        </div>

        {/* Primary Category Filter tabs */}
        <div className="mb-8 flex justify-center">
          <div className="flex rounded-2xl border border-white/5 bg-[#0b0f19]/80 p-1.5 backdrop-blur-md shadow-lg">
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveTab("All"); // Reset sub-tab
                }}
                className={`rounded-xl px-6 py-2.5 text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/10"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-tabs for Graphic Design category */}
        {activeCategory === "Graphic Design" && (
          <div className="mb-10 flex flex-wrap justify-center gap-2 animate-fade-in">
            {designCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                    : "bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RENDER DYNAMIC PORTFOLIO CONTENT */}
      <div className="relative w-full overflow-hidden">
        
        {/* GRAPHIC DESIGN - Infinite Horizontal Marquee */}
        {activeCategory === "Graphic Design" && (
          <div className="relative w-full overflow-hidden py-4 flex flex-col gap-6 md:gap-10 animate-fade-in">
            {/* Visual Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#030712] via-[#030712]/60 to-transparent z-20 pointer-events-none" />

            {/* Row 1 */}
            {marqueeItems1.length > 0 && (
              <div className="relative overflow-hidden w-full flex">
                <div className="animate-marquee flex flex-row flex-nowrap gap-6 md:gap-8 py-4 [animation-duration:55s]">
                  {marqueeItems1.map((design, index) => (
                    <div
                      key={`${design.file}-row1-${index}`}
                      onClick={() => setSelectedDesign(design)}
                      className="poster-card"
                    >
                      <img
                        src={`/designs/${design.file}`}
                        alt={design.title}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
                        <span className="mb-2 self-start rounded-full bg-cyan-500/90 px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                          {design.category}
                        </span>
                        <h4 className="text-xs md:text-sm font-bold text-white leading-snug">{design.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Row 2 */}
            {marqueeItems2.length > 0 && (
              <div className="relative overflow-hidden w-full flex">
                <div className="animate-marquee flex flex-row flex-nowrap gap-6 md:gap-8 py-4 [animation-duration:70s]">
                  {marqueeItems2.map((design, index) => (
                    <div
                      key={`${design.file}-row2-${index}`}
                      onClick={() => setSelectedDesign(design)}
                      className="poster-card"
                    >
                      <img
                        src={`/designs/${design.file}`}
                        alt={design.title}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-left">
                        <span className="mb-2 self-start rounded-full bg-violet-500/90 px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                          {design.category}
                        </span>
                        <h4 className="text-xs md:text-sm font-bold text-white leading-snug">{design.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* FRONTEND DEVELOPMENT - 3D Perspective Layered Cards */}
        {activeCategory === "Frontend Development" && (
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in relative z-10">
            {frontendProjects.map((project) => (
              <div
                key={project.title}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(project)}
                className="group project-card-3d"
              >
                {/* 3D tracking spotlight glow overlay */}
                <div className="card-glow absolute inset-0 pointer-events-none transition-all duration-300 rounded-3xl z-0" />

                {/* 3D Depth Inner Layer */}
                <div className="project-card-3d-inner relative z-10">
                  
                  {/* Image wrapper */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/80 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Floating tool badge */}
                    <div className={`absolute top-3 right-3 rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-[9px] font-extrabold text-white uppercase tracking-widest shadow-md`}>
                      {project.tool}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold mb-6 min-h-[40px]">
                    {project.description}
                  </p>

                  {/* CTA link indicator */}
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-violet-400 transition-colors duration-300">
                    <span>Visit Live Website</span>
                    <span className="transition-transform group-hover:translate-x-1 duration-300">&rarr;</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* UI UX DESIGN - 3D Perspective Layered Mockup */}
        {activeCategory === "UI UX Design" && (
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-4 flex justify-center animate-fade-in relative z-10">
            {uiuxProjects.map((project) => (
              <div
                key={project.title}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(project)}
                className="group project-card-3d max-w-lg w-full"
              >
                {/* Spotlight glow overlay */}
                <div className="card-glow absolute inset-0 pointer-events-none transition-all duration-300 rounded-3xl z-0" />

                {/* 3D Depth Inner Layer */}
                <div className="project-card-3d-inner relative z-10">
                  
                  {/* Image wrapper */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/80 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Floating tool badge */}
                    <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-[9px] font-extrabold text-white uppercase tracking-widest shadow-md">
                      {project.tool}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold mb-6">
                    {project.description}
                  </p>

                  {/* CTA link indicator */}
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-violet-400 transition-colors duration-300">
                    <span>View Figma Mockup</span>
                    <span className="transition-transform group-hover:translate-x-1 duration-300">&rarr;</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      {selectedDesign && (
        <div
          onClick={() => setSelectedDesign(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl border border-white/10 bg-zinc-950 p-2 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setSelectedDesign(null)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white border border-white/10 hover:bg-white/15"
              aria-label="Close Preview"
            >
              &times;
            </button>
            <div className="overflow-auto flex-1 flex items-center justify-center">
              <img
                src={selectedDesign.rawPath || `/designs/${selectedDesign.file}`}
                alt={selectedDesign.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-4 bg-zinc-900/60 rounded-b-xl border-t border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedDesign.title}</h3>
                <p className="text-xs text-zinc-400">{selectedDesign.category || "Figma Design"} Showcase</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

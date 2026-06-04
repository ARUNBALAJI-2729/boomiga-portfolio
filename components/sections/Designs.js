"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function Designs() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredDesigns = activeTab === "All"
    ? designsList
    : designsList.filter((d) => d.category === activeTab);

  // Split filtered list into odd/even to populate two parallax rows
  const evenDesigns = filteredDesigns.filter((_, idx) => idx % 2 === 0);
  const oddDesigns = filteredDesigns.filter((_, idx) => idx % 2 !== 0);

  // Helper to repeat items to ensure the marquee container width is wider than screen for looping
  const getMarqueeItems = (list) => {
    if (list.length === 0) return [];
    let items = [...list];
    // We want at least 10 items in each list before duplicating for seamless looping
    while (items.length < 10) {
      items = [...items, ...list];
    }
    // Duplicate exactly once to create a seamless infinite loop
    return [...items, ...items];
  };

  const marqueeItems1 = getMarqueeItems(evenDesigns);
  const marqueeItems2 = getMarqueeItems(oddDesigns);

  return (
    <section id="design-gallery" className="relative bg-transparent py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Design <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 text-sm md:text-base">
            An interactive catalog of visual identity, social posters, digital art, layouts, and typography. Hover to pause, click to preview.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {designCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Full-width Marquee Section with Gradient Masking on screen edges */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-6 md:gap-10">
        {/* Visual Edge Fades - Matches the reference image fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#030712] via-[#030712]/60 to-transparent z-20 pointer-events-none" />

        {/* Row 1 (Right to Left - Speed 55s) */}
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

        {/* Row 2 (Right to Left - Speed 70s for parallax effect) */}
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
                src={`/designs/${selectedDesign.file}`}
                alt={selectedDesign.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-4 bg-zinc-900/60 rounded-b-xl border-t border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedDesign.title}</h3>
                <p className="text-xs text-zinc-400">{selectedDesign.category} Creation</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

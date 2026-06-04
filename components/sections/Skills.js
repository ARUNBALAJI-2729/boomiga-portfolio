"use client";

import Icon from "../Icon";

const skills = [
  {
    title: "Graphic Design",
    icon: "palette",
    glowColor: "group-hover:border-violet-500/40 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"],
  },
  {
    title: "Frontend Skills",
    icon: "code",
    glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    items: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "UI/UX Design",
    icon: "figma",
    glowColor: "group-hover:border-indigo-500/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    items: ["Figma", "User Research", "Wireframing", "Interactive Prototyping"],
  },
  {
    title: "Technical Skills",
    icon: "layers",
    glowColor: "group-hover:border-sky-500/40 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    items: ["Python Programming", "Problem Solving", "Git & GitHub Version Control"],
  },
];

export default function Skills() {
  return (
    <section id="skill" className="relative bg-transparent py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            My <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 text-sm md:text-base">
            Combining creative design and engineering development to build complete digital solutions.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className={`group flex flex-col items-center bento-card p-8 text-center backdrop-blur-md transition-all duration-300 ${skill.glowColor}`}
            >
              {/* Skill Icon */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${skill.iconBg}`}
              >
                <Icon name={skill.icon} className="h-6 w-6" />
              </div>

              {/* Skill Category Title */}
              <h3 className="mb-6 text-lg font-bold text-white tracking-wide">
                {skill.title}
              </h3>

              {/* Items List */}
              <ul className="w-full space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-white/5 py-2 px-3 text-xs font-medium text-zinc-300 transition-colors duration-200 group-hover:bg-white/10 group-hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

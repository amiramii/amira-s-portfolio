"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Category = "development" | "ai" | "creative" | "languages";

const categories = [
  {
    id: "development" as const,
    label: "Development",
  },
  {
    id: "ai" as const,
    label: "AI & Data",
  },
  {
    id: "creative" as const,
    label: "Creative",
  },
  {
    id: "languages" as const,
    label: "Languages",
  },
];

const developmentGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "REST APIs",
        icon: "/icons/restApi.png",
      },
      {
        name: "JWT",
        icon: "/icons/jwtLogo.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      },
    ],
  },
];

const aiSkills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    name: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  },
  {
    name: "Scikit-learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  },
];

const creativeSkills = [
  {
    name: "Figma",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    icon: "/icons/canva.png",
  },
  {
    name: "CapCut",
    icon: "/icons/capcut.png",
  },
  {
    name: "DaVinci Resolve",
    icon: "/icons/davinci.png",
  },
];

const toolbox = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
];

const languages = [
  {
    name: "Arabic",
    level: "C2",
    description: "Native",
  },
  {
    name: "English",
    level: "C1",
    description: "Advanced",
  },
  {
    name: "French",
    level: "C1",
    description: "Advanced",
  },
  {
    name: "Turkish",
    level: "B1",
    description: "Intermediate",
  },
  {
    name: "German",
    level: "A2",
    description: "Elementary",
  },
];

type Skill = {
  name: string;
  icon?: string;
  color?: string;
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className="
        skill-card group
        flex min-h-[76px] cursor-pointer
        flex-col items-center justify-center gap-2
        rounded-md border border-[#aaa]
        bg-gradient-to-b from-[#f3f3f3] to-[#dedede]
        px-2 py-2
        shadow-[inset_0_1px_0_white,0_1px_2px_rgba(0,0,0,0.18)]
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-[#4b8bea]
        hover:from-white
        hover:to-[#e9f1ff]
        hover:shadow-[0_3px_7px_rgba(0,70,180,0.2)]
      "
    >
      <div className="flex h-8 w-8 items-center justify-center">
        {skill.icon ? (
          <img
            src={skill.icon}
            alt=""
            className="
              h-8 w-8 object-contain
              transition-transform duration-200
              group-hover:scale-110
            "
          />
        ) : (
          <span
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              text-sm font-bold text-white
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]
            "
            style={{
              backgroundColor: skill.color ?? "#2869dc",
            }}
          >
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      <span className="max-w-full truncate text-center text-[9px] font-semibold text-[#30343b]">
        {skill.name}
      </span>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-3">
      <h3
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.13em]
          text-[#174f9e]
        "
      >
        {title}
      </h3>
    </div>
  );
}

function DevelopmentSection() {
  return (
    <section className="skills-section">
      <div className="mb-4">
        <SectionTitle title="Full-Stack Development" />

        <p className="max-w-[600px] text-[10px] leading-relaxed text-[#555e6b] sm:text-[11px]">
          I build complete web applications, working across the frontend,
          backend and database layers. I focus on creating responsive
          interfaces, connecting them to APIs and building the systems that
          support them.
        </p>
      </div>

      <div className="space-y-5">
        {developmentGroups.map((group) => (
          <div key={group.title}>
            <p
              className="
                mb-2
                text-[9px]
                font-bold
                uppercase
                tracking-wider
                text-[#626a76]
              "
            >
              {group.title}
            </p>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
              {group.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="skills-section">
      <div className="mb-4">
        <SectionTitle title="AI & Data" />

        <p className="max-w-[600px] text-[10px] leading-relaxed text-[#555e6b] sm:text-[11px]">
          I use Python and data science tools to explore datasets, analyze
          information, create visualizations and experiment with machine
          learning models.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {aiSkills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}

function CreativeSection() {
  return (
    <section className="skills-section">
      <div className="mb-4">
        <SectionTitle title="Creative" />

        <p className="max-w-[600px] text-[10px] leading-relaxed text-[#555e6b] sm:text-[11px]">
          I also enjoy the creative side of technology, using design and
          editing tools to create interfaces, visual assets and video content
          for digital projects.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {creativeSkills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}

function LanguagesSection() {
  return (
    <section className="skills-section">
      <div className="mb-4">
        <SectionTitle title="Languages" />

        <p className="max-w-[600px] text-[10px] leading-relaxed text-[#555e6b] sm:text-[11px]">
          I work comfortably in several languages, which helps me communicate,
          learn from international resources and collaborate in different
          environments.
        </p>
      </div>

      <div className="space-y-1.5">
        {languages.map((language) => (
          <div
            key={language.name}
            className="
              group flex items-center gap-3
              rounded-md border border-[#aaa]
              bg-gradient-to-b from-[#f0f0f0] to-[#dedede]
              px-3 py-2
              shadow-[inset_0_1px_0_white]
              transition-all duration-200
              hover:border-[#4b8bea]
              hover:bg-white
            "
          >
            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded
                border border-[#b5b5b5]
                bg-[#f7f7f7]
                text-[10px]
                font-bold
                text-[#4b5360]
                shadow-[inset_0_1px_0_white]
              "
            >
              {language.name.slice(0, 2).toUpperCase()}
            </span>

            <span className="w-[70px] text-[10px] font-bold text-[#30343b]">
              {language.name}
            </span>

            <span className="flex-1 text-[9px] text-[#777f8c]">
              {language.description}
            </span>

            <span
              className="
                rounded border border-[#9caed0]
                bg-[#dce8fa]
                px-2 py-0.5
                text-[9px]
                font-black
                text-[#1855b4]
              "
            >
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolboxSection() {
  return (
    <section className="skills-section">
      <SectionTitle title="Tools" />

      <div className="flex flex-wrap gap-2">
        {toolbox.map((skill) => (
          <div
            key={skill.name}
            className="
              flex cursor-pointer
              items-center gap-2
              rounded-md border border-[#aaa]
              bg-[#e5e5e5]
              px-2.5 py-1.5
              shadow-[inset_0_1px_0_white]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-[#4b8bea]
              hover:bg-white
            "
          >
            <img
              src={skill.icon}
              alt=""
              className="h-4 w-4 object-contain"
            />

            <span className="text-[9px] font-semibold text-[#424852]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

type SkillsDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function SkillsDialog({
  open,
  onClose,
}: SkillsDialogProps) {
  const windowRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] =
    useState<Category>("development");

  useEffect(() => {
    if (!open || !windowRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        windowRef.current,
        {
          opacity: 0,
          scale: 0.96,
          y: 14,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.32,
          ease: "back.out(1.35)",
        },
      );

      gsap.fromTo(
        ".skills-section",
        {
          opacity: 0,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.04,
          delay: 0.08,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          scale: 0.94,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          stagger: 0.02,
          delay: 0.12,
          ease: "back.out(1.4)",
        },
      );
    }, windowRef);

    return () => ctx.revert();
  }, [open, activeCategory]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/10
        p-3
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={windowRef}
        className="
          flex
          h-[calc(100dvh-24px)]
          max-h-[720px]
          w-full
          max-w-[670px]
          flex-col
          overflow-hidden
          border-2
          border-[#0068d7]
          bg-[#ece9d8]
          shadow-[4px_5px_12px_rgba(0,0,0,0.45)]
        "
      >
        {/* TITLE BAR */}

        <div
          className="
            flex h-[44px] shrink-0
            items-center justify-between
            bg-gradient-to-b
            from-[#4b8bea]
            via-[#2869dc]
            to-[#1760d8]
            px-2
          "
        >
          <div className="flex min-w-0 items-center gap-2 text-white">
            {/* Puzzle icon */}
            <span className="text-lg">🧩</span>

            <span className="truncate text-sm font-bold sm:text-base">
              My Skills
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="
                flex h-[20px] w-[20px]
                cursor-pointer
                items-center justify-center
                rounded-[3px]
                border border-white/70
                bg-[#e92b2b]
                text-xs font-bold text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
                hover:brightness-110
              "
              aria-label="Minimize"
            >
              −
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                flex h-[20px] w-[20px]
                cursor-pointer
                items-center justify-center
                rounded-[3px]
                border border-white/70
                bg-[#e92b2b]
                text-xs font-bold text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
                hover:brightness-110
              "
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* MENU BAR */}

        <div
          className="
            flex h-[27px] shrink-0
            items-center gap-6
            border-b border-[#aaa]
            bg-[#d4d0c8]
            px-4
            text-xs text-[#222]
            sm:text-sm
          "
        >
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
        </div>

        {/* CONTENT */}

        <div
          className="
            min-h-0 flex-1
            overflow-y-auto
            overflow-x-hidden
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="p-4 sm:p-6">

            {/* INTRODUCTION */}

            <div className="mb-6">
              <h2
                className="
                  text-base
                  font-bold
                  text-[#174f9e]
                  sm:text-lg
                "
              >
                A little bit of what I do
              </h2>

              <p
                className="
                  mt-2
                  max-w-[600px]
                  text-[10px]
                  leading-relaxed
                  text-[#555e6b]
                  sm:text-[11px]
                "
              >
                I&apos;m a computer engineering student interested in building
                useful and creative digital products. My strongest area is
                full-stack development, and I also work with AI and data
                science while exploring design and visual content creation.
              </p>
            </div>

            {/* CATEGORY TABS */}

            <div className="mb-6 flex flex-wrap gap-1.5">
              {categories.map((category) => {
                const active =
                  activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    className={`
                      cursor-pointer
                      rounded-[3px]
                      border
                      px-3 py-1.5
                      text-[9px]
                      font-semibold
                      transition-all
                      duration-150
                      ${
                        active
                          ? `
                            border-[#1452b8]
                            bg-gradient-to-b
                            from-[#4388f1]
                            to-[#0753d5]
                            text-white
                            shadow-[inset_0_1px_2px_rgba(255,255,255,0.55),0_1px_2px_rgba(0,0,0,0.25)]
                          `
                          : `
                            border-[#aaa]
                            bg-[#e3e3e3]
                            text-[#454b55]
                            hover:border-[#7f9ac5]
                            hover:bg-white
                          `
                      }
                    `}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* ACTIVE CATEGORY */}

            <div>
              {activeCategory === "development" && (
                <DevelopmentSection />
              )}

              {activeCategory === "ai" && (
                <AiSection />
              )}

              {activeCategory === "creative" && (
                <CreativeSection />
              )}

              {activeCategory === "languages" && (
                <LanguagesSection />
              )}

              <div className="mt-6">
                <ToolboxSection />
              </div>
            </div>
          </div>
        </div>

        {/* STATUS BAR */}

        <div
          className="
            flex h-6 shrink-0
            items-center justify-between
            border-t border-[#aaa]
            bg-[#d4d0c8]
            px-2
            text-[8px]
            text-[#5d6470]
          "
        >
          <span>
            {categories.find(
              (category) =>
                category.id === activeCategory,
            )?.label}
          </span>

          <span>My Skills</span>
        </div>
      </div>
    </div>
  );
}
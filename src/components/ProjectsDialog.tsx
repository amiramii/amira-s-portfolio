"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";

type Project = {
  number: string;
  title: string;
  category: string;
  role: string;
  description: string;
  contribution: string[];
  technologies: string[];
  images?: string[];
  github?: string;
  live?: string;
  video?: string;
  accent: "blue" | "lavender" | "grey" | "softBlue";
};

const projects: Project[] = [
  {
    number: "01",
    title: "CheckIn",
    category: "Attendance Management System",
    role: "Frontend + Mobile Development",
    description:
      "A complete attendance and absence management platform connecting students, professors and administration.",
    contribution: [
      "Frontend development",
      "Mobile application",
      "UI design",
      "System design",
      "API integration",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "REST API",
      "JWT",
      "Flutter",
    ],
    images: [
      "/projects/checkin/login.jpeg",
      "/projects/checkin/dashboard.jpeg",
      "/projects/checkin/absences.jpeg",
      "/projects/checkin/files.jpeg",
      "/projects/checkin/session.jpeg",
      "/projects/checkin/studentList.jpeg",
      "/projects/checkin/students.jpeg",
    ],
    github: "https://github.com/amiramii/1cs_project",
    accent: "blue",
  },

  {
    number: "02",
    title: "Collaborative Whiteboard",
    category: "Real-Time Collaboration",
    role: "Full-Stack Web Development",
    description:
      "A collaborative online whiteboard allowing multiple users to work together in real time.",
    contribution: [
      "Website development",
      "UI development",
      "Authentication",
      "Real-time collaboration",
      "Service integration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Clerk",
      "Convex",
      "Liveblocks",
      "LiveKit",
    ],
    images: [
      "/projects/whiteboard/home.png",
      "/projects/whiteboard/landing.png",
      "/projects/whiteboard/whiteboard.png",
    ],
    github: "https://github.com/fatah255/projet-2cpi",
    accent: "lavender",
  },

  {
    number: "03",
    title: "Invoice Data Extraction Automation",
    category: "AI Automation",
    role: "Automation Engineering",
    description:
      "An automated workflow that extracts structured information from supplier invoices using OCR and AI, then organizes the data in Google Sheets.",
    contribution: [
      "Workflow architecture",
      "OCR integration",
      "AI information extraction",
      "Data structuring",
      "Duplicate prevention",
    ],
    technologies: [
      "n8n",
      "OCR.Space",
      "OpenRouter",
      "GPT-4.1 mini",
      "Google Drive",
      "Google Sheets",
    ],
    images: [
      "/projects/invoice-automation/workflow.jpeg",
      "/projects/invoice-automation/articles.jpeg",
      "/projects/invoice-automation/documents.jpeg",
    ],
    accent: "softBlue",
  },

  {
    number: "04",
    title: "Personal Portfolio",
    category: "Full-Stack Portfolio Website",
    role: "UI/UX Design + Full-Stack Development",
    description:
      "My personal portfolio combining a custom Windows XP-inspired interface with a full-stack application for managing projects and contact messages.",
    contribution: [
      "UI/UX design",
      "Visual direction",
      "Frontend development",
      "Backend development",
      "Database integration",
      "Animations",
      "Responsive design",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "GSAP",
    ],
    images: [
      "/projects/portfolio/home.png",
      "/projects/portfolio/resume.png",
      "/projects/portfolio/contact.png",
    ],
    github: "https://github.com/amiramii/portfolio",
    accent: "blue",
  },

  {
    number: "05",
    title: "Cookies Shop",
    category: "E-Commerce Website",
    role: "UI/UX Design + Web Development",
    description:
      "A custom cookie shop website combining a visual identity with an online shopping experience.",
    contribution: [
      "UI/UX design",
      "Website development",
      "Stripe integration",
      "Sanity integration",
      "Responsive design",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Sanity",
    ],
    images: [
      "/projects/cookies-shop/home.png",
      "/projects/cookies-shop/products.png",
      "/projects/cookies-shop/form.png",
      "/projects/cookies-shop/purchase.png",
      "/projects/cookies-shop/story.png",
      "/projects/cookies-shop/milkshake.png",
      "/projects/cookies-shop/footer.png",
    ],
    github: "https://github.com/amiramii/merryCookies",
    live: "https://merry-cookies-7zq2o5gml-amiramiis-projects.vercel.app/",
    accent: "lavender",
  },

  {
    number: "06",
    title: "Video Editing",
    category: "Creative Work",
    role: "Video Editing",
    description:
      "A video editing project focused on pacing, transitions, visual rhythm and storytelling.",
    contribution: [
      "Video editing",
      "Transitions",
      "Pacing",
      "Visual storytelling",
    ],
    technologies: ["CapCut"],
    video: "https://youtube.com/shorts/DmxL44JC8o8?feature=share",
    accent: "grey",
  },

  {
    number: "07",
    title: "Space Tour",
    category: "Interactive Frontend Website",
    role: "Frontend Development",
    description:
      "A fully responsive and animated space-tour website designed as an immersive frontend experience.",
    contribution: [
      "Frontend development",
      "Responsive design",
      "UI development",
      "Animations",
      "Interactive experience",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    images: [
      "/projects/space/home.png",
      "/projects/space/crew.png",
      "/projects/space/technologies.png",
    ],
    github: "https://github.com/amiramii/space-tour-website",
    live: "https://space-tour-website.vercel.app/",
    accent: "softBlue",
  },
];

const accentStyles = {
  blue: {
    background: "bg-[#e8f2ff]",
    border: "border-[#8db7e5]",
    title: "text-[#15549a]",
    chip: "bg-[#d5e8fb] border-[#a9c9e8]",
    selected: "border-[#2869dc]",
  },

  lavender: {
    background: "bg-[#f0ecfa]",
    border: "border-[#b8acd3]",
    title: "text-[#5d4d82]",
    chip: "bg-[#e5def3] border-[#c9bddf]",
    selected: "border-[#7659a5]",
  },

  grey: {
    background: "bg-[#eeeeeb]",
    border: "border-[#aaa9a3]",
    title: "text-[#4c4c4a]",
    chip: "bg-[#e0dfdb] border-[#bdbcb6]",
    selected: "border-[#666662]",
  },

  softBlue: {
    background: "bg-[#e8f5f7]",
    border: "border-[#91bdc7]",
    title: "text-[#285e69]",
    chip: "bg-[#d6eaee] border-[#a9cbd1]",
    selected: "border-[#397783]",
  },
};

function XPButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        inline-flex
        cursor-pointer
        items-center
        justify-center
        gap-1.5
        border
        border-[#888]
        bg-gradient-to-b
        from-white
        via-[#eeeeee]
        to-[#d4d4d4]
        px-3
        py-1.5
        text-xs
        font-bold
        text-[#222]
        shadow-[inset_0_1px_0_#fff,1px_1px_2px_rgba(0,0,0,0.25)]
        transition
        hover:brightness-105
        active:translate-y-px
      "
    >
      {children}
    </a>
  );
}

function TechChip({
  name,
  accent,
}: {
  name: string;
  accent: Project["accent"];
}) {
  const styles = accentStyles[accent];

  return (
    <span
      className={`
        rounded-[3px]
        border
        px-2
        py-1
        text-[10px]
        font-semibold
        text-[#444]
        ${styles.chip}
      `}
    >
      {name}
    </span>
  );
}

function ContributionList({
  items,
  accent,
}: {
  items: string[];
  accent: Project["accent"];
}) {
  const styles = accentStyles[accent];

  return (
    <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="
            flex
            items-center
            gap-2
            rounded-[4px]
            border
            border-black/10
            bg-white/70
            px-2.5
            py-2
            text-xs
            text-[#444]
          "
        >
          <span className={`font-bold ${styles.title}`}>■</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectGallery({
  images,
  title,
  accent,
}: {
  images: string[];
  title: string;
  accent: Project["accent"];
}) {
  const styles = accentStyles[accent];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="px-3 sm:px-4">
      {/* Main screenshot */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[4px]
          border-2
          border-white
          bg-[#dedbd2]
          shadow-[1px_2px_4px_rgba(0,0,0,0.2)]
        "
      >
        <div
          className="
            relative
            aspect-[16/9]
            w-full
            overflow-hidden
            bg-[#dedbd2]
          "
        >
          <Image
            src={images[selectedIndex]}
            alt={`${title} screenshot ${selectedIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 760px"
            className="object-contain"
            priority={selectedIndex === 0}
          />

          {/* Counter */}
          <div
            className="
              absolute
              bottom-2
              left-2
              rounded-[3px]
              border
              border-[#888]
              bg-white/90
              px-2
              py-1
              text-[10px]
              font-bold
              text-[#444]
              shadow-sm
            "
          >
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous screenshot"
              className="
                absolute
                left-2
                top-1/2
                flex
                h-8
                w-8
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-[#777]
                bg-white/90
                text-lg
                font-bold
                text-[#333]
                shadow-[1px_1px_2px_rgba(0,0,0,0.25)]
                transition
                hover:bg-white
              "
            >
              ‹
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next screenshot"
              className="
                absolute
                right-2
                top-1/2
                flex
                h-8
                w-8
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                border
                border-[#777]
                bg-white/90
                text-lg
                font-bold
                text-[#333]
                shadow-[1px_1px_2px_rgba(0,0,0,0.25)]
                transition
                hover:bg-white
              "
            >
              ›
            </button>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View screenshot ${index + 1}`}
              className={`
                relative
                h-[54px]
                w-[78px]
                shrink-0
                cursor-pointer
                overflow-hidden
                rounded-[3px]
                border-2
                bg-[#dedbd2]
                shadow-[1px_1px_2px_rgba(0,0,0,0.15)]
                transition
                hover:brightness-105
                sm:h-[62px]
                sm:w-[90px]
                ${
                  selectedIndex === index
                    ? styles.selected
                    : "border-white"
                }
              `}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="90px"
                className="object-contain"
              />

              {selectedIndex === index && (
                <div className="pointer-events-none absolute inset-0 border-2 border-[#2869dc]/40" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AutomationFlow() {
  return (
    <div className="mt-3 rounded-[5px] border border-[#a9cbd1] bg-white/70 p-3">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#285e69]">
        Workflow
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-semibold text-[#444]">
        <span className="rounded-[3px] border border-[#b9cde0] bg-[#edf5fc] px-2 py-1.5">
          Google Drive
        </span>

        <span className="text-[#557b86]">→</span>

        <span className="rounded-[3px] border border-[#c9c9c4] bg-[#f3f3f0] px-2 py-1.5">
          OCR
        </span>

        <span className="text-[#557b86]">→</span>

        <span className="rounded-[3px] border border-[#c9bddf] bg-[#f3eff8] px-2 py-1.5">
          AI extraction
        </span>

        <span className="text-[#557b86]">→</span>

        <span className="rounded-[3px] border border-[#a9cbd1] bg-[#edf7f8] px-2 py-1.5">
          Google Sheets
        </span>
      </div>
    </div>
  );
}

function VideoPlayer({ video }: { video: string }) {
  const youtubeMatch = video.match(
    /(?:youtube\.com\/watch\?v=|youtube\.com\/shorts\/|youtu\.be\/)([^&?/]+)/
  );

  const youtubeId = youtubeMatch?.[1];

  if (!youtubeId) {
    return (
      <div className="px-3 sm:px-4">
        <video
          controls
          className="
            w-full
            rounded-[4px]
            border-2
            border-white
            bg-black
            shadow-[1px_2px_4px_rgba(0,0,0,0.2)]
          "
        >
          <source src={video} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-4">
      <div
        className="
          mx-auto
          max-w-[380px]
          overflow-hidden
          rounded-[4px]
          border-2
          border-white
          bg-black
          shadow-[1px_2px_4px_rgba(0,0,0,0.2)]
        "
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="Video editing project"
          className="aspect-[9/16] w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const styles = accentStyles[project.accent];

  return (
    <article
      className={`
        project-card
        overflow-hidden
        rounded-[6px]
        border
        ${styles.border}
        ${styles.background}
        shadow-[2px_2px_5px_rgba(0,0,0,0.12)]
      `}
    >
      {/* Project heading */}
      <div className="flex items-start justify-between gap-3 px-3 pb-2 pt-3 sm:px-4">
        <div className="min-w-0">
          <div
            className={`text-[10px] font-bold tracking-wider ${styles.title}`}
          >
            PROJECT {project.number}
          </div>

          <h2
            className={`
              mt-0.5
              break-words
              text-lg
              font-bold
              leading-tight
              ${styles.title}
            `}
          >
            {project.title}
          </h2>

          <div className="mt-1 text-[11px] text-[#666]">
            {project.category}
          </div>
        </div>

        <div
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-[3px]
            border
            border-white
            bg-white/60
            text-[10px]
            font-bold
            text-[#555]
            shadow-sm
          "
        >
          {project.number}
        </div>
      </div>

      {/* Screenshots */}
      {project.images && project.images.length > 0 && (
        <ProjectGallery
          images={project.images}
          title={project.title}
          accent={project.accent}
        />
      )}

      {/* Video */}
      {project.video && <VideoPlayer video={project.video} />}

      {/* Project information */}
      <div className="px-3 pb-4 pt-3 sm:px-4">
        {/* Role + description */}
        <div className="rounded-[4px] border border-black/10 bg-white/70 p-3">
          <div className={`text-xs font-bold ${styles.title}`}>
            {project.role}
          </div>

          <p className="mt-1.5 text-xs leading-relaxed text-[#444]">
            {project.description}
          </p>
        </div>

        {/* What I did */}
        <div className="mt-3">
          <div
            className={`
              mb-2
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              ${styles.title}
            `}
          >
            What I did
          </div>

          <ContributionList
            items={project.contribution}
            accent={project.accent}
          />
        </div>

        {/* Automation flow */}
        {project.title === "Invoice Data Extraction Automation" && (
          <AutomationFlow />
        )}

        {/* Technologies */}
        <div className="mt-3">
          <div
            className={`
              mb-2
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              ${styles.title}
            `}
          >
            Technologies
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <TechChip
                key={technology}
                name={technology}
                accent={project.accent}
              />
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.github || project.live) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.github && (
              <XPButton href={project.github}>
                GitHub repository
              </XPButton>
            )}

            {project.live && project.live !== "#" && (
              <XPButton href={project.live}>
                Visit website
              </XPButton>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProjectsDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !contentRef.current) return;

    const cards =
      contentRef.current.querySelectorAll<HTMLElement>(".project-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.06,
        ease: "power2.out",
      }
    );
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 p-2 sm:p-4">
      <div
        className="
          flex
          h-[calc(100dvh-24px)]
          max-h-[820px]
          w-full
          max-w-[800px]
          flex-col
          overflow-hidden
          border-2
          border-[#0068d7]
          bg-[#ece9d8]
          shadow-[4px_5px_12px_rgba(0,0,0,0.45)]
        "
      >
        {/* XP TITLE BAR */}
        <div
          className="
            flex
            h-[44px]
            shrink-0
            items-center
            justify-between
            bg-gradient-to-b
            from-[#4b8bea]
            via-[#2869dc]
            to-[#1760d8]
            px-2
          "
        >
          <div className="flex min-w-0 items-center gap-2">
            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[3px]
              "
            >
              <Image
                src="/icons/projects.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            </div>

            <span
              className="
                truncate
                text-sm
                font-bold
                text-white
                drop-shadow-[1px_1px_1px_rgba(0,0,0,0.45)]
              "
            >
              My Projects
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {/* Minimize */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Minimize"
              className="
                flex
                h-[20px]
                w-[20px]
                cursor-pointer
                items-center
                justify-center
                rounded-[2px]
                border
                border-[#17458e]
                bg-[#3d7de0]
                text-[13px]
                font-bold
                text-white
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]
                hover:bg-[#5590ed]
              "
            >
              −
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                flex
                h-[20px]
                w-[20px]
                cursor-pointer
                items-center
                justify-center
                rounded-[2px]
                border
                border-[#17458e]
                bg-[#e75b52]
                text-[13px]
                font-bold
                text-white
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.45)]
                hover:bg-[#f06e65]
              "
            >
              ×
            </button>
          </div>
        </div>

        {/* XP MENU BAR */}
        <div
          className="
            flex
            h-[27px]
            shrink-0
            items-center
            gap-6
            border-b
            border-[#aaa]
            bg-[#d4d0c8]
            px-4
            text-xs
            text-[#222]
          "
        >
          <button
            type="button"
            className="cursor-pointer hover:underline"
          >
            File
          </button>

          <button
            type="button"
            className="cursor-pointer hover:underline"
          >
            Edit
          </button>

          <button
            type="button"
            className="cursor-pointer hover:underline"
          >
            View
          </button>

          <button
            type="button"
            className="cursor-pointer hover:underline"
          >
            Help
          </button>
        </div>

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overflow-x-hidden
            bg-[#f4f1e8]
            p-3
            sm:p-4
          "
        >
          {/* INTRO */}
          <div
            className="
              mb-4
              rounded-[5px]
              border
              border-[#9ebde5]
              bg-[#e8f2ff]
              p-3
              shadow-[1px_2px_4px_rgba(0,0,0,0.08)]
            "
          >
            <div
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-[#2869dc]
              "
            >
              Projects
            </div>

            <h1 className="mt-1 text-xl font-bold text-[#174f9b]">
              Things I&apos;ve built
            </h1>

            <p className="mt-1 text-xs leading-relaxed text-[#555]">
              Websites, applications, automations and creative work that I
              have designed and developed.
            </p>
          </div>

          {/* PROJECTS */}
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>

          {/* Bottom note */}
          <div
            className="
              mt-4
              rounded-[4px]
              border
              border-[#aaa]
              bg-[#e9e7dd]
              px-3
              py-2
              text-center
              text-[11px]
              text-[#666]
            "
          >
            More projects will be added here as I build them.
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";


import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Experience = {
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
  achievements: string[];
  technologies?: string[];
};

const experiences: Experience[] = [
  {
    period: "2026",
    role: "Frontend & Mobile Developer",
    organization: "CheckIn",
    type: "Academic Project",
    description:
      "Worked on an attendance and absence management platform for academic environments, focusing mainly on the frontend and mobile experience while also contributing to system conception and documentation.",
    achievements: [
      "Frontend development",
      "Flutter mobile application",
      "UI design",
      "System conception",
      "REST API integration",
      "Multilingual + RTL interfaces",
      "Technical documentation",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Flutter",
      "JWT",
    ],
  },
  {
    period: "2026",
    role: "Quantum Computing Participant",
    organization: "AiQC",
    type: "Workshop / Hackathon",
    description:
      "Explored quantum computing through practical exercises involving quantum algorithms, scientific computing and hybrid quantum-classical approaches.",
    achievements: [
      "Qiskit development",
      "Python scientific computing",
      "VQE workflows",
      "Quantum computing assessment",
    ],
    technologies: ["Python", "Qiskit", "PySCF", "VQE"],
  },
  {
    period: "2026",
    role: "Organizer & Host",
    organization: "AIQuest — Quantum Edition",
    type: "Student Initiative",
    description:
      "Helped organize and host a student event focused on artificial intelligence and quantum computing, contributing to both the technical and community aspects of the event.",
    achievements: [
      "Event organization",
      "Event hosting",
      "Technical coordination",
      "Student engagement",
    ],
    technologies: ["AI", "Quantum Computing", "Event Organization"],
  },
  {
    period: "2025–2026",
    role: "Technical Team Member",
    organization: "Ingeniums",
    type: "Student Organization",
    description:
      "Contributed to the technical side of a student organization through technology-oriented activities, collaboration and student initiatives.",
    achievements: [
      "Technical activities",
      "Web development",
      "Team collaboration",
      "Project coordination",
    ],
    technologies: ["Web", "Programming", "Teamwork"],
  },
];

type ExperienceDialogProps = {
  open: boolean;
  onClose: () => void;
};

const cardStyles = [
  {
    paper: "bg-[#f7e8b9]",
    note: "bg-[#dfeafb]",
    noteText: "text-[#23477b]",
    tape: "bg-[#71b6c5]",
    rotation: "-rotate-[0.5deg]",
  },
  {
    paper: "bg-[#eee9f8]",
    note: "bg-[#eee7fa]",
    noteText: "text-[#5b4380]",
    tape: "bg-[#aaa1dd]",
    rotation: "rotate-[0.4deg]",
  },
  {
    paper: "bg-[#e0f1f0]",
    note: "bg-[#e7f0df]",
    noteText: "text-[#456341]",
    tape: "bg-[#73b6b1]",
    rotation: "-rotate-[0.4deg]",
  },
  {
    paper: "bg-[#f3dce9]",
    note: "bg-[#f7dce9]",
    noteText: "text-[#8b3d68]",
    tape: "bg-[#dc91b1]",
    rotation: "rotate-[0.5deg]",
  },
];

function Tape({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute h-5 w-20 rotate-[-5deg] bg-[#e8b9c8]/75 shadow-sm ${className}`}
    />
  );
}

function Star({
  className = "",
  children = "★",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={`pointer-events-none absolute select-none text-[#f5c94b] drop-shadow-[1px_1px_0_white] ${className}`}
    >
      {children}
    </span>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const style = cardStyles[index % cardStyles.length];

  return (
    <article className={`experience-card relative ${style.rotation}`}>
      {/* YEAR */}
      <div className="absolute -left-[10px] top-5 z-20 hidden -translate-x-full items-center gap-2 sm:flex">
        <span
          className="
            rounded-[7px]
            border-2
            border-[#2365c7]
            bg-gradient-to-b
            from-[#3987ef]
            to-[#1261ce]
            px-3
            py-1
            font-mono
            text-sm
            font-bold
            text-white
            shadow-[1px_2px_3px_rgba(0,0,0,0.25)]
          "
        >
          {experience.period}
        </span>
      </div>

      {/* MAIN PAPER */}
      <div
        className={`
          relative
          overflow-visible
          border
          border-[#b5a994]
          ${style.paper}
          px-4
          pb-4
          pt-5
          shadow-[3px_5px_8px_rgba(75,50,40,0.18)]
        `}
      >
        {/* TAPE */}
        <Tape className={`-top-3 right-12 ${style.tape}`} />

        {/* TOP EDGE */}
        <div className="absolute left-0 right-0 top-0 h-[3px] bg-white/40" />

        <div className="flex flex-col gap-3">
          {/* HEADER */}
          <div className="flex items-start gap-3">
            {/* FOLDER */}
            <div className="shrink-0 pt-1">
              
            </div>

            <div className="min-w-0 flex-1">
              {/* MOBILE YEAR */}
              <div className="mb-1 sm:hidden">
                <span
                  className="
                    rounded-[5px]
                    border
                    border-[#2869dc]
                    bg-[#dcecff]
                    px-2
                    py-1
                    font-mono
                    text-[9px]
                    font-bold
                    text-[#1855a5]
                  "
                >
                  {experience.period}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3
                    className="
                      font-[Trebuchet_MS,sans-serif]
                      text-[15px]
                      font-bold
                      leading-tight
                      text-[#1764c1]
                      sm:text-[17px]
                    "
                  >
                    {experience.role}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold text-[#3e4b5a]">
                      {experience.organization}
                    </span>

                    <span
                      className="
                        rounded-[3px]
                        bg-[#e9a6c6]
                        px-1.5
                        py-0.5
                        text-[8px]
                        font-bold
                        text-[#744061]
                      "
                    >
                      {experience.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              ml-[48px]
              max-w-[480px]
              font-mono
              text-[9px]
              leading-[1.55]
              text-[#3f4650]
              sm:text-[10px]
            "
          >
            {experience.description}
          </p>

          {/* TECHNOLOGIES */}
          {experience.technologies &&
            experience.technologies.length > 0 && (
              <div className="ml-[48px]">
                <div
                  className="
                    mb-1
                    font-[Trebuchet_MS,sans-serif]
                    text-[10px]
                    font-bold
                    text-[#1764c1]
                    sm:text-[11px]
                  "
                >
                  Technologies
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-[#9db9dc]
                        bg-[#e3efff]
                        px-2
                        py-1
                        text-[8px]
                        font-semibold
                        text-[#245aa1]
                        shadow-[0_1px_1px_rgba(0,0,0,0.12)]
                        sm:text-[9px]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>

        {/* WHAT I DID NOTE */}
        <div
          className={`
            absolute
            -right-4
            top-7
            hidden
            w-[190px]
            rotate-[2deg]
            border
            border-[#b9c2c9]
            ${style.note}
            px-4
            py-3
            shadow-[2px_4px_6px_rgba(0,0,0,0.2)]
            lg:block
          `}
        >
          {/* NOTE TAPE */}
          <div className="absolute -top-3 left-7 h-4 w-16 rotate-[-4deg] bg-white/35" />

          <h4
            className={`
              mb-2
              font-[Trebuchet_MS,sans-serif]
              text-[15px]
              font-bold
              ${style.noteText}
            `}
          >
            What I did
          </h4>

          <ul className="space-y-1">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className={`
                  flex
                  gap-2
                  text-[10px]
                  leading-tight
                  ${style.noteText}
                `}
              >
                <span className="shrink-0 text-[#e8b52e]">★</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE WHAT I DID */}
        <div
          className={`
            mt-3
            rounded-[4px]
            border
            border-black/10
            ${style.note}
            p-3
            lg:hidden
          `}
        >
          <h4
            className={`
              mb-2
              font-[Trebuchet_MS,sans-serif]
              text-[12px]
              font-bold
              ${style.noteText}
            `}
          >
            What I did
          </h4>

          <div className="flex flex-wrap gap-1.5">
            {experience.achievements.map((achievement) => (
              <span
                key={achievement}
                className="
                  rounded-[3px]
                  bg-white/45
                  px-2
                  py-1
                  text-[8px]
                  font-semibold
                  text-[#43526a]
                "
              >
                ★ {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceDialog({
  open,
  onClose,
}: ExperienceDialogProps) {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !windowRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        windowRef.current,
        {
          opacity: 0,
          scale: 0.94,
          y: 18,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.3)",
        },
      );

      gsap.fromTo(
        ".experience-title",
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.15,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".experience-card",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.12,
          delay: 0.2,
          ease: "power2.out",
        },
      );
    }, windowRef);

    return () => ctx.revert();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/30
        p-2
        sm:p-4
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* WINDOWS XP WINDOW */}
      <div
        ref={windowRef}
        className="
          flex
          h-[calc(100dvh-24px)]
          max-h-[850px]
          w-full
          max-w-[900px]
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
              
            </div>

            <span
              className="
                truncate
                text-sm
                font-bold
                text-white
                drop-shadow-[1px_1px_1px_rgba(0,0,0,0.45)]
                sm:text-base
              "
            >
              My Experience
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
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
            sm:text-sm
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

        {/* SCROLLABLE SCRAPBOOK AREA */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overflow-x-hidden
            bg-[#f6dede]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/*
            The background belongs to this content wrapper.
            Since this wrapper grows with the content,
            the paper background covers everything while scrolling.
          */}
          <div
            className="
              relative
              min-h-full
              bg-[#f6dede]
            "
          >
            {/* SOFT OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-[#f6dede]/10" />

            {/* DECORATIONS */}
            <Star className="left-[7%] top-10 text-3xl">
              ★
            </Star>

            <Star className="right-[8%] top-14 rotate-12 text-4xl text-[#2877cf]">
              ☆
            </Star>

            <Star className="left-[13%] top-[20%] text-2xl text-[#e48aad]">
              ★
            </Star>

            <Star className="right-[7%] top-[43%] text-3xl text-[#7d66c8]">
              ✧
            </Star>

            <Star className="left-[5%] bottom-[15%] text-5xl">
              ★
            </Star>

            <Star className="right-[12%] bottom-[10%] text-3xl text-[#2877cf]">
              ☆
            </Star>

            {/* CONTENT */}
            <div
              className="
                relative
                z-10
                mx-auto
                max-w-[820px]
                px-4
                py-5
                sm:px-8
                sm:py-7
              "
            >
              {/* TITLE */}
              <div className="experience-title relative mb-8">
                {/* TAPE */}
                <div
                  className="
                    absolute
                    -left-1
                    top-0
                    h-7
                    w-24
                    rotate-[-7deg]
                    bg-[#e89bb5]/65
                  "
                />

                {/* TITLE PAPER */}
                <div
                  className="
                    relative
                    mx-auto
                    w-fit
                    rotate-[-2deg]
                    border
                    border-[#d2c4ad]
                    bg-[#fff8e8]
                    px-5
                    py-2
                    shadow-[2px_4px_5px_rgba(0,0,0,0.16)]
                  "
                >
                  <h1
                    className="
                      font-serif
                      text-3xl
                      italic
                      text-[#1764c1]
                      drop-shadow-[1px_1px_0_white]
                      sm:text-5xl
                    "
                  >
                    Where I&apos;ve been
                  </h1>

                  <div
                    className="
                      -mt-1
                      text-center
                      font-serif
                      text-3xl
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#c65d86]
                      drop-shadow-[1px_1px_0_white]
                      sm:text-4xl
                    "
                  >
                    BUILDING
                  </div>
                </div>

                {/* INTRO PAPER */}
                <div
                  className="
                    mx-auto
                    mt-5
                    max-w-[500px]
                    rotate-[1deg]
                    border
                    border-[#d6cdbd]
                    bg-[#fff8e8]/90
                    px-5
                    py-3
                    font-mono
                    text-[10px]
                    leading-relaxed
                    text-[#374257]
                    shadow-[2px_3px_5px_rgba(0,0,0,0.14)]
                    sm:text-[11px]
                  "
                >
                  A mix of academic projects, technical communities and
                  hands-on work that shaped the way I build, collaborate and
                  explore new technologies.
                </div>
              </div>

              {/* TIMELINE */}
              <div className="relative">
                {/* VERTICAL LINE */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-[18px]
                    top-3
                    hidden
                    w-[2px]
                    bg-[#7995b6]
                    sm:block
                  "
                />

                {/* EXPERIENCE CARDS */}
                <div
                  className="
                    space-y-8
                    sm:space-y-9
                    sm:pl-[55px]
                    sm:pr-[45px]
                  "
                >
                  {experiences.map((experience, index) => (
                    <div
                      key={`${experience.organization}-${experience.role}`}
                      className="relative"
                    >
                      {/* TIMELINE DOT */}
                      <div
                        className="
                          absolute
                          -left-[47px]
                          top-5
                          hidden
                          h-[17px]
                          w-[17px]
                          rounded-full
                          border-2
                          border-[#2365c7]
                          bg-[#d9eaff]
                          shadow-[0_1px_3px_rgba(0,0,0,0.3)]
                          sm:block
                        "
                      >
                        <div className="absolute inset-[4px] rounded-full bg-[#2874dc]" />
                      </div>

                      <ExperienceCard
                        experience={experience}
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <div
                className="
                  relative
                  mt-8
                  ml-4
                  w-fit
                  max-w-[340px]
                  rotate-[-3deg]
                  border
                  border-[#d5c7b0]
                  bg-[#fff4dc]
                  px-5
                  py-3
                  font-mono
                  text-[10px]
                  leading-relaxed
                  text-[#39475d]
                  shadow-[2px_4px_6px_rgba(0,0,0,0.16)]
                  sm:ml-12
                "
              >
                <Tape className="-top-2 left-8 w-16 bg-[#d99aae]/70" />

                Different projects.
                <br />
                Same goal. Keep building.

                <span className="ml-3 text-xl">☺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
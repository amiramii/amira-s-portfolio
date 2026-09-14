"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ContactDialog from "@/components/ContactDialog";
import AboutDialog from "@/components/AboutDialog";
import ResumeDialog from "@/components/ResumeDialog";
import SkillsDialog from "@/components/SkillsDialog";
import ExperienceDialog from "@/components/ExperienceDialog";
import ProjectsDialog from "@/components/ProjectsDialog";

const taskbarLinkClass =
  "flex h-[36px] min-w-0 flex-1 shrink items-center justify-center gap-1 rounded-[4px] border border-[#00134d] bg-gradient-to-b from-[#1470ed] via-[#0755d4] to-[#0044b8] px-1 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),inset_0_-1px_2px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.5)] transition hover:brightness-110 active:brightness-95 cursor-pointer sm:h-[37px] sm:flex-none sm:w-[100px] sm:gap-1 sm:px-2 md:w-[120px] md:gap-2 lg:w-[145px] lg:px-3";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="relative z-0 flex h-auto min-h-dvh flex-col overflow-x-hidden lg:h-dvh lg:min-h-0 lg:overflow-hidden">
      {/* ===================================================== */}
      {/* BACKGROUND MUSIC */}
      {/* ===================================================== */}

      <iframe
        src="https://www.youtube.com/embed/7nQ2oiVqKHw?autoplay=1"
        title="Background music"
        allow="autoplay; encrypted-media"
        className="hidden"
      />

      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bliss.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <header className="shrink-0 px-4 pt-4 sm:px-8 sm:pt-6 md:px-12 lg:px-24 lg:pt-8 xl:px-60 xl:pt-4 2xl:px-60">
        <nav className="flex w-full flex-col items-center">
          {/* Welcome */}

          <div className="w-full pt-3 rounded-t-md bg-[#175de8]/35 p-1 px-3 text-xs shadow-[inset_0_3px_5px_-2px_#FFF] sm:text-sm">
            Welcome to my portfolio &lt;3
          </div>

          {/* Logo */}

          <div className="flex w-full items-center bg-[#0050EE]/65 p-1 px-3">
            <Image
              src="/icons/hey.png"
              alt=""
              width={50}
              height={50}
              className="h-10 w-10 sm:h-[50px] sm:w-[50px]"
            />

            <div className="ml-2 flex flex-col items-start justify-center">
              <p className="font-hind text-xl font-bold text-white sm:text-2xl">
                amiraSpace
              </p>

              <p className="text-[9px] text-white sm:text-[10px]">
                a space for my work
              </p>
            </div>
          </div>

          {/* Navigation */}

          <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 rounded-b-md border border-black/10 bg-[#E2CDCD]/7 px-3 py-2 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(0,0,0,0.15)] sm:gap-x-5">
            {/* HOME */}

            <Link
              href="#home"
              className="shrink-0 cursor-pointer text-sm font-semibold text-[#0050EE] sm:text-base"
            >
              Home
            </Link>

            {/* ABOUT */}

            <button
              type="button"
              onClick={() => setAboutOpen(true)}
              className="shrink-0 cursor-pointer text-sm font-semibold text-[#0050EE] sm:text-base"
            >
              About
            </button>

            {/* SKILLS */}

            <button
              type="button"
              onClick={() => setSkillsOpen(true)}
              className="shrink-0 cursor-pointer text-sm font-semibold text-[#0050EE] sm:text-base"
            >
              Skills
            </button>

            {/* PROJECTS */}

            <button
              type="button"
              onClick={() => setProjectsOpen(true)}
              className="shrink-0 cursor-pointer text-sm font-semibold text-[#0050EE] sm:text-base"
            >
              Projects
            </button>

            {/* EXPERIENCE */}

            <button
              type="button"
              onClick={() => setExperienceOpen(true)}
              className="shrink-0 cursor-pointer text-sm font-semibold text-[#0050EE] sm:text-base"
            >
              Experience
            </button>

            {/* CONTACT */}

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="shrink-0 cursor-pointer text-sm font-semibold text-[#0050EE] sm:text-base"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* ===================================================== */}
      {/* MAIN */}
      {/* ===================================================== */}

      <main
        id="home"
        className="flex flex-1 flex-col gap-6 px-4 py-6 pb-20 sm:px-8 sm:py-8 md:px-12 lg:min-h-0 lg:px-24 lg:py-6 lg:pb-16 xl:px-60 2xl:px-60"
      >
        {/* ================================================= */}
        {/* TOP CONTENT */}
        {/* ================================================= */}

        <div className="flex flex-col gap-6 lg:min-h-0 lg:flex-1 lg:flex-row">
          {/* ================================================= */}
          {/* LEFT COLUMN */}
          {/* ================================================= */}

          <div className="flex w-full flex-col gap-3 lg:w-[42%] lg:shrink-0">
            {/* PROFILE */}

            <div className="flex flex-col rounded-md bg-[#175DE8]/35 shadow-[inset_0_3px_5px_-2px_#FFF]">
              <div className="flex w-full items-center justify-between gap-2 rounded-t-md px-2 py-2.5 text-white">
                <p className="text-xs sm:text-sm">
                  Bouabdelli Maroua Amira&apos;s profile
                </p>

                <div className="flex shrink-0 items-end gap-1 text-xs text-[#2C8925] sm:text-sm">
                  <Image
                    src="/icons/green_person.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="animate-[blink_1s_steps(1)_infinite]"
                  />
                  <div className="translate-y-1.25">ONLINE!</div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-5 rounded-md border border-[#001170]/56 bg-white/56 px-4 py-8 shadow-[0_0px_7px_0.1px_#000] sm:flex-row sm:items-center sm:px-5 sm:py-8">
                {/* PROFILE IMAGE */}

                <div className="relative h-[130px] w-[130px] shrink-0 overflow-hidden rounded-full sm:h-[150px] sm:w-[150px] lg:h-[145px] lg:w-[145px] xl:h-[169px] xl:w-[172px]">
                  <Image
                    src="/images/moi.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* PROFILE TEXT */}

                <div className="flex min-w-0 flex-col gap-2 text-center sm:text-left">
                  <p className="text-sm font-extrabold text-[#1E1E1E]">
                    &quot;hello !&quot;
                  </p>

                  <p className="text-sm font-extrabold leading-5 text-[#0044CB] sm:text-base">
                    Full stack developer | AI &amp; data science enthusiast
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* MOOD */}
            {/* ================================================= */}

            <div className="flex flex-col rounded-md bg-[#175DE8]/87 shadow-[inset_0_3px_5px_-2px_#FFF]">
              <div className="w-full rounded-t-md px-2 py-2.5 text-white">
                <p className="text-sm font-hind">Mood</p>
              </div>

              <div className="rounded-md border border-[#001170]/56 bg-white/63 px-4 py-5 font-hind shadow-[0_0px_7px_0.1px_#000] sm:py-6">
                <div className="flex flex-wrap gap-2 text-sm font-extrabold text-[#1E1E1E]">
                  <span>Mood :</span>

                  <span className="font-normal">
                    caffeinated &amp; curious
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* DESKTOP ICONS */}
          {/* ================================================= */}

          <div className="flex w-full flex-row items-start justify-center gap-6 sm:gap-10 lg:mt-20 lg:w-[115px] lg:shrink-0 lg:flex-col lg:items-center lg:gap-2 xl:mt-26">
            {/* RESUME */}

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="flex w-full cursor-pointer flex-col items-center justify-center text-center"
            >
              <Image
                src="/icons/resume.png"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10"
              />

              <p className="text-xs text-white sm:text-sm">Resume</p>
            </button>

            {/* PROJECT */}

            <button
              type="button"
              onClick={() => setProjectsOpen(true)}
              className="flex w-full cursor-pointer flex-col items-center justify-center text-center"
            >
              <Image
                src="/icons/explorer.png"
                alt=""
                width={60}
                height={60}
                className="h-12 w-12 sm:h-[60px] sm:w-[60px]"
              />

              <p className="text-xs text-white sm:text-sm">
                project-explorer
              </p>
            </button>

            {/* EMAIL */}

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="flex w-full cursor-pointer flex-col items-center justify-center gap-1 text-center"
            >
              <Image
                src="/icons/gmail.svg"
                alt=""
                width={30}
                height={30}
                className="h-7 w-7 sm:h-[30px] sm:w-[30px]"
              />

              <p className="text-xs text-white sm:text-sm">email</p>
            </button>
          </div>

          {/* ================================================= */}
          {/* RIGHT COLUMN */}
          {/* ================================================= */}

          <div className="flex w-full flex-col gap-6 lg:min-h-0 lg:flex-1 lg:items-end lg:justify-between">
            {/* NEW NOTE */}

            <div className="flex w-full flex-col sm:w-80 lg:-mt-2">
              <div className="grid grid-cols-3 items-center bg-[#F2F29F] p-1 px-2">
                <span />

                <p className="text-center text-sm font-light text-black sm:text-base">
                  New Note
                </p>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="cursor-pointer text-sm font-bold text-black"
                  >
                    ...
                  </button>

                  <button
                    type="button"
                    className="cursor-pointer text-sm font-bold text-black"
                  >
                    X
                  </button>
                </div>
              </div>

              <div className="flex min-h-[180px] flex-col justify-between gap-10 bg-[#FFFF99] p-4 text-lg text-black sm:min-h-[220px] sm:text-xl">
                <p>
                  &quot;I want my portfolio to feel like a place not a
                  resume&quot;
                </p>

                <p>click start</p>
              </div>
            </div>

            {/* ================================================= */}
            {/* CONTACT CARD */}
            {/* ================================================= */}

            <div className="flex w-full flex-col rounded-md bg-[#175DE8]/87 shadow-[inset_0_3px_5px_-2px_#FFF] sm:w-80">
              <div className="w-full rounded-t-md px-2 py-2.5 text-white">
                <p className="text-sm">Contact Me</p>
              </div>

              <div className="flex flex-col gap-5 rounded-md border border-[#001170]/56 bg-white/63 px-4 py-7 shadow-[0_0px_7px_0.1px_#000]">
                <p className="text-sm font-hind text-[#1E1E1E]">
                  Want to talk about a project, internship or collaboration?
                </p>

                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="flex w-fit max-w-full cursor-pointer items-center gap-2 rounded-md bg-[#3076FF] px-4 py-2 text-sm font-medium text-white shadow-[inset_0_0_4px_#FFF] hover:bg-[#004adbe4]"
                >
                  <Image
                    src="/icons/comment.png"
                    alt=""
                    width={20}
                    height={20}
                  />

                  <span className="whitespace-nowrap">
                    Send me a message
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* ANCHOR SECTIONS */}
        {/* ================================================= */}

        <section id="about" className="hidden w-full" />

        <section id="skills" className="hidden w-full" />

        <section id="projects" className="hidden w-full" />

        <section id="experience" className="hidden w-full" />
      </main>

      {/* ===================================================== */}
      {/* XP TASKBAR */}
      {/* ===================================================== */}

      <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-[42px] w-full items-center overflow-hidden bg-[#0050EE] shadow-[inset_0_1px_3px_rgba(255,255,255,0.25),inset_0_-1px_3px_rgba(0,0,0,0.5)]">
        {/* START */}

        <button
          type="button"
          onClick={() => setAboutOpen(true)}
          className="flex h-full w-[78px] shrink-0 cursor-pointer items-center justify-center rounded-r-full bg-gradient-to-b from-[#70b85f] via-[#54A04E] to-[#3c8738] px-2 text-lg font-bold italic text-white shadow-[inset_0_0px_5px_1px_#000] hover:brightness-110 focus:outline-none sm:w-[100px] sm:px-5 sm:text-xl md:w-[115px] md:justify-start md:px-6 md:text-2xl lg:w-[125px] lg:px-7 lg:pr-10"
        >
          start
        </button>

        {/* TASKBAR LINKS */}

        <div className="flex h-full min-w-0 flex-1 items-center gap-1 px-1 py-[3px] sm:gap-1 sm:px-1 md:gap-2 md:px-2 lg:gap-3">
          {/* GITHUB */}

          <Link
            href="https://github.com/amiramii"
            target="_blank"
            rel="noopener noreferrer"
            className={taskbarLinkClass}
          >
            <Image
              src="/icons/github.svg"
              alt=""
              width={26}
              height={26}
              className="h-5 w-5 shrink-0 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[26px] lg:w-[26px]"
            />

            <span className="hidden whitespace-nowrap text-xs sm:inline md:text-sm lg:text-[17px]">
              github
            </span>
          </Link>

          {/* LINKEDIN */}

          <Link
            href="https://www.linkedin.com/in/maroua-amira-bouabdelli-108118319"
            target="_blank"
            rel="noopener noreferrer"
            className={taskbarLinkClass}
          >
            <Image
              src="/icons/linkedin.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
            />

            <span className="hidden whitespace-nowrap text-xs sm:inline md:text-sm lg:text-[17px]">
              linkedin
            </span>
          </Link>

          {/* RESUME */}

          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className={taskbarLinkClass}
          >
            <Image
              src="/icons/resume.png"
              alt=""
              width={27}
              height={27}
              className="h-5 w-5 shrink-0 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[27px] lg:w-[27px]"
            />

            <span className="hidden whitespace-nowrap text-xs sm:inline md:text-sm lg:text-[17px]">
              resume
            </span>
          </button>

          {/* PROJECT */}

          <button
            type="button"
            onClick={() => setProjectsOpen(true)}
            className={taskbarLinkClass}
          >
            <Image
              src="/icons/explorer.png"
              alt=""
              width={27}
              height={27}
              className="h-5 w-5 shrink-0 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[27px] lg:w-[27px]"
            />

            <span className="hidden whitespace-nowrap text-xs sm:inline md:text-sm lg:text-[17px]">
              project
            </span>
          </button>

          {/* EMAIL */}

          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className={taskbarLinkClass}
          >
            <Image
              src="/icons/gmail.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
            />

            <span className="hidden whitespace-nowrap text-xs sm:inline md:text-sm lg:text-[17px]">
              email
            </span>
          </button>
        </div>

        {/* RIGHT XP STRIP */}

        <div className="ml-auto h-full w-3 shrink-0 bg-[#3872E3] sm:w-3 md:w-4" />
      </footer>

      {/* ===================================================== */}
      {/* CONTACT DIALOG */}
      {/* ===================================================== */}

      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* ===================================================== */}
      {/* RESUME DIALOG */}
      {/* ===================================================== */}

      <ResumeDialog
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* ===================================================== */}
      {/* ABOUT DIALOG */}
      {/* ===================================================== */}

      <AboutDialog
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      {/* ===================================================== */}
      {/* SKILLS DIALOG */}
      {/* ===================================================== */}

      <SkillsDialog
        open={skillsOpen}
        onClose={() => setSkillsOpen(false)}
      />

      {/* ===================================================== */}
      {/* EXPERIENCE DIALOG */}
      {/* ===================================================== */}

      <ExperienceDialog
        open={experienceOpen}
        onClose={() => setExperienceOpen(false)}
      />

      {/* ===================================================== */}
      {/* PROJECTS DIALOG */}
      {/* ===================================================== */}

      <ProjectsDialog
        open={projectsOpen}
        onClose={() => setProjectsOpen(false)}
      />
    </div>
  );
}
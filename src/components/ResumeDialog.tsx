"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type ResumeDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeDialog({
  open,
  onClose,
}: ResumeDialogProps) {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !windowRef.current) return;

    gsap.fromTo(
      windowRef.current,
      {
        opacity: 0,
        scale: 0.92,
        y: 15,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      },
    );
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/10 p-2 sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={windowRef}
        className="flex h-[calc(100dvh-70px)] max-h-[720px] w-full max-w-[760px] flex-col overflow-hidden border-2 border-[#0068d7] bg-[#ece9d8] shadow-[4px_5px_12px_rgba(0,0,0,0.45)]"
      >
        {/* TITLE BAR */}
        <div className="flex h-[44px] shrink-0 items-center justify-between bg-gradient-to-b from-[#4b8bea] via-[#2869dc] to-[#1760d8] px-2">
          <div className="flex min-w-0 items-center gap-2 text-white">
            <Image
              src="/icons/resume.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
            />

            <span className="truncate text-sm font-bold sm:text-base">
              Amira-Bouabdelli-CV.pdf
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Minimize"
              className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[3px] border border-white/70 bg-[#e92b2b] text-xs font-bold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] hover:brightness-110"
            >
              −
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[3px] border border-white/70 bg-[#e92b2b] text-xs font-bold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] hover:brightness-110"
            >
              ×
            </button>
          </div>
        </div>

        {/* MENU BAR */}
        <div className="flex h-[27px] shrink-0 items-center gap-6 border-b border-[#aaa] bg-[#d4d0c8] px-4 text-xs text-[#222] sm:text-sm">
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

        {/* TOOLBAR */}
        <div className="flex h-[38px] shrink-0 items-center justify-between border-b border-[#aaa] bg-[#e9e7d7] px-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="cursor-pointer rounded border border-transparent px-2 py-1 text-xs text-[#333] hover:border-[#aaa] hover:bg-white/60"
            >
              ←
            </button>

            <button
              type="button"
              className="cursor-pointer rounded border border-transparent px-2 py-1 text-xs text-[#333] hover:border-[#aaa] hover:bg-white/60"
            >
              →
            </button>
          </div>

          <a
            href="/Amira-Bouabdelli-CV.pdf"
            download="Amira-Bouabdelli-CV.pdf"
            className="cursor-pointer rounded-[3px] border border-[#003b9b] bg-gradient-to-b from-[#3c8af5] to-[#0753d5] px-4 py-1 text-xs text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.4)] transition hover:brightness-110 active:brightness-95"
          >
            Download
          </a>
        </div>

        {/* PDF */}
        <div className="min-h-0 flex-1 bg-[#808080] p-1">
          <iframe
            src="/Amira-Bouabdelli-CV.pdf"
            title="Amira Bouabdelli Resume"
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
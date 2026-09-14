"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
type Line = {
  text: string;
  type: "command" | "output" | "space" | "decor";
  delay?: number;
};

const lines: Line[] = [
  {
    text: "amira@space:~$ ./start_about.sh",
    type: "command",
  },
  {
    text: "[BOOT] Initializing amiraSpace...",
    type: "output",
    delay: 350,
  },
  {
    text: "[OK] Loading profile...",
    type: "output",
    delay: 300,
  },
  {
    text: "[OK] Loading skills...",
    type: "output",
    delay: 300,
  },
  {
    text: "[OK] Loading curiosity...",
    type: "output",
    delay: 300,
  },
  {
    text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    type: "decor",
    delay: 300,
  },
  {
    text: "amira@space:~$ whoami",
    type: "command",
    delay: 400,
  },
  {
    text: "Maroua Amira Bouabdelli",
    type: "output",
    delay: 350,
  },
  {
    text: "Computer Engineering Student @ ESI-SBA",
    type: "output",
    delay: 200,
  },
  {
    text: "",
    type: "space",
    delay: 300,
  },
  {
    text: "amira@space:~$ cat about.txt",
    type: "command",
    delay: 300,
  },
  {
    text: "I'm a computer engineering student who likes",
    type: "output",
    delay: 350,
  },
  {
    text: "turning ideas into things people can actually use.",
    type: "output",
    delay: 150,
  },
  {
    text: "",
    type: "space",
    delay: 250,
  },
  {
    text: "I enjoy building full-stack applications,",
    type: "output",
    delay: 250,
  },
  {
    text: "experimenting with AI & data science,",
    type: "output",
    delay: 150,
  },
  {
    text: "and exploring the weird side of computing.",
    type: "output",
    delay: 150,
  },
  {
    text: "",
    type: "space",
    delay: 300,
  },
  {
    text: "Currently learning.",
    type: "output",
    delay: 180,
  },
  {
    text: "Currently building.",
    type: "output",
    delay: 150,
  },
  {
    text: "Always curious.",
    type: "output",
    delay: 150,
  },
];

export default function AboutDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const windowRef = useRef<HTMLDivElement>(null);

  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) return;

    setVisibleLines([]);
    setTyping(true);
    setProgress(0);

    if (windowRef.current) {
      gsap.fromTo(
        windowRef.current,
        {
          opacity: 0,
          scale: 0.94,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }

    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
      });

    const typeText = async (text: string) => {
      let current = "";

      for (const char of text) {
        if (cancelled) return;

        current += char;

        setVisibleLines((prev) => {
          const copy = [...prev];

          if (copy.length === 0) {
            copy.push(current);
          } else {
            copy[copy.length - 1] = current;
          }

          return copy;
        });

        await sleep(18 + Math.random() * 22);
      }
    };

    const runTerminal = async () => {
      for (const line of lines) {
        if (cancelled) return;

        await sleep(line.delay ?? 180);

        if (line.type === "space") {
          setVisibleLines((prev) => [...prev, ""]);
          continue;
        }

        setVisibleLines((prev) => [...prev, ""]);

        if (line.type === "decor") {
          for (let i = 0; i <= 100; i += 5) {
            if (cancelled) return;

            setProgress(i);
            await sleep(25);
          }

          await typeText("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
          continue;
        }

        await typeText(line.text);
      }

      if (!cancelled) {
        setTyping(false);
      }
    };

    runTerminal();

    return () => {
      cancelled = true;
    };
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
        className="flex h-[calc(100dvh-70px)] max-h-[720px] w-full max-w-[760px] flex-col overflow-hidden border-2 border-[#0068d7] bg-black shadow-[4px_5px_12px_rgba(0,0,0,0.45)]"
      >
        {/* TITLE BAR */}
        <div className="flex h-[44px] shrink-0 items-center justify-between bg-gradient-to-b from-[#4b8bea] via-[#2869dc] to-[#1760d8] px-2">
          <div className="flex min-w-0 items-center gap-2 text-white">
            <Image
              src="/icons/aboutme.png"
              alt=""
                width={40}
                height={40}
              />

            <span className="truncate text-sm font-bold sm:text-base">
              About me
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

        {/* TERMINAL */}
        <div className="relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-black px-4 py-5 font-mono text-[14px] leading-7 sm:px-7 sm:py-6 sm:text-[16px]">
          {/* CORNERS */}
          <div className="pointer-events-none absolute left-2 top-2 h-8 w-8 border-l-2 border-t-2 border-[#32ff75]" />

          <div className="pointer-events-none absolute right-2 top-2 h-8 w-8 border-r-2 border-t-2 border-[#32ff75]" />

          <div className="pointer-events-none absolute bottom-2 left-2 h-8 w-8 border-b-2 border-l-2 border-[#32ff75]" />

          <div className="pointer-events-none absolute bottom-2 right-2 h-8 w-8 border-b-2 border-r-2 border-[#32ff75]" />

          {/* HEADER */}
          <div className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.25em] text-[#32ff75]/60 sm:text-xs">
            <span>AMIRASPACE</span>

            <span className="h-px flex-1 bg-[#32ff75]/30" />

            <span>ONLINE</span>
          </div>

          {/* ASCII */}
          <div className="mb-7 hidden whitespace-pre text-[8px] leading-[9px] text-[#32ff75]/70 sm:block">
{`       ___        _
      / _ \\ _ __ (_)_ __ __ _
     / /_)/ '_ \\| | '__/ _\` |
    / ___/| | | | | | | (_| |
    \\/    |_| |_|_|_|  \\__,_|

       A M I R A S P A C E`}
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            {visibleLines.map((line, index) => {
              const isCommand = line.startsWith("amira@space");
              const isDecor = line.startsWith("━");

              return (
                <div
                  key={index}
                  className={`min-h-[28px] max-w-full whitespace-pre-wrap break-words ${
                    isCommand
                      ? "text-[#d7d7d7]"
                      : isDecor
                        ? "text-[#32ff75]/60"
                        : "text-[#70ff9a]"
                  }`}
                >
                  {line}

                  {typing &&
                    index === visibleLines.length - 1 && (
                      <span className="ml-1 inline-block h-[16px] w-[8px] translate-y-[2px] animate-pulse bg-[#32ff75]" />
                    )}
                </div>
              );
            })}

            {/* PROGRESS */}
            {progress > 0 && progress < 100 && (
              <div className="my-3">
                <div className="mb-1 text-xs text-[#32ff75]/60">
                  system integrity
                </div>

                <div className="h-[6px] w-full max-w-[420px] border border-[#32ff75]/40 p-[1px]">
                  <div
                    className="h-full bg-[#32ff75] shadow-[0_0_8px_#32ff75]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {!typing && (
              <div className="mt-5 text-[#d7d7d7]">
                <span className="text-[#32ff75]">
                  amira@space:~$
                </span>{" "}
                <span className="animate-pulse">▋</span>
              </div>
            )}
          </div>

          {/* STATUS */}
          <div className="mt-10 flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#32ff75]/50 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#32ff75] shadow-[0_0_8px_#32ff75]" />

            <span>SESSION ACTIVE</span>

            <span className="h-px flex-1 bg-[#32ff75]/20" />

            <span>EOF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
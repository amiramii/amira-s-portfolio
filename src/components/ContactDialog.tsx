"use client";

import { useState } from "react";
import Image from "next/image";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDialog({
  open,
  onClose,
}: ContactDialogProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/10 p-3">
      {/* XP Window */}
      <div className="w-full max-w-[670px] overflow-hidden border-2 border-[#0068d7] bg-[#ece9d8] shadow-[4px_5px_12px_rgba(0,0,0,0.45)]">
        {/* ================= TITLE BAR ================= */}
        <div className="flex h-[44px] items-center justify-between bg-gradient-to-b from-[#4b8bea] via-[#2869dc] to-[#1760d8] px-2">
          <div className="flex min-w-0 items-center gap-2 text-white">
            <Image
              src="/icons/comment.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
            />

            <span className="truncate text-sm font-bold sm:text-base">
              Send me a message
            </span>
          </div>

          {/* Window controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex h-[20px] w-[20px] items-center justify-center rounded-[3px] border border-white/70 bg-[#e92b2b] text-xs font-bold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] hover:brightness-110"
              aria-label="Minimize"
            >
              −
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex h-[20px] w-[20px] items-center justify-center rounded-[3px] border border-white/70 bg-[#e92b2b] text-xs font-bold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] hover:brightness-110"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* ================= MENU BAR ================= */}
        <div className="flex h-[27px] items-center gap-6 border-b border-[#aaa] bg-[#d4d0c8] px-4 text-xs text-[#222] sm:text-sm">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
        </div>

        {/* ================= WINDOW CONTENT ================= */}
        <div className="flex min-h-[420px] flex-col gap-8 p-5 sm:p-7 md:flex-row md:gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-1 flex-col">
            <h2 className="max-w-[330px] text-2xl font-bold leading-tight text-[#004bc4] sm:text-3xl">
              Let&apos;s build something
              <br />
              creative, useful, or both.
            </h2>

            {/* Decorative icons */}
            <div className="mt-12 flex items-center justify-center gap-6 md:mt-auto md:justify-start md:pl-28">
              <Image
                src="/icons/ep_message.png"
                alt=""
                width={30}
                height={30}
              />
              <Image
                src="/icons/attach.png"
                alt="" 
                width={30}
                height={30}
              />
              <Image
                src="/icons/star.png"
                alt=""
                width={30}
                height={30}
              />
            </div>

            {/* Email */}
            <div className="mt-5 flex items-center justify-center md:justify-start">
              <a
                href="mailto:ma.bouabdelli@esi-sba.dz"
                className="rounded-[2px] border border-[#003b9b] bg-gradient-to-b from-[#3c8af5] to-[#0753d5] px-4 py-1 text-xs text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.4)] sm:text-sm"
              >
                ma.bouabdelli@esi-sba.dz
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full shrink-0 md:w-[290px]">
            <div className="overflow-hidden rounded-md border border-[#aaa] bg-[#e9e9e9] shadow-[2px_3px_7px_rgba(0,0,0,0.35)]">
              {/* Form title */}
              <div className="flex h-[34px] items-center justify-between bg-gradient-to-b from-[#4d8bec] via-[#2869dc] to-[#1760d8] px-2">
                <span className="text-sm font-bold text-white">
                  message
                </span>

                <Image
                  src="/icons/comment.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 p-4"
              >
                {/* Subject / Name */}
                <label className="flex flex-col gap-1 text-xs text-black">
                  Subject

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-[31px] w-full border border-[#ddd] bg-white px-3 text-xs text-black outline-none shadow-[inset_1px_1px_3px_rgba(0,0,0,0.12)] placeholder:text-[#999] focus:border-[#4b8bea]"
                    required
                  />
                </label>

                {/* Email */}
                <label className="flex flex-col gap-1 text-xs text-black">
                  Email

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-[31px] w-full border border-[#ddd] bg-white px-3 text-xs text-black outline-none shadow-[inset_1px_1px_3px_rgba(0,0,0,0.12)] placeholder:text-[#999] focus:border-[#4b8bea]"
                    required
                  />
                </label>

                {/* Message */}
                <label className="flex flex-col gap-1 text-xs text-black">
                  Message

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what you're working on..."
                    rows={4}
                    className="w-full resize-y border border-[#ddd] bg-white px-3 py-2 text-xs text-black outline-none shadow-[inset_1px_1px_3px_rgba(0,0,0,0.12)] placeholder:text-[#999] focus:border-[#4b8bea]"
                    required
                  />
                </label>

                {/* Status feedback */}
                {status === "success" && (
                  <p className="text-[11px] font-semibold text-[#1a7d3a]">
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[11px] font-semibold text-[#c22]">
                    {errorMessage}
                  </p>
                )}

                {/* Send */}
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="h-[27px] min-w-[94px] rounded-[3px] border border-[#1452b8] bg-gradient-to-b from-[#4388f1] via-[#1760dc] to-[#064cc7] px-5 text-xs font-semibold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_1px_3px_rgba(0,0,0,0.35)] hover:brightness-110 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "sending..." : "send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
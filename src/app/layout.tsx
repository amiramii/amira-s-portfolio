import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { Hind } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amiraSpace",
  description: "A space for my work — Bouabdelli Maroua Amira's portfolio",
};
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-family",
});
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hind.variable} font-hind h-full antialiased`}
    >
      <body className=" min-h-screen h-full bg-bg-color ">{children}</body>
    </html>
  );
}

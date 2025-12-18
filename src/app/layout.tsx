import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil Daksh - Full Stack Developer",
  description: "Portfolio of Nikhil Daksh - Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies",
  keywords: "Full Stack Developer, Next.js, React, Node.js, TypeScript, MongoDB, Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "auRAM – Memória para Humanos. Não para Algoritmos.",
  description:
    "auRAM é uma empresa de tecnologia em Santarém focada em memória aumentada para humanos, com produtos RAM pensados para a sua aura."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-[#0A0A0A] text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}


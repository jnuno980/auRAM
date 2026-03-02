import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "auRAM — Memória para Humanos. Não para Algoritmos.",
  description:
    "Landing page cinematográfica da auRAM, uma marca de tecnologia de memória premium com estética BlackGold."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-auram-black text-auram-white antialiased">
        {children}
      </body>
    </html>
  );
}


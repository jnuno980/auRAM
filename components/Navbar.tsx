"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Missão", href: "#missao" },
  { label: "Produtos", href: "#produtos" },
  { label: "Ética", href: "#etica" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-30 border-b border-white/5 bg-gradient-to-b from-black/40 via-black/10 to-transparent backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-auram-gold/60 bg-black/80 shadow-auram-glow">
            <Image
              src="/logo-auram.svg"
              alt="auRAM"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-auram-white/90">
              au
              <span className="bg-gradient-to-r from-auram-gold via-yellow-200 to-auram-gold bg-clip-text text-transparent">
                RAM
              </span>
            </span>
            <span className="text-[0.55rem] font-medium uppercase tracking-[0.25em] text-auram-white/40">
              Aumente a sua memória com aura
            </span>
          </div>
        </a>

        <ul className="hidden gap-8 text-xs font-medium uppercase tracking-[0.25em] text-auram-white/70 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative pb-1 transition-colors hover:text-auram-gold"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-auram-gold/80 transition-transform duration-300 ease-out hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}


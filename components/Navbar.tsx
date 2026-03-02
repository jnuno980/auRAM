"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "/#hero" },
  { label: "Missão", href: "/#missao" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Ética", href: "/#etica" },
  { label: "Projeto", href: "/#projeto" },
];

const sobreItems = [
  { label: "Organização", href: "/sobre/organizacao" },
  { label: "Equipa", href: "/sobre/equipa" },
  { label: "Marketing", href: "/sobre/marketing" },
  { label: "Ética & RSC", href: "/sobre/etica" },
  { label: "Cronograma", href: "/sobre/cronograma" },
  { label: "Infraestruturas", href: "/sobre/infraestruturas" },
];

export function Navbar() {
  const [sobreOpen, setSobreOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-30 border-b border-white/5 bg-gradient-to-b from-black/40 via-black/10 to-transparent backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        <ul className="hidden gap-8 text-xs font-medium uppercase tracking-[0.25em] text-auram-white/70 md:flex items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative pb-1 transition-colors hover:text-auram-gold"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-auram-gold/80 transition-transform duration-300 ease-out hover:scale-x-100" />
              </Link>
            </li>
          ))}

          {/* Sobre Nós dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setSobreOpen(true)}
            onMouseLeave={() => setSobreOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 pb-1 transition-colors hover:text-auram-gold focus:outline-none"
              aria-expanded={sobreOpen}
            >
              <span>SOBRE NÓS</span>
              <motion.span
                animate={{ rotate: sobreOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[0.6rem] opacity-60"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {sobreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-auram-glow"
                >
                  <div className="p-1.5 space-y-0.5">
                    {sobreItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-auram-white/60 transition-all hover:bg-auram-gold/10 hover:text-auram-gold"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

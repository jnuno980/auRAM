"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#mission", label: "Missão" },
  { href: "#products", label: "Produtos" },
  { href: "#ethics", label: "Ética" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 md:h-8 md:w-8">
            <Image
              src="/logo-auram.svg"
              alt="auRAM logo"
              fill
              priority
              sizes="2rem"
            />
          </div>
          <span className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-200">
            au<span className="text-auram-blue">RAM</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-slate-50"
            >
              <span>{link.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-auram-blue to-auram-blue-soft transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <Link
          href="#products"
          className="rounded-full bg-auram-blue px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-glow-blue transition hover:bg-auram-blue-soft"
        >
          Comprar RAM
        </Link>
      </nav>
    </header>
  );
}


import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Products } from "@/components/sections/Products";
import { Ethical } from "@/components/sections/Ethical";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <Ethical />
      <footer className="section-snap flex min-h-[40vh] items-center justify-center border-t border-slate-900 bg-black/80 px-4 py-10 text-xs text-slate-500 md:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} auRAM · Santarém.</p>
          <p className="text-[11px] text-slate-500">
            Construída com Next.js, TailwindCSS e Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}


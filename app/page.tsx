"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { RamCard } from "../components/RamCard";
import { ProductSection } from "../components/ProductSection";

const productSections = [
  {
    id: "auram-noob",
    label: 'auRAM "Noob" (DDR4)',
    size: "8GB / 16GB • 3200MHz",
    focus: "Upgrade para PCs de estudo e trabalho que estão lentos.",
    description:
      "Memória sem dissipador exagerado, focada em fiabilidade e baixo custo. Ideal para dar uma segunda vida a máquinas que ainda têm muito para dar.",
    price: "19,99€ (8GB) / 34,99€ (16GB)",
    note: "No mercado comum, estas memórias sobem de preço quando os chips são desviados para servidores de IA."
  },
  {
    id: "auram-pro",
    label: 'auRAM "Pro" Edition (DDR4 Gaming)',
    size: "16GB (2x8GB) / 32GB (2x16GB) • 3600MHz",
    focus: "Gamers que não querem pagar 'taxa de luxo'.",
    description:
      "Inclui um dissipador de calor em alumínio dourado inspirado no ouro (Au), preparado para sessões longas sem dramatizar o preço final.",
    price: "42,00€ (16GB Kit) / 78,00€ (32GB Kit)"
  },
  {
    id: "auram-hacker",
    label: 'auRAM "Hacker" (DDR5 Next‑Gen)',
    size: "16GB / 32GB • 5200MHz+",
    focus:
      "PCs de última geração — a mesma tecnologia que o mercado tenta reservar para IA e data centers.",
    description:
      "Módulos DDR5 de ponta pensados para criadores, developers e entusiastas. Tecnologia de última geração, reservada exclusivamente para pessoas físicas.",
    price: "55,00€ (16GB) / 99,00€ (32GB)",
    note: "No mercado atual, DDR5 é geralmente 20% a 30% mais caro devido à escassez criada pela corrida à IA."
  }
];

export default function Page() {
  return (
    <main className="auram-scroll-snap h-screen overflow-y-scroll bg-auram-black text-auram-white">
      <Navbar />

      {/* HERO */}
      <section
        id="hero"
        className="auram-section relative flex h-screen items-center bg-auram-black px-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-auram-radial-gold opacity-80" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center gap-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-auram-white/60">
                Tecnologia de memória • Estética BlackGold
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-6xl lg:text-7xl">
                Memória para Humanos.
                <br />
                <span className="text-auram-gold">Não para Algoritmos.</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-auram-white/70">
                auRAM é a primeira linha de memória desenhada para proteger a
                sua atenção, o seu tempo e o seu silêncio digital. Hardware
                cinemático para um futuro menos ruidoso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="relative overflow-hidden rounded-full border border-auram-gold/70 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-auram-white/90 transition-colors hover:bg-auram-gold hover:text-auram-black">
                Pré‑lançamento 2026
              </button>
              <span className="text-[0.7rem] uppercase tracking-[0.25em] text-auram-white/40">
                Série fundadora • Lotes limitados
              </span>
            </motion.div>
          </div>

          <div className="mt-10 flex-1 md:mt-0">
            <RamCard />
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section
        id="missao"
        className="auram-section relative flex h-screen items-center bg-auram-black px-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18),_transparent_60%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-auram-white/50">
              A Nossa Missão
            </p>
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">
              Performance humana,
              <br />
              <span className="text-auram-gold">
                sem resgate pela volatilidade do mercado.
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-auram-white/70">
              Na auRAM, acreditamos que a performance tecnológica não deve ser
              refém da volatilidade do mercado. A nossa missão é clara: combater
              a inflação dos preços de memória RAM e garantir que o hardware de
              alta velocidade seja acessível a todos. Trabalhamos diariamente
              para quebrar a barreira dos preços inflacionados, utilizando
              parcerias estratégicas e uma gestão de stock inteligente para
              proteger o seu orçamento. Não vendemos apenas componentes;
              entregamos o poder de upgrade sem os custos abusivos que o mercado
              tenta impor. Onde outros veem uma oportunidade de lucro na
              escassez, nós vemos um compromisso com a justiça tecnológica.
            </p>
            <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 text-[0.7rem] uppercase tracking-[0.25em] text-auram-white/45">
              <span className="border border-white/10 px-4 py-2">
                Acesso justo
              </span>
              <span className="border border-white/10 px-4 py-2">
                Transparência total
              </span>
              <span className="border border-white/10 px-4 py-2">
                Estabilidade de preços
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUTOS */}
      <div id="produtos">
        {productSections.map((section, index) => (
          <ProductSection key={section.id} index={index} {...section} />
        ))}
      </div>

      {/* ÉTICA */}
      <section
        id="etica"
        className="auram-section relative flex h-screen items-center bg-auram-black px-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(212,175,55,0.2),_transparent_65%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-auram-white/50">
              Garantia Ética
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Nenhuma linha de código oculta.
              <br />
              <span className="text-auram-gold">
                Nenhum dado vendido. Nunca.
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-auram-white/70">
              auRAM nasce com um manifesto simples: o seu hardware não está à
              venda. Sem telemetria disfarçada de “melhoria de experiência”, sem
              portas traseiras, sem coleta silenciosa. Só silêncio, estabilidade
              e respeito.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[0.7rem] uppercase tracking-[0.25em] text-auram-white/40">
              <span className="border border-white/10 px-4 py-2">
                Firmware auditável
              </span>
              <span className="border border-white/10 px-4 py-2">
                Zero telemetria
              </span>
              <span className="border border-white/10 px-4 py-2">
                Garantia anti‑rastreamento
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


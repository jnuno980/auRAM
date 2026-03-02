"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const measures = [
    {
        title: "Moratória de Venda Corporativa",
        description:
            "Bloqueio deliberado de ordens de compra em massa provenientes de domínios associados a centros de processamento de dados massivos. Esta atitude protege a disponibilidade de recursos para o utilizador comum.",
        tag: "Anti-especulação",
    },
    {
        title: "Programa \"RAM Cicla\"",
        description:
            "Sistema de incentivos onde o cliente entrega módulos de memória obsoletos para reciclagem certificada. Em troca, recebe um crédito direto na compra de novos componentes, reduzindo o impacto ambiental do lixo eletrónico na região.",
        tag: "Economia Circular",
    },
    {
        title: "Inclusão Tecnológica",
        description:
            "Reserva de uma quota mensal de produtos com descontos significativos (preço de custo) para estudantes bolseiros de cursos de informática, garantindo que as dificuldades financeiras não impedem a aprendizagem técnica.",
        tag: "Inclusão",
    },
    {
        title: "Literacia em Hardware",
        description:
            "Organização de workshops trimestrais abertos à comunidade, focados na manutenção de computadores para prolongar a vida útil das máquinas, combatendo a obsolescência programada.",
        tag: "Comunidade",
    },
];

export default function EticaPage() {
    return (
        <section className="relative min-h-screen px-6 py-24 bg-auram-black">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.15),_transparent_55%)]" />

            <div className="relative z-10 mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-12"
                >
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-auram-white/40">
                        <Link href="/" className="hover:text-auram-gold transition-colors">Início</Link>
                        <span>/</span>
                        <span className="text-auram-white/60">Ética & RSC</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">06 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Ética & Responsabilidade<br />
                            <span className="text-auram-gold">Social Corporativa</span>
                        </h1>
                        <p className="text-sm leading-relaxed text-auram-white/60 max-w-xl">
                            A auRAM reconhece o seu papel como agente de mudança social, implementando medidas que vão além do lucro.
                        </p>
                    </div>

                    {/* Measures */}
                    <div className="space-y-4">
                        {measures.map((m, i) => (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2 hover:border-auram-gold/30 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-auram-white">{m.title}</h3>
                                    <span className="rounded-full border border-auram-gold/30 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-auram-gold/70">
                                        {m.tag}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-auram-white/60">{m.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nav */}
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                        <Link href="/sobre/marketing" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            <span>←</span> Marketing
                        </Link>
                        <Link href="/sobre/cronograma" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            Cronograma <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const strategies = [
    {
        title: "Marketing de Defesa do Consumidor",
        description:
            "Campanhas digitais que expõem o desequilíbrio de preços causado pela IA. A mensagem central — \"Tecnologia por Humanos, para Humanos\" — posiciona a auRAM como um aliado ético do comprador individual.",
        icon: "📣",
    },
    {
        title: "Presença Orgânica em Redes Sociais",
        description:
            "Conteúdos educativos no TikTok e Instagram que ensinam os utilizadores a instalar e otimizar as suas memórias RAM, criando uma comunidade de suporte leal em torno da marca.",
        icon: "📲",
    },
    {
        title: "Ativação Local e Académica",
        description:
            "Balcões informativos temporários em escolas secundárias e institutos superiores da região de Santarém, oferecendo diagnósticos gratuitos de hardware e promovendo os benefícios para a comunidade estudantil.",
        icon: "🏫",
    },
    {
        title: "Transparência de Custos",
        description:
            "Divulgação pública da estrutura de custos da empresa para justificar o preço justo, contrastando-o com os preços especulativos praticados nos canais de distribuição convencionais.",
        icon: "📊",
    },
];

export default function MarketingPage() {
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
                        <span className="text-auram-white/60">Marketing</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">05 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Comunicação &<br />
                            <span className="text-auram-gold">Marketing Multicanal</span>
                        </h1>
                        <p className="text-sm leading-relaxed text-auram-white/60 max-w-xl">
                            Para competir com as grandes marcas globais, a auRAM adota uma estratégia de marketing de guerrilha e proximidade, focada na transparência.
                        </p>
                    </div>

                    {/* Strategies */}
                    <div className="space-y-4">
                        {strategies.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-auram-gold/30 transition-colors"
                            >
                                <span className="text-2xl">{s.icon}</span>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-semibold text-auram-white">{s.title}</h3>
                                    <p className="text-sm leading-relaxed text-auram-white/60">{s.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nav */}
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                        <Link href="/sobre/equipa" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            <span>←</span> Equipa
                        </Link>
                        <Link href="/sobre/etica" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            Ética <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const team = [
    {
        role: "Direção Executiva e Planeamento",
        title: "CEO",
        description:
            "Responsável pela coordenação geral do projeto, gestão de parcerias internacionais com fabricantes de semicondutores e definição das diretrizes éticas da empresa. Assegura que a visão de combate à inflação tecnológica se mantém em todas as decisões comerciais.",
    },
    {
        role: "Direção de Operações Técnicas",
        title: "CTO",
        description:
            "Especialista em arquitetura de sistemas, encarregue da supervisão do Laboratório de Integração SMT. Garante a conformidade dos módulos com as normas JEDEC e gere a transição tecnológica entre gerações (DDR4 → DDR5).",
    },
    {
        role: "Gabinete de Triagem e Verificação Ética",
        title: "Ética & Compliance",
        description:
            "Responsável pela validação rigorosa dos pedidos de aquisição, utilizando protocolos de verificação (análise de NIF individual e cartões de estudante) para impedir que o stock seja absorvido por algoritmos de compra automática ou empresas de IA.",
    },
    {
        role: "Sustentabilidade e Relações Locais",
        title: "RSC",
        description:
            "Gere o programa de economia circular e estabelece a ponte com a comunidade de Santarém, promovendo ações de formação e gerindo o processo de retoma de hardware obsoleto.",
    },
];

export default function EquipaPage() {
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
                        <span className="text-auram-white/60">Equipa</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">03 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Estrutura de<br />
                            <span className="text-auram-gold">Recursos Humanos</span>
                        </h1>
                        <p className="text-sm leading-relaxed text-auram-white/60 max-w-xl">
                            A organização da equipa foi desenhada para responder aos desafios técnicos e éticos do setor, dividindo as responsabilidades de forma a maximizar a eficiência operacional.
                        </p>
                    </div>

                    {/* Team cards */}
                    <div className="space-y-4">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2 hover:border-auram-gold/30 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full border border-auram-gold/40 px-3 py-0.5 text-[0.65rem] uppercase tracking-[0.25em] text-auram-gold">
                                        {member.title}
                                    </span>
                                </div>
                                <h3 className="text-sm font-semibold text-auram-white">{member.role}</h3>
                                <p className="text-sm leading-relaxed text-auram-white/60">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nav between pages */}
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                        <Link href="/sobre/organizacao" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            <span>←</span> Organização
                        </Link>
                        <Link href="/sobre/marketing" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            Marketing <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

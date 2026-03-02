"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
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
    image: "/auram-noob-ddr4-8-16gb.png"
  },
  {
    id: "auram-pro",
    label: 'auRAM "Pro" Edition (DDR4 Gaming)',
    size: "16GB (2x8GB) / 32GB (2x16GB) • 3600MHz",
    focus: "Gamers que não querem pagar 'taxa de luxo'.",
    description:
      "Inclui um dissipador de calor em alumínio dourado inspirado no ouro (Au), preparado para sessões longas sem dramatizar o preço final.",
    price: "42,00€ (16GB Kit) / 78,00€ (32GB Kit)",
    image: "/auram-pro-ddr4-gaming-16-32gb.png"
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
    image: "/auram-hacker-ddr5-16-32gb.png"
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22),_transparent_60%)]" />

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
                auRAM é a linha de memória que une circuitos dourados a uma aura
                de proteção: desempenho alto, estética cinematográfica e respeito
                absoluto pelo seu tempo e orçamento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="flex flex-wrap items-center gap-6"
            >
              <button className="relative overflow-hidden rounded-full border border-auram-bronze px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-auram-white/90 transition-all duration-300 bg-gradient-to-r from-auram-gold to-[#F9E076] hover:brightness-110 hover:shadow-auram-glow">
                Pré‑lançamento 2026
              </button>
              <span className="text-[0.7rem] uppercase tracking-[0.25em] text-auram-white/40">
                Série fundadora • Lotes limitados
              </span>
            </motion.div>
          </div>

          <div className="mt-10 flex-1 flex items-center justify-center md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-auram-gold/10 blur-3xl" />
              <Image
                src="/logoauram.png"
                alt="auRAM Logo"
                width={512}
                height={512}
                className="relative z-10 w-full h-auto drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section
        id="missao"
        className="auram-section relative flex h-screen items-center bg-auram-black px-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22),_transparent_60%)]" />

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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22),_transparent_60%)]" />

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

      {/* PROJETO EMPRESARIAL */}
      <section
        id="projeto"
        className="auram-section relative flex h-screen items-stretch bg-auram-black px-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22),_transparent_60%)]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col gap-8 py-28 md:py-32">
          <div className="space-y-3">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-auram-white/50">
              Projeto Empresarial
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-auram-white md:text-3xl">
              auRAM — Excelência tecnológica para a humanidade,
              <span className="text-auram-gold"> equidade no acesso para todos.</span>
            </h2>
          </div>

          <div className="grid flex-1 gap-8 overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-6 text-sm text-auram-white/75 backdrop-blur-md md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-8">
            <div className="space-y-6 overflow-y-auto pr-2">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  1. Identidade institucional
                </h3>
                <p>
                  <span className="font-semibold text-auram-white">Designação social:</span>{" "}
                  auRAM — fusão entre o símbolo químico do ouro (Au) e o acrónimo
                  tecnológico RAM (Random Access Memory).
                </p>
                <p>
                  <span className="font-semibold text-auram-white">Lema corporativo:</span>{" "}
                  &quot;Excelência Tecnológica para a Humanidade, Equidade no Acesso
                  para Todos.&quot;
                </p>
                <p>
                  A identidade visual representa um módulo de memória dourado, protegido
                  por uma barreira geométrica que simboliza a salvaguarda do consumidor
                  e a resistência à especulação de mercado.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  2. Descrição da organização
                </h3>
                <p>
                  A auRAM é uma entidade tecnológica sediada em Santarém, dedicada à
                  montagem e distribuição ética de memórias RAM. Nasce da constatação de
                  que a ascensão da IA desvia produção de semicondutores e inflaciona
                  preços para utilizadores domésticos e profissionais.
                </p>
                <p>
                  A empresa adota uma política de venda restritiva, excluindo grandes
                  conglomerados de IA e entidades especulativas, para garantir que o
                  meio académico, entusiastas e profissionais locais tenham acesso a
                  hardware de alto desempenho a custos otimizados.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  3. Recursos humanos e funções
                </h3>
                <ul className="space-y-1 pl-4 text-[0.9rem]">
                  <li>
                    <span className="font-semibold text-auram-white">
                      Direção Executiva (CEO):
                    </span>{" "}
                    coordena o projeto, gere parcerias com fabricantes e define as
                    diretrizes éticas, garantindo o combate à inflação tecnológica.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-white">
                      Direção de Operações Técnicas (CTO):
                    </span>{" "}
                    supervisiona o Laboratório SMT, assegura conformidade JEDEC e a
                    transição DDR4 → DDR5.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-white">
                      Gabinete de Triagem e Verificação Ética:
                    </span>{" "}
                    valida pedidos de compra (NIF, cartão de estudante, etc.) para
                    impedir absorção de stock por algoritmos ou infraestruturas de IA em
                    larga escala.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-white">
                      Responsável de Sustentabilidade e Relações Locais:
                    </span>{" "}
                    gere economia circular, retoma de hardware e ligação à comunidade de
                    Santarém.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  5. Comunicação e marketing
                </h3>
                <p>
                  A auRAM aposta em marketing de defesa do consumidor, expondo o impacto
                  da IA nos preços e reforçando a mensagem &quot;Tecnologia por Humanos,
                  para Humanos&quot;.
                </p>
                <p>
                  A marca constrói presença orgânica em redes sociais com conteúdo
                  educativo (instalação e otimização de RAM) e ativações locais em
                  escolas e institutos de Santarém, com diagnósticos gratuitos de
                  hardware.
                </p>
              </div>
            </div>

            <div className="space-y-6 overflow-y-auto pl-0 md:pl-4">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  4. Portefólio auRAM
                </h3>
                <ul className="space-y-2 pl-4 text-[0.9rem]">
                  <li>
                    <span className="font-semibold text-auram-gold">
                      auRAM &quot;Noob&quot; (DDR4 Standard):
                    </span>{" "}
                    revitalização de estações académicas e administrativas — 8GB / 16GB
                    3200MHz, 19,99€ / 34,99€.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-gold">
                      auRAM &quot;Pro&quot; Edition (DDR4 Gaming):
                    </span>{" "}
                    foco em gaming e edição de vídeo — kits 16GB / 32GB 3600MHz, com
                    dissipador dourado, 42€ / 78€.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-gold">
                      auRAM &quot;Hacker&quot; (DDR5 Next‑Gen):
                    </span>{" "}
                    DDR5 16GB / 32GB 5200MHz+, reservada a pessoas singulares, 55€ /
                    99€.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  6. Ética e responsabilidade social
                </h3>
                <ul className="space-y-2 pl-4 text-[0.9rem]">
                  <li>
                    <span className="font-semibold text-auram-white">
                      Moratória de venda corporativa:
                    </span>{" "}
                    bloqueio deliberado de compras em massa associadas a grandes
                    data‑centers.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-white">
                      Programa &quot;RAM Cicla&quot;:
                    </span>{" "}
                    retoma de módulos obsoletos com crédito direto na compra de novos
                    componentes.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-white">
                      Inclusão tecnológica:
                    </span>{" "}
                    quota mensal a preço de custo para estudantes bolseiros.
                  </li>
                  <li>
                    <span className="font-semibold text-auram-white">
                      Literacia em hardware:
                    </span>{" "}
                    workshops trimestrais abertos à comunidade.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/60">
                  7. Cronograma & infraestruturas
                </h3>
                <p>
                  Do mês 1 ao mês 4, o plano passa por: prospeção de fornecedores,
                  instalação do laboratório e certificação, lançamento da plataforma
                  online e, por fim, distribuição física e marketing de proximidade.
                </p>
                <p>
                  A sede no Santarém Business Center integra laboratório SMT,
                  bancadas de stress‑testing, centro de experiência e armazém logístico
                  inteligente, garantindo rastreio de stock e transparência operacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


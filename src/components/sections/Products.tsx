import Link from "next/link";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  ram: string;
  price: string;
  tone: string;
  description: string;
};

const products: Product[] = [
  {
    id: "ram-noob",
    name: "RAM NOOB",
    ram: "8GB",
    price: "150€",
    tone: "Para começar sem medo.",
    description:
      "Perfeito para quem está a dar os primeiros passos a libertar espaço mental. Mais memória para o essencial do dia."
  },
  {
    id: "ram-pro",
    name: "RAM PRO",
    ram: "16GB",
    price: "167€",
    tone: "Profissional sem drama.",
    description:
      "Para criadores, devs e mentes inquietas. Aguenta multi‑projetos, várias abas abertas e um cérebro focado."
  },
  {
    id: "ram-god",
    name: "RAM GOD",
    ram: "32GB",
    price: "267€",
    tone: "Modo divindade ligado.",
    description:
      "Quando o limite é só uma palavra. Projetos pesados, simulações, mundos inteiros abertos – sem perder o fio à meada."
  },
  {
    id: "ram-hacker",
    name: "RAM HACKER",
    ram: "67GB",
    price: "678€",
    tone: "Para quem vive fora da matriz.",
    description:
      "Configuração extrema para quem precisa de pensar em múltiplas camadas ao mesmo tempo. Sem registo, sem rastros."
  }
];

const productVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }
  }
};

export function Products() {
  return (
    <div id="products">
      {products.map((product, index) => (
        <motion.section
          key={product.id}
          className="section-snap relative flex min-h-screen items-center justify-center px-4 py-28 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={productVariants}
        >
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
          <div className="pointer-events-auto relative mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6 md:max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
                Linha auRAM · {index + 1}/4
              </p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                <span className="block text-auram-blue">{product.name}</span>
                <span className="block text-slate-100">{product.ram}</span>
              </h2>
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-auram-blue-soft">
                {product.tone}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
                {product.description}
              </p>
            </div>

            <div className="mt-4 flex w-full max-w-sm flex-col gap-5 rounded-3xl border border-slate-800 bg-black/70 p-6 shadow-glow-blue md:mt-0">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Investimento
                </span>
                <span className="text-xs text-slate-400">IVA incluído</span>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-semibold tracking-tight text-slate-50">
                  {product.price}
                </p>
                <p className="text-xs text-slate-400">
                  Pagamento único. Sem subscrições.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p>• Instalação assistida remota</p>
                <p>• Garantia de memória estável por 3 anos</p>
                <p>• Zero recolha de dados de utilização</p>
              </div>

              <Link
                href="#ethics"
                className="inline-flex items-center justify-center rounded-full bg-auram-blue px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-auram-blue-soft"
              >
                Comprar
              </Link>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}


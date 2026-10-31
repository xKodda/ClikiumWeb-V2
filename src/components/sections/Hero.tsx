"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = ["Software y web", "a la medida de", "tu negocio."];

const facts = [
  { title: "Un solo equipo", body: "Diseño, desarrollo y soporte bajo el mismo techo." },
  { title: "Código propio", body: "Nada de plantillas: cada proyecto se construye desde cero." },
  { title: "Respuesta en 24 h", body: "Conversación inicial sin costo y propuesta con precio cerrado." },
];

export function Hero() {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      {/* Fondo: retícula fina + luz de marca muy tenue */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(226_233_238/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_233_238/0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-700/25 blur-[140px]" />
      </div>

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-silver-400"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-300 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-300" />
          </span>
          Estudio digital · Santiago, Chile
        </motion.p>

        <h1 className="mt-8 text-[clamp(2.75rem,8.5vw,7.25rem)] font-medium leading-[0.95] tracking-[-0.045em] text-silver-50">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.09, ease }}
              >
                {i === 2 ? (
                  <>
                    tu <span className="text-brand-300">negocio.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="max-w-xl text-lg leading-relaxed text-silver-400 md:col-span-7 md:text-xl"
          >
            Diseñamos y desarrollamos sitios web, e&#8209;commerce, plataformas e integraciones para empresas de
            cualquier rubro. Con criterio de diseño y estándares de ingeniería.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"
          >
            <Button href="#contacto" arrow>
              Iniciar un proyecto
            </Button>
            <Button href="#trabajo" variant="secondary">
              Ver trabajo
            </Button>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-20 grid border-t hairline sm:grid-cols-3"
        >
          {facts.map((fact, i) => (
            <div
              key={fact.title}
              className="border-b hairline py-6 sm:border-b-0 sm:py-8 sm:pr-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-8"
            >
              <dt className="font-mono text-xs text-silver-500">0{i + 1}</dt>
              <dd className="mt-3">
                <span className="block text-lg font-medium text-silver-50">{fact.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-silver-500">{fact.body}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

    </section>
  );
}

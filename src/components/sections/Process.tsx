"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/content";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="proceso" aria-labelledby="proceso-title" className="relative bg-silver-50 py-24 text-ink-950 md:py-36">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 [--grid-line:rgb(7_17_31/0.04)] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />

      <Container className="relative">
        <SectionHeading
          id="proceso-title"
          tone="light"
          index="03"
          label="Proceso"
          title="Un proceso claro, de la primera conversación al lanzamiento."
          intro="Sabes en qué etapa está tu proyecto, qué viene después y cuándo."
        />

        <ol ref={ref} className="relative mt-14 grid md:mt-20 md:grid-cols-4 md:gap-8">
          {/* Línea de progreso: vertical en móvil, horizontal en escritorio */}
          <div aria-hidden className="absolute bottom-0 left-[5px] top-0 w-px bg-ink-950/10 md:bottom-auto md:left-0 md:right-0 md:h-px md:w-auto">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-brand-700 md:hidden" />
            <motion.div style={{ scaleX: progress }} className="hidden h-full w-full origin-left bg-brand-700 md:block" />
          </div>

          {process.map((step, i) => (
            <li key={step.title} className="relative pb-10 pl-9 last:pb-0 md:pb-0 md:pl-0 md:pt-10">
              <span aria-hidden className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-silver-50 bg-brand-700 md:-top-[5px]" />
              <Reveal delay={i * 0.08}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-silver-600">{step.duration}</span>
                </div>
                <h3 className="mt-3 text-balance text-2xl font-medium tracking-[-0.025em] md:mt-6">{step.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-silver-600">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-14 border-t hairline-dark pt-6 text-sm text-silver-600 md:mt-20">
          Plazos referenciales para un sitio corporativo. Cada propuesta define los tiempos de tu proyecto.
        </p>
      </Container>
    </section>
  );
}

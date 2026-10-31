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
    <section id="proceso" className="bg-silver-50 py-24 text-ink-950 md:py-36">
      <Container>
        <SectionHeading
          tone="light"
          index="03"
          label="Proceso"
          title="Un proceso claro, de la primera conversación al lanzamiento."
          intro="Sabes en qué etapa está tu proyecto, qué viene después y cuándo. Sin sorpresas en plazos ni en costos."
        />

        <ol ref={ref} className="relative mt-16 grid gap-12 md:mt-24 md:grid-cols-4 md:gap-8">
          {/* Línea de progreso */}
          <div aria-hidden className="absolute left-0 right-0 top-0 hidden h-px bg-ink-950/10 md:block">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-brand-700" />
          </div>

          {process.map((step, i) => (
            <li key={step.title} className="relative md:pt-10">
              <Reveal delay={i * 0.08}>
                <span aria-hidden className="absolute -top-[5px] left-0 hidden size-[11px] rounded-full border-2 border-silver-50 bg-brand-700 md:block" />
                <div className="flex items-baseline justify-between gap-4 border-t border-ink-950/10 pt-6 md:border-0 md:pt-0">
                  <span className="font-mono text-sm text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-silver-700">{step.duration}</span>
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-silver-700">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

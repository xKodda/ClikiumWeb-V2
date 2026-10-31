"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="preguntas" className="border-t hairline py-24 md:py-36">
      <Container>
        <SectionHeading index="05" label="Preguntas" title="Preguntas frecuentes." />

        <div className="mt-16 md:mt-24 md:grid md:grid-cols-12">
          <ul className="border-t hairline md:col-span-9 md:col-start-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={faq.q} className="border-b hairline">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium text-silver-50 transition-colors hover:text-white md:text-xl"
                    >
                      {faq.q}
                      <span aria-hidden className="relative grid size-6 shrink-0 place-items-center">
                        <span className="absolute h-px w-3.5 bg-silver-400" />
                        <span
                          className={clsx(
                            "absolute h-3.5 w-px bg-silver-400 transition-transform duration-300",
                            isOpen && "rotate-90",
                          )}
                        />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 leading-relaxed text-silver-400">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

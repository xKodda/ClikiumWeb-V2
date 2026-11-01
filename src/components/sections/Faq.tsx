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
    <section id="preguntas" aria-labelledby="preguntas-title" className="py-24 md:py-36">
      <Container>
        <SectionHeading
          id="preguntas-title"
          index="06"
          label="Preguntas"
          title="Preguntas frecuentes."
          intro={
            <>
              ¿No encuentras lo que buscas?{" "}
              <a href="#contacto" className="text-silver-50 underline decoration-silver-50/30 underline-offset-4 transition-colors hover:decoration-brand-300">
                Escríbenos
              </a>{" "}
              y te respondemos directamente.
            </>
          }
        />

        <div className="mt-14 md:mt-20 md:grid md:grid-cols-12">
          <ul className="border-t hairline md:col-span-9 md:col-start-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const buttonId = `${baseId}-q-${i}`;
              const panelId = `${baseId}-a-${i}`;
              return (
                <li key={faq.q} className="border-b hairline">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start gap-4 py-6 text-left md:gap-6 md:py-7"
                    >
                      <span aria-hidden className="w-6 shrink-0 pt-1.5 font-mono text-xs text-silver-500 md:pt-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={clsx(
                          "flex-1 text-pretty text-lg font-medium transition-colors duration-300 md:text-xl",
                          isOpen ? "text-silver-50" : "text-silver-200 group-hover:text-silver-50",
                        )}
                      >
                        {faq.q}
                      </span>
                      <span
                        aria-hidden
                        className={clsx(
                          "relative mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                          isOpen ? "border-brand-300/50" : "hairline group-hover:border-silver-100/30",
                        )}
                      >
                        <span className="absolute h-px w-3 bg-silver-200" />
                        <span
                          className={clsx(
                            "absolute h-3 w-px bg-silver-200 transition-transform duration-300",
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
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-10 pr-12 text-pretty leading-relaxed text-silver-300 md:pl-12">
                          {faq.a}
                        </p>
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

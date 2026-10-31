"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/content";

export function Industries() {
  const row = [...industries, ...industries];
  return (
    <section aria-label="Rubros con los que trabajamos" className="border-y hairline py-8">
      <p className="sr-only">Trabajamos con empresas de {industries.join(", ")} y más.</p>
      <div aria-hidden className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <motion.ul
          className="flex w-max gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row.map((name, i) => (
            <li key={i} className="flex items-center gap-12 whitespace-nowrap text-xl tracking-tight text-silver-500 md:text-2xl">
              {name}
              <span className="font-mono text-sm text-brand-500">{"{/}"}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

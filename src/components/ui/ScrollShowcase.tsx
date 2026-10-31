"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Inclina el contenido en perspectiva y lo endereza a medida que entra en pantalla. */
export function ScrollShowcase({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 25%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <div className="[perspective:1600px]">
      <motion.div ref={ref} style={{ scale, rotateX }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}

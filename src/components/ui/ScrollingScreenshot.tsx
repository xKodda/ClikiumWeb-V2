"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollingScreenshotProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

/**
 * Captura de página completa dentro de un marco fijo que se recorre sola:
 * con cursor, al pasar por encima (CSS); en pantallas táctiles, al hacer scroll.
 */
export function ScrollingScreenshot({ src, width, height, className }: ScrollingScreenshotProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const travel = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Distancia a recorrer = alto de la imagen escalada − alto del marco
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => travel.set(Math.max(0, (frame.clientWidth * height) / width - frame.clientHeight));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(frame);
    return () => ro.disconnect();
  }, [height, width, travel]);

  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start 85%", "end 15%"] });
  const scrollY = useTransform(() => -scrollYProgress.get() * travel.get());
  const touchScroll = !canHover && !reduceMotion;

  // Duración proporcional al largo de la página: velocidad de lectura constante
  const duration = Math.min(10, Math.max(3, (height / width) * 2.2));

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden bg-ink-950 [container-type:size] ${className ?? ""}`}
      style={{ "--scroll-duration": `${duration}s` } as React.CSSProperties}
    >
      <motion.div
        style={touchScroll ? { y: scrollY } : undefined}
        className="absolute inset-x-0 top-0 transition-[translate] duration-[1400ms] ease-out-expo will-change-transform group-hover:duration-[var(--scroll-duration)] group-hover:ease-in-out pointer-fine:group-hover:[translate:0_calc(-100%+100cqh)] motion-reduce:group-hover:[translate:none]"
      >
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          sizes="(min-width: 1240px) 1176px, calc(100vw - 2.5rem)"
          className="h-auto w-full"
        />
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Capa de retícula iluminada que sigue al cursor dentro de la sección contenedora.
 * Solo en dispositivos con cursor y sin preferencia de movimiento reducido.
 */
export function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const section = layer?.closest("section");
    if (!layer || !section) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = layer.getBoundingClientRect();
        layer.style.setProperty("--x", `${e.clientX - rect.left}px`);
        layer.style.setProperty("--y", `${e.clientY - rect.top}px`);
        layer.style.opacity = "1";
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      layer.style.opacity = "0";
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="grid-lines absolute inset-0 opacity-0 transition-opacity duration-700 [--grid-line:rgb(121_169_220/0.45)] [mask-image:radial-gradient(280px_circle_at_var(--x,50%)_var(--y,-20%),black,transparent)]"
    />
  );
}

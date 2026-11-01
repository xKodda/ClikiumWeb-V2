"use client";

import { useEffect, useState } from "react";

const GLYPHS = "{}/<>=_#*01";

type ScrambleTextProps = {
  text: string;
  /** Espera antes de empezar, en segundos (se suma la intro de marca si se muestra) */
  delay?: number;
  duration?: number;
  className?: string;
};

/**
 * Muestra el texto como caracteres de código que se resuelven de izquierda a derecha.
 * El texto final se reserva en el layout (sin saltos) y es lo que leen buscadores y lectores de pantalla.
 */
export function ScrambleText({ text, delay = 0, duration = 0.9, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const introDelay = document.documentElement.hasAttribute("data-intro") ? 0.75 : 0;
    const start = performance.now() + (delay + introDelay) * 1000;
    const scramble = (resolved: number) =>
      [...text]
        .map((ch, i) => (i < resolved || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
        .join("");

    let frame = 0;
    let last = 0;
    setDisplay(scramble(0));
    const tick = (now: number) => {
      const progress = Math.min(1, Math.max(0, (now - start) / (duration * 1000)));
      // ~20 cambios por segundo: legible, no frenético
      if (now - last > 50 || progress === 1) {
        setDisplay(progress === 1 ? text : scramble(Math.floor(progress * text.length)));
        last = now;
      }
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, delay, duration]);

  return (
    <span className={`inline-grid ${className ?? ""}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {text}
      </span>
      <span aria-hidden className="col-start-1 row-start-1">
        {display}
      </span>
    </span>
  );
}

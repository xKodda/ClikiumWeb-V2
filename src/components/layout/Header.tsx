"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

/** Devuelve el href de la sección visible en el centro de la pantalla. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = `#${entry.target.id}`;
          setActive((prev) => (entry.isIntersecting ? id : prev === id ? null : prev));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const toggle = toggleRef.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.matchMedia("(min-width: 768px)").matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open ? "border-b hairline bg-ink-950/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#" aria-label="Clikium, ir al inicio" onClick={() => setOpen(false)} className="-m-2 p-2">
          <Logo priority className="h-6 md:h-7" />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-3">
            {nav.map((item) => {
              const current = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={current ? "location" : undefined}
                    className={clsx(
                      "relative rounded-full px-3 py-2 text-sm transition-colors duration-300",
                      current ? "text-silver-50" : "text-silver-400 hover:text-silver-50",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={clsx(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-brand-300 transition-transform duration-500 ease-out-expo",
                        current ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="#contacto" className="h-10 px-5 text-sm">
            Hablemos
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="relative -mr-2 grid size-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={clsx(
              "absolute h-px w-5 bg-silver-100 transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-1",
            )}
          />
          <span
            className={clsx(
              "absolute h-px w-5 bg-silver-100 transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-1",
            )}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            id="menu-movil"
            aria-label="Menú móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <Container className="flex h-full flex-col justify-between overflow-y-auto pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-4">
              <ul className="border-t hairline">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    className="border-b hairline"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.href ? "location" : undefined}
                      className="flex items-baseline gap-4 py-4 text-[1.75rem] font-medium tracking-tight text-silver-50"
                    >
                      <span aria-hidden className="font-mono text-xs text-brand-300">
                        0{i + 1}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button href="#contacto" arrow onClick={() => setOpen(false)} className="mt-10">
                Hablemos de tu proyecto
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

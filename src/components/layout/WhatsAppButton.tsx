"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  const { scrollY } = useScroll();
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setPastHero(y > 600));

  // Se oculta en la sección de contacto para no tapar el formulario ni sus botones
  useEffect(() => {
    const contact = document.getElementById("contacto");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !atContact;

  return (
    <motion.a
      href={whatsappUrl("Hola Clikium, quiero conversar sobre un proyecto.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-13 items-center justify-center gap-2.5 rounded-full border hairline bg-ink-800/90 text-sm font-medium text-silver-100 shadow-2xl shadow-black/40 backdrop-blur-xl transition-colors hover:bg-ink-700 sm:bottom-8 sm:right-8 sm:size-auto sm:h-12 sm:pl-4 sm:pr-5"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="size-6 fill-[#25D366] sm:size-5">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.6 23.6l6-1.57a11.3 11.3 0 0 0 5.44 1.39h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.04" />
      </svg>
      <span className="sr-only sm:not-sr-only">WhatsApp</span>
    </motion.a>
  );
}

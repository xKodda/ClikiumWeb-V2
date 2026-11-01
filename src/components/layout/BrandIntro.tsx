/**
 * Intro de marca: las llaves del logo se abren y la cortina revela la página.
 * Se muestra solo si introScript marcó <html data-intro> (primera visita de la sesión,
 * sin movimiento reducido). Es CSS puro y nunca bloquea clics: ver .brand-intro en globals.css.
 */
export function BrandIntro() {
  return (
    <div aria-hidden className="brand-intro pointer-events-none fixed inset-0 z-[60] place-items-center bg-ink-950">
      <div className="flex flex-col items-center gap-6">
        <span className="flex font-mono text-[clamp(3.5rem,9vw,6rem)] font-medium leading-none tracking-[-0.06em]">
          <span className="intro-brace-l text-brand-300">{"{"}</span>
          <span className="intro-slash text-silver-50">/</span>
          <span className="intro-brace-r text-brand-300">{"}"}</span>
        </span>
        <span className="intro-word eyebrow text-silver-400">Clikium</span>
      </div>
    </div>
  );
}

/** Corre en <head> antes del primer pintado para decidir si mostrar la intro, sin parpadeos. */
export const introScript = `try{if(!sessionStorage.getItem("clk-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-intro","");sessionStorage.setItem("clk-intro","1")}}catch(e){}`;

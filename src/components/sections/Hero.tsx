import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridSpotlight } from "@/components/ui/GridSpotlight";
import { ScrambleText } from "@/components/ui/ScrambleText";

const headline = ["Tecnología diseñada", "para hacer avanzar", "tu negocio."];

const facts = [
  { title: "Diseño y desarrollo", body: "Un mismo equipo diseña, construye y mantiene tu proyecto." },
  { title: "A la medida", body: "Soluciones planteadas desde tu operación, no desde una plantilla." },
  { title: "Productos propios", body: "También creamos y operamos software propio, como AuraBook." },
];

// --intro-delay vale 0 salvo cuando se muestra la intro de marca (ver BrandIntro)
const delay = (s: number) => ({ animationDelay: `calc(var(--intro-delay, 0s) + ${s}s)` });

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grain relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-44">
      {/* Fondo: retícula de marca, retícula iluminada bajo el cursor y luz muy tenue */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
        <GridSpotlight />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-brand-700/15 blur-[140px]" />
      </div>

      <Container className="relative">
        <p style={delay(0)} className="eyebrow flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 text-silver-400">
          <span aria-hidden className="h-px w-6 bg-brand-300" />
          <span className="whitespace-nowrap">Software y soluciones digitales ·</span>
          <span className="whitespace-nowrap">Santiago, Chile</span>
        </p>

        {/* En móvil el titular fluye libre; desde md cada línea entra con máscara */}
        <h1
          id="hero-title"
          style={delay(0)}
          className="mt-7 animate-fade-up text-balance text-[clamp(2.6rem,7.6vw,6.75rem)] font-medium leading-[1.02] tracking-[-0.045em] text-silver-50 md:mt-9 md:animate-none md:leading-[0.98]"
        >
          {headline.map((line, i) => (
            <span key={line} className="md:block md:overflow-hidden md:pb-[0.08em]">
              <span className="md:block md:animate-rise" style={delay(0.08 + i * 0.08)}>
                {i === headline.length - 1 ? <ScrambleText text={line} delay={0.35} className="text-brand-300" /> : line}
              </span>{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end md:gap-10">
          <p
            className="max-w-xl animate-fade-up text-pretty text-lg leading-relaxed text-silver-300 md:col-span-7 md:text-xl"
            style={delay(0.4)}
          >
            Diseñamos y desarrollamos sitios web, plataformas digitales y soluciones a medida que conectan tecnología
            con necesidades reales.
          </p>
          <div
            className="flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap md:col-span-5 md:justify-end"
            style={delay(0.5)}
          >
            <Button href="#contacto" arrow>
              Hablemos de tu proyecto
            </Button>
            <Button href="#proyectos" variant="secondary">
              Explorar proyectos
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid animate-fade-up border-t hairline sm:grid-cols-3 md:mt-24" style={delay(0.7)}>
          {facts.map((fact, i) => (
            <div
              key={fact.title}
              className="border-b hairline py-5 last:border-b-0 sm:border-b-0 sm:py-8 sm:pr-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-8"
            >
              <dt className="flex items-baseline gap-3">
                <span aria-hidden className="font-mono text-xs text-brand-300">
                  0{i + 1}
                </span>
                <span className="text-base font-medium text-silver-50 md:text-lg">{fact.title}</span>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-silver-400 sm:pl-0">{fact.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

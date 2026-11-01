import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export function About() {
  const { photo } = about;
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="bg-silver-50 py-24 text-ink-950 md:py-36">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="order-last md:order-none md:col-span-5">
          <figure className="relative aspect-[16/11] md:aspect-[4/5] overflow-hidden rounded-xl bg-ink-950 md:rounded-2xl">
            {photo ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="size-full object-cover"
              />
            ) : (
              // Composición de marca mientras no haya fotografía real del equipo
              <div aria-hidden className="grid-lines absolute inset-0 grid place-items-center">
                <span className="font-mono text-[clamp(4rem,12vw,9rem)] font-medium tracking-[-0.06em] text-brand-700">
                  {"{/}"}
                </span>
              </div>
            )}
            <figcaption className="eyebrow absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-ink-950/80 to-transparent px-5 pb-5 pt-12 text-silver-200">
              <span>Clikium SpA</span>
              <span>Santiago, Chile</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <Reveal>
            <SectionLabel index="05" label="Quiénes somos" tone="light" />
            <h2
              id="nosotros-title"
              className="mt-6 max-w-[16ch] text-balance text-[clamp(2.125rem,4.6vw,3.75rem)] font-medium leading-[1.04] tracking-[-0.035em]"
            >
              Personas reales detrás de cada proyecto.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-silver-600">
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t hairline-dark pt-8 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-silver-600">{fact.label}</dt>
                  <dd className="mt-2 font-medium">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-ink-950/25 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-700"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

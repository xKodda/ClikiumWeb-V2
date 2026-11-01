import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities, services } from "@/lib/content";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-24 md:py-36">
      <Container>
        <SectionHeading
          id="servicios-title"
          index="01"
          label="Servicios"
          title={
            <>
              Soluciones digitales completas, <span className="text-silver-500">diseñadas y construidas por el mismo equipo.</span>
            </>
          }
        />

        <ol className="mt-14 border-t hairline md:mt-20">
          {services.map((service, i) => (
            <li key={service.title} className="border-b hairline">
              <Reveal delay={i * 0.04} y={14}>
                <article className="group relative grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-11">
                  {/* Trazo de marca que se extiende al pasar el cursor */}
                  <span
                    aria-hidden
                    className="absolute -top-px left-0 h-px w-0 bg-brand-300 transition-[width] duration-700 ease-out-expo group-hover:w-full"
                  />
                  <span className="font-mono text-sm text-silver-500 transition-colors duration-500 group-hover:text-brand-300 md:col-span-1 md:pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-balance text-2xl font-medium tracking-[-0.025em] text-silver-50 md:col-span-4 md:text-[2rem] md:leading-tight">
                    {service.title}
                  </h3>
                  <div className="md:col-span-7 md:pt-1.5">
                    <p className="max-w-xl text-pretty leading-relaxed text-silver-300">{service.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-silver-400">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span aria-hidden className="size-1 rounded-full bg-brand-300/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12">
          <p className="eyebrow text-silver-400 md:col-span-5 md:col-start-2">Además, en cada proyecto</p>
          <ul className="grid gap-8 sm:grid-cols-2 md:col-span-6 md:-ml-8">
            {capabilities.map((c) => (
              <li key={c.title}>
                <h3 className="font-medium text-silver-50">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{c.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

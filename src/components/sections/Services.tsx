import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-36">
      <Container>
        <SectionHeading
          index="01"
          label="Servicios"
          title={
            <>
              Todo lo que tu negocio necesita en digital,{" "}
              <span className="text-silver-500">diseñado y construido por el mismo equipo.</span>
            </>
          }
        />

        <ol className="mt-16 border-t hairline md:mt-24">
          {services.map((service, i) => (
            <li key={service.title} className="border-b hairline">
              <Reveal delay={i * 0.03} y={16}>
                <article className="group grid gap-4 py-8 transition-colors duration-500 md:grid-cols-12 md:gap-8 md:py-10">
                  <span className="font-mono text-sm text-silver-500 transition-colors duration-500 group-hover:text-brand-300 md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-silver-50 md:col-span-4 md:text-3xl">
                    {service.title}
                  </h3>
                  <div className="md:col-span-7">
                    <p className="max-w-xl leading-relaxed text-silver-400">{service.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border hairline px-3 py-1 text-xs text-silver-400 transition-colors duration-500 group-hover:border-brand-500/40 group-hover:text-silver-200"
                        >
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
      </Container>
    </section>
  );
}

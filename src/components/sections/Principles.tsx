import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { principles } from "@/lib/content";

export function Principles() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <SectionHeading
          index="04"
          label="Cómo trabajamos"
          title={
            <>
              Lo que puedes esperar de nosotros, <span className="text-silver-500">en cada proyecto.</span>
            </>
          }
        />

        <div className="mt-16 grid overflow-hidden rounded-2xl border hairline sm:grid-cols-2 md:mt-24">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className="group relative border-b hairline p-8 transition-colors duration-500 last:border-b-0 hover:bg-ink-900 sm:p-10 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span aria-hidden className="font-mono text-sm text-brand-500 transition-colors duration-500 group-hover:text-brand-300">
                {"{"} {String(i + 1).padStart(2, "0")} {"}"}
              </span>
              <h3 className="mt-10 text-2xl font-medium tracking-[-0.02em] text-silver-50">{p.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-silver-400">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

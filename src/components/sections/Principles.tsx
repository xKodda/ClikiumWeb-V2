import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { principles } from "@/lib/content";

export function Principles() {
  return (
    <section aria-labelledby="por-que-title" className="py-24 md:py-36">
      <Container>
        <SectionHeading
          id="por-que-title"
          index="04"
          label="Por qué Clikium"
          title={
            <>
              Lo que puedes esperar de nosotros, <span className="text-silver-500">en cada proyecto.</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-x-8 sm:grid-cols-2 md:mt-20 md:grid-cols-12">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="border-t hairline md:col-span-6 md:[&:nth-child(odd)]:col-span-5 md:[&:nth-child(odd)]:col-start-4 md:[&:nth-child(even)]:col-span-4"
            >
              <Reveal delay={(i % 2) * 0.06} className="group py-8 md:py-10">
                <span aria-hidden className="font-mono text-sm text-brand-500 transition-colors duration-500 group-hover:text-brand-300">
                  {"{"} {String(i + 1).padStart(2, "0")} {"}"}
                </span>
                <h3 className="mt-5 text-balance text-xl font-medium tracking-[-0.02em] text-silver-50 md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-pretty leading-relaxed text-silver-300">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

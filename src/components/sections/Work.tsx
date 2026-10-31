import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollShowcase } from "@/components/ui/ScrollShowcase";
import { Arrow } from "@/components/ui/Button";
import { featuredCase } from "@/lib/content";

export function Work() {
  const c = featuredCase;
  return (
    <section id="trabajo" className="border-t hairline bg-ink-900 py-24 md:py-36">
      <Container>
        <SectionHeading
          index="02"
          label="Trabajo"
          title="Proyectos en producción, no maquetas."
          intro="Cada proyecto se mide por lo que logra para el cliente una vez publicado. Este es uno de ellos."
        />

        <ScrollShowcase className="mt-16 origin-top md:mt-24">
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border hairline bg-ink-800 shadow-[0_40px_120px_-20px_rgb(0_0_0/0.7)]"
          >
            <div className="flex items-center gap-2 border-b hairline px-4 py-3">
              <span className="size-2.5 rounded-full bg-silver-700/60" />
              <span className="size-2.5 rounded-full bg-silver-700/60" />
              <span className="size-2.5 rounded-full bg-silver-700/60" />
              <span className="ml-3 truncate rounded-md bg-ink-950/60 px-3 py-1 font-mono text-[11px] text-silver-500">
                {c.url.replace("https://", "")}
              </span>
            </div>
            {/* Recorta la captura al área del hero del sitio */}
            <div className="relative aspect-[1424/676] overflow-hidden">
              <Image
                src="/realcars-preview.png"
                alt={`Sitio web de ${c.client}`}
                fill
                sizes="(min-width: 1240px) 1176px, 100vw"
                className="object-cover object-top transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
              />
            </div>

            <div className="grid gap-10 border-t hairline p-6 md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-silver-500">
                  <span className="inline-flex items-center gap-2 text-silver-200">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    En producción
                  </span>
                  {c.sector} · {c.year}
                </p>
                <h3 className="mt-4 flex items-center gap-3 text-3xl font-medium tracking-[-0.03em] text-silver-50 md:text-4xl">
                  {c.client}
                  <Arrow className="size-6 -rotate-45 text-silver-500 group-hover:text-silver-50" />
                </h3>
                <p className="mt-5 max-w-xl leading-relaxed text-silver-400">{c.summary}</p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-silver-500">Alcance</h4>
                  <ul className="mt-4 space-y-2 text-sm text-silver-200">
                    {c.scope.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-brand-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-silver-500">Tecnología</h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.stack.map((tech) => (
                      <li key={tech} className="rounded-md border hairline px-2.5 py-1 font-mono text-xs text-silver-400">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </a>
        </ScrollShowcase>
      </Container>
    </section>
  );
}

import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollShowcase } from "@/components/ui/ScrollShowcase";
import { ScrollingScreenshot } from "@/components/ui/ScrollingScreenshot";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { projects, type Project } from "@/lib/content";

export function Work() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="border-t hairline bg-ink-900 py-24 md:py-36">
      <Container>
        <SectionHeading
          id="proyectos-title"
          index="02"
          label="Proyectos y productos"
          title="Software en producción, no maquetas."
          intro="Proyectos que desarrollamos para clientes y productos propios que operamos a diario."
        />

        <div className="mt-14 space-y-24 md:mt-20 md:space-y-36">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.name} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectShowcase({ project: p, index }: { project: Project; index: number }) {
  const host = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const isProduct = p.kind === "product";

  return (
    <article aria-labelledby={`proyecto-${index}`}>
      <ScrollShowcase className="origin-top">
        {/* La captura enlaza al sitio; el enlace accesible principal está en el pie del proyecto */}
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className="group block overflow-hidden rounded-xl border hairline bg-ink-800 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.65)] md:rounded-2xl"
        >
          <div className="flex items-center gap-1.5 border-b hairline px-3 py-2.5 md:px-4 md:py-3">
            <span className="size-2 rounded-full bg-silver-700 md:size-2.5" />
            <span className="size-2 rounded-full bg-silver-700 md:size-2.5" />
            <span className="size-2 rounded-full bg-silver-700 md:size-2.5" />
            <span className="ml-2 truncate rounded-md bg-ink-950/60 px-3 py-1 font-mono text-[11px] text-silver-400 md:ml-3">
              {host}
            </span>
            <span className="eyebrow ml-auto hidden items-center gap-2 text-[10px] text-silver-500 transition-colors duration-500 group-hover:text-brand-300 pointer-fine:md:flex">
              <svg viewBox="0 0 12 12" aria-hidden className="size-3">
                <path d="M6 1.5v9M3 7.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Pasa el cursor para recorrer
            </span>
          </div>
          <ScrollingScreenshot
            src={p.image.src}
            width={p.image.width}
            height={p.image.height}
            className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[1424/740]"
          />
          <span className="sr-only">Vista del sitio {host}</span>
        </a>
      </ScrollShowcase>

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <p className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2 text-silver-400">
            <span
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border px-2.5 py-1",
                isProduct ? "border-brand-300/40 text-brand-300" : "hairline text-silver-200",
              )}
            >
              {isProduct ? "Producto propio" : "Proyecto de cliente"}
            </span>
            <span>
              {p.category}
              {p.year && ` · ${p.year}`}
            </span>
          </p>
          <h3
            id={`proyecto-${index}`}
            className="mt-5 text-[clamp(2rem,3.6vw,2.75rem)] font-medium leading-tight tracking-[-0.035em] text-silver-50"
          >
            {p.name}
          </h3>
          <div className="mt-8">
            <Button href={p.url} target="_blank" rel="noopener noreferrer" variant="secondary" arrow="external">
              Visitar {host}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7">
          <dl className="grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-silver-500">{isProduct ? "El problema" : "La necesidad"}</dt>
              <dd className="mt-3 text-pretty leading-relaxed text-silver-300">{p.need}</dd>
            </div>
            <div>
              <dt className="eyebrow text-silver-500">La solución</dt>
              <dd className="mt-3 text-pretty leading-relaxed text-silver-300">{p.solution}</dd>
            </div>
          </dl>

          <div className="mt-8 grid gap-8 border-t hairline pt-8 sm:grid-cols-2">
            <div>
              <h4 className="eyebrow text-silver-500">Funcionalidades</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-silver-200">
                {p.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-brand-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {p.stack && (
              <div>
                <h4 className="eyebrow text-silver-500">Tecnología</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <li key={tech} className="rounded-md border hairline px-2.5 py-1 font-mono text-xs text-silver-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

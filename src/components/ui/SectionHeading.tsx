import clsx from "clsx";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "dark" | "light";
  id?: string;
  className?: string;
};

/** Encabezado editorial: rótulo numerado a la izquierda, título e introducción a la derecha. */
export function SectionHeading({ index, label, title, intro, tone = "dark", id, className }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={clsx("grid gap-6 md:grid-cols-12 md:gap-8", className)}>
      <Reveal className="md:col-span-3">
        <SectionLabel index={index} label={label} tone={tone} />
      </Reveal>
      <div className="md:col-span-9">
        <Reveal delay={0.05}>
          <h2
            id={id}
            className={clsx(
              "max-w-[22ch] text-balance text-[clamp(2.125rem,4.6vw,3.75rem)] font-medium leading-[1.04] tracking-[-0.035em]",
              light ? "text-ink-950" : "text-silver-50",
            )}
          >
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p
              className={clsx(
                "mt-6 max-w-2xl text-pretty text-lg leading-relaxed",
                light ? "text-silver-600" : "text-silver-300",
              )}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

/** Rótulo "— 01 / Servicios" con el trazo de marca. */
export function SectionLabel({ index, label, tone = "dark" }: { index: string; label: string; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <p className={clsx("eyebrow flex items-baseline gap-3", light ? "text-brand-700" : "text-brand-300")}>
      <span aria-hidden className={clsx("h-px w-6 shrink-0 self-center", light ? "bg-brand-700" : "bg-brand-300")} />
      <span>
        <span className={clsx("whitespace-nowrap", light ? "text-silver-600" : "text-silver-400")}>{index} /</span>{" "}
        {label}
      </span>
    </p>
  );
}

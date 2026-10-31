import clsx from "clsx";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ index, label, title, intro, tone = "dark", className }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={clsx("grid gap-8 md:grid-cols-12", className)}>
      <Reveal className="md:col-span-3">
        <p className={clsx("font-mono text-xs uppercase tracking-[0.18em]", light ? "text-brand-700" : "text-brand-300")}>
          <span className="text-silver-500">{index} /</span> {label}
        </p>
      </Reveal>
      <div className="md:col-span-9">
        <Reveal delay={0.05}>
          <h2
            className={clsx(
              "text-balance text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl",
              light ? "text-ink-950" : "text-silver-50",
            )}
          >
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className={clsx("mt-6 max-w-2xl text-lg leading-relaxed", light ? "text-silver-700" : "text-silver-400")}>
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

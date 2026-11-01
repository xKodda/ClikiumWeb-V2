import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "dark" | "light";

const variants: Record<Tone, Record<Variant, string>> = {
  dark: {
    primary: "bg-silver-100 text-ink-950 hover:bg-white",
    secondary: "border hairline text-silver-100 hover:border-silver-100/35 hover:bg-silver-100/[0.04]",
    ghost: "text-silver-100 hover:text-white",
  },
  light: {
    primary: "bg-ink-950 text-silver-50 hover:bg-ink-800",
    secondary: "border hairline-dark text-ink-950 hover:border-ink-950/30 hover:bg-ink-950/[0.03]",
    ghost: "text-ink-950 hover:text-brand-700",
  },
};

/** Clases de botón, reutilizables en <a> y <button>. */
export function buttonClass(variant: Variant = "primary", tone: Tone = "dark", className?: string) {
  return clsx(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-[background-color,border-color,color,opacity] duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variants[tone][variant],
    className,
  );
}

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  tone?: Tone;
  arrow?: boolean | "external";
};

export function Button({ variant = "primary", tone = "dark", arrow, className, children, ...props }: ButtonProps) {
  return (
    <a className={buttonClass(variant, tone, className)} {...props}>
      {children}
      {arrow && <Arrow external={arrow === "external"} />}
    </a>
  );
}

export function Arrow({ className, external }: { className?: string; external?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={clsx(
        "size-4 shrink-0 transition-transform duration-300",
        external
          ? "-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          : "group-hover:translate-x-0.5",
        className,
      )}
    >
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

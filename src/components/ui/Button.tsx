import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-silver-100 text-ink-950 hover:bg-white",
  secondary: "border hairline text-silver-100 hover:border-silver-100/30 hover:bg-silver-100/[0.04]",
  ghost: "text-silver-100 hover:text-white",
};

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  arrow?: boolean;
};

export function Button({ variant = "primary", arrow, className, children, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={clsx("size-4 transition-transform duration-300 group-hover:translate-x-0.5", className)}
    >
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

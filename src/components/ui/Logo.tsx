import Image from "next/image";
import clsx from "clsx";

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/clikium-logo.png"
      alt="Clikium"
      width={341}
      height={84}
      priority={priority}
      className={clsx("h-7 w-auto", className)}
    />
  );
}

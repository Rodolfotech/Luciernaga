import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow-400";

const variants: Record<Variant, string> = {
  primary:
    "bg-glow-400 text-night-950 shadow-[0_0_24px_-4px_var(--color-glow-400)] hover:bg-glow-300 hover:shadow-[0_0_32px_-2px_var(--color-glow-300)]",
  secondary:
    "border border-night-600 text-mist-100 hover:border-glow-400 hover:text-glow-300",
};

export const buttonStyles = (variant: Variant = "primary") => `${base} ${variants[variant]}`;

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonStyles(variant)} ${className}`} {...props} />;
}

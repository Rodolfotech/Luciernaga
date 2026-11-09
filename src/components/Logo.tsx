import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 font-semibold tracking-tight">
      <span
        aria-hidden="true"
        className="relative flex size-3 items-center justify-center"
      >
        <span className="absolute size-3 rounded-full bg-glow-400 opacity-60 blur-[6px] transition group-hover:opacity-100" />
        <span className="relative size-2 rounded-full bg-glow-300" />
      </span>
      <span className="text-lg text-mist-100">{site.name}</span>
    </Link>
  );
}

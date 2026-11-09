import Link from "next/link";
import type { Service } from "@/lib/services";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-night-700 bg-night-900/60 p-8 transition hover:-translate-y-1 hover:border-glow-400/60 hover:shadow-[0_0_40px_-12px_var(--color-glow-400)]"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-night-800 text-glow-400 ring-1 ring-night-600 transition group-hover:ring-glow-400/50">
        <Icon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-mist-100">{service.title}</h3>
      <p className="mt-1 text-sm font-medium text-glow-300">{service.tagline}</p>
      <p className="mt-4 flex-1 leading-relaxed text-mist-300">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mist-100 group-hover:text-glow-300">
        Ver detalle
        <Icon name="arrow-right" className="size-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

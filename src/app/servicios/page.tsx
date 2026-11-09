import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Diseño gráfico, diseño web y diseño UX para empresas y pymes. Conoce qué incluye cada servicio.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Diseño que trabaja para tu negocio"
        description="Elige un servicio o combínalos. Todos parten de entender a tu empresa y a tus clientes."
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-8 rounded-3xl border border-night-700 bg-night-900/60 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-night-800 text-glow-400 ring-1 ring-night-600">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <span className="font-mono text-sm text-mist-400">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-mist-100 sm:text-3xl">{service.title}</h2>
                <p className="mt-1 font-medium text-glow-300">{service.tagline}</p>
                <p className="mt-4 leading-relaxed text-mist-300">{service.description}</p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 font-semibold text-mist-100 transition hover:text-glow-300"
                >
                  Conocer más sobre {service.title.toLowerCase()}
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-mist-300">
                    <Icon name="check" className="mt-0.5 size-5 shrink-0 text-glow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <CtaSection
        title="¿No sabes cuál necesitas?"
        description="Cuéntanos qué quieres lograr y te recomendamos la combinación que mejor se ajusta a tu negocio y presupuesto."
        label="Hablemos"
      />
    </>
  );
}

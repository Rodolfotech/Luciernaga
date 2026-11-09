import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Servicio no encontrado" };
  return { title: service.title, description: service.summary };
}

export default async function ServicioPage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHeader eyebrow={service.tagline} title={service.title} description={service.summary} />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-mist-100">¿En qué consiste?</h2>
            <p className="mt-4 text-lg leading-relaxed text-mist-300">{service.description}</p>

            <h2 className="mt-12 text-2xl font-semibold text-mist-100">Qué incluye</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-night-700 bg-night-900/60 p-4 text-mist-300"
                >
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-glow-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit space-y-8 rounded-3xl border border-night-700 bg-night-900/60 p-8 lg:sticky lg:top-24">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-glow-400">Ideal para</h2>
              <p className="mt-3 leading-relaxed text-mist-300">{service.idealFor}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-glow-400">Recibes</h2>
              <ul className="mt-3 space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-mist-300">
                    <Icon name="sparkle" className="mt-1 size-4 shrink-0 text-glow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink href={`/contacto?servicio=${service.slug}`} className="w-full">
              Cotizar {service.title.toLowerCase()}
            </ButtonLink>
          </aside>
        </Container>
      </section>

      <section className="border-t border-night-800 py-20 sm:py-24">
        <Container>
          <h2 className="text-2xl font-semibold text-mist-100">Otros servicios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

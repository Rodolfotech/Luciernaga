import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormSkeleton } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos sobre tu proyecto de diseño gráfico, web o UX y recibe una propuesta sin compromiso.",
};

const contactItems = [
  { icon: "mail" as const, label: "Correo", value: site.email, href: `mailto:${site.email}` },
  {
    icon: "phone" as const,
    label: "Teléfono / WhatsApp",
    value: site.phone,
    href: phoneHref(site.phone),
  },
  { icon: "map-pin" as const, label: "Ubicación", value: site.location },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        description="Completa el formulario y te responderemos en menos de 48 horas hábiles con los siguientes pasos."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-mist-100">Otras formas de contactarnos</h2>
              <p className="mt-3 leading-relaxed text-mist-300">
                Si prefieres, escríbenos directamente. Atendemos de lunes a viernes, de 9:00 a 18:00.
              </p>
            </div>
            <ul className="space-y-4">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-night-800 text-glow-400 ring-1 ring-night-600">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <p className="text-sm text-mist-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-mist-100 transition hover:text-glow-300">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-mist-100">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* El formulario lee ?servicio= de la URL, por eso va dentro de Suspense */}
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

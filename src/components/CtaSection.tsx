import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { Fireflies } from "./Fireflies";

interface CtaSectionProps {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
}

export function CtaSection({
  title = "¿Listo para que tu marca brille?",
  description = "Cuéntanos sobre tu proyecto y te respondemos en menos de 48 horas hábiles con una propuesta inicial, sin compromiso.",
  href = "/contacto",
  label = "Solicitar cotización",
}: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-night-700 bg-gradient-to-br from-night-800 to-night-900 px-6 py-16 text-center sm:px-16">
          <Fireflies />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-mist-100 text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-mist-300 text-pretty">{description}</p>
            <ButtonLink href={href} className="mt-8">
              {label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

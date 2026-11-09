import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { Fireflies } from "@/components/Fireflies";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

const reasons = [
  {
    title: "Pensado para pymes",
    text: "Planes claros y entregas por etapas, para que inviertas según el momento de tu negocio.",
  },
  {
    title: "Un solo equipo",
    text: "Marca, web y experiencia de usuario bajo una misma mirada: todo se ve y se siente coherente.",
  },
  {
    title: "Decisiones con razones",
    text: "Cada propuesta se basa en tus objetivos y en tus clientes, no solo en tendencias.",
  },
  {
    title: "Acompañamiento real",
    text: "Te explicamos cada paso y te dejamos preparado para gestionar lo que entregamos.",
  },
];

const steps = [
  { title: "Conversamos", text: "Entendemos tu negocio, tus clientes y qué necesitas lograr." },
  { title: "Proponemos", text: "Te presentamos una propuesta con alcance, plazos y presupuesto." },
  { title: "Diseñamos", text: "Creamos y ajustamos contigo en rondas de revisión acordadas." },
  { title: "Entregamos", text: "Publicamos o entregamos los archivos finales y te capacitamos." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-400/10 blur-3xl"
        />
        <Fireflies />
        <Container className="relative py-24 text-center sm:py-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-night-700 bg-night-900/70 px-4 py-1.5 text-sm text-mist-300">
            <Icon name="sparkle" className="size-4 text-glow-400" />
            Diseño gráfico · Diseño web · Diseño UX
          </p>
          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-mist-100 text-balance sm:text-6xl">
            Hacemos que tu marca <span className="glow-text">brille</span> donde están tus clientes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist-300 text-pretty sm:text-xl">
            Ayudamos a empresas que buscan renovar su imagen y a pymes que quieren su primera página
            profesional a verse confiables, claras y memorables.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contacto">
              Cotiza tu proyecto
              <Icon name="arrow-right" className="size-4" />
            </ButtonLink>
            <ButtonLink href="/servicios" variant="secondary">
              Ver servicios
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Servicios */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que tu marca necesita para destacar"
            description="Tres especialidades que funcionan por separado o en conjunto, según la etapa de tu negocio."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Por qué */}
      <section className="border-y border-night-800 bg-night-900/40 py-20 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="Por qué Luciérnaga"
            title="Una luz clara en medio de tanto ruido"
            description="Las luciérnagas no compiten por ser las más grandes: destacan porque brillan. Eso buscamos para tu marca."
          />
          <dl className="grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <dt className="flex items-center gap-3 font-semibold text-mist-100">
                  <span className="flex size-7 items-center justify-center rounded-full bg-glow-400/15 text-glow-400">
                    <Icon name="check" className="size-4" />
                  </span>
                  {reason.title}
                </dt>
                <dd className="mt-2 pl-10 leading-relaxed text-mist-300">{reason.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Proceso */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Un proceso simple, sin sorpresas"
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-night-700 bg-night-900/60 p-6">
                <span className="font-mono text-sm text-glow-400">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-mist-100">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-mist-300">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

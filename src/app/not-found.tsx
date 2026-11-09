import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Fireflies } from "@/components/Fireflies";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Fireflies />
      <Container className="relative py-32 text-center">
        <p className="font-mono text-sm text-glow-400">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-mist-100 sm:text-5xl">
          Esta página se apagó
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-mist-300">
          No encontramos lo que buscabas. Puede que el enlace esté roto o que la página ya no exista.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/servicios" variant="secondary">
            Ver servicios
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

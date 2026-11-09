import { Container } from "./Container";
import { Fireflies } from "./Fireflies";
import { SectionHeading } from "./SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-night-800 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl rounded-full bg-glow-400/10 blur-3xl"
      />
      <Fireflies />
      <Container className="relative">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
      </Container>
    </section>
  );
}

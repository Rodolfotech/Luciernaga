import Link from "next/link";
import { services } from "@/lib/services";
import { phoneHref, site } from "@/lib/site";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  const telHref = phoneHref(site.phone);
  return (
    <footer className="border-t border-night-800 bg-night-900/50">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-sm leading-relaxed text-mist-400">{site.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-mist-100">Servicios</h2>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-mist-400 transition hover:text-glow-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-mist-100">Contacto</h2>
          <ul className="mt-4 space-y-3 text-mist-400">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition hover:text-glow-300">
                <Icon name="mail" className="size-4 shrink-0" />
                <span className="break-all">{site.email}</span>
              </a>
            </li>
            <li>
              {telHref ? (
                <a href={telHref} className="inline-flex items-center gap-2 transition hover:text-glow-300">
                  <Icon name="phone" className="size-4" />
                  {site.phone}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Icon name="phone" className="size-4" />
                  {site.phone}
                </span>
              )}
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon name="map-pin" className="size-4" />
              {site.location}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-night-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-mist-400 sm:flex-row">
          <p>
            © <CurrentYear /> {site.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Pie de página" className="flex gap-6">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-glow-300">
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}

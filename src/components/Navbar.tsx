"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { buttonStyles } from "./ButtonLink";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Cierra el menú móvil al cambiar de ruta (ajuste de estado durante el render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const linkClass = (href: string) =>
    `text-sm font-medium transition hover:text-glow-300 ${
      isActive(pathname, href) ? "text-glow-400" : "text-mist-300"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-night-800/80 bg-night-950/80 backdrop-blur-md">
      <Container>
        <nav aria-label="Principal" className="flex h-16 items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href="/contacto" className={`${buttonStyles("primary")} px-5! py-2!`}>
              Cotizar proyecto
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-lg p-2 text-mist-100 hover:bg-night-800 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-night-800 md:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 ${linkClass(item.href)} hover:bg-night-800`}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

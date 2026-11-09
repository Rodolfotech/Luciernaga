# MEMORY.md
Luciérnaga — memoria del proyecto entre sesiones. Máximo 50 líneas.

## Estado actual (2026-11-09)
- Sitio v1 funcionando: Next.js 16.4.5 + React 19.3 + Tailwind v4, pnpm, Netlify.
- Rutas: `/` (home), `/servicios`, `/servicios/[slug]` (diseno-grafico, diseno-web, diseno-ux), `/contacto`, 404.
- Componentes en `src/components/`: Navbar, Footer, Container, ButtonLink, SectionHeading,
  PageHeader, ServiceCard, CtaSection, Fireflies, Icon, Logo, ContactForm.
- Datos en `src/lib/` (services.ts, site.ts) y validación pura en contact-validation.ts (7 tests, `pnpm test`).

## Decisiones y por qué
- Servicios en un arreglo de datos: una sola fuente para home, listado, detalle y footer.
- Estático: todas las páginas se prerenderizan (cacheComponents). Dinámico: detalle por slug
  con generateStaticParams + notFound(), y formulario con Server Action + useActionState.
- `?servicio=slug` preselecciona el servicio en el formulario; va dentro de <Suspense> porque lee la URL.
- Año del footer con `"use cache"`: con cacheComponents, `new Date()` sin caché rompe el prerender.
- Estética "noche + luciérnaga": colores night/glow/mist definidos en @theme de globals.css.

## Aprendizajes y errores a evitar
- Con cacheComponents NO usar `dynamicParams` ni `runtime`; generateStaticParams debe devolver ≥1 valor.
- Slugs inválidos muestran la 404 con `noindex`, pero responden HTTP 200 (streaming PPR). Es esperado.
- No mezclar `hidden` con un estilo que ya trae `inline-flex`: gana inline-flex. Envolver en un div.
- Tailwind v4: importante se escribe `px-5!`, no `!px-5`.

## Próximos pasos
- Conectar el formulario a un envío real de correo (Resend u otro); hoy solo valida y registra en consola.
- Correo real: ventas.luciernaga.cl@gmail.com. Ubicación: "Chile". Teléfono pendiente
  (marcador "xx xxxxxxx"; el enlace tel: se activa solo cuando haya números, ver phoneHref en site.ts).
- Agregar portafolio / casos de éxito, favicon propio y sitemap.
- Escribir specs/001-sitio-base/spec.md para formalizar el flujo SDD.

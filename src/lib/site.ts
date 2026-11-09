export const site = {
  name: "Luciérnaga",
  description:
    "Estudio de diseño gráfico, diseño web y diseño UX para empresas y pymes que buscan una imagen profesional.",
  email: "ventas.luciernaga.cl@gmail.com",
  phone: "xx xxxxxxx",
  location: "Chile",
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ],
} as const;

/** Enlace tel: solo si el teléfono tiene números reales; si es un marcador, no hay enlace. */
export function phoneHref(phone: string): string | undefined {
  const digits = phone.replace(/[^\d+]/g, "");
  return /\d{6,}/.test(digits) ? `tel:${digits}` : undefined;
}

export type ServiceSlug = "diseno-grafico" | "diseno-web" | "diseno-ux";

export type IconName = "palette" | "monitor" | "compass";

export interface Service {
  slug: ServiceSlug;
  title: string;
  icon: IconName;
  tagline: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    slug: "diseno-grafico",
    title: "Diseño Gráfico",
    icon: "palette",
    tagline: "Una identidad que se recuerda",
    summary:
      "Logotipos, identidad visual y piezas gráficas que comunican quién eres desde el primer vistazo.",
    description:
      "Construimos o renovamos la identidad visual de tu marca para que sea coherente en cada punto de contacto: desde la tarjeta de presentación hasta las redes sociales. Partimos de entender tu negocio y a tu cliente para que cada decisión visual tenga una razón.",
    features: [
      "Diseño o rediseño de logotipo",
      "Paleta de colores y tipografías",
      "Manual de marca",
      "Papelería corporativa",
      "Piezas para redes sociales",
      "Material impreso y presentaciones",
    ],
    deliverables: [
      "Archivos del logo en todos los formatos (SVG, PNG, PDF)",
      "Manual de marca en PDF",
      "Plantillas editables para redes sociales",
    ],
    idealFor:
      "Empresas que estrenan marca o pymes cuya imagen actual ya no refleja lo que son hoy.",
  },
  {
    slug: "diseno-web",
    title: "Diseño Web",
    icon: "monitor",
    tagline: "Tu mejor vendedor, abierto 24/7",
    summary:
      "Sitios web profesionales, rápidos y adaptados a móviles, pensados para convertir visitas en clientes.",
    description:
      "Diseñamos y desarrollamos sitios web a medida que transmiten confianza y facilitan que tus clientes te contacten. Cada sitio se entrega optimizado para móviles, con buenas prácticas de SEO y listo para crecer junto a tu negocio.",
    features: [
      "Sitios corporativos y landing pages",
      "Diseño adaptable a móviles y tablets",
      "Optimización de velocidad y SEO básico",
      "Formularios de contacto e integración con WhatsApp",
      "Panel para editar contenidos",
      "Publicación y configuración de dominio",
    ],
    deliverables: [
      "Sitio web publicado y funcionando",
      "Acceso de administración a tu contenido",
      "Capacitación para gestionar el sitio",
    ],
    idealFor:
      "Pymes que necesitan su primera página profesional o empresas con un sitio desactualizado.",
  },
  {
    slug: "diseno-ux",
    title: "Diseño UX",
    icon: "compass",
    tagline: "Productos fáciles de usar",
    summary:
      "Investigación, prototipos y pruebas con usuarios para que tu producto digital sea simple e intuitivo.",
    description:
      "Analizamos cómo las personas usan tu sitio, aplicación o sistema y detectamos dónde se frustran o abandonan. Con esa información diseñamos flujos y prototipos que validamos con usuarios reales antes de invertir en desarrollo.",
    features: [
      "Entrevistas e investigación con usuarios",
      "Auditoría de usabilidad",
      "Arquitectura de información",
      "Wireframes y prototipos interactivos",
      "Pruebas de usabilidad",
      "Diseño de interfaces (UI)",
    ],
    deliverables: [
      "Informe de hallazgos y recomendaciones",
      "Prototipo navegable",
      "Diseños finales listos para desarrollo",
    ],
    idealFor:
      "Empresas con un producto digital que quieren mejorar la conversión o reducir el soporte.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

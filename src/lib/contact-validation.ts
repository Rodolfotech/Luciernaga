// Lógica pura de validación del formulario de contacto (sin efectos secundarios).

export const SERVICE_OPTIONS = [
  "diseno-grafico",
  "diseno-web",
  "diseno-ux",
  "otro",
] as const;

export interface ContactInput {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LIMITS = {
  nameMax: 80,
  companyMax: 100,
  messageMin: 10,
  messageMax: 2000,
} as const;

export function normalizeContact(raw: Partial<Record<string, unknown>>): ContactInput {
  const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  return {
    name: text(raw.name),
    email: text(raw.email).toLowerCase(),
    company: text(raw.company),
    service: text(raw.service),
    message: text(raw.message),
  };
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  if (input.name.length === 0) {
    errors.name = "Ingresa tu nombre.";
  } else if (input.name.length > LIMITS.nameMax) {
    errors.name = `El nombre no puede superar ${LIMITS.nameMax} caracteres.`;
  }

  if (input.email.length === 0) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_PATTERN.test(input.email)) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (input.company.length > LIMITS.companyMax) {
    errors.company = `El nombre de la empresa no puede superar ${LIMITS.companyMax} caracteres.`;
  }

  if (!(SERVICE_OPTIONS as readonly string[]).includes(input.service)) {
    errors.service = "Selecciona el servicio que te interesa.";
  }

  if (input.message.length < LIMITS.messageMin) {
    errors.message = `Cuéntanos un poco más (mínimo ${LIMITS.messageMin} caracteres).`;
  } else if (input.message.length > LIMITS.messageMax) {
    errors.message = `El mensaje no puede superar ${LIMITS.messageMax} caracteres.`;
  }

  return errors;
}

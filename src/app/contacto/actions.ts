"use server";

import {
  type ContactErrors,
  type ContactInput,
  normalizeContact,
  validateContact,
} from "@/lib/contact-validation";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactErrors;
  values?: ContactInput;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Campo trampa: los humanos no lo ven; si viene con contenido, es un bot.
  if (typeof formData.get("website") === "string" && formData.get("website") !== "") {
    return { status: "success", message: "¡Gracias! Te responderemos pronto." };
  }

  const input = normalizeContact(Object.fromEntries(formData));
  const errors = validateContact(input);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      errors,
      values: input,
    };
  }

  // TODO: conectar con un servicio de correo (p. ej. Resend) o un CRM.
  console.info("[contacto] nueva solicitud", {
    email: input.email,
    service: input.service,
  });

  return {
    status: "success",
    message: `¡Gracias, ${input.name}! Recibimos tu mensaje y te responderemos en menos de 48 horas hábiles.`,
  };
}

"use client";

import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { type ContactState, submitContact } from "@/app/contacto/actions";
import { LIMITS, SERVICE_OPTIONS } from "@/lib/contact-validation";
import { services } from "@/lib/services";
import { buttonStyles } from "./ButtonLink";
import { Icon } from "./Icon";

const initialState: ContactState = { status: "idle" };

const serviceLabels: Record<string, string> = {
  ...Object.fromEntries(services.map((s) => [s.slug, s.title])),
  otro: "Otro / aún no lo sé",
};

const inputClass =
  "mt-2 block w-full rounded-xl border border-night-600 bg-night-900 px-4 py-3 text-mist-100 placeholder:text-mist-400 transition focus:border-glow-400 focus:outline-none focus:ring-2 focus:ring-glow-400/30 aria-[invalid=true]:border-red-400";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-300">
      {message}
    </p>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("servicio") ?? "";
  const preselected = (SERVICE_OPTIONS as readonly string[]).includes(requested) ? requested : "";

  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const values = state.values;
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-glow-400/40 bg-night-900/60 p-10 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-glow-400/15 text-glow-400">
          <Icon name="check" className="size-7" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold text-mist-100">Mensaje enviado</h2>
        <p className="mt-3 text-mist-300">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="space-y-6 rounded-3xl border border-night-700 bg-night-900/60 p-6 sm:p-10"
    >
      {state.status === "error" && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {state.message}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-mist-100">
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={LIMITS.nameMax}
            defaultValue={values?.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-mist-100">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values?.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm font-medium text-mist-100">
            Empresa <span className="text-mist-400">(opcional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            maxLength={LIMITS.companyMax}
            defaultValue={values?.company}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={inputClass}
          />
          <FieldError id="company-error" message={errors.company} />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-mist-100">
            Servicio de interés *
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={values?.service ?? preselected}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {serviceLabels[option]}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={errors.service} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-mist-100">
          Cuéntanos sobre tu proyecto *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={LIMITS.messageMin}
          maxLength={LIMITS.messageMax}
          defaultValue={values?.message}
          placeholder="¿Qué necesitas, para cuándo y cuál es tu presupuesto aproximado?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {/* Campo trampa anti-spam, oculto para personas */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">No completar</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={pending} className={`${buttonStyles("primary")} w-full disabled:opacity-60 sm:w-auto`}>
        {pending ? "Enviando…" : "Enviar mensaje"}
        {!pending && <Icon name="arrow-right" className="size-4" />}
      </button>
    </form>
  );
}

export function ContactFormSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="h-[560px] animate-pulse rounded-3xl border border-night-700 bg-night-900/60"
    />
  );
}

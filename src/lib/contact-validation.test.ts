import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizeContact, validateContact } from "./contact-validation.ts";

const valid = {
  name: "Ana Pérez",
  email: "ana@empresa.cl",
  company: "Empresa SpA",
  service: "diseno-web",
  message: "Necesitamos una página web nueva para nuestra pyme.",
};

test("acepta un formulario válido", () => {
  assert.deepEqual(validateContact(normalizeContact(valid)), {});
});

test("normaliza espacios y mayúsculas del correo", () => {
  const input = normalizeContact({ ...valid, name: "  Ana  ", email: " ANA@Empresa.CL " });
  assert.equal(input.name, "Ana");
  assert.equal(input.email, "ana@empresa.cl");
});

test("trata valores no string como vacíos", () => {
  const input = normalizeContact({ name: 42, email: null });
  assert.equal(input.name, "");
  assert.equal(input.email, "");
});

test("exige nombre, correo, servicio y mensaje", () => {
  const errors = validateContact(normalizeContact({}));
  assert.ok(errors.name);
  assert.ok(errors.email);
  assert.ok(errors.service);
  assert.ok(errors.message);
  assert.equal(errors.company, undefined, "la empresa es opcional");
});

test("rechaza correos inválidos", () => {
  const errors = validateContact(normalizeContact({ ...valid, email: "ana@empresa" }));
  assert.ok(errors.email);
});

test("rechaza servicios fuera de la lista", () => {
  const errors = validateContact(normalizeContact({ ...valid, service: "hackeo" }));
  assert.ok(errors.service);
});

test("rechaza mensajes demasiado cortos o largos", () => {
  assert.ok(validateContact(normalizeContact({ ...valid, message: "hola" })).message);
  assert.ok(
    validateContact(normalizeContact({ ...valid, message: "a".repeat(2001) })).message,
  );
});

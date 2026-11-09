name: sdd
description: Úsala siempre que trabajes con Spec-Driven Development en este proyecto (docs/constitution.md o cualquier archivo dentro de specs/) redactar, revisar o cambiar specs, planes y tareas, o implementar y validar tareas de una spec.

# Spec-Driven Development (SDD)
## Flujo
Constitución -> Spec -> Clarificación -> Plan -> Tareas -> Implementación -> Validación -> (Cambio / Mantenimiento)

- Nunca pases a la siguiente fase sin la aprobación explícita del usuario.
- La spec manda: si algo no está en la spec, no se implementa. Si falta una decisión, para y pregunta.
- Un cambio de requisitos se hace primero en la spec, luego en el plan y las tareas, y por último en el código.
- Cada spec vive en su carpeta: specs/NNN-nombre/ con spec.md, plan.md y tasks.md.
- Al terminar cada fase, actualiza MEMORY.md.

## Reglas de Redacción
- La spec describe el QUÉ y el POR QUÉ. Nada de stack, arquitectura ni nombres de archivos.
- Requisitos funcionales en sintaxis EARS:
  - RF-x: CUANDO <evento>, EL SISTEMA <respuesta>.
  - RF-x: SI <condición no deseada>, ENTONCES EL SISTEMA <respuesta>.
  - RF-x: MIENTRAS <estado>, EL SISTEMA <respuesta>.
  - RF-x: EL SISTEMA <comportamiento permanente>.
- Cada RF debe ser verificable: nada de términos vagos como "rápido" o "moderno".

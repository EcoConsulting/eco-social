# Voice — Extracción de voz del cliente en 7 fases

Reference para el comando `voice`. Produce un Voice Guide reutilizable por todos los demás comandos de producción.

---

## Prerequisitos

- Mínimo 3 muestras del cliente (emails, posts previos, mensajes, transcripciones)
- Total mínimo: 500 palabras entre todas las muestras
- Fuentes por autenticidad: Slack/email/WhatsApp > transcripciones > LinkedIn > web corporativa

---

## Las 7 fases

### Fase 1 — Evaluar calidad de muestras

Clasificar cada muestra:
- ¿Es la voz real del cliente o está editada/ghostwritten?
- ¿Tiene longitud suficiente para extraer patrones?
- Excluir: contenido claramente copiado, autocorrecciones del móvil, citas de terceros

Si las muestras son insuficientes (<500 palabras o <3 fuentes) → pedir más al operador.

### Fase 2 — Extraer energía base

Identificar:
- **Rol natural**: ¿teacher, challenger, cheerleader, straight-shooter, storyteller?
- **Energía base**: ¿calm authority, high enthusiasm, understated confidence, warm directness?
- **Temas recurrentes**: ¿a qué vuelve una y otra vez sin que nadie le pregunte?

### Fase 3 — Extraer frases con cita

Buscar en las muestras y extraer CON REFERENCIA A LA FUENTE:
- **Transiciones**: cómo cambia de tema ("Pero aquí está la cosa:", "Lo que pasa es que...")
- **Énfasis**: cómo remata un punto ("Y eso es lo que importa", "Así de simple")
- **Closers**: cómo cierra mensajes/posts

Mínimo 3 frases por categoría. Si no hay suficientes en las muestras, documentar el vacío — no inventar.

### Fase 4 — Mapear zonas de confianza

El cliente suena DIFERENTE según el tema:

| Zona | Lenguaje típico | Ejemplo |
|------|----------------|---------|
| **Autoridad total** | Afirmaciones directas, sin hedging | "Esto funciona así." |
| **Perspectiva ganada** | Calificado pero seguro | "Lo que he visto es que..." |
| **Exploración activa** | Learning out loud, preguntas | "Estoy probando algo que..." |

Documentar qué TEMAS caen en cada zona (ej: "automatización = autoridad total, ventas = exploración").

### Fase 5 — Documentar anti-patrones

Lo que el cliente NUNCA hace (evidencia por ausencia):
- Palabras que nunca usa
- Niveles de formalidad que evita
- Tipos de humor que no hace
- Estructuras que no emplea

Esto es tan valioso como lo positivo — previene las violaciones de voz más jarring.

### Fase 6 — Test de validación

Generar 2 frases:
1. Una IN-VOICE (aplicando todo lo extraído)
2. Una WRONG-VOICE (deliberadamente incorrecta — mal tono, mal registro, mal energía)

Presentar al operador: "¿Cuál suena más al cliente?" Si acierta la 1 → la extracción funciona. Si duda → refinar.

### Fase 7 — Self-critique

Antes de entregar el Voice Guide:
- [ ] ¿Todas las frases extraídas vienen de muestras reales (con cita)?
- [ ] ¿Los anti-patrones son específicos (no "evitar ser genérico")?
- [ ] ¿Las zonas de confianza tienen temas asignados?
- [ ] ¿Un ghostwriter podría usar este guide sin preguntar nada más?

---

## Output

Guardar como `assets/voice-guide-{cliente}.md` usando el template en `assets/voice-guide-template.md`.

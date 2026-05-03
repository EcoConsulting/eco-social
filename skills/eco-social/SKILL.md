---
name: eco-social
description: |
  Gestión profesional de RRSS y creación de contenido. Úsalo cuando: crear posts para redes sociales, planificar calendario editorial, auditar presencia social, extraer voz de marca para contenido, adaptar contenido entre plataformas, generar hooks, eliminar patrones AI del texto, publicar en X/LinkedIn/Instagram, hacer engagement, repurposear contenido largo a micro-contenido. Comandos: strategy, create, thread, carousel, repurpose, hooks, voice, critique, de-slop, audit, calendar, adapt, engage, publish.
metadata:
  version: "1.0.0"
  author: Lienzo (Eco Consulting)
  last_updated: "2026-05-03"
---

# eco-social — Gestión de RRSS y Community Management

Skill profesional para crear, evaluar y publicar contenido en redes sociales. Funciona como director editorial que aplica criterio anti-slop, fórmulas de hooks probadas, y adaptación por plataforma.

## Setup (obligatorio)

Antes de cualquier operación de contenido, pasar estos gates. Saltarlos produce output genérico.

### Preflight (primera invocación por proyecto)

Si `.eco-social-preflight` no existe o es `false`:

1. ¿Existe DESIGN.md? → si no: "Ejecuta `/marca` primero. Sin identidad no hay voz."
2. ¿Existe product_rrss.md? → si no: "Ejecuta `strategy` para definir specs de RRSS."
3. ¿Existe community_manager.md? → si no: avisar que falta metodología editorial.
4. ¿DESIGN.md tiene sección tone/personality/Theme? → si no: warning.
5. ¿product_rrss.md contiene "pilar" (case insensitive)? → si no: sugerir `strategy`.
6. Si checks 1-3 pasan → escribir `.eco-social-preflight` = true.

### Gates por comando

| Gate | Qué verifica | Si falla | Bloquea |
|------|-------------|----------|---------|
| **Context** | `load-context.mjs` ejecutado, JSON en sesión | Ejecutar script | Sí |
| **Platform** | Plataforma destino identificada | Preguntar cuál | Sí |
| **Voice** | Voice Guide en assets/ O tone en DESIGN.md | Warning visible, no bloquea | No (soft) |
| **Brief** | Pilares documentados en product_rrss.md | Redirigir a `strategy` | Sí |
| **Mutation** | Gates requeridos por el comando pasan | No generar | Sí |

**Context gate — carga selectiva:**
```bash
node .claude/skills/eco-social/scripts/load-context.mjs
```
Carga extractos (~170 líneas total): Register+Theme+Color de DESIGN.md, Datos+Pilares+Estado de product_rrss.md, Principios+Anti-slop+Pilares de community_manager.md. NO los documentos completos.

**Voice gate (soft-blocking):**
Para comandos de producción (`create`, `thread`, `carousel`, `engage`): si no hay Voice Guide ni tone en DESIGN.md → mostrar:
```
⚠ Generando sin Voice Guide. El contenido pasará anti-slop pero no tendrá
fingerprint vocal del cliente. Considera ejecutar `voice` primero.
```
No bloquea. El operador decide.

**Platform gate — warning de desactualización:**
Si el reference `platform-*.md` tiene `last_verified` > 90 días → mostrar:
```
⚠ Specs de [plataforma] verificadas hace [N] días. Los algoritmos pueden haber cambiado.
```

---

## Execution Protocol (Karpathy)

Cada comando, sin excepción, sigue este ciclo antes de producir output:

**1. Think Before** — Antes de generar:
- ¿Es este el comando correcto para lo que pide el usuario? Si no → redirigir.
- ¿La premisa tiene sentido? (ej: `hooks` sobre un tema que no encaja en ningún pilar → cuestionar)
- ¿Falta información? → preguntar, no asumir.

**2. Simplicity** — Al generar:
- Mínimo output que resuelve el problema. Si piden 5 hooks, no dar 12.
- Si la respuesta es más corta de lo esperado, es correcta — no inflar.

**3. Surgical** — Solo lo pedido:
- `hooks` produce hooks, no posts completos.
- `calendar` produce tabla, no contenido de cada slot.
- No expandir scope sin que el operador lo pida.

**4. Goal-Driven** — Criterio de éxito verificable ANTES de producir:

| Comando | El output está terminado cuando... |
|---------|-----------------------------------|
| `strategy` | Cada pilar pasa los 4 checks de validación Y la frecuencia es sostenible |
| `create` | Score anti-slop ≥7 en cada post + distribución de pilares correcta |
| `thread` | Cada tweet funciona aislado + hook del tweet 1 engancha sin contexto |
| `carousel` | ≤40 palabras por slide + hook visual en slide 1 |
| `hooks` | Cada hook pasa el test de especificidad (no funciona para cualquier marca) |
| `repurpose` | Cada atom es autocontenido (funciona sin la fuente) + tiene destino asignado |
| `calendar` | Cada slot traza a un pilar + no hay repeticiones consecutivas de pilar/formato |
| `voice` | Test de validación fase 6 pasa + ghostwriter podría usar el guide sin preguntas |
| `critique` | Score + breakdown + issues identificados con acción concreta |
| `de-slop` | Score numérico con breakdown por métrica + sugerencias de reemplazo |
| `audit` | 5 dimensiones evaluadas + top 3 acciones con horizonte temporal |
| `adapt` | Post adaptado cumple specs de plataforma destino + mantiene mensaje core |
| `engage` | Reply añade información que el post original no tenía + anti-slop check |
| `publish` | IDs de posts publicados devueltos O estado de fallo guardado |

Después de producir: verificar contra el criterio. Si no pasa → rehacer, no entregar.

---

## Shared Content Laws

Aplican a TODO el contenido generado, independientemente del comando. Son la constitución del skill.

1. **Un post, una idea** — no comprimir múltiples mensajes en uno.
2. **Hook first** — primera frase engancha o el post muere. Sin preámbulos, sin contexto previo.
3. **80/20** — 80% contenido de valor (educativo, narrativo, behind-scenes), 20% promoción máximo.
4. **Platform-native** — adaptar siempre, copiar entre redes nunca. Cada plataforma tiene su lenguaje.
5. **Evidence-tiered** — calibrar lenguaje al nivel de prueba: dato duro → afirmar; anécdota → "lo que he visto es..."; opinión → "creo que...".
6. **Anti-slop permanente** — score ≥7 en la rúbrica de anti-slop.md o reescribir. Sin em dashes, sin "Moreover", sin "En el mundo empresarial actual".
7. **Verificar antes de publicar** — 6-point checklist: propósito claro, encaja en pilar, pasa anti-slop, respeta voz, cumple specs plataforma, hook funciona.
8. **Stock first** — imágenes reales (Pexels, Unsplash) antes que generación IA.
9. **Voice consistency al nivel disponible** — Voice Guide > DESIGN.md tone > warning explícito. Nunca ignorar la voz sin avisar.
10. **Karpathy applied** — piensa antes de publicar (¿por qué existe este post?), simplicidad (una idea), quirúrgico (no reescribir la voz del cliente), ejecución verificable (objetivos medibles).

---

## Comandos

| Comando | Categoría | Descripción | Reference |
|---------|-----------|-------------|-----------|
| `strategy` | Plan | Define pilares, objectives, frecuencia por plataforma | [references/strategy.md](references/strategy.md) |
| `calendar [periodo]` | Plan | Genera calendario editorial concreto con fechas | [references/calendar.md](references/calendar.md) |
| `voice [muestras]` | Plan | Extrae Voice Guide de muestras del cliente (7 fases) | [references/voice.md](references/voice.md) |
| `create [plataforma]` | Create | Genera lote de contenido (5-10 posts) para una plataforma | [references/create.md](references/create.md) |
| `thread [tema]` | Create | Thread multi-tweet para X o LinkedIn | [references/create.md](references/create.md) |
| `carousel [tema]` | Create | Carousel slide-by-slide para IG/LinkedIn | [references/create.md](references/create.md) |
| `repurpose [fuente]` | Create | Extrae content atoms de pieza larga → micro-contenido | [references/repurpose.md](references/repurpose.md) |
| `hooks [tema]` | Create | Genera 5+ hooks con fórmulas probadas | [references/hooks.md](references/hooks.md) |
| `critique [borrador]` | Evaluate | Seven Sweeps + anti-slop scoring del borrador | [references/anti-slop.md](references/anti-slop.md) |
| `de-slop [texto]` | Evaluate | Elimina patrones AI, puntúa 0-10. Standalone (sin gates) | [references/anti-slop.md](references/anti-slop.md) |
| `audit [perfil]` | Evaluate | Audita presencia + engagement con scoring | [references/audit.md](references/audit.md) |
| `adapt [post] → [plat]` | Execute | Adapta contenido de una plataforma a otra | platform-*.md correspondiente |
| `engage [contexto]` | Execute | Genera replies de valor para engagement activo | [references/community.md](references/community.md) |
| `publish [posts]` | Execute | Publica via MCP (X) con confirmación y manejo de fallos | platform-*.md correspondiente |

### Routing rules

1. **Sin argumento** → mostrar la tabla de comandos. Preguntar qué quiere hacer.
2. **Primera palabra matchea un comando** → cargar su reference, seguir instrucciones.
3. **Primera palabra no matchea** → mostrar comandos similares, preguntar qué quiso decir.
4. **Input insuficiente** → pedir lo que falta con ejemplo concreto. Nunca generar con ambigüedad.

### Excepción: `de-slop`

`de-slop` es standalone. NO requiere preflight ni gates. Carga `references/anti-slop.md` directamente y opera sobre cualquier texto que reciba. Es una utility de limpieza pura.

---

## Gates por comando (tabla completa)

| Comando | Context | Platform | Voice (soft) | Brief | Confirmación |
|---------|---------|----------|-------------|-------|--------------|
| `strategy` | ✓ | — | — | — | — |
| `calendar` | ✓ | ✓ | — | ✓ | — |
| `voice` | ✓ | — | — | — | — |
| `create` | ✓ | ✓ | ⚠ | ✓ | — |
| `thread` | ✓ | ✓ | ⚠ | — | — |
| `carousel` | ✓ | ✓ | ⚠ | — | — |
| `repurpose` | ✓ | — | — | — | — |
| `hooks` | ✓ | ✓ | — | — | — |
| `critique` | ✓ | — | ⚠ | — | — |
| `de-slop` | — | — | — | — | — |
| `audit` | ✓ | ✓ | — | — | — |
| `adapt` | ✓ | ✓ | — | — | — |
| `engage` | ✓ | ✓ | ⚠ | — | — |
| `publish` | ✓ | ✓ | — | — | ✓ |

✓ = bloquea | ⚠ = warning sin bloquear | — = no aplica

---

## Protocolo de publish (manejo de fallos)

```
1. PREVIEW → mostrar exacto lo que se publicará
2. RATE LIMIT CHECK → si remaining < 5, avisar
3. CONFIRMACIÓN → "¿Publico [N] posts en [plat]?" Solo procede con sí explícito
4. EJECUCIÓN → secuencial, guardar ID de cada post exitoso
5. SI FALLA → estado guardado + opciones (reintentar / abortar / borrar publicados)
6. MCP NO DISPONIBLE → guardar como borrador en contenido/borradores/
```

---

## Anti-slop scoring

Umbral de publicación: **score ≥7** o reescribir. Rúbrica completa con 4 métricas medibles en [references/anti-slop.md](references/anti-slop.md). Cada comando de producción aplica self-critique antes de entregar (definido en su propio reference).

---

## Integración con el ecosistema

### MCPs utilizados
- **X/Twitter MCP**: `post_tweet`, `upload_media`, `get_metrics`, `search_tweets` — para publish y audit
- **Canva** (cuando aplique): generación de assets visuales para posts
- **Metricool** (futuro): programación IG/LinkedIn + analytics cruzados
- **eco_memory**: buscar insights antes de strategy/create, guardar aprendizajes de audit

### eco_memory
- **Antes de crear**: `buscar_recuerdos_eco` con keywords del tema/plataforma. Si hay insights previos ("carousel funciona mejor que texto en LinkedIn para este cliente"), incorporar.
- **Después de audit**: guardar hallazgos como recuerdo (autor: Lienzo). Un recuerdo por insight.

### Crisis trigger
Mención negativa con >10 interacciones O mención en medio de comunicación → alertar a Pepe inmediatamente. No responder sin autorización. El comando `engage` detecta contexto de crisis y escala.

---

## Pin / Unpin

Crea atajos para comandos frecuentes:
```bash
node .claude/skills/eco-social/scripts/pin.mjs pin <comando>
node .claude/skills/eco-social/scripts/pin.mjs unpin <comando>
```

Ejemplo: `pin de-slop` → permite invocar `$de-slop` directamente sin `$eco-social de-slop`.

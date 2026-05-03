# Create — Producción de contenido por lote y formatos específicos

Reference para los comandos `create`, `thread` y `carousel`. Define estructuras de posts, flujo de producción por lote, y formatos especializados.

---

## Workflow del comando `create [plataforma]`

```
1. Verificar gates: Context + Platform + Voice(soft) + Brief
2. Cargar platform register correspondiente
3. Identificar pilares disponibles (de product_rrss.md)
4. Generar lote de 5-10 posts distribuidos entre pilares (respetando ratios)
5. Para cada post:
   a. Elegir hook con fórmula de hooks.md (variar entre posts)
   b. Desarrollar contenido respetando formato de plataforma
   c. Aplicar Shared Content Laws
   d. Self-Critique Pass
6. Presentar lote al operador con:
   - Score anti-slop de cada post
   - Pilar al que pertenece
   - Formato usado
7. Iterar según feedback
```

---

## Distribución de pilares en un lote

Seguir la distribución de `community_manager.md §Pilares de contenido`. Si product_rrss.md define pilares específicos con ratios propios, usar esos. La regla universal: promoción directa nunca supera el 20% del lote.

---

## Estructuras de post por formato

### Texto largo (LinkedIn, X thread)

```
[HOOK — 1 frase, fórmula de hooks.md]

[CONTEXTO — 1-2 frases que sitúan el tema. No repetir el hook.]

[DESARROLLO — 3-5 párrafos cortos (1-2 frases cada uno).
 Cada párrafo = 1 punto.
 Ritmo variado: frase corta. Luego una más larga que desarrolla.]

[CIERRE — Insight final o conclusión. NO "en resumen".]

[ENGAGEMENT — Fórmula de engagement de hooks.md (opcional, solo si encaja)]
```

Restricciones:
- Párrafos de 1-2 líneas máximo (legibilidad mobile)
- Sin bullet points decorativos (salvo que sean la estructura del post)
- Sin emojis como separadores
- Hook y contexto = primeros 210 caracteres (visible sin "ver más" en LinkedIn)

### Post corto (X tweet, Instagram caption corta)

```
[HOOK + CONTENIDO en 1-3 frases. Todo es hook.]

[Si hay CTA o engagement: 1 frase final]
```

280 caracteres max en X (free tier). El post corto ES el hook — no tiene desarrollo.

### Thread (X, LinkedIn)

```
Tweet 1: [HOOK puro — promesa de valor del thread]
Tweet 2: [Contexto mínimo — por qué importa]
Tweet 3-N: [Un punto por tweet — autocontenido, no depende del anterior]
Tweet final: [Recapitulación 1 frase + engagement formula]
```

Reglas de thread:
- Cada tweet funciona SOLO (alguien puede ver el tweet 5 sin contexto)
- Numerar (1/, 2/, 3/ o equivalente) para navegabilidad
- 5-12 tweets es el sweet spot. Más de 15 pierde lectores
- El primer tweet NO dice "Thread:" ni "Abro hilo" — simplemente engancha
- El link va en el ÚLTIMO tweet o como reply al primero (no en el hook)

### Carousel (Instagram, LinkedIn)

```
Slide 1: [HOOK visual + textual — problema o dato impactante]
Slide 2: [CONTEXTO — amplía el hook, sitúa el tema]
Slides 3-7: [VALOR — un punto por slide, 30-40 palabras max por slide]
Slide 8-9: [RESUMEN — qué llevarse]
Slide final: [CTA — "Guarda", "Comparte", "Sígueme para más"]
```

Reglas de carousel:
- Formato 4:5 (1080×1350 px) para Instagram, 1:1 o 4:5 para LinkedIn
- Una idea por slide. Si necesitas más texto, necesitas más slides
- Máximo 30-40 palabras por slide (legibilidad mobile)
- Diseño coherente entre slides (misma paleta, tipografía, layout)
- 8-12 slides es el sweet spot
- El hook visual de slide 1 es tan importante como el texto

---

## Batch workflow (producción eficiente)

### Ideación (antes de escribir)

1. Revisar pilares activos (product_rrss.md)
2. Revisar calendario si existe (¿hay temas asignados?)
3. Buscar en eco_memory insights recientes ("qué funcionó la semana pasada")
4. Generar lista de ideas ancladas en pilares (no al revés)
5. Filtro anti-relleno: por cada idea, preguntar "¿existe un motivo real para publicar esto AHORA?" Si no → descartar

### Redacción por lote

- Escribir 5-10 posts de una vez (mismo flujo mental)
- Adaptar cada post a la plataforma destino (no copiar)
- Pasar anti-slop a cada uno (score ≥7)
- Presentar el lote completo, no de uno en uno

### Post-producción

- Si necesita media: indicar qué imagen/vídeo necesita cada post
- Si necesita link: recordar regla de plataforma (LinkedIn acepta links, X penaliza)
- Si es thread/carousel: producir la secuencia completa

---

## Content atoms (integración con `repurpose`)

Si `create` se invoca después de `repurpose`, recibe atoms ya extraídos. Ver `references/repurpose.md` para la taxonomía de atoms y su mapeo por plataforma. `create` toma cada atom y lo desarrolla al formato correspondiente.

---

## Self-Critique Pass (específico de create)

Antes de presentar el lote:

- [ ] ¿Cada post tiene UN solo mensaje?
- [ ] ¿Los hooks varían entre posts? (no todos con la misma fórmula)
- [ ] ¿La distribución de pilares es correcta?
- [ ] ¿El lote tiene ritmo? (no 5 posts educativos seguidos)
- [ ] ¿Cada post pasa el anti-slop score ≥7?
- [ ] ¿El contenido promocional no supera el 20%?
- [ ] ¿Se adapta a la plataforma (longitud, formato, tono)?
- [ ] ¿El operador podría publicar esto sin editar? (test de entregabilidad)

---

## Modos de profundidad

### Quick (1-3 posts rápidos)
- Sin batch completo
- Usa pilares disponibles sin recalcular distribución
- Score anti-slop igualmente obligatorio

### Standard (5-10 posts, default)
- Distribución por pilares completa
- Hooks variados
- Self-critique full

### Deep (lote editorial completo)
- 10-15 posts
- Calendario de publicación sugerido
- Variantes A/B para los 2-3 mejores posts
- Brief visual para posts que necesitan imagen

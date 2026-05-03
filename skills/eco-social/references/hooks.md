# Hooks — Fórmulas de atención probadas por plataforma

Reference para el comando `hooks`. Genera 5+ hooks para un tema usando fórmulas catalogadas. También consultado por `create`, `thread` y `carousel` para la apertura.

---

## Principio: el hook es la primera frase

No es un título, no es un preámbulo, no es contexto. Es la primera frase que el lector ve. En LinkedIn son las 3 primeras líneas (antes del "ver más"). En X son los primeros 100 caracteres. En Instagram es la primera línea del caption.

Si el hook no engancha, el resto no existe.

---

## 10 fórmulas de atención

Cada fórmula es un esqueleto rellenable. El [tema] lo proporciona el operador o se extrae del pilar de contenido.

### 1. Bold Statement (afirmación directa)

```
"[Creencia común del sector] está mal."
"[Práctica habitual] no funciona."
```

Ejemplos:
- "La mayoría de consejos sobre LinkedIn son contraproducentes."
- "Tu CRM no es un CRM. Es un cementerio de contactos."

Funciona porque: desafía al lector a demostrar que no es verdad. Engagement por disonancia.

### 2. Counter-intuitive (contraintuitivo)

```
"Dejé de [hacer lo esperado]. [Resultado inesperado positivo]."
"[Acción que suena mal] fue la mejor decisión de [periodo]."
```

Ejemplos:
- "Dejé de publicar a diario. Mi engagement se triplicó."
- "Rechacé a un cliente grande. Fue lo mejor que me pasó este trimestre."

Funciona porque: invierte expectativas. El lector necesita saber POR QUÉ.

### 3. Specific Result (resultado concreto)

```
"De [situación mala] a [situación buena] en [tiempo concreto]."
"[Número impactante] en [periodo corto] con [método]."
```

Ejemplos:
- "De 0 a 10K seguidores en 90 días sin pagar un euro en ads."
- "3 automatizaciones que le ahorran 12 horas semanales a una asesoría."

Funciona porque: números + tiempo concreto = credibilidad instantánea.

### 4. Question (pregunta que pica)

```
"¿Cuál es [la mayor pérdida / el mayor error / lo más caro] de [tu audiencia]?"
"¿Por qué [resultado deseable] sigue siendo tan difícil para [audiencia]?"
```

Ejemplos:
- "¿Cuántas horas pierdes cada semana en tareas que una máquina haría mejor?"

**Restricción**: NO usar "¿Sabías que...?" — es el hook más sobreusado y marca de IA. Usar preguntas que implican un problema real del lector.

### 5. "This one thing" (la cosa concreta)

```
"[Un solo cambio] cambió [resultado grande]."
"Hay [una herramienta / un hábito / una decisión] que [resultado]."
```

Ejemplos:
- "Un campo en nuestro formulario web nos costaba el 40% de los leads."

Funciona porque: promesa de alto ROI informativo (aprender 1 cosa → resultado grande).

### 6. "Stop doing X" (deja de hacer)

```
"Deja de [práctica común]. [Razón corta o consecuencia]."
"[Práctica habitual] te está [coste concreto]."
```

Ejemplos:
- "Deja de publicar solo para mantener frecuencia. El algoritmo no premia volumen."

Funciona porque: ataca un hábito que el lector probablemente tiene. Engagement por defensa o reconocimiento.

### 7. Personal story (historia en primera persona)

```
"[Evento concreto que te pasó]. [Una línea del aprendizaje]."
"El [día/momento] que [descubrimiento/error/cambio]."
```

Ejemplos:
- "Perdí un cliente de 3.000€/mes por no responder un email en 24 horas."

Funciona porque: las historias personales con consecuencias reales generan conexión. LinkedIn especialmente.

### 8. Surprising stat (dato sorpresa)

```
"[Porcentaje impactante] de [grupo] [hace/no hace algo inesperado]."
"[Número] [unidad] se pierden cada [periodo] por [causa evitable]."
```

Ejemplos:
- "El 73% de las landing pages no tienen un CTA visible sin hacer scroll."

**Restricción**: el dato DEBE ser verificable o atribuible. Si no tienes fuente, no inventes — usa "en mi experiencia, X de cada Y clientes..." (evidence-tiered).

### 9. Listicle opener (lista de valor)

```
"[N] [herramientas/errores/reglas] que [resultado concreto]:"
"[N] cosas que [aprendí/cambié/probé] [este periodo]:"
```

Ejemplos:
- "5 automatizaciones que cualquier asesoría puede montar en una tarde:"

**Restricción**: el número debe ser real (no siempre 5 o 10). Y la lista debe entregar valor real, no relleno para llegar a un número redondo.

### 10. Confession (confesión / vulnerabilidad)

```
"[Admisión de error/debilidad]. [Lo que aprendí de ello]."
"No siempre [fui/hice/supe] [lo que ahora predico]."
```

Ejemplos:
- "Tardé 6 meses en cobrar mi primera factura como consultor. Y fue culpa mía."

Funciona porque: vulnerabilidad calculada genera confianza. Muestra proceso, no solo resultado.

---

## 7 fórmulas de engagement (para cerrar el post)

Usar al final del contenido para generar interacción:

| Fórmula | Ejemplo |
|---------|---------|
| **Experiencia compartida** | "¿Te ha pasado algo parecido?" |
| **Opinión polarizante** | "¿Estás de acuerdo o crees que me equivoco?" |
| **Consejo pedido** | "¿Qué harías tú en esa situación?" |
| **Challenge** | "Prueba esto una semana y cuéntame qué pasa." |
| **Resource request** | "¿Qué herramienta usas tú para [X]?" |
| **Hot take invitation** | "¿Cuál es tu opinión impopular sobre [sector]?" |
| **Save prompt** | "Guarda este post para cuando [necesites X]." (LinkedIn) |

---

## Adaptación por plataforma

### LinkedIn
- Hook en las 3 primeras líneas (antes del "ver más" = ~210 caracteres)
- Hooks de story y specific result funcionan mejor (dwell time alto)
- Engagement formulas tipo "experiencia compartida" generan comments largos (algoritmo premia >5 palabras)

### X (Twitter)
- Hook en los primeros 100 caracteres (lo visible sin expandir)
- Bold statement y counter-intuitive funcionan mejor (ratio de RT)
- Brevedad total: el hook ES el tweet en muchos casos
- Para threads: el primer tweet es hook puro, el segundo da contexto

### Instagram
- Hook en la primera línea del caption (el resto se oculta)
- Surprising stat y listicle opener funcionan mejor (guardan el post)
- El hook visual (primera imagen del carousel) importa tanto como el texto

---

## Workflow del comando `hooks`

```
1. Recibir: tema + plataforma (si no la da, preguntar)
2. Cargar contexto del cliente (pilares, tono) si disponible
3. Generar 5-7 hooks usando fórmulas variadas (no repetir la misma fórmula)
4. Para cada hook:
   - Indicar qué fórmula usa
   - Adaptar longitud a la plataforma
   - Verificar que NO usa patrones anti-slop
5. Presentar con indicación de cuál es más adecuado para qué objetivo:
   - Awareness → bold statement, surprising stat
   - Engagement → question, confession
   - Conversión → specific result, "this one thing"
6. El operador elige, combina o pide variantes
```

---

## Filtro anti-slop para hooks

Antes de entregar, verificar que ningún hook:
- Empieza con "¿Sabías que...?"
- Usa "En el mundo empresarial actual"
- Es una pregunta retórica que se auto-responde en la siguiente línea
- Suena a "X tips para Y" genérico sin gancho
- Podría ser de cualquier empresa de cualquier sector (test de especificidad)

**Test**: si puedes quitar el nombre de la empresa/sector y el hook sigue funcionando igual para cualquiera, es demasiado genérico. Rehacer con especificidad del cliente.

# Anti-slop — Detección y eliminación de patrones AI en contenido

Reference para los comandos `critique` y `de-slop`. Define la rúbrica de scoring, el catálogo de patrones, el proceso Seven Sweeps, y las reglas de qué AÑADIR al texto (no solo qué quitar).

---

## Rúbrica de scoring (0-10)

### 4 métricas objetivas

| Métrica | Medición | Peso |
|---------|----------|------|
| **Pattern count** | Patrones AI detectados por 1000 palabras | 35% |
| **Sentence variance** | Coeficiente de variación de longitud de frase (palabras/frase) | 25% |
| **Specificity ratio** | Ratio términos específicos (nombres, números, ejemplos) vs vagos | 25% |
| **Voice alignment** | Uso de frases del Voice Guide + evita anti-patterns documentados | 15% |

### Cómo medir cada una

**Pattern count**: contar ocurrencias del catálogo (§ siguiente) en el texto. Dividir entre nº de palabras × 1000.
- <3/1K = limpio
- 3-8/1K = mixto
- >8/1K = slop

**Sentence variance**: calcular nº de palabras por frase. Sacar media y desviación estándar. CoV = σ/μ.
- CoV > 0.35 = ritmo humano variado
- CoV 0.20-0.35 = algo monótono
- CoV < 0.20 = robótico (frases uniformes)

**Specificity ratio**: contar términos específicos (nombres propios, cifras, fechas, ejemplos concretos, herramientas nombradas) vs vagos ("varios", "muchos", "significativo", "impactante", "importante", "diverso"). Ratio = específicos / vagos.
- >2:1 = concreto
- 1.5:1-2:1 = aceptable
- <1.5:1 = vago

**Voice alignment** (solo si existe Voice Guide):
- ¿Usa frases de transición/emphasis del guide? (+)
- ¿Evita los anti-patrones documentados? (+)
- ¿Mantiene el nivel de energía del guide (calm/enthusiastic/understated)? (+)
- Binario por item, promedio = score parcial

### Escala resultante

| Score | Perfil | Acción |
|-------|--------|--------|
| 0-3 | >10 patrones/1K + CoV<0.15 + ratio<1:1 | Reescribir completamente |
| 4-5 | 5-10 patrones + CoV 0.15-0.25 + ratio 1:1-1.5:1 | Pasar Seven Sweeps completo |
| 6-7 | 3-5 patrones + CoV 0.25-0.35 + ratio 1.5:1-2:1 | Pulir + añadir especificidad |
| 8-9 | <3 patrones + CoV>0.35 + ratio>2:1 + voice alineada | Listo para publicar |
| 10 | 0 patrones + varianza alta + todo específico + voice nativo | Indistinguible de escritor con oficio |

### Sin Voice Guide

Recalcular sobre 3 factores: pattern (41%) + variance (29%) + specificity (29%). Techo práctico sin voice: 8/10. No puede ser "perfecto" sin voz definida.

---

## Catálogo de patrones AI (50+)

### Categoría 1 — Transiciones sobreusadas (14)

| Patrón | Por qué es slop | Reemplazo |
|--------|----------------|-----------|
| "Moreover," | Transición de relleno, no conecta ideas realmente | Eliminar o usar "Y además:" con contenido real |
| "Furthermore," | Idéntico a Moreover en función | Punto y seguido. Nueva idea = nueva frase |
| "Additionally," | Tres sinónimos del mismo muleta | Eliminar. Si hay algo que añadir, añadirlo sin anunciar |
| "Nevertheless," | Formal sin necesidad | "Pero", "Sin embargo" (1 vez max por texto) |
| "In conclusion," / "To summarize," | Anuncia lo que debería ser obvio | Simplemente concluir sin anunciar |
| "That being said," | Hedge que debilita lo anterior | Punto. Decir lo siguiente directamente |
| "It's worth noting that" | Preludio vacío | Decir lo que vale la pena directamente |
| "Interestingly," | El autor decide qué es interesante por el lector | Eliminar. Si es interesante, se nota solo |
| "Notably," | Mismo problema que "Interestingly" | Eliminar |
| "Importantly," / "Crucially," / "Significantly," | Anuncio de énfasis en vez de énfasis real | Eliminar. Enfatizar con estructura, no con adverbios |
| "In other words," | Suele repetir lo mismo con sinónimos | Elegir UNA formulación, borrar la otra |
| "As mentioned earlier," | Auto-referencia que gasta palabras | Eliminar. El lector recuerda |
| Exceso de "However" (>2 por 500 palabras) | Muletilla de contraste | Variar: "Pero", "Aunque", restructurar sin adversativa |
| "While X, Y" como apertura (>3 por página) | Estructura subordinada repetitiva | Variar: empezar con Y directamente, usar punto |

### Categoría 2 — Clichés AI (18)

| Patrón (ES/EN) | Reemplazo |
|----------------|-----------|
| "En el mundo empresarial actual..." | Empezar con el dato, el problema o la afirmación directa |
| "In today's fast-paced world..." | Idem |
| "¿Sabías que...?" | Afirmación directa con el dato |
| "Let's delve into..." / "Profundicemos en..." | Ir al grano. No anunciar que vas a profundizar |
| "Game-changer" / "Revolucionario" | Describir QUÉ cambió concretamente |
| "Harness the power of" / "Aprovechar el poder de" | "Usar" + descripción de qué hace |
| "Unlock your potential" / "Desbloquea tu potencial" | Resultado concreto: "Consigue X haciendo Y" |
| "It's no secret that" | Eliminar. Si no es secreto, decirlo sin preludio |
| "The key takeaway is" | Simplemente decir el takeaway |
| "At the end of the day" | Eliminar. Ir a la conclusión directa |
| "Paradigm shift" / "Cambio de paradigma" | Describir el cambio concreto |
| "Ecosystem" (fuera de biología) | Decir qué es realmente: "conjunto de herramientas", "red de...", "sistema" |
| "Leverage" / "Apalancar" | "Usar", "Aplicar", "Sacar partido de" |
| "Synergy" / "Sinergia" | Describir qué combinas y qué resultado da |
| "Deep dive" | "Análisis detallado" o simplemente hacer el análisis |
| "Empower" / "Empoderar" | "Dar herramientas para", "Permitir que" |
| "Seamless" / "Sin fisuras" | Describir cómo funciona: "se conecta sin configuración extra" |
| "Cutting-edge" / "De vanguardia" | Describir qué tiene de nuevo concretamente |

### Categoría 3 — Hedging / Lenguaje evasivo (8)

| Patrón | Por qué es slop | Reemplazo |
|--------|----------------|-----------|
| "It's important to note that" | Preludio de 6 palabras para nada | Decir la cosa importante directamente |
| "One might argue that" | Atribuir opinión a nadie debilita la posición | "Hay quien dice..." (si es relevante) o afirmar directamente |
| "As you might expect," | Asume lo que el lector piensa | Eliminar |
| "Needless to say," | Si no hace falta decirlo, no lo digas | Eliminar |
| "It should be noted that" | Pasiva + preludio | Decirlo en activa directamente |
| Cuantificadores vagos: "various", "numerous", "myriad", "plethora", "diversos", "múltiples" | Esconden que no sabes cuántos | Número concreto o "3-4", "más de 10" |
| "Relatively" / "Relativamente" | ¿Relativo a qué? Sin comparador es vacío | Añadir el comparador o eliminar |
| "Quite" / "Rather" / "Bastante" | Debilita sin aportar | Eliminar. Si es mucho, decir cuánto |

### Categoría 4 — Corporativismo / Buzzwords (12)

| Patrón | Reemplazo directo |
|--------|-------------------|
| "Utilizar" / "Utilize" | "Usar" |
| "Facilitar" / "Facilitate" | "Ayudar", "Permitir" |
| "Optimizar" (sin métrica) | "Mejorar" + qué mejora concretamente |
| "Implementar" (exceso) | "Hacer", "Montar", "Poner en marcha" |
| "Alinear" / "Align" | "Coordinar", "Poner de acuerdo" |
| "Escalar" (fuera de infra) | "Crecer", "Ampliar" |
| "Holístico" / "Holistic" | Describir qué incluye |
| "Proactivo" / "Proactive" | "Anticiparse a", describir la acción |
| "Robusto" / "Robust" | Describir qué lo hace resistente |
| "Transformación digital" (sin contexto) | Describir qué se digitaliza concretamente |
| "Poner en valor" | "Mostrar", "Destacar", decir QUÉ se pone en valor |
| "Sinergias" | Describir qué se combina y qué resulta |

### Categoría 5 — Patrones estructurales robóticos (9)

| Patrón | Por qué es slop | Fix |
|--------|----------------|-----|
| Siempre exactamente 3 bullet points | Cantidad arbitraria = template | Usar el número real: 2, 4, 7, lo que sea |
| Pregunta retórica + respuesta inmediata | "¿Y sabes qué pasó? Pues que..." Manipulativo | Afirmación directa |
| Cada párrafo empieza igual | Anáfora no intencional = template | Variar las aperturas |
| "Here are the top X ways to..." | Formato listicle automático | Ir directamente al primer punto |
| Em dashes (—) excesivos | Tell #1 de contenido generado por IA | Comas, puntos, paréntesis, o restructurar |
| Listas prefaciadas: "Los 5 pasos son:" | Anuncia estructura en vez de construirla | Empezar con el paso 1 directamente |
| Emojis como bullet points | Estética 2020 que grita ChatGPT | Estructura con texto limpio |
| Apertura con nombre de empresa | "En Eco Consulting creemos que..." → nadie lee eso | Empezar con el problema del lector |
| CTA en cada post | Fatiga de conversión | CTA solo en posts de conversión (≤20% del mix) |

---

## Seven Sweeps — Proceso editorial

Siete pasadas secuenciales. Cada una evalúa UNA dimensión. Después de cada sweep, verificar que los anteriores no se rompieron.

### Sweep 1 — Clarity (¿Se entiende?)

- ¿Cada frase dice UNA cosa?
- ¿Puedo entenderlo sin releer?
- ¿Hay frases que intentan hacer demasiado? → partir en dos

### Sweep 2 — Voice & Tone (¿Suena consistente?)

- ¿El nivel de formalidad es constante?
- ¿Hay cambios de registro no intencionales?
- Leer en voz alta: ¿suena como la persona/marca?

### Sweep 3 — So What (¿Cada claim responde "¿y qué?"?)

- Por cada afirmación: ¿por qué le importa al lector?
- Si no puedes añadir "...lo que significa que [beneficio concreto]", la afirmación sobra
- Eliminar todo lo que no pasa el "so what" test

### Sweep 4 — Prove It (¿Hay evidencia?)

- ¿Cada afirmación tiene respaldo? (dato, ejemplo, experiencia)
- Flag: "muchas empresas hacen X" → ¿cuáles?
- Flag: "se ha demostrado que" → ¿quién, cuándo, dónde?
- Si no hay evidencia: o buscarla, o suavizar el lenguaje (evidence-tiered)

### Sweep 5 — Specificity (¿Se puede hacer más concreto?)

- "Ahorra tiempo" → "Ahorra 4 horas a la semana"
- "Mejora resultados" → "Sube el engagement rate un 23%"
- "Muchos clientes" → "12 PyMEs en Sevilla"
- Cada vago que puedas reemplazar por un número o nombre, reemplázalo

### Sweep 6 — Heightened Emotion (¿El "antes" se siente?)

- ¿El problema que resuelves se siente real, no abstracto?
- ¿El lector se reconoce en la situación?
- Pintar el "antes" vívido: "Estás a las 11 de la noche contestando emails que podrían ser automáticos"

### Sweep 7 — Zero Risk (¿Hay barreras cerca del CTA?)

- ¿El CTA es claro y simple? (una acción, no tres)
- ¿Hay fricciones: "rellena el formulario y te contactamos en 48-72h"? → quitar fricción
- Solo aplica a posts con CTA (≤20% del mix)

---

## Qué AÑADIR (tan importante como qué quitar)

Quitar slop sin añadir sustancia produce texto limpio pero vacío. Después de limpiar:

### Ritmo variado
- Mezclar frases cortas (5-10 palabras) con largas (20-30).
- Dos cortas seguidas. Luego una larga que desarrolla.
- Nunca más de 3 frases consecutivas de longitud similar.

### Conectores conversacionales
- "Pero aquí está la cosa:"
- "Y sin embargo"
- "Lo que nadie te dice es que"
- "La parte que no se ve:"
- "Dicho de otro modo:"
- NO usar: "Moreover", "Furthermore", "Additionally"

### Especificidad inyectada
- Nombres reales de empresas, herramientas, personas
- Números concretos en vez de "muchos" o "significativo"
- Ejemplos vividos: "Como cuando configuramos el CRM de una gestoría en Triana y..."

### Perspectiva personal
- "Lo que he visto en 6 meses haciendo esto:"
- "El error que más repito:"
- "Algo que me costó aprender:"
- Calibrar al confidence zone (si existe Voice Guide)

### Contracciones y oralidad (en español)
- Frases que suenan a conversación, no a documento
- "Y eso qué significa?" en vez de "¿Cuál es la implicación de esto?"
- Registro coloquial-profesional, no académico ni callejero

---

## Workflow del comando `de-slop`

```
1. Recibir texto
2. Contar patrones del catálogo → pattern_count / 1000 palabras
3. Calcular longitud de cada frase → CoV
4. Contar términos específicos vs vagos → ratio
5. Si Voice Guide disponible: evaluar alignment
6. Calcular score compuesto (pesos × métricas)
7. Presentar:
   - Score: X/10
   - Breakdown: [pattern: X | variance: X | specificity: X | voice: X]
   - Patrones detectados: [lista con línea donde aparecen]
   - Sugerencias de reemplazo para cada patrón
8. Si score < 7: reescribir el texto aplicando reemplazos + Seven Sweeps
9. Self-critique: ¿el texto reescrito mantiene el mensaje original?
```

## Workflow del comando `critique`

```
1. Cargar contexto (Voice Guide si existe)
2. Ejecutar scoring anti-slop (misma rúbrica que de-slop)
3. ADEMÁS, evaluar contra Shared Content Laws:
   - ¿Un post, una idea?
   - ¿Hook first?
   - ¿Platform-native? (si se conoce la plataforma)
   - ¿Evidence-tiered?
   - ¿Pasa el 6-point checklist de verificación?
4. Presentar: score + breakdown + issues de laws + sugerencias
5. NO reescribir automáticamente — presentar diagnóstico al operador
```

---

## Relación con community_manager.md

Este reference EXTIENDE `community_manager.md §Anti-slop de contenido`. Los 7 patrones de aquel documento (empezar con nombre empresa, listas de 10 tips genéricos, emojis como bullets, "¿Sabías que...?", CTA en cada post, citas motivacionales, "En el mundo empresarial actual...") están incorporados aquí con más detalle y reemplazos concretos.

En caso de conflicto entre este reference y community_manager.md: **community_manager.md manda** (es el criterio profesional del operador).

Este reference añade:
- 43 patrones adicionales (catálogo completo de 50+)
- Rúbrica cuantificable con 4 métricas
- Proceso Seven Sweeps (framework editorial de 7 pasadas)
- Sección "Qué AÑADIR" (no solo qué quitar)
- Workflows específicos para `de-slop` y `critique`

# Audit — Evaluación de presencia y engagement

Reference para el comando `audit`. Diagnostica el estado de un perfil/periodo y produce recomendaciones accionables.

---

## Workflow

```
1. Identificar scope: ¿auditar perfil completo o periodo específico?
2. Recoger datos disponibles:
   - Via X MCP: get_metrics, get_timeline, search_tweets
   - Via Metricool (futuro): analytics cruzados
   - Manual: el operador proporciona datos si no hay MCP
3. Evaluar 5 dimensiones con scoring
4. Identificar top 3 problemas + top 3 fortalezas
5. Recomendar acciones concretas (no "mejorar engagement")
6. Guardar insights en eco_memory para futuras sesiones
```

---

## 5 dimensiones de evaluación

| Dimensión | Qué mide | Bien | Problema |
|-----------|----------|------|----------|
| **Frecuencia** | ¿Publica lo suficiente? | Cumple target de strategy | Gaps >7 días sin publicar |
| **Engagement rate** | Interacciones / impresiones | >3% (LinkedIn), >1.5% (X) | <1% |
| **Pillar balance** | ¿Está equilibrado entre pilares? | Dentro de ±10% de targets | >50% en un solo pilar |
| **Consistency** | ¿El tono y voz son constantes? | Reconocible post a post | Varía entre corporativo y casual |
| **Growth signals** | ¿La tendencia es positiva? | Seguidores + engagement suben | Estancado o bajando |

---

## Output

```
AUDIT [plataforma] — [periodo]

Score: X/5 dimensiones en verde

FORTALEZAS:
1. [qué funciona y por qué]
2. [qué funciona y por qué]
3. [qué funciona y por qué]

PROBLEMAS:
1. [qué falla] → ACCIÓN: [qué hacer, concreto, esta semana]
2. [qué falla] → ACCIÓN: [qué hacer, concreto]
3. [qué falla] → ACCIÓN: [qué hacer, concreto]

INSIGHT para eco_memory: [1 frase que resuma el aprendizaje clave]
```

Cada acción debe ser específica y tener horizonte temporal. "Mejorar engagement" no es una acción. "Publicar 2 carousels educativos esta semana y medir si el engagement rate sube" sí lo es.

# Platform register — X (Twitter)

last_verified: 2026-05-03

---

## Algoritmo

- Frecuencia alta premia (vida media de un tweet: 18 minutos)
- Links externos penalizan alcance (desde marzo 2025, especialmente sin Premium)
- Reply engagement y quote tweets amplifican más que likes
- El ratio followers/following importa para credibilidad

### Links: regla de oro

Contenido en el tweet. Link en el primer reply. Nunca en el tweet principal salvo que seas Premium.

---

## Formatos

| Formato | Cuándo usar |
|---------|-------------|
| Tweet corto (1-2 frases) | Opiniones, datos, takes directos |
| Thread (5-12 tweets) | Contenido largo, tutoriales, storytelling |
| Tweet + imagen | Datos visuales, screenshots, infografías |
| Poll | Engagement fácil, validación de hipótesis |
| Quote tweet + opinión | Posicionamiento sobre otros |

---

## Estructura de thread

```
Tweet 1: Hook puro — promesa de valor (NO "Abro hilo" ni "Thread:")
Tweet 2: Contexto mínimo — por qué importa
Tweets 3-N: Un punto por tweet, autocontenido
Tweet final: Recap 1 frase + engagement formula + link en reply
```

Reglas:
- Cada tweet funciona solo (alguien puede ver el 5 sin el 1)
- Numerar: "1/", "2/", etc.
- 5-12 tweets sweet spot
- Link va en reply al primer tweet o al último

---

## Specs técnicos

| Elemento | Valor |
|----------|-------|
| Texto | 280 chars (free) / 25.000 (Premium) |
| Imagen | 1600×900 (16:9) o 1080×1080 (1:1) |
| Video | 1920×1080, max 2:20 (free) / 60 min (Premium) |
| Alt text | hasta 1.000 chars (usar siempre — SEO + accesibilidad) |
| Hashtags | máximo 2 por tweet |

---

## Frecuencia y timing

- Mínimo: 1 tweet propio + 3-5 replies de valor diarios
- Ideal: 3-5 publicaciones/día (incluyendo replies sustantivos)
- Mejores horas: 8-10am, 12-1pm, 5-6pm
- Consistency > volumen

---

## Tono

Colega experto con opiniones. No empresa que se vende. Directo, con personalidad. Las marcas que funcionan en X suenan humanas. Lo que funciona en LinkedIn suena muerto aquí.

---

## Anti-patrones X

- "Estamos encantados de anunciar..." → muerto en X
- Links en todos los tweets → penalizado
- Solo 1 tweet/día → invisible
- Hashtag spam (>2) → penalizado
- No responder a nadie → X es conversacional
- Copiar tono de LinkedIn → suena corporate
- Solo promocionar → 80% valor / 20% promo

---

## Publicación via MCP

X MCP disponible con herramientas:
- `post_tweet(text, media_ids?)` — publicar
- `upload_media(media_data, mime_type)` — subir imagen/video, devuelve media_id
- `reply_to_tweet(tweet_id, text)` — responder (link en reply)
- `get_metrics(tweet_id)` — métricas post-publicación
- `search_tweets(query, max_results)` — monitoreo

**Rate limits tier Free**: 500 posts/mes. El comando `publish` debe verificar remaining antes de publicar batch.

---

## Engagement activo

Replies de valor a cuentas del nicho: no "genial post!" sino añadir perspectiva, dato, o experiencia. Esto es más efectivo para crecimiento que publicar más tweets propios.

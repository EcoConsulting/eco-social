# SEO Bridge — Conexión entre RRSS y visibilidad en búsqueda

Reference para contexto transversal. No tiene comando propio — informa a `strategy`, `create` y `audit` sobre cómo RRSS impacta SEO (y viceversa).

---

## El dato clave (2026)

Las menciones de marca en RRSS correlacionan **3x más con visibilidad en IA** (ChatGPT, Perplexity, Google AI Overviews) que los backlinks tradicionales. YouTube tiene la correlación más alta (0.737).

Fuente: research de AgriciDaniel/claude-seo, datos GEO 2026.

---

## Implicaciones para la estrategia RRSS

1. **Publicar en RRSS no es solo engagement — es SEO**. Cada mención de marca en X, LinkedIn, YouTube alimenta la entidad en los modelos de IA.

2. **YouTube es el canal con mayor impacto SEO**. Incluso Shorts contribuyen a la señal de marca. Si el cliente puede hacer video, priorizarlo.

3. **Reddit importa para IA**. ChatGPT extrae de Reddit, Yelp, TripAdvisor — no directamente de Google. Participación orgánica en Reddit (con la regla 90/10) impacta visibilidad en IA.

4. **Open Graph tags en la web**. Cada vez que alguien comparte un link de la web del cliente en RRSS, las OG tags determinan cómo se ve. Verificar: og:title, og:description, og:image, og:url.

5. **Schema sameAs**. En el JSON-LD de Organization de la web, listar todas las URLs de RRSS en `sameAs`. Esto conecta explícitamente la entidad web con los perfiles sociales para los motores de búsqueda.

---

## Contenido "citable por IA"

Para que un post o artículo sea citado por modelos de IA:
- Pasajes de 134-167 palabras con datos específicos y quotables
- Afirmaciones claras y directas (no hedging)
- Contenido multi-modal (texto + imagen + video) tiene 156% más probabilidad de ser seleccionado
- El contenido debe ser rastreable: AI crawlers NO ejecutan JavaScript

---

## Checklist para `strategy`

Al definir la estrategia, considerar:
- [ ] ¿El cliente tiene YouTube? Si no, ¿puede empezar con Shorts?
- [ ] ¿Las OG tags de la web están bien configuradas?
- [ ] ¿El schema Organization tiene sameAs con los perfiles?
- [ ] ¿Hay presencia en Reddit relevante para el nicho?

---

## Checklist para `audit`

Al auditar, verificar:
- [ ] ¿La marca aparece mencionada fuera de sus propios perfiles?
- [ ] ¿Las OG tags generan previews correctos al compartir?
- [ ] ¿Los posts incluyen datos citables (no solo opiniones)?

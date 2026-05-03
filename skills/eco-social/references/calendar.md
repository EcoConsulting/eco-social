# Calendar — Planificación editorial concreta

Reference para el comando `calendar`. Genera un calendario con fechas, temas y plataformas.

---

## Workflow

```
1. Verificar que existen pilares (Gate Brief)
2. Preguntar periodo: "¿próxima semana?" (default) / "próximo mes?" / "próximas 2 semanas?"
3. Cargar platform registers activos
4. Distribuir posts según:
   - Frecuencia definida en strategy (o defaults por plataforma)
   - Ratio de pilares
   - Alternancia (no 3 educativos seguidos)
5. Para cada slot: asignar pilar + formato + idea de tema (1 línea)
6. Presentar como tabla
```

---

## Formato de output

```
Semana del [fecha]:

| Día | Plataforma | Pilar | Formato | Tema (1 línea) |
|-----|-----------|-------|---------|----------------|
| Lun | LinkedIn | Educativo | Texto largo | [idea] |
| Mar | X | Opinión | Tweet | [idea] |
| Mié | LinkedIn | Caso | Carousel | [idea] |
| Jue | X + IG | Behind-scenes | Foto + caption | [idea] |
| Vie | LinkedIn | Educativo | Texto largo | [idea] |
```

---

## Reglas de distribución

- No repetir el mismo pilar 2 días seguidos
- No repetir el mismo formato 2 días seguidos en la misma plataforma
- Viernes = buen día para behind-scenes y personal
- Lunes = buen día para educativo/valor (la gente busca aprender al arrancar semana)
- No programar contenido los fines de semana salvo que el cliente tenga audiencia de fin de semana

---

## Integración con `create`

El calendario genera la ESTRUCTURA. El comando `create` genera el CONTENIDO. Flujo típico:
1. `calendar próxima semana` → tabla con slots
2. Operador aprueba o ajusta
3. `create linkedin` usando los temas del calendario como input

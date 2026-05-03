# eco-social

> Tu contenido suena a IA. El de tu competencia también. El de tu cliente, también.
>
> Este skill existe para que eso deje de pasar.

**eco-social** es un skill de Claude Code para gestión de RRSS y creación de contenido con criterio editorial real. No genera "contenido para redes" — genera contenido que una persona con oficio escribiría, verificado contra una rúbrica cuantificable antes de salir.

Construido por [Eco Consulting](https://ecoconsultingia.com) para uso interno. Publicado porque el slop es problema de todos.

```bash
npx skills add EcoConsulting/eco-social --yes --agent claude-code
```

---

## Qué hace diferente

La mayoría de herramientas de contenido para IA hacen esto:

```
"En el mundo empresarial actual, es importante señalar que la inteligencia
artificial está revolucionando la forma en que las empresas operan..."
```

eco-social detecta **10 patrones AI** en ese párrafo, le da un **1/10**, y lo reescribe así:

```
"Una gestoría de 4 personas en Triana. 12 horas a la semana copiando datos
entre Excel y su programa de facturación. Hoy lo hace un script que montamos
en 3 días."
```

**Score: 8/10.** Mismo mensaje. Cero slop.

---

## 14 comandos

### Plan
| | |
|---|---|
| `strategy` | Pilares de contenido, objectives, frecuencia |
| `calendar` | Calendario editorial con fechas reales |
| `voice` | Extrae la voz del cliente en 7 fases |

### Create
| | |
|---|---|
| `create` | Lote de 5-10 posts para una plataforma |
| `thread` | Thread para X o LinkedIn |
| `carousel` | Carousel slide-by-slide |
| `repurpose` | Contenido largo → micro-contenido |
| `hooks` | 5+ hooks con fórmulas probadas |

### Evaluate
| | |
|---|---|
| `critique` | Seven Sweeps + anti-slop scoring |
| `de-slop` | Limpia patrones AI, puntúa 0-10 |
| `audit` | Audita presencia y engagement |

### Execute
| | |
|---|---|
| `adapt` | Adapta entre plataformas |
| `engage` | Replies de valor para engagement |
| `publish` | Publica via MCP con confirmación |

---

## Anti-slop: no es opinión, es rúbrica

El scoring se basa en 4 métricas medibles:

| Métrica | Qué mide | Bien | Slop |
|---------|----------|------|------|
| **Pattern count** | Patrones AI / 1000 palabras | <3 | >8 |
| **Sentence variance** | Variación de longitud de frase | CoV >0.35 | CoV <0.20 |
| **Specificity ratio** | Nombres y números vs vaguedades | >2:1 | <1.5:1 |
| **Voice alignment** | Consistencia con la voz del cliente | Alineado | Ausente |

**Umbral: score ≥7 o reescribir.** Sin negociación.

50+ patrones catalogados con reemplazo concreto. "Moreover" → punto y seguido. "Utilizar" → "usar". "Transformación digital" → describir qué se digitaliza.

---

## Cómo funciona

El skill consume tres documentos de tu proyecto (no incluidos — los creas por cliente):

- **DESIGN.md** — quién es la marca (tono, personalidad, paleta)
- **product_rrss.md** — specs por plataforma, bios, pilares
- **community_manager.md** — metodología editorial

Un sistema de 5 gates verifica que todo está en su sitio antes de generar nada. Sin contexto no hay contenido — solo slop.

Cada comando sigue el **Execution Protocol Karpathy**:

1. **Think Before** — ¿es el comando correcto? ¿falta información?
2. **Simplicity** — mínimo output que resuelve el problema
3. **Surgical** — solo lo pedido, no expandir scope
4. **Goal-Driven** — criterio de éxito verificable antes de producir

---

## Construido a partir de

Investigación profunda de 5 repos de skills de marketing y SEO (187 skills analizados en total), destilado con los principios de [Andrej Karpathy](https://github.com/karpathy) como criterio universal de simplicidad.

Arquitectura inspirada en [impeccable](https://github.com/pbakaus/impeccable) (gate system, progressive disclosure, platform registers).

---

## Licencia

MIT — úsalo, modifícalo, mejóralo.

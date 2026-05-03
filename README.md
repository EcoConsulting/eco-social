[🇪🇸 Leer en español](README.es.md)

# eco-social

> Your content sounds like AI. Your competitor's does too. Your client's, too.
>
> This skill exists to make that stop.

**eco-social** is a Claude Code skill for social media management and content creation with real editorial judgment. It doesn't generate "social content" — it generates content a skilled human would write, verified against a quantifiable rubric before publishing.

Built by [Eco Consulting](https://ecoconsultingia.com) for internal use. Published because slop is everyone's problem.

```bash
npx skills add EcoConsulting/eco-social --yes --agent claude-code
```

---

## What makes it different

Most AI content tools produce this:

```
"In today's fast-paced business world, it's important to note that artificial
intelligence is revolutionizing the way companies operate..."
```

eco-social detects **10 AI patterns** in that paragraph, scores it **1/10**, and rewrites it:

```
"A 4-person accounting firm in Seville. 12 hours a week copying data between
Excel and their invoicing software. Today a script we built in 3 days does it."
```

**Score: 8/10.** Same message. Zero slop.

---

## 14 commands

### Plan
| | |
|---|---|
| `strategy` | Content pillars, objectives, posting frequency |
| `calendar` | Editorial calendar with real dates |
| `voice` | Extract client voice in 7 phases |

### Create
| | |
|---|---|
| `create` | Batch of 5-10 posts for a platform |
| `thread` | Multi-tweet thread for X or LinkedIn |
| `carousel` | Slide-by-slide carousel |
| `repurpose` | Long-form → micro-content atoms |
| `hooks` | 5+ hooks using proven formulas |

### Evaluate
| | |
|---|---|
| `critique` | Seven Sweeps + anti-slop scoring |
| `de-slop` | Remove AI patterns, score 0-10 |
| `audit` | Audit presence and engagement |

### Execute
| | |
|---|---|
| `adapt` | Adapt between platforms |
| `engage` | Value-adding replies for engagement |
| `publish` | Publish via MCP with confirmation |

---

## Anti-slop: not vibes, a rubric

Scoring is based on 4 measurable metrics:

| Metric | What it measures | Good | Slop |
|--------|-----------------|------|------|
| **Pattern count** | AI patterns / 1000 words | <3 | >8 |
| **Sentence variance** | Sentence length variation | CoV >0.35 | CoV <0.20 |
| **Specificity ratio** | Names & numbers vs vagueness | >2:1 | <1.5:1 |
| **Voice alignment** | Consistency with client voice | Aligned | Absent |

**Threshold: score ≥7 or rewrite.** No negotiation.

50+ cataloged patterns with concrete replacements. "Moreover" → period. "Utilize" → "use". "Digital transformation" → describe what you're actually digitizing.

---

## How it works

The skill consumes three project-level documents (not included — you create them per client):

- **DESIGN.md** — who the brand is (tone, personality, palette)
- **product_rrss.md** — platform specs, bios, content pillars
- **community_manager.md** — editorial methodology

A 5-gate system verifies everything is in place before generating anything. No context, no content — only slop.

Every command follows the **Karpathy Execution Protocol**:

1. **Think Before** — is this the right command? is anything missing?
2. **Simplicity** — minimum output that solves the problem
3. **Surgical** — only what was asked, don't expand scope
4. **Goal-Driven** — verifiable success criterion before producing

---

## Built from

Deep research of 5 marketing and SEO skill repos (187 skills analyzed), distilled using [Andrej Karpathy's](https://github.com/karpathy) principles as universal simplicity criteria.

Architecture inspired by [impeccable](https://github.com/pbakaus/impeccable) (gate system, progressive disclosure, platform registers).

---

## License

MIT — use it, modify it, improve it.

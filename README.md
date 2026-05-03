# eco-social

Professional social media management & content creation skill for Claude Code.

Anti-slop editorial system, hook formulas, platform-specific optimization, voice extraction.

## Install

```bash
npx skills add EcoConsulting/eco-social --yes --agent claude-code
```

## Commands

| Command | What it does |
|---------|-------------|
| `strategy` | Define content pillars, objectives, posting frequency |
| `calendar` | Generate editorial calendar with dates |
| `voice` | Extract client voice from writing samples (7 phases) |
| `create` | Generate content batch (5-10 posts) for a platform |
| `thread` | Multi-tweet thread for X or LinkedIn |
| `carousel` | Slide-by-slide carousel for IG/LinkedIn |
| `repurpose` | Extract content atoms from long-form into micro-content |
| `hooks` | Generate 5+ hooks using proven formulas |
| `critique` | Seven Sweeps + anti-slop scoring |
| `de-slop` | Remove AI patterns from text, score 0-10 (standalone) |
| `audit` | Audit social presence + engagement with scoring |
| `adapt` | Adapt content from one platform to another |
| `engage` | Generate value-adding replies for active engagement |
| `publish` | Publish via MCP (X) with confirmation and error handling |

## How it works

The skill consumes three project-level documents (not included — you create them per client):

- **DESIGN.md** — brand identity (tone, personality, colors)
- **product_rrss.md** — platform specs, bios, content pillars
- **community_manager.md** — editorial methodology

Every command follows the Karpathy Execution Protocol: Think Before, Simplicity, Surgical, Goal-Driven with verifiable success criteria.

## Anti-slop scoring

Quantifiable rubric based on 4 metrics: AI pattern count, sentence variance, specificity ratio, and voice alignment. Threshold: score >= 7 or rewrite.

## License

MIT

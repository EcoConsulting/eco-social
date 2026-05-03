/**
 * Pin/unpin eco-social sub-commands as standalone skill shortcuts.
 * Usage:
 *   node pin.mjs pin <command>     → creates $<command> shortcut
 *   node pin.mjs unpin <command>   → removes $<command> shortcut
 *
 * Writes to every harness directory present in the project.
 */

import fs from 'node:fs';
import path from 'node:path';

const PIN_MARKER = '<!-- eco-social-pinned-skill -->';
const SKILL_NAME = 'eco-social';

const VALID_COMMANDS = [
  'strategy', 'calendar', 'voice', 'create', 'thread', 'carousel',
  'repurpose', 'hooks', 'critique', 'de-slop', 'audit', 'adapt',
  'engage', 'publish',
];

const HARNESS_DIRS = [
  '.claude/skills', '.cursor/skills', '.gemini/skills',
  '.codex/skills', '.windsurf/skills', '.kiro/skills',
];

const COMMAND_DESCRIPTIONS = {
  'strategy': 'Define pilares, objectives y frecuencia por plataforma',
  'calendar': 'Genera calendario editorial concreto con fechas',
  'voice': 'Extrae Voice Guide de muestras del cliente',
  'create': 'Genera lote de contenido para una plataforma',
  'thread': 'Thread multi-tweet para X o LinkedIn',
  'carousel': 'Carousel slide-by-slide para IG/LinkedIn',
  'repurpose': 'Extrae content atoms de pieza larga a micro-contenido',
  'hooks': 'Genera 5+ hooks con fórmulas probadas',
  'critique': 'Seven Sweeps + anti-slop scoring del borrador',
  'de-slop': 'Elimina patrones AI del texto, puntúa 0-10',
  'audit': 'Audita presencia y engagement con scoring',
  'adapt': 'Adapta contenido de una plataforma a otra',
  'engage': 'Genera replies de valor para engagement activo',
  'publish': 'Publica via MCP con confirmación y manejo de fallos',
};

function pin(command, cwd) {
  if (!VALID_COMMANDS.includes(command)) {
    console.error(`Error: "${command}" no es un comando válido de eco-social.`);
    console.error(`Comandos válidos: ${VALID_COMMANDS.join(', ')}`);
    process.exit(1);
  }

  const description = COMMAND_DESCRIPTIONS[command] || `eco-social ${command}`;
  const content = `---
name: ${command}
description: "${description} (shortcut de eco-social ${command})"
---

${PIN_MARKER}

Invoca \`$${SKILL_NAME} ${command}\` con los argumentos que recibas. Pasa $ARGUMENTS al comando.
`;

  let created = 0;
  for (const harnessDir of HARNESS_DIRS) {
    const skillsDir = path.join(cwd, harnessDir);
    const ecoSocialDir = path.join(skillsDir, SKILL_NAME);
    if (!fs.existsSync(ecoSocialDir)) continue;

    const pinDir = path.join(skillsDir, command);
    fs.mkdirSync(pinDir, { recursive: true });
    fs.writeFileSync(path.join(pinDir, 'SKILL.md'), content, 'utf-8');
    created++;
  }

  if (created === 0) {
    console.error(`No se encontró eco-social instalado en ningún harness directory.`);
    process.exit(1);
  }
  console.log(`✓ Pinned: $${command} → $${SKILL_NAME} ${command} (${created} harness(es))`);
}

function unpin(command, cwd) {
  let removed = 0;
  for (const harnessDir of HARNESS_DIRS) {
    const pinDir = path.join(cwd, harnessDir, command);
    const skillFile = path.join(pinDir, 'SKILL.md');
    if (!fs.existsSync(skillFile)) continue;
    const content = fs.readFileSync(skillFile, 'utf-8');
    if (!content.includes(PIN_MARKER)) continue;
    fs.rmSync(pinDir, { recursive: true });
    removed++;
  }

  if (removed === 0) {
    console.error(`No se encontró pin de "${command}" para eco-social.`);
    process.exit(1);
  }
  console.log(`✓ Unpinned: $${command} eliminado (${removed} harness(es))`);
}

function cli() {
  const [action, command] = process.argv.slice(2);
  if (!action || !command || !['pin', 'unpin'].includes(action)) {
    console.error('Uso: node pin.mjs <pin|unpin> <comando>');
    console.error(`Comandos: ${VALID_COMMANDS.join(', ')}`);
    process.exit(1);
  }
  const cwd = process.cwd();
  if (action === 'pin') pin(command, cwd);
  else unpin(command, cwd);
}

cli();

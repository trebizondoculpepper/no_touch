# No Touch Order: agent guide

A first-person narrative browser game about guarding a forbidden button in an ordinary, deliberately unspecified police institution. Read `doc/plans/No-Touch-Order-Game-Plan.md` before implementing story or gameplay. The plan contains unresolved design decisions; preserve them until they are decided.

The stack and structure follow `../encabulator`: Vite+, TypeScript, Three.js, `@preact/signals-core` and ZzFX. This repository currently contains a starter screen and tooling, not an implemented game.

## Rules

- Work on `main`. Do not create branches or worktrees unless the owner asks.
- Before committing, run `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm test` and `npm run build`. CI runs the same checks and deploys successful pushes to `main` to GitHub Pages.
- Keep asset paths and internal links relative; Vite uses `base: './'` for deployment under `/no_touch/`.
- Markdown is one paragraph per line, never hard-wrapped. Preserve the supplied game plan verbatim unless asked to edit it.
- Record significant sessions in `diary/`.
- Never commit credentials, `agent-mailbox.toml` or `agent-inbox.toml`.
- Ask the owner one question at a time.
- Record sound credits in `CREDITS.md` (author, source URL, licence and edits); technical asset notes go in `src/audio/assets/README.md`.
- Keep working recordings in `resources/sound/`; only prepared game assets belong in `src/audio/assets/`.
- Treat volumes named `NO NAME` as read-only sources; copy files into the workspace before editing them.
- On this Mac use Apple's `container` CLI, not Docker. If a dependency needs Docker Compose, tell the owner.

## Architecture and commands

- `src/game/` is pure logic without DOM or Three.js dependencies. Put tests beside implementations as `*.test.ts`; import test APIs from `vite-plus/test`.
- `src/scene/` builds visual objects; `src/rendering/` connects visuals, input and game state; `src/audio/` handles sound. Keep these boundaries as the game grows.
- `npm run dev` starts at `http://127.0.0.1:5175/`; preview uses port 4175. Both ports are strict to avoid other local projects.
- `npm run format` applies Oxfmt; `npm run check` combines formatting, lint and type checks. Tool configuration lives in `vite.config.ts`.

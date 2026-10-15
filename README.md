# No Touch Order

A single-player, first-person narrative game set in an ordinary police guardroom. The player is employed to prevent anyone from pressing a large red button. Nobody else ever enters.

The project is scaffolded; gameplay is not implemented yet. The [game plan](doc/plans/No-Touch-Order-Game-Plan.md) describes the intended story and design.

## Development

Use the Node.js version in `.node-version`.

```sh
npm ci
npm run dev   # http://127.0.0.1:5175/
```

The stack and layout follow `encabulator`: TypeScript, Three.js, Preact signals and Vite+ (Vite, Vitest, Oxlint and Oxfmt). ZzFX is available for synthesised sound.

- `src/game/`: pure game logic and colocated tests; `world/` is reserved for world state.
- `src/scene/`: Three.js models and scene objects.
- `src/rendering/`: renderer, camera, input and presentation integration.
- `src/audio/`: playback and prepared assets in `assets/`.
- `src/ui/`, `src/styles/`, `src/types/`: interface, styles and shared declarations.
- `doc/`: plans, research, scripts and handover notes in `resume/`.
- `resources/sound/`: working effects, narration and music recordings.
- `diary/`: significant development sessions.

Run `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm test` and `npm run build` before committing. Use `npm run format` to apply formatting. Tests import from `vite-plus/test`.

CI runs the same checks. Successful pushes to `main` deploy to GitHub Pages at https://trebizondoculpepper.github.io/no_touch/. Asset paths and internal links must stay relative.

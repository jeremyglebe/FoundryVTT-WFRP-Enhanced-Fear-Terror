# WFRP4e Enhanced Fear & Terror

Foundry VTT module for making WFRP4e Fear and Terror easier for GMs to prompt, apply, and manage at
the table.

## Installation

Use this manifest URL in Foundry's module installer:

```text
https://github.com/jeremyglebe/FoundryVTT-WFRP-Enhanced-Fear-Terror/releases/latest/download/module.json
```

## Features

- Opens a GM Fear & Terror workbench from independently configurable Module Settings, Token
  Controls, and actor-sheet launchers.
- Prefills source, type, and rating from an open actor sheet or the first controlled token.
- Posts WFRP4e-style Fear/Terror prompt cards.
- Posts compact inline Fear/Terror links.
- Applies Fear/Terror only to targeted actors through WFRP4e automation.
- Includes an importable workbench launcher in the `Enhanced Fear & Terror Macros` compendium.
- Exposes a macro-friendly API.

## Macro Access

Open `Compendium Packs`, find `Enhanced Fear & Terror Macros`, and use or import
`Open Enhanced Fear & Terror`.

For a custom script macro, the equivalent API call is:

```js
await game.modules.get("wfrp4e-enhanced-fear-terror")?.api.openWorkbench();
```

## Source Names

Fear source matching is name-based in WFRP4e. Use a shared source such as `Ghouls` when a whole pack
should count as the same source. Use a distinct source name when only one creature, hazard, or
ability should count.

## Compatibility

- Foundry VTT 13 minimum; Foundry VTT 14 verified.
- WFRP4e system required.

# WFRP4e Enhanced Fear & Terror

Foundry VTT module for making WFRP4e Fear and Terror easier for GMs to prompt, apply, and manage at the table.

## Installation

Use this manifest URL in Foundry's module installer:

```text
https://github.com/jeremyglebe/FoundryVTT-WFRP-Enhanced-Fear-Terror/releases/latest/download/module.json
```

## Features

- Opens a GM Fear & Terror workbench from Token Controls.
- Opens the workbench from WFRP actor sheet headers, prefilled with that actor as the source.
- Posts WFRP4e-style Fear/Terror prompt cards.
- Posts combat-style inline Fear/Terror links.
- Applies Fear/Terror to targeted or controlled actors by delegating to WFRP4e's own automation.
- Exposes a macro-friendly API for GMs who prefer the macro bar.

## Macro Access

Create a Foundry script macro with:

```js
game.modules.get('wfrp4e-enhanced-fear-terror').api.openWorkbench()
```

## Source Names

Fear source matching is name-based in WFRP4e. Use a shared source such as `Ghouls` when a whole pack should count as the same source of Fear. Use a distinct source name when only one creature, hazard, or ability should count.

## Compatibility

- Foundry VTT v14 verified.
- WFRP4e system required.

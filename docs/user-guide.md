# User Guide

## Opening the Workbench

The module provides five access paths:

- Module Settings for general GM use.
- Token Controls for quick scene access.
- Actor-sheet header controls for a source-specific suggestion.
- The `Open Enhanced Fear & Terror` macro in `Enhanced Fear & Terror Macros`.
- The module API for script macros and other modules.

The three Foundry UI launchers each have an enabled-by-default checkbox in the module's client
settings. Changing one requires a reload. The shipped macro remains available even when all three UI
launchers are disabled.

## Prompting Fear or Terror

1. Open the workbench.
2. Choose `Fear` or `Terror`.
3. Set the rating and source name.
4. Review the current targeted recipients.
5. Use the primary `Post Card` action, or choose `Post Link` or `Apply`.

`Post Card` creates a WFRP4e psychology chat card for the target's owner to answer. `Post Link`
creates a compact chat message with a WFRP4e inline Fear or Terror link. `Apply` immediately
delegates the selected effect to WFRP4e for the targeted recipients, which is most useful when a GM
is applying the effect to NPCs.

## Recipient Selection

Only targeted token actors are recipients for direct application. Controlled tokens and the current
user's assigned character are never added implicitly.

## Source Names

WFRP4e tracks Fear sources by name. Use a shared source such as `Ghouls` when a group should count
as the same source. Use a unique source name when only one creature, ability, or hazard should
matter. Opening from an actor sheet prefills the source, type, and rating from that actor. Other
launch paths use the first controlled token actor as the editable default when one exists.

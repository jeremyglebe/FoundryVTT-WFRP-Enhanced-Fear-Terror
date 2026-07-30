# User Guide

## Opening a Console

Both consoles are available from Module Settings, Token Controls, their macros, and the module API.
The Fear Console also appears in supported WFRP4e actor-sheet headers. Every Foundry UI launcher has
an enabled-by-default client setting; changing one requires a reload.

## Fear Console

1. Open the console.
2. Choose `Fear` or `Terror`.
3. Set the rating and source name.
4. Review the targeted recipients.
5. Choose `Post Card`, `Post Link`, or `Apply`.

Only targeted token actors receive direct application. Controlled tokens and the current user's
assigned character are not added implicitly. WFRP4e tracks Fear sources by name, so use a shared
source such as `Ghouls` when a group should count as one source.

## XP Curve Console

1. Target the character tokens that should seed the award, or leave all tokens untargeted to use the
   configured Party, Company, or World default.
2. Review or adjust the recipients. Unassigned, player-owned actors display a `Companion rate`
   label.
3. Set the maximum award and the XP gap where the curve reaches that cap.
4. Expand `Advanced curve and scale` when you need to change the curve shape, high-XP weakening, or
   companion rate.
5. Review the live graph and each actor's gap, award, and new total.
6. Edit the experience-log reason, then use `Award XP`.

The actor with the highest selected total XP is the comparison point and receives no catch-up XP.
The scale pivot is the highest-XP level where the curve still runs at full strength. Above it, the
scale exponent weakens awards; set that exponent to zero to disable weakening.

The reason supports `%session%` and `%date%`. When GM Toolkit compatibility is enabled and that
module is active, Drowsy’s Toolkit reads its session reference, default XP reason, and default
Party/Company group. Drowsy’s Toolkit does not overwrite GM Toolkit data.

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
3. Open `Curves & defaults` to configure the initial catch-up curve and recipient decay curve. Edit
   their number fields or drag their diamond and round graph handles; both controls stay
   synchronized.
4. Review the numbered recipient markers on both graphs and each actor's leader gap, initial
   catch-up, decay multiplier, final award, and new total.
5. Choose the no-target recipient default and GM Toolkit compatibility behavior, then use
   `Save defaults` if those choices should persist without awarding XP.
6. Return to `Recipients & award`, edit the experience-log reason, then use `Award XP`.

The actor with the highest selected total XP is the comparison point and receives no catch-up XP.
For every other recipient, the catch-up curve first converts the gap below that leader into an
initial XP value. The decay curve then multiplies that value according to the recipient's own total
XP; the leader's total is not part of decay. Recipients at or below `Decay start` keep full
strength. Above it, `Recipient decay exponent` weakens the result; set that exponent to zero to
disable decay. The companion rate is applied before rounding, and the hard limit is applied last.

The reason supports `%session%` and `%date%`. When GM Toolkit compatibility is enabled and that
module is active, Drowsy’s Toolkit reads its session reference, default XP reason, and default
Party/Company group. Drowsy’s Toolkit does not overwrite GM Toolkit data.

The same persistent defaults are available in Foundry's Module Settings. Drowsy’s Toolkit groups
them beneath `Fear Console` and `XP Curve Console` headings so launcher choices, recipient defaults,
curve inputs, and the hard limit are easier to locate.

import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

<Bleed>
  ![Archly Finance Tokenomics](/archly_banner.png)
</Bleed>


&nbsp;

# Tokenomics

Archly Finance uses two tokens to manage its utility and governance:

 * `$Arc` &mdash; ERC-20 utility token of the Archly ecosystem
 * `$veArc` &mdash; ERC-721 token in the form of an NFT
   (non-fungible token)

`$Arc` is used for rewarding liquidity providers through emissions and to pay for whitelisting tokens (on DEX and Rainbow Road), sending messages across the Rainbow Road, and more.

`$veArc` is used for earning bribes and fees. Any `$Arc` holder can vote-escrow their tokens and
receive a `$veArc` (also known as veNFT) in exchange. Additional tokens can be
added to the `$veArc` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:
 * 100 `$Arc` locked for 4 years will become 100 `$veArc`
 * 100 `$Arc` locked for 1 year will become 25 `$veArc`
 * 100 `$Arc` locked for 1 month will become 2.05 `$veArc`
 * 100 `$Arc` locked for 1 week will become 0.48 `$veArc`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `$veArc` holder receives.

## ve(3,3) Mechanics

Archly Finance mechanics reflect a combination of two DeFi concepts:
 * Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
 * Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Archly's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `$Arc` emissions,
and `$veArc` holders receive protocol fees, bribes, and rebases.

![image](/archly_flows.png)

Below, we will walk through the components of the mechanism in order to
explain how it helps the incentives flow to the most valuable of the ecosystem
liquidity pools.

## Emissions

- Controlled at the chain level.

- Target a lock rate of 80% across all chains.

- Existing Arc and veArc must be moved via the Rainbow Road from other chains to the new chain.

- A maximum of 25M Arc will be minted to provide liquidity for new Arc-NATIVE pools on the new chain (20M Arc max) and cover prior team obligations (5M Arc max for this category).

- Can only start on chains that have obtained 5% of the global total supply of Arc on chains with emissions enabled.

- Will be reduced on all chains where emissions are enabled to maintain a consistent emission schedule.


`$veArc` holders receive a rebase proportional to epoch LP emissions
and the ratio of `$veArc` to `$Arc` supply, thus reducing vote power
dilution for `$veArc`!

`$veArc` supply plays a crucial role in determining the weekly LP emissions. The more `$Arc` that is locked into `$veArc` the lower the amount of the distribution of `$Arc` during the next week of LP emissions. Said another way, if 100% of `$Arc` is locked up as `$veArc`, then the weekly LP distribution of `$Arc` will be low (approaching 0 `$Arc`). If 0% of `$Arc` is locked up, then the weekly LP distribution of `$Arc` will be high. As there is no max supply of `$Arc`, this system allows the `$Arc` holders to determine how much inflation is introduced into the ecosystem, thus making engagement critical in keeping the supply of `$Arc` in balance.

## Gauge Voting

`$veArc` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `$Arc` emissions will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive 100% of the trading fees and bribes collected through the
liquidity pool they vote for. 

Voting for gauges, or in fact any action related to the `$veArc` NFT is
allowed only after one week of the previous vote being cast. This means that calling `Voter.reset()` (used for
resetting an NFT vote state and usually required before merging it into another
`$veArc` NFT) or `Voter.poke()` (used to re-cast the votes for the current epoch in
order to direct emissions and earn bribes) are not available until the one week vote lock has expired.

While this is not ideal, it does make the protocol safer against potential exploitative behaviour.

## Rewards

There are 4 types of rewards on Archly Finance.

### Emissions

Represent `$Arc` distributed to liquidity pool stakers. The amount of
`$Arc` distributed towards every pool is proportional to the voting power
received from the voters every epoch.

These rewards are streaming and are available for claim as these accrue.

### Fees

Represent liquidity pool trading fees distributed to voters in pool tokens (
e.g., if the pool is `vAMM-Arc/USDC` the distributed tokens are `$Arc` and
`$USDC`).

The fee rewards are released and claimable in the next epoch (Thursdays at 00:00 UTC) proportionally to the voting power cast by a voter and
the accrued amount of weekly trading fees. They do not need to be claimed each epoch.

### Bribes

In addition to the fees, liquidity pools allow external rewards from anyone
(known as _bribes_). Bribes can be added to _whitelisted_ pools and are distributed 
_only_ to voters on that pool, proportionally to their share of pool votes. They do not need to be claimed each epoch.

These rewards are available for claim in the next epoch (Thursdays at 00:00 UTC) after the creation of a bribe for a pool, and are proportional to the voting power cast by a
voter (`$veArc`).

### Rebases

Represent `$Arc` distributed to `$veArc` holders in order to reduce the
voting power dilution.

These rewards are available for claim each week in the next epoch (Thursdays at 00:00 UTC) proportionally to all `$veArc` holders.

## Rewards claim

Rebase rewards claim is available one full epoch after tokens are locked.

An example of bribes, voting, and rewards claim timeline:
 * A new epoch starts Thursday (00:00 UTC)
 * Bribes are deposited at any point in the epoch
 * Voters vote for their preferred pools
 * Voters claim bribes (incentives) and fees for their pool in the next epoch (after Thursday at 00:00 UTC)
 * Liquidity providers can claim their Arc emission any time during the epoch

## Whitelisting

While Archly DEX and Rainbow Road supports permissionless liquidity pool, gauge creation, and token transfers these can
only include _whitelisted_ tokens.

Partners can pay the whitelisting fee in order to whitelist their projects token on Archly. The Arc paid for whitelisting is burned. 

## Commissaire

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the admin (a Curve-esque _Emergency DAO_)
will have the right to disable any hostile gauges.

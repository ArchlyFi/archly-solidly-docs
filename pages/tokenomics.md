import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

<Bleed>
  ![Archly Finance Tokenomics](/archly_banner.png)
</Bleed>


&nbsp;

# Tokenomics

Archly Finance uses two tokens to manage its utility and governance:

 * `$Arc` &mdash; ERC-20 utility token of the protocol
 * `$veArc` &mdash; ERC-721 token in the form of an NFT
   (non-fungible token)

`$Arc` is used for rewarding liquidity providers through emissions.

`$veArc` is used for earning bribes and fees. Any `$Arc` holder can vote-escrow their tokens and
receive a `$veArc` (also known as veNFT) in exchange. Additional tokens can be
added to the `$veArc` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:
 * 100 `$Arc` locked for 4 years will become 100 `$veArc`
 * 100 `$Arc` locked for 1 year will become 25 `$veArc`

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

## Initial Distribution

<Callout emoji="🪂">
  The airdrop claim period is now complete. Thank you to everyone who
  participated!
</Callout>

At launch we distributed `$Arc` and `$veArc` to
users we believe are likeliest to contribute to our
mission to become the liquidity base layer of the Telos EVM ecosystem.


### Distribution

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Community", 10 ],
      [ "Archly Team", 15 ],
      [ "Initial Bribes", 5 ],
    ]}
    options={{
      title: "$Arc Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#79F8DB', '#027FFF', '#FDBF40', '#FF1301', '#F1EBE2', '#FBBF42', '#EDE7DB'],
      legend: {textStyle: {color: 'white'}},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

### Community

10M (33.33%) `$Arc` tokens were distributed to the people who have played the biggest role in
incubating Archly and those likeliest to contribute to its long-term
success, including:
 * First 10 Telegram members (10%, 1M `$Arc`)
 * First 35 Telegram members (90%, 9M `$veArc`)
 
### Team

The team will receive an initial allocation that it will use to vote
to drive emissions to key protocol pairs such as `$Arc-$USDC` and to support
ongoing protocol development. The total team allocation is 15M (50%) in `$Arc` and `$veArc`.

The team will vest 66.67% of its initial allocation in the form of a
`$veArc` and use it to vote for `$Arc` pairs in perpetuity. This will be restricted to a 70/30 split between Arc pools (70%) and other pools (30%).

While a fully autonomous and immutable protocol is an admirable objective, it
comes at a cost. Archly Finance will ensure its long-term sustainability by
employing a dedicated team focused on supporting the product, documentation,
community, and ecosystem. As the protocol evolves, the Archly team will
consider introducing more immutability or DAO components where appropriate.

To cover ongoing expenses and all the upcoming development efforts, 3% of the
emissions will be going to the team address.

## Initial Bribes

5M (16.67%) To encourage voting for the initial pools by the First 35 and spread more Arc to LP.

## Emissions

The initial supply of `$Arc` was 30M.

Weekly emissions started at about 15.58M `$Arc` (3.75% of the initial supply)
and decay at 2% per week (epoch).

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

The tokens are streaming proportionally to the voting power cast by a voter and
the accrued amount of trading fees.

These rewards are available for claim as they accrue. They do not need to be claimed each epoch.

### Bribes

In addition to the fees, liquidity pools allow external rewards from anyone
(known as _bribes_). Bribes can be added to _whitelisted_ pools and are distributed 
_only_ to voters on that pool, proportionally to their share of pool votes.

These rewards are available for claim immediately after the creation of a bribe for a pool, and are proportional to the voting power cast by a
voter (`$veArc`).

### Rebases

Represent `$veArc` distributed to `$veArc` holders in order to reduce the
voting power dilution.

These rewards are available for claim as these accrue and are streaming
proportionally to all `$veArc` holders.

## Rewards claim

Rebase rewards claim is available one full epoch after tokens are locked.

An example of bribes, voting, and rewards claim timeline:
 * A new epoch starts Thursday (00:00 UTC)
 * Bribes are deposited at any point in the epoch
 * Voters vote for their preferred pools

## Whitelisting

While Archly supports permissionless liquidity pool and gauge creation, these can
only include _whitelisted_ tokens. The protocol will launch with an extensive list of
pre-whitelisted tokens.

Partners can pay the whitelisting fee in order to whitelist their projects token on Archly. The Arc paid for whitelisting is burned. 

## Commissaire

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the admin (a Curve-esque _Emergency DAO_)
will have the right to disable hostile gauges.

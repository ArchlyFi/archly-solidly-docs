import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
  ![Archly Finance DEX](/archly_banner.png)
</Bleed>

&nbsp;

# DEX Overview

## Problems with Liquidity Incentivization

Almost every protocol in DeFi needs to have a certain amount of liquidity for one reason or another.

| Liquidity    | Example   | Benefit                                        |
| ------------ | --------- | ---------------------------------------------- |
| Native token | TLOS-USDC   | Treasury access to capital markets             |
| Stablecoins  | DAI-USDC  | Ensure stability by minimizing depeg risk      |
| Pegged asset | ETH-stETH | Minimize opportunity cost of converting assets |

However, current solutions for incentivizing liquidity come with their own tradeoffs and pitfalls:

- Pool 2 emissions (i.e. attaching a reward to staked LPs) can be costly to maintain, and often times result in a "farm and dump" resulting in "unsticky" liquidity.

- Protocol owned liquidity can be costly to bootstrap, and liquidity may only be needed occasionally, instead of on-going basis.

- Bribing voters in the CRV/CVX system can be costly as incumbents already have a sizeable lead. Additionally, the universe of pool types here are limited.

## About DEX

Archly's DEX addresses these issues and presents an attractive alternative by addressing the core issues in Solidly and adding its own improvements. To recall, the key innovation of Solidly was to align protocol emissions with fees generated, not simply liquidity. To do this, it would allow protocols and other large stakeholders to become veArc "voters", using their locked voting power to direct future emissions and collecting fees (termed bribes in Solidly) from the pools they voted for.

Archly has made several improvements to the Solidly codebase, all of which were thoughtfully chosen to ensure that the protocol would carry out the original intended mechanism of allowing voters to _fairly compensate_ LPs for impermanent loss and remain 100% permissionless to allow any user or project to build incentivize liquidity.

Solidly had several key issues that prevented its success in the Fantom ecosystem:

## Improvements on Solidly

- Arc and veArc tokens are cross-chain first tokens allowing them to be moved between chains seamlessly via our [Rainbow Road](/road).

- Stable and Volatile pools have separate default variable fee rates. This allows each type of pool to adjust the fees for the pool independent of each other. Also, both pool types have a max fee of 5%.

- Added the ability to set custom fees for each individual pool with a max fee of 5%.

- Added controls to fine tune emissions (target, tail, and rebases) on all chains.

- Flat-rate whitelisting fee for tokens.

- Voters are only allowed to make an "active" voting decision (i.e. `Voter.vote()`, `Voter.reset()`, `Voter.poke()`) after a one week lock period from the previous "active" voting decision. 

- Gauges can be disable or re-enabled to prevent rouge actors from directing Arc emissions to dummy gauges.

- Team emissions: The team will receive a variable (between 0% to 10%) amount of weekly emission to ensure the team has ample funding to pay for resources such as subgraph nodes and website hosting.

- Whitelisting fees are paid for in Arc. Arc paid for whitelisting tokens is burned.

- Permissioned Mode: In the event that Archly needs to be run in a restrictive mode (controlling whitelistings), Permissioned Mode can be enabled to make Archly behave as a traditional DAO.

- Removed boosters for liquidity providers that hold veArc.

- Removed negative voting.
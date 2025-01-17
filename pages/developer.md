import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
  ![Archly Finance Developer Resources](/archly_banner.png)
</Bleed>

&nbsp;

# Developer Resources

## Building on the Rainbow Road
![Rainbow Road Overview](/rainbow-road-overview.jpg)

The Rainbow Road is designed to be flexible and open to all projects, businesses, and users. It’s meant to be a simple and efficient way to power any use case on any blockchain. The basic components of the Rainbow Road are the __Rainbow Road__, __Receivers__, __Senders__, and __Handlers__. If you want to learn more about each component and its role, check out the [Rainbow Road overview](/road).

## Writing Handlers

The Rainbow Road is a platform that lets you customize any part of it to create cross-chain scenarios. But most developers will create a __Handler__, which is where most of the application’s cross-chain logic is. This lets developers focus on the parts they want to work on, while the Rainbow Road handles sending and receiving cross-chain messages. The __Handler__ has two functions: __handleSend__ and __handleReceive__. These work together to take actions on the source and destination chains. __handleSend__ takes care of tasks on the source chain, like burning tokens so that they can be minted on another chain. __handleReceive__ executes corresponding actions, like minting tokens, on the destination chain. Outside of these two functions, the __Handler__ can have any number of variables and functions to help you create your cross-chain scenarios. The __IHandler__ is provided below to help you get started with your first Handler. Right now, you cannot add a __Handler__ to the Rainbow Road on your own. Once you’re ready, contact the Archly team on [Discord](https://discord.gg/nZQZ2Br9yc) or [Telegram](https://t.me/ArchlyFinance) to review and onboard your Handler.

__IHandler.sol__
```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IHandler {
    function handleReceive(address target, bytes calldata payload) external;
    function handleSend(address target, bytes calldata payload) external;
}
```

## Transferring Tokens

Since token transfers between chains are a common use case, we’ve created the __Erc20TransferHandler__ to help projects move tokens between chains. This handler supports minting, burning, locking, and unlocking modes, giving teams the flexibility to choose the best approach for their cross-chain needs. For the best fungibility of tokens between chains, the token should support minting and burning (see the __IMintBurn__ interface below). This allows tokens to be burned on the source chain and minted on the destination chain, keeping the total supply of the token constant and enabling true scalability across any and all chains. For migration scenarios, the locking and minting, and locking and releasing modes can be used. The locking and minting mode requires the token to implement the __mint__ function from the __IMintBurn__ interface below.

Once you’ve decided on the best way to transfer your token, you just need to add it to the Rainbow Road by whitelisting the token on both the source and destination chains at the [Archly Rainbow Road](https://www.archly.fi/road). For tokens that need minting and burning, or locking and minting, just get in touch with the Archly team on [Discord](https://discord.gg/nZQZ2Br9yc) or [Telegram](https://t.me/ArchlyFinance) to help you finish setting up your token to cross the Rainbow Road.

__IMintBurn.sol__
```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IMintBurn {
    function burn(uint amount) external;
    function mint(address account, uint amount) external;
}

```



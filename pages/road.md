import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
  ![Archly Finance Rainbow Road](/archly_banner.png)
</Bleed>

&nbsp;

# Rainbow Road Overview

![Rainbow Road Overview](/rainbow-road-overview.jpg)

## About Rainbow Road

At the core, the Rainbow Road allows seamless cross-chain experiences to be built on top of blockchains. This is done by providing a layer that integrates with the underlying chains and other infrastructure protocols, removing the need for every app (Web2 and Web3) to do the same. Instead projects and businesses can integrate with the Rainbow Road, allowing it to take care of the details needed to reliably and securely operate across multiple chains. Thus freeing them to use that time to build great applications for their users. By executing on this vision, the Rainbow Road empowers users, projects, and businesses to effortlessly do what they want, where they want, when they want on any chain.

## Components

The __Rainbow Road__ is the central component that orchestrates the work that needs to be done. The core responsibility of the Rainbow Road is to manage tokens onboarded to the Rainbow Road, senders, receivers, handlers, and configuration settings.

__Receivers__ unwrap incoming messages and sends the resulting payload to the Rainbow Road for processing. They serve as an entry point for actions to be performed by the Rainbow Road on the local chain where it resides.

__Senders__ wrap outgoing messages into the required format needed to interact with external protocols and contracts. The destination for an outgoing message can be on the local chain or a remote chain.

__Handlers__ do the heavy lifting for the Rainbow Road. The main purpose of handlers is to carry out actions needed to accomplish a task. This can be anything from transferring tokens in and out of a contract to facilitate cross-chain transfers or to burn veArc on one chain and mint the veArc on another chain. Handlers can even be configure to take actions like getting price data from a Chainlink Data Feed or random number from Chainlink’s VRF, bundling that data into a payload, sending that payload out to a chain that does not have Chainlink VRF or Data Feed support via other cross-chain messaging protocols, and making the random number or price data available for contracts to consume just like they would if the chain had native support for VRF and Data Feed. Stating this another way, Handlers are very powerful contracts that can be used to extend the reach of a chain’s resources to benefit other chains onboarded to the Rainbow Road.

## Benefits

- Allows for consistent costing to operate across any chain by utilizing our Arc utility token to pay fees once. We purchase the necessary tokens, like LINK and WETH, to pay service providers to carry out the necessary tasks.

- Abstracts the underlying message passing protocols away from your app. Freeing your developers from having to hard code your app to one  or redeploy to support new versions. Your app can automatically take advantage of upgrades and more as the Rainbow Road handles these dependencies behind the scene.

- 100% permissionless whitelisting of tokens to move between chains in a totally self-service model.

- Provides access to the products and services you depend on no matter what chain you are building.
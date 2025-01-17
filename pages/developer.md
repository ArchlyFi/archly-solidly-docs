import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
  ![Archly Finance Developer Resources](/archly_banner.png)
</Bleed>

&nbsp;

# Developer Resources

## **Rainbow Road Developer Documentation**

Welcome to the **Rainbow Road Development** documentation. This section is a valuable resource for developers looking to build cross-chain solutions on the Rainbow Road platform. It provides essential information and resources to help you scale your application across any chain using the Rainbow Road.

---

### **Table of Contents**
1. [Overview of Rainbow Road](#overview-of-rainbow-road)
2. [Core Components of Rainbow Road](#core-components-of-rainbow-road)
3. [Writing Custom Handlers](#writing-custom-handlers)
   - [IHandler Interface](#ihandler-interface)
4. [Transferring Tokens Across Chains](#transferring-tokens-across-chains)
   - [Erc20TransferHandler](#erc20transferhandler)
   - [IMintBurn Interface](#imintburn-interface)
5. [Whitelisting Tokens on Rainbow Road](#whitelisting-tokens-on-rainbow-road)
6. [Getting Support](#getting-support)

---

### **Overview of Rainbow Road**

Rainbow Road is a cross-chain platform designed to facilitate seamless interoperability between multiple blockchains. It offers a flexible and open ecosystem, enabling projects, businesses, and users to construct and deploy cross-chain decentralized applications (dApps) with ease. Rainbow Road facilitates secure and efficient communication between disparate blockchains, making it suitable for a diverse range of applications, including token transfers, data sharing, and beyond.

![Rainbow Road Overview](/rainbow-road-overview.jpg)

The key components of the Rainbow Road ecosystem include:
- **Rainbow Road**: The central hub of the platform that maintains the token registry and configuration settings. It also facilitates the flow of data between senders, receivers, and handlers.
- **Receivers:** Components responsible for receiving messages and extracting the data contained within them on the destination chain.
- **Senders**: Components responsible for encapsulating data into messages and transmitting them to various chains or protocols.
- **Handlers**: Components where the majority of the cross-chain logic is defined, encompassing actions to handle tasks such as token transfers.

For a more in-depth overview of these components, visit the [Rainbow Road Overview](/road).

---

### **Core Components of Rainbow Road**

To understand how to effectively use the Rainbow Road, it’s important to familiarize yourself with its core components:

- **Rainbow Road**: The platform that connects chains and facilitates the movement of data and assets across them.
- **Receivers & Senders**: These components handle the sending and receiving of data, respectively. They ensure that messages are correctly passed from one blockchain to another.
- **Handlers**: Custom components where developers can define specific cross-chain actions. This is where the bulk of the logic resides for any cross-chain interaction.

The key feature that developers will work with is the **Handler**, where they can customize the actions to be taken on both the source and destination chains.

---

### **Writing Custom Handlers**

Handlers are pivotal components of the Rainbow Road ecosystem, facilitating the definition and execution of specific actions during data or asset transfers between chains. Cross-chain applications constructed on Rainbow Road will typically need a **Handler** to implement custom logic for performing tasks on the source and destination chains.

A **Handler** consists of two main functions:
- **handleSend**: Handles tasks on the source chain. For example, this could involve burning tokens or locking assets to prepare them for transfer. This function is invoked when data is being sent to a destination chain.
- **handleReceive**: Executes corresponding actions on the destination chain, such as minting tokens or releasing assets. This function is invoked when data is received from a source chain.

By implementing these two functions, developers can create customized cross-chain interactions that fit the needs of their application.

#### **IHandler Interface**

Below is the **IHandler** interface that developers can use as the foundation for their custom handler.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IHandler {
    function handleReceive(address target, bytes calldata payload) external;
    function handleSend(address target, bytes calldata payload) external;
}
```

**target:** The `target` is the address of the recipient on the source and destination chains that the handler will perform actions against. This address will always be the same and will be the sender of the message (`msg.sender`) to ensure that consistency and security are maintained across chains, and that actions are properly authorized on both the source and destination chains.
- **payload**: The `payload` is the message or data that the handler will use to execute actions on the source and destination chains. **Note**: The payload will be identical on the source and destination to ensure consistency between the actions taken on the source chain and the corresponding actions taken on the destination chain.

Once you’ve created a custom handler, you'll need to contact the Archly team on [Discord](https://discord.gg/nZQZ2Br9yc) or [Telegram](https://t.me/ArchlyFinance) to review and onboard your handler to the Rainbow Road platform.

---

### **Transferring Tokens Across Chains**

Since token transfers between chains are a common use case, we’ve created the **Erc20TransferHandler** to help projects move tokens between chains. This handler supports various modes including **minting**, **burning**, **locking**, and **unlocking**, giving teams the flexibility to choose the best approach for their cross-chain needs. For the best fungibility of tokens between chains, the token should support minting and burning (see the __IMintBurn__ interface below). This allows tokens to be burned on the source chain and minted on the destination chain, keeping the total supply of the token constant and enabling true scalability across any and all chains. For migration scenarios, the locking and minting, and locking and releasing modes can be used. The locking and minting mode requires the token to implement the __mint__ function from the __IMintBurn__ interface below.

#### **Erc20TransferHandler**

The **Erc20TransferHandler** helps with transferring ERC20 tokens between different chains while ensuring the tokens remain consistent across both chains. It uses different modes depending on your specific use case:
- **Minting and Burning**: Tokens are burned on the source chain and minted on the destination chain. This method ensures the token supply is kept constant across both chains, making it ideal for scalable cross-chain use cases.
- **Locking and Minting**: Tokens are locked on the source chain and minted on the destination chain. This approach is commonly used for migration scenarios.
- **Locking and Releasing**: Tokens are locked on the source chain and released on the destination chain, allowing for flexibility in asset movement where tokens already exist on the source and destination chains.

#### **IMintBurn Interface**

The **IMintBurn** interface is used to facilitate minting and burning actions, which are essential for true cross-chain fungibility. It ensures that tokens can be burned on one chain and minted on another, keeping the total supply in check and enabling scalable cross-chain interactions.

Here is the **IMintBurn** interface, which must be implemented by your token contract if you want to use the minting and burning method.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IMintBurn {
    function burn(uint amount) external;
    function mint(address account, uint amount) external;
}
```

- **burn**: This function allows the specified amount of tokens to be burned from the caller's balance.
- **mint**: This function allows the specified amount of tokens to be minted to the provided account.

Using this interface, you can ensure that tokens are properly managed when moving across different chains, preventing issues like double-spending or inconsistent token supply.

---

### **Whitelisting Tokens on Rainbow Road**

For tokens to be transferred across the Rainbow Road, they need to be whitelisted on both the source and destination chains. This process ensures that the Rainbow Road platform can properly handle the tokens and execute cross-chain transactions securely.

To whitelist your token:
1. Go to [Archly Rainbow Road](https://www.archly.fi/road).
2. Click the `Whitelist` tab.
3. Paste your contract's address into the box and wait for your tokens details to appear.
4. Click the `Whitelist` button.
5. Go to [Archly's Token List](https://github.com/ArchlyFi/token-list) repository and create a pull request that adds your tokens information to the token list for the chain and token logo.


**Reminder**: This will need to be done for both the source and destination chains.


For tokens that require minting or burning, or if you have any other questions, reach out to the Archly team on [Discord](https://discord.gg/nZQZ2Br9yc) or [Telegram](https://t.me/ArchlyFinance), and they will assist you in configuring your token to work smoothly across the Rainbow Road.

---

### **Getting Support**

If you have any questions or need assistance during development, the Archly team is here to help! You can reach out through the following channels:

- **Discord**: [Join the Archly Discord](https://discord.gg/nZQZ2Br9yc)
- **Telegram**: [Join the Archly Telegram](https://t.me/ArchlyFinance)
- **Documentation**: Check out the full Archly Developer Documentation at [docs.archly.fi](https://docs.archly.fi/).

---

We hope this documentation helps you get started with developing on the Rainbow Road! Whether you're building custom handlers or transferring tokens between chains, you'll find everything you need to create powerful cross-chain applications. Happy coding!


import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'

<Bleed>
  ![Archly Finance Security](/archly_banner.png)
</Bleed>

&nbsp;

# Security

As a commitment towards the safety of our users and partners, we want to
be transparent about the changes and the status of the security audits of our
smart contracts.

Archly Finance was adapted from Solidly, which codebase was open
sourced in full by Andre Cronje and his team in
March 2022. Since its release in February on Fantom network, no security
incidents related to Solidly smart contracts were reported.

<Callout emoji="⚠️">
  Before moving forward, we'd like to remind to our users that
  security audits do not eliminate risks completely and that
  every user should read and agree to our
  [legal disclaimer](/legal) before using Archly Finance!

  For security reports, please reach out to us on
  [Telegram](https://t.me/ArchlyFinance) or [Discord](https://dsc.gg/archly), or to the contacts provided on our Github page.
</Callout>

## DEX v2 Contract Addresses

__All Chains except zkSync Era__

| Name | Address |
| :--- | :--- |
| Arc | 0xe8876189A80B2079D8C0a7867e46c50361D972c1 |
| VeArc | 0x6ACa098fa93DAD7A872F6dcb989F8b4A3aFC3342 |
| VeArcDistributor | 0x0361a173dC338c32E57079b2c51cEf36f8A982f1 |
| PairFactory | 0x12508dd9108Abab2c5fD8fC6E4984E46a3CF7824 |
| Router | 0xE8E2b714C57937E0b29c6ABEAF00B52388cAb598 |
| GaugeFactory | 0xb33F66f27d8D8282AC1f55F98cd83503e90128e9 |
| BribeFactory | 0xc8c5172879f0b7E88cc03ca20835dbE9e283386e |
| Voter | 0x0B1481fE6Fd74a6449064163604d712DFf9bc6DD |
| Minter | 0x14EAfc4ceB334d4f913204647708aBAD1ceF0854 |

__zkSync Era__

| Name | Address |
| :--- | :--- |
| Arc | 0xfB4c64c144c2bD0E7F2A06da7d6aAc32d8cb2514 |
| VeArc | 0x483BdBdbf60d9650845c8097E002c2241D92ab45 |
| VeArcDistributor | 0x51FacD6bFb361920A949e942CAec12dde9AaCd5a |
| PairFactory | 0x30A0DD3D0D9E99BD0E67b323FB706788766dCff2 |
| Router | 0x2980aa5bD6980B6506682c56b3D3d34D13D98E6D |
| GaugeFactory | 0x15E21A438853AFa27EBB53710bfe0f3Cfcb6Abd6 |
| BribeFactory | 0x8583c59b3acA38A72D84FB75fd05D520B57163f4 |
| Voter | 0x5cD247e2591E33a6C8F636F169089B43988d8a18 |
| Minter | 0xc37b9A8deB9B33507f44B04CF94B04170900cC57 |


## DEX v1 Contract Addresses

__Arbitrum One__

| Name | Address |
| :--- | :--- |
| Arc | [0x9435Ffb33Ce0180F55E08490C606eC3BD07da929](https://arbiscan.io/address/0x9435Ffb33Ce0180F55E08490C606eC3BD07da929#code) |
| veArc | [0x4c01dF6B9be381BA2a687D0ED5c40039dEEaf0a9](https://arbiscan.io/address/0x4c01dF6B9be381BA2a687D0ED5c40039dEEaf0a9#code) |
| veArc-dist | [0x5A63409C88dDD327A56eEf3a3492Bb0Ce74ba795](https://arbiscan.io/address/0x5A63409C88dDD327A56eEf3a3492Bb0Ce74ba795#code) |
| BaseV1Factory | [0xeafBFeb64F8e3793D7d1767774efd33b203200C9](https://arbiscan.io/address/0xeafBFeb64F8e3793D7d1767774efd33b203200C9#code) |
| BaseV1Router01 | [0x684802262D614D0Cd0C9571672F03Dd9e85D7824](https://arbiscan.io/address/0x684802262D614D0Cd0C9571672F03Dd9e85D7824#code) |
| BaseV1Router02 | [0x6101b5e993b9d3A823f3cE1917Be265aBD19E845](https://arbiscan.io/address/0x6101b5e993b9d3A823f3cE1917Be265aBD19E845#code) |
| BaseV1GaugeFactory | [0xbc5AAF4970E50B2504C2441367B87B6F3D9Ac504](https://arbiscan.io/address/0xbc5AAF4970E50B2504C2441367B87B6F3D9Ac504#code) |
| BaseV1BribeFactory | [0xd9Fd10945d69053Eadd365B786977B6290fea088](https://arbiscan.io/address/0xd9Fd10945d69053Eadd365B786977B6290fea088#code) |
| BaseV1BribeV2Factory | [0xbf9d939436f643823FfDeDE99E2602f75D0df234](https://arbiscan.io/address/0xbf9d939436f643823FfDeDE99E2602f75D0df234#code) |
| BaseV1BribeV2Factory (2.1) | [0x9cC1fc700695c21730E3a84748A50705F3f0655D](https://arbiscan.io/address/0x9cC1fc700695c21730E3a84748A50705F3f0655D#code) |
| BaseV1Voter | [0xA978acE8D8809213Cd5e6212197196cB847129E9](https://arbiscan.io/address/0xA978acE8D8809213Cd5e6212197196cB847129E9#code) |
| BaseV1Minter | [0xE9d7623f44b7726FE2013c2f8043051358731320](https://arbiscan.io/address/0xE9d7623f44b7726FE2013c2f8043051358731320#code) |

__Base__

| Name | Address |
| :--- | :--- |
| Arc | [0x684802262D614D0Cd0C9571672F03Dd9e85D7824](https://basescan.org/address/0x684802262D614D0Cd0C9571672F03Dd9e85D7824#code) |
| veArc | [0x4c01dF6B9be381BA2a687D0ED5c40039dEEaf0a9](https://basescan.org/address/0x4c01dF6B9be381BA2a687D0ED5c40039dEEaf0a9#code) |
| veArc-dist | [0x5A63409C88dDD327A56eEf3a3492Bb0Ce74ba795](https://basescan.org/address/0x5A63409C88dDD327A56eEf3a3492Bb0Ce74ba795#code) |
| BaseV1Factory | [0xBa06043a777652BAF540CcC785EDaFd94eE05b37](https://basescan.org/address/0xBa06043a777652BAF540CcC785EDaFd94eE05b37#code) |
| BaseV1Router02 | [0xeafBFeb64F8e3793D7d1767774efd33b203200C9](https://basescan.org/address/0xeafBFeb64F8e3793D7d1767774efd33b203200C9#code) |
| BaseV1GaugeFactory | [0xbc5AAF4970E50B2504C2441367B87B6F3D9Ac504](https://basescan.org/address/0xbc5AAF4970E50B2504C2441367B87B6F3D9Ac504#code) |
| BaseV1BribeFactory | [0xd9Fd10945d69053Eadd365B786977B6290fea088](https://basescan.org/address/0xd9Fd10945d69053Eadd365B786977B6290fea088#code) |
| BaseV1BribeV2Factory (2.1) | [0x12BfB58c8Fb5De8CE77b45F465eF9D2613D4B5e6](https://basescan.org/address/0x12BfB58c8Fb5De8CE77b45F465eF9D2613D4B5e6#code) |
| BaseV1Voter | [0xA978acE8D8809213Cd5e6212197196cB847129E9](https://basescan.org/address/0xA978acE8D8809213Cd5e6212197196cB847129E9#code) |
| BaseV1Minter | [0xE9d7623f44b7726FE2013c2f8043051358731320](https://basescan.org/address/0xE9d7623f44b7726FE2013c2f8043051358731320#code) |

__Arbitrum Nova, BNB Chain, Fantom, Kava, Optimism, and Polygon__

| Name | Address |
| :--- | :--- |
| Arc | 0x684802262D614D0Cd0C9571672F03Dd9e85D7824 |
| veArc | 0xf070654b08595f8F358Ff90170829892F3254C67 |
| veArc-Dist | 0x4c01dF6B9be381BA2a687D0ED5c40039dEEaf0a9 |
| BaseV1Factory | 0xBa06043a777652BAF540CcC785EDaFd94eE05b37 |
| BaseV1Router01 | 0xeafBFeb64F8e3793D7d1767774efd33b203200C9 |
| BaseV1Router02 | 0x6101b5e993b9d3A823f3cE1917Be265aBD19E845 |
| BaseV1GaugeFactory | 0x5A63409C88dDD327A56eEf3a3492Bb0Ce74ba795 |
| BaseV1BribeFactory | 0xbc5AAF4970E50B2504C2441367B87B6F3D9Ac504 |
| BaseV1BribeV2Factory | 0xbf9d939436f643823FfDeDE99E2602f75D0df234 |
| BaseV1BribeV2Factory (2.1) | 0x9cC1fc700695c21730E3a84748A50705F3f0655D |
| BaseV1Voter | 0xd9Fd10945d69053Eadd365B786977B6290fea088 |
| BaseV1Minter | 0xd865043A22604Caf267422283B8601A9d546301f |

__Telos Mainnet__

| Name | Address |
| :--- | :--- |
| Arc | [0xa84df7aFbcbCC1106834a5feD9453bd1219B1fb5](https://www.teloscan.io/address/0xa84df7aFbcbCC1106834a5feD9453bd1219B1fb5#contract) |
| veArc | [0x5680b3059b860d07A33B7A43d03D2E4dEdb226BB](https://www.teloscan.io/address/0x5680b3059b860d07A33B7A43d03D2E4dEdb226BB#contract) |
| veArc-dist | [0x9763cD8DA9e1ED99490893A8bcd64e5e87E7cd3C](https://www.teloscan.io/address/0x9763cD8DA9e1ED99490893A8bcd64e5e87E7cd3C#contract) |
| BaseV1Factory | [0x39fdd4Fec9b41e9AcD339a7cf75250108D32906c](https://www.teloscan.io/address/0x39fdd4Fec9b41e9AcD339a7cf75250108D32906c#contract) |
| BaseV1Router01 | [0x7BF5247c2d8cC4Ad7b588898B1ED3594815Ca3f9](https://www.teloscan.io/address/0x7BF5247c2d8cC4Ad7b588898B1ED3594815Ca3f9#contract) |
| BaseV1Router02 | [0x6101b5e993b9d3A823f3cE1917Be265aBD19E845](https://www.teloscan.io/address/0x6101b5e993b9d3A823f3cE1917Be265aBD19E845#contract) |
| BaseV1GaugeFactory | [0x3D5eA100C38c0Af9f5d94105EA4E160AeE6DC668](https://www.teloscan.io/address/0x3D5eA100C38c0Af9f5d94105EA4E160AeE6DC668#contract) |
| BaseV1BribeFactory | [0x11ca072a392D92ca63976CD9c1dc38de1FE578ee](https://www.teloscan.io/address/0x11ca072a392D92ca63976CD9c1dc38de1FE578ee#contract) |
| BaseVBribeV2Factory | [0xbf9d939436f643823FfDeDE99E2602f75D0df234](https://www.teloscan.io/address/0xbf9d939436f643823FfDeDE99E2602f75D0df234#contract) |
| BaseVBribeV2Factory (2.1) | [0x9cC1fc700695c21730E3a84748A50705F3f0655D](https://www.teloscan.io/address/0x9cC1fc700695c21730E3a84748A50705F3f0655D#contract) |
| BaseV1Voter | [0xd9742c670eEE8001d965964E05793c42c588B657](https://www.teloscan.io/address/0xd9742c670eEE8001d965964E05793c42c588B657#contract) |
| BaseV1Minter | [0xdB6db572DA4be59656f87Ee5711D8334e1f9b0E9](https://www.teloscan.io/address/0xdB6db572DA4be59656f87Ee5711D8334e1f9b0E9#contract) |

## Rainbow Road Contract Addresses

__Rainbow Road__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://nova.arbiscan.io/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Arbitrum One | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://arbiscan.io/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Avalanche | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://snowtrace.io/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E#code) |
| Base | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://basescan.org/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Blast | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://blastscan.io/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E#code) |
| BNB Chain | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://bscscan.com/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Cronos | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://cronoscan.com/address/0x9412316dc6c882ffc4fa1a01413b0c701b147b9e#code) |
| Fantom | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://ftmscan.com/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Filecoin | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://fvm.starboard.ventures/explorer/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E#code) |
| Fraxtal | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://fraxscan.com/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E#code) |
| Kava | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://kavascan.com/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9/contracts) |
| Mantle | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://explorer.mantle.xyz/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E/contracts) |
| Metis | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://explorer.metis.io/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E/contract/1088/code) |
| Mode | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://explorer.mode.network/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E?tab=contract) |
| Neon | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://neonscan.org/address/0x9412316dc6c882ffc4fa1a01413b0c701b147b9e#contract) |
| Optimism | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://optimistic.etherscan.io/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Polygon | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://polygonscan.com/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Telos | [0xfC775F6D51DF10c56bF653aE592c7904598dc35E](https://www.teloscan.io/address/0xfC775F6D51DF10c56bF653aE592c7904598dc35E#contract) |
| zkSync Era | [0xEb484dddfAD4F89c0F72267c7d13752451831038](https://explorer.zksync.io/address/0xEb484dddfAD4F89c0F72267c7d13752451831038#contract) |
| Zora | [0x9412316DC6C882ffc4FA1A01413b0C701b147B9E](https://explorer.zora.energy/address/0x9412316DC6C882ffc4FA1A01413b0C701b147B9E?tab=contract) |

__Fee Collector Factory__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://nova.arbiscan.io/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Arbitrum One | [0xf693C2018DF28123533B1f7840ffb9a3102585C0](https://arbiscan.io/address/0xf693C2018DF28123533B1f7840ffb9a3102585C0#code) |
| Avalanche | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://snowtrace.io/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F#code) |
| Base | [0xf693C2018DF28123533B1f7840ffb9a3102585C0](https://basescan.org/address/0xf693C2018DF28123533B1f7840ffb9a3102585C0#code) |
| Blast | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://blastscan.io/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F#code) |
| BNB Chain | [0xf693C2018DF28123533B1f7840ffb9a3102585C0](https://bscscan.com/address/0xf693C2018DF28123533B1f7840ffb9a3102585C0#code) |
| Cronos | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://cronoscan.com/address/0xb17906d2c9f0457492077d2952f0ca333fe70b6f#code) |
| Fantom | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://ftmscan.com/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Filecoin | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://fvm.starboard.ventures/explorer/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F#code) |
| Fraxtal | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://fraxscan.com/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F#code) |
| Kava | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://kavascan.com/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17/contracts) |
| Mantle | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://explorer.mantle.xyz/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F/contracts) |
| Metis | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://explorer.metis.io/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F/contract/1088/code) |
| Mode | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://explorer.mode.network/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F?tab=contract) |
| Neon | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://neonscan.org/address/0xb17906d2c9f0457492077d2952f0ca333fe70b6f#contract) |
| Optimism | [0xB98D4D0Ed40b47Ded99c9B17cE89C9bF09F22Ee3](https://optimistic.etherscan.io/address/0xB98D4D0Ed40b47Ded99c9B17cE89C9bF09F22Ee3#code) |
| Polygon | [0xB98D4D0Ed40b47Ded99c9B17cE89C9bF09F22Ee3](https://polygonscan.com/address/0xB98D4D0Ed40b47Ded99c9B17cE89C9bF09F22Ee3#code) |
| Telos | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://www.teloscan.io/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A#contract) |
| zkSync Era | [0xBfDDBD9F71d2FB88923e0a7Fb06a5aa937D9F5fF](https://explorer.zksync.io/address/0xBfDDBD9F71d2FB88923e0a7Fb06a5aa937D9F5fF#contract) |
| Zora | [0xb17906D2C9F0457492077D2952f0cA333Fe70B6F](https://explorer.zora.energy/address/0xb17906D2C9F0457492077D2952f0cA333Fe70B6F?tab=contract) |

__ERC20 Transfer Handler__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x16b5856DBC2F66d6Dc5B361B0073f51ed5FfB52b](https://nova.arbiscan.io/address/0x16b5856DBC2F66d6Dc5B361B0073f51ed5FfB52b#code) |
| Arbitrum One | [0x600aF6290ca77d39b9D111e30FE5f9A6AF3aE2FC](https://arbiscan.io/address/0x600aF6290ca77d39b9D111e30FE5f9A6AF3aE2FC#code) |
| Avalanche | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://snowtrace.io/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc#code) |
| Base | [0x724f9A247A6755d5Fd93e0cf1e563F9441523618](https://basescan.org/address/0x724f9A247A6755d5Fd93e0cf1e563F9441523618#code) |
| Blast | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://blastscan.io/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc#code) |
| BNB Chain | [0xc20b717E273adB4099Cd455376e24e33AcB30C07](https://bscscan.com/address/0xc20b717E273adB4099Cd455376e24e33AcB30C07#code) |
| Cronos | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://cronoscan.com/address/0x8e4dd1749dfd63538ca3cef29b10f9e25605a4cc#code) |
| Fantom | [0xb7A6501716C7930270F5634953862053B4227100](https://ftmscan.com/address/0xb7A6501716C7930270F5634953862053B4227100#code) |
| Filecoin | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://fvm.starboard.ventures/explorer/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc#code) |
| Fraxtal | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://fraxscan.com/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc#code) |
| Kava | [0xEec547122f5EA2Edb34D46114c9c6A7c896f5041](https://kavascan.com/address/0xEec547122f5EA2Edb34D46114c9c6A7c896f5041/contracts) |
| Mantle | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://explorer.mantle.xyz/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc/contracts) |
| Metis | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://explorer.metis.io/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc/contract/1088/code) |
| Mode | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://explorer.mode.network/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc?tab=contract) |
| Neon | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://neonscan.org/address/0x8e4dd1749dfd63538ca3cef29b10f9e25605a4cc#contract) |
| Optimism | [0xdD07Fd54d7a3668018fb731A091A1F7927897424](https://optimistic.etherscan.io/address/0xdD07Fd54d7a3668018fb731A091A1F7927897424#code) |
| Polygon | [0x10dA2d78420cE6FEAFA090663e9d0915Caa041c4](https://polygonscan.com/address/0x10dA2d78420cE6FEAFA090663e9d0915Caa041c4#code) |
| Telos | [0x9194b4F9A8DB883A870fa5Eba998aA4a6DD97e3B](https://www.teloscan.io/address/0x9194b4F9A8DB883A870fa5Eba998aA4a6DD97e3B#contract) |
| zkSync Era | [0x71071F3b894045329D392d2201Fc841e1AB211b8](https://explorer.zksync.io/address/0x71071F3b894045329D392d2201Fc841e1AB211b8#contract) |
| Zora | [0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc](https://explorer.zora.energy/address/0x8E4dd1749dfD63538Ca3ceF29b10f9E25605A4cc?tab=contract) |

__veArc Transfer Handler__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x23f014285814A3c33Ef78F3FA1b1DF96fA63CE23](https://nova.arbiscan.io/address/0x23f014285814A3c33Ef78F3FA1b1DF96fA63CE23#code) |
| Arbitrum One | [0x63442B9ADc73D87fE31D3fE1d5aC45abD5772911](https://arbiscan.io/address/0x63442B9ADc73D87fE31D3fE1d5aC45abD5772911#code) |
| Avalanche | [0xEfBC28a489265Ec91757b243Af6203Baec0B4B00](https://snowtrace.io/address/0xEfBC28a489265Ec91757b243Af6203Baec0B4B00#code) |
| Base | [0x1d3b404a18a83493C6b900E9e7B2cD2761099997](https://basescan.org/address/0x1d3b404a18a83493C6b900E9e7B2cD2761099997#code) |
| Blast | [0xE23C611dbdeeA723e1979edfE109F0F61f75c347](https://blastscan.io/address/0xE23C611dbdeeA723e1979edfE109F0F61f75c347#code) |
| BNB Chain | [0x0Ce5A89Fb6E9d41298C0b231bCb90Fb9491a22D7](https://bscscan.com/address/0x0Ce5A89Fb6E9d41298C0b231bCb90Fb9491a22D7#code) |
| Cronos | [0xEfBC28a489265Ec91757b243Af6203Baec0B4B00](https://cronoscan.com/address/0xefbc28a489265ec91757b243af6203baec0b4b00#code) |
| Fantom | [0x30278A2DAECa1088152DA4a216c545c65B1490f8](https://ftmscan.com/address/0x30278A2DAECa1088152DA4a216c545c65B1490f8#code) |
| Filecoin | [0xE23C611dbdeeA723e1979edfE109F0F61f75c347](https://fvm.starboard.ventures/explorer/address/0xE23C611dbdeeA723e1979edfE109F0F61f75c347#code) |
| Fraxtal | [0xE23C611dbdeeA723e1979edfE109F0F61f75c347](https://fraxscan.com/address/0xE23C611dbdeeA723e1979edfE109F0F61f75c347#code) |
| Kava | [0x01Ce32DF6C7D016C9bf6dce5e07Cb95FA9DF4895](https://kavascan.com/address/0x01Ce32DF6C7D016C9bf6dce5e07Cb95FA9DF4895/contracts) |
| Mantle | [0xEfBC28a489265Ec91757b243Af6203Baec0B4B00](https://explorer.mantle.xyz/address/0xEfBC28a489265Ec91757b243Af6203Baec0B4B00) |
| Metis | [0xEfBC28a489265Ec91757b243Af6203Baec0B4B00](https://explorer.metis.io/address/0xEfBC28a489265Ec91757b243Af6203Baec0B4B00/contract/1088/code) |
| Mode | [0xE23C611dbdeeA723e1979edfE109F0F61f75c347](https://explorer.mode.network/address/0xE23C611dbdeeA723e1979edfE109F0F61f75c347?tab=contract) |
| Neon | [0xEfBC28a489265Ec91757b243Af6203Baec0B4B00](https://neonscan.org/address/0xefbc28a489265ec91757b243af6203baec0b4b00#contract) |
| Optimism | [0x708514080FBC9F7cd597571fD5CebFfD2b03dcf5](https://optimistic.etherscan.io/address/0x708514080FBC9F7cd597571fD5CebFfD2b03dcf5#code) |
| Polygon | [0x120b672B7977494Bb64B7b35B158Ff75e5E1f4d4](https://polygonscan.com/address/0x120b672B7977494Bb64B7b35B158Ff75e5E1f4d4#code) |
| Telos | [0xB7d01d3978d2155A9B5c50035dbd89114BE6C203](https://www.teloscan.io/address/0xB7d01d3978d2155A9B5c50035dbd89114BE6C203#contract) |
| zkSync Era | [0xF80adb93165E1dEC3dA4B8F3a9b709b734D26f03](https://explorer.zksync.io/address/0xF80adb93165E1dEC3dA4B8F3a9b709b734D26f03#contract) |
| Zora | [0xE23C611dbdeeA723e1979edfE109F0F61f75c347](https://explorer.zora.energy/address/0xE23C611dbdeeA723e1979edfE109F0F61f75c347?tab=contract) |

__DEX Weekly Update Handler__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://nova.arbiscan.io/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7#code) |
| Arbitrum One | [0x339dec659aD3ccCB45F298365749AA96a66CD80D](https://arbiscan.io/address/0x339dec659aD3ccCB45F298365749AA96a66CD80D#code) |
| Avalanche | [0x4f91C473655B87D844130785081F55EF422f4ACA](https://snowtrace.io/address/0x4f91C473655B87D844130785081F55EF422f4ACA#code) |
| Base | [0x339dec659aD3ccCB45F298365749AA96a66CD80D](https://basescan.org/address/0x339dec659aD3ccCB45F298365749AA96a66CD80D#code) |
| Blast | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://blastscan.io/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| BNB Chain | [0x339dec659aD3ccCB45F298365749AA96a66CD80D](https://bscscan.com/address/0x339dec659aD3ccCB45F298365749AA96a66CD80D#code) |
| Cronos | [0x4f91C473655B87D844130785081F55EF422f4ACA](https://cronoscan.com/address/0x4f91c473655b87d844130785081f55ef422f4aca#code) |
| Fantom | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://ftmscan.com/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7#code) |
| Filecoin | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://fvm.starboard.ventures/explorer/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Fraxtal | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://fraxscan.com/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9#code) |
| Kava | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://kavascan.com/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7/contracts) |
| Mantle | [0x4f91C473655B87D844130785081F55EF422f4ACA](https://explorer.mantle.xyz/address/0x4f91C473655B87D844130785081F55EF422f4ACA/contracts) |
| Metis | [0x4f91C473655B87D844130785081F55EF422f4ACA](https://explorer.metis.io/address/0x4f91C473655B87D844130785081F55EF422f4ACA/contract/1088/code) |
| Mode | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://explorer.mode.network/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9?tab=contract) |
| Neon | [0x4f91C473655B87D844130785081F55EF422f4ACA](https://neonscan.org/address/0x4f91c473655b87d844130785081f55ef422f4aca#contract) |
| Optimism | [0x339dec659aD3ccCB45F298365749AA96a66CD80D](https://optimistic.etherscan.io/address/0x339dec659aD3ccCB45F298365749AA96a66CD80D#code) |
| Polygon | [0x339dec659aD3ccCB45F298365749AA96a66CD80D](https://polygonscan.com/address/0x339dec659aD3ccCB45F298365749AA96a66CD80D#code) |
| Telos | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://www.teloscan.io/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7#contract) |
| zkSync Era | [0x0E83A9237E6475eB00eED787edfC711232946156](https://explorer.zksync.io/address/0x0E83A9237E6475eB00eED787edfC711232946156#contract) |
| Zora | [0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9](https://explorer.zora.energy/address/0x9DE5b4928296D96f48Fe67ebB2cA1556827fc6A9?tab=contract) |

__Chainlink Data Feed Factory__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x3D074Cc110f34fcB4C9FC887f0EB870E99AE4932](https://nova.arbiscan.io/address/0x3D074Cc110f34fcB4C9FC887f0EB870E99AE4932#code) |
| Arbitrum One | [0x0d4DebC10cd99034fa777D84FE158Eb04c2ed4c3](https://arbiscan.io/address/0x0d4DebC10cd99034fa777D84FE158Eb04c2ed4c3#code) |
| Avalanche | TBD |
| Base | TBD |
| Blast | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://blastscan.io/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| BNB Chain | TBD |
| Cronos | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://cronoscan.com/address/0x9d1a576ef61e734cd0272a8652fad5a18fb1337f#code) |
| Fantom | TBD |
| Filecoin | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://fvm.starboard.ventures/explorer/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Fraxtal | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://fraxscan.com/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Kava | [0x7465aE4fd3Ec52a56A6fd78fB4f4502191BfD60b](https://kavascan.com/address/0x7465aE4fd3Ec52a56A6fd78fB4f4502191BfD60b/contracts) |
| Mantle | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://explorer.mantle.xyz/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F/contracts) |
| Metis | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://explorer.metis.io/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F/contract/1088/code) |
| Mode | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://explorer.mode.network/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17?tab=contract) |
| Neon | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://neonscan.org/address/0x9d1a576ef61e734cd0272a8652fad5a18fb1337f#contract) |
| Optimism | TBD |
| Polygon | TBD |
| Telos | [0x4aCb1Bc3813432311948876102B7542560ee1f25](https://www.teloscan.io/address/0x4aCb1Bc3813432311948876102B7542560ee1f25#contract) |
| zkSync Era | [0x3E21E1CefcDFd8bB668fa2A14485026c20428f41](https://explorer.zksync.io/address/0x3E21E1CefcDFd8bB668fa2A14485026c20428f41#contract) |
| Zora | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://explorer.zora.energy/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17?tab=contract) |

__Chainlink Data Feed Handler__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x78bADa77C33EAA3cbF84e6Ad99bccf710345e1ed](https://nova.arbiscan.io/address/0x78bADa77C33EAA3cbF84e6Ad99bccf710345e1ed#code) |
| Arbitrum One | [0x0Ce5A89Fb6E9d41298C0b231bCb90Fb9491a22D7](https://arbiscan.io/address/0x0Ce5A89Fb6E9d41298C0b231bCb90Fb9491a22D7#code) |
| Avalanche | TBD |
| Base | TBD |
| Blast | [0xfC775F6D51DF10c56bF653aE592c7904598dc35E](https://blastscan.io/address/0xfC775F6D51DF10c56bF653aE592c7904598dc35E#code) |
| BNB Chain | TBD |
| Cronos | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://cronoscan.com/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Fantom | TBD |
| Filecoin | [0xfC775F6D51DF10c56bF653aE592c7904598dc35E](https://fvm.starboard.ventures/explorer/address/0xfC775F6D51DF10c56bF653aE592c7904598dc35E#code) |
| Fraxtal | [0xfC775F6D51DF10c56bF653aE592c7904598dc35E](https://fraxscan.com/address/0xfC775F6D51DF10c56bF653aE592c7904598dc35E#code) |
| Kava | [0x2eBdCD5F200B62f2AD8A241fBbCe4df5158A2295](https://kavascan.com/address/0x2eBdCD5F200B62f2AD8A241fBbCe4df5158A2295/contracts) |
| Mantle | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://explorer.mantle.xyz/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17/contracts) |
| Metis | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://explorer.metis.io/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17/contract/1088/code) |
| Mode | [0xfC775F6D51DF10c56bF653aE592c7904598dc35E](https://explorer.mode.network/address/0xfC775F6D51DF10c56bF653aE592c7904598dc35E?tab=contract) |
| Neon | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://neonscan.org/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#contract) |
| Optimism | TBD|
| Polygon | TBD |
| Telos | [0x8a382156Bf6484F6C0ff813acdF809470795CDD0](https://www.teloscan.io/address/0x8a382156Bf6484F6C0ff813acdF809470795CDD0#contract) |
| zkSync Era | [0xbc8D98C4D43a7c14189a4b3A5e7f21e7CB5abFB3](https://explorer.zksync.io/address/0xbc8D98C4D43a7c14189a4b3A5e7f21e7CB5abFB3#contract) |
| Zora | [0xfC775F6D51DF10c56bF653aE592c7904598dc35E](https://explorer.zora.energy/address/0xfC775F6D51DF10c56bF653aE592c7904598dc35E?tab=contract) |

__Chainlink Receiver v1.2.0__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0xCa0CC42687D5f75Cebd026EE0B268b355d1103C7](https://arbiscan.io/address/0xCa0CC42687D5f75Cebd026EE0B268b355d1103C7#code) |
| Avalanche | [0x71e396bFfbD0f443A72512582dCE138cC9351F84](https://snowtrace.io/address/0x71e396bFfbD0f443A72512582dCE138cC9351F84#code) |
| Base | [0x29C8d266438292c8B0BCCA659DF2Db122b7A9E51](https://basescan.org/address/0x29C8d266438292c8B0BCCA659DF2Db122b7A9E51#code) |
| Blast | TBD |
| BNB Chain | [0x4d4178E7b48cB5B6D0b7C6E860824838ffCb22b1](https://bscscan.com/address/0x4d4178E7b48cB5B6D0b7C6E860824838ffCb22b1#code) |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | [0xAE7cFfe5fF17a509d4f724c002519e8d1f2A1A5a](https://optimistic.etherscan.io/address/0xAE7cFfe5fF17a509d4f724c002519e8d1f2A1A5a#code) |
| Polygon | [0x63442B9ADc73D87fE31D3fE1d5aC45abD5772911](https://polygonscan.com/address/0x63442B9ADc73D87fE31D3fE1d5aC45abD5772911#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__Chainlink Receiver v1.0.0__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://arbiscan.io/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F#code) |
| Avalanche | TBD |
| Base | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://basescan.org/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F#code) |
| Blast | TBD |
| BNB Chain | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://bscscan.com/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F#code) |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://optimistic.etherscan.io/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F#code) |
| Polygon | [0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F](https://polygonscan.com/address/0x9d1A576EF61e734CD0272a8652Fad5A18FB1337F#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__Chainlink Sender v1.2.0__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0xb868378251B13DacBF54DA40074E987Dd464108F](https://arbiscan.io/address/0xb868378251B13DacBF54DA40074E987Dd464108F#code) |
| Avalanche | [0xABd243a5d69fd7e647d7e9440EB3869de0428512](https://snowtrace.io/address/0xABd243a5d69fd7e647d7e9440EB3869de0428512#code) |
| Base | [0x68c696A0caE310Ff3A4Ce1B4f56AB3bb1566be8D](https://basescan.org/address/0x68c696A0caE310Ff3A4Ce1B4f56AB3bb1566be8D#code) |
| Blast | TBD |
| BNB Chain | [0xAE7cFfe5fF17a509d4f724c002519e8d1f2A1A5a](https://bscscan.com/address/0xAE7cFfe5fF17a509d4f724c002519e8d1f2A1A5a#code) |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | [0xfe7C6aDbb0450b0B3e908724346eFcaDd5E7a0D3](https://optimistic.etherscan.io/address/0xfe7C6aDbb0450b0B3e908724346eFcaDd5E7a0D3#code) |
| Polygon | [0x54c279e073A600545B4acbEBf8e8c7B18eC04281](https://polygonscan.com/address/0x54c279e073A600545B4acbEBf8e8c7B18eC04281#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__Chainlink Sender v1.0.0__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://arbiscan.io/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Avalanche | TBD |
| Base | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://basescan.org/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Blast | TBD |
| BNB Chain | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://bscscan.com/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://optimistic.etherscan.io/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Polygon | [0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17](https://polygonscan.com/address/0xDa25A4e7407b95883D4B038b394Bf607CCEE4b17#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__Axelar Receiver__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0x273C9c5766c0c2441d778814c5d68D847c022f00](https://arbiscan.io/address/0x273C9c5766c0c2441d778814c5d68D847c022f00#code) |
| Avalanche | [0xbf9813FC8f99759A77D877F812ff065D2070F1cC](https://snowtrace.io/address/0xbf9813FC8f99759A77D877F812ff065D2070F1cC#code) |
| Base | [0x273C9c5766c0c2441d778814c5d68D847c022f00](https://basescan.org/address/0x273C9c5766c0c2441d778814c5d68D847c022f00#code) |
| Blast | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://blastscan.io/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A#code) |
| BNB Chain | [0x273C9c5766c0c2441d778814c5d68D847c022f00](https://bscscan.com/address/0x273C9c5766c0c2441d778814c5d68D847c022f00#code) |
| Cronos | TBD |
| Fantom | [0x027d732749992c7b12D8c48a08eFCcE9Cb1288BC](https://ftmscan.com/address/0x027d732749992c7b12D8c48a08eFCcE9Cb1288BC#code) |
| Filecoin | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://fvm.starboard.ventures/explorer/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A#code) |
| Fraxtal | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://fraxscan.com/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A#code) |
| Kava | [0xFD7A105225433c05fE0E5851df7AF5C00b245dF8](https://kavascan.com/address/0xFD7A105225433c05fE0E5851df7AF5C00b245dF8/contracts) |
| Mantle | [0x877fe019d5320bc5A1ab6d72f05D13ba8A651350](https://explorer.mantle.xyz/address/0x877fe019d5320bc5A1ab6d72f05D13ba8A651350/contracts) |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | [0x273C9c5766c0c2441d778814c5d68D847c022f00](https://optimistic.etherscan.io/address/0x273C9c5766c0c2441d778814c5d68D847c022f00#code) |
| Polygon | [0x273C9c5766c0c2441d778814c5d68D847c022f00](https://polygonscan.com/address/0x273C9c5766c0c2441d778814c5d68D847c022f00#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__Axelar Sender__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0xb162BF709505765605B447F9817acbF428cB86F6](https://arbiscan.io/address/0xb162BF709505765605B447F9817acbF428cB86F6#code) |
| Avalanche | [0x0808CC60D8E6c130c2133e4b3B499ba0D0B1aB88](https://snowtrace.io/address/0x0808CC60D8E6c130c2133e4b3B499ba0D0B1aB88#code) |
| Base | [0xb162BF709505765605B447F9817acbF428cB86F6](https://basescan.org/address/0xb162BF709505765605B447F9817acbF428cB86F6#code) |
| Blast | [0xbf9813FC8f99759A77D877F812ff065D2070F1cC](https://blastscan.io/address/0xbf9813FC8f99759A77D877F812ff065D2070F1cC#code) |
| BNB Chain | [0xb162BF709505765605B447F9817acbF428cB86F6](https://bscscan.com/address/0xb162BF709505765605B447F9817acbF428cB86F6#code) |
| Cronos | TBD |
| Fantom | [0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9](https://ftmscan.com/address/0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9#code) |
| Filecoin | [0xbf9813FC8f99759A77D877F812ff065D2070F1cC](https://fvm.starboard.ventures/explorer/address/0xbf9813FC8f99759A77D877F812ff065D2070F1cC#code) |
| Fraxtal | [0xbf9813FC8f99759A77D877F812ff065D2070F1cC](https://fraxscan.com/address/0xbf9813FC8f99759A77D877F812ff065D2070F1cC#code) |
| Kava | [0x027d732749992c7b12D8c48a08eFCcE9Cb1288BC](https://kavascan.com/address/0x027d732749992c7b12D8c48a08eFCcE9Cb1288BC/contracts) |
| Mantle | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://explorer.mantle.xyz/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A/contracts) |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | [0xb162BF709505765605B447F9817acbF428cB86F6](https://optimistic.etherscan.io/address/0xb162BF709505765605B447F9817acbF428cB86F6#code) |
| Polygon | [0xb162BF709505765605B447F9817acbF428cB86F6](https://polygonscan.com/address/0xb162BF709505765605B447F9817acbF428cB86F6#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__LayerZero Receiver__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0xA104f95135fF89DA3A4fF8Aae88a52eBCB41A1BB](https://nova.arbiscan.io/address/0xA104f95135fF89DA3A4fF8Aae88a52eBCB41A1BB#code) |
| Arbitrum One | [0xfD4Cc2d4ABf0FBd87882004cAB576268e6e32bAE](https://arbiscan.io/address/0xfD4Cc2d4ABf0FBd87882004cAB576268e6e32bAE#code) |
| Avalanche | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://snowtrace.io/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7#code) |
| Base | [0x4d4178E7b48cB5B6D0b7C6E860824838ffCb22b1](https://basescan.org/address/0x4d4178E7b48cB5B6D0b7C6E860824838ffCb22b1#code) |
| Blast | [0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee](https://blastscan.io/address/0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee#code) |
| BNB Chain | [0xfD4Cc2d4ABf0FBd87882004cAB576268e6e32bAE](https://bscscan.com/address/0xfD4Cc2d4ABf0FBd87882004cAB576268e6e32bAE#code) |
| Cronos | TBD |
| Fantom | [0x492535a017262d121D254B20398cb716575Cc9B8](https://ftmscan.com/address/0x492535a017262d121D254B20398cb716575Cc9B8#code) |
| Filecoin | [0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee](https://fvm.starboard.ventures/explorer/address/0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee#code) |
| Fraxtal | [0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee](https://fraxscan.com/address/0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee#code) |
| Kava | [0xE564E8F21E93088a53fa2164A95DB6fE45309f99](https://kavascan.com/address/0xE564E8F21E93088a53fa2164A95DB6fE45309f99/contracts) |
| Mantle | [0xc23350F2bf5b0e368B93ddC40E815de10a90C0c3](https://explorer.mantle.xyz/address/0xc23350F2bf5b0e368B93ddC40E815de10a90C0c3/contracts) |
| Metis | [0x877fe019d5320bc5A1ab6d72f05D13ba8A651350](https://explorer.metis.io/address/0x877fe019d5320bc5A1ab6d72f05D13ba8A651350/contract/1088/code) |
| Mode | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://explorer.mode.network/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A?tab=contract) |
| Neon | TBD |
| Optimism | [0xE0bB58736b5C373Ecd104068e4Ab57399A3b16D7](https://optimistic.etherscan.io/address/0xE0bB58736b5C373Ecd104068e4Ab57399A3b16D7#code) |
| Polygon | [0x724f9A247A6755d5Fd93e0cf1e563F9441523618](https://polygonscan.com/address/0x724f9A247A6755d5Fd93e0cf1e563F9441523618#code) |
| Telos | [0x52093032E619C1493206CF52c47B41E5b7964bce](https://www.teloscan.io/address/0x52093032E619C1493206CF52c47B41E5b7964bce#contract) |
| zkSync Era | [0x12BEC3a4FD7e8e258e4e42e92FDCe9BE6F28D940](https://explorer.zksync.io/address/0x12BEC3a4FD7e8e258e4e42e92FDCe9BE6F28D940#contract) |
| Zora | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://explorer.zora.energy/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A?tab=contract) |

__LayerZero Sender__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | [0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9](https://nova.arbiscan.io/address/0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9#code) |
| Arbitrum One | [0x2d45D18bc844CFb242B77cC5943bd318dcAd5407](https://arbiscan.io/address/0x2d45D18bc844CFb242B77cC5943bd318dcAd5407#code) |
| Avalanche | [0xFD7A105225433c05fE0E5851df7AF5C00b245dF8](https://snowtrace.io/address/0xFD7A105225433c05fE0E5851df7AF5C00b245dF8#code) |
| Base | [0x2d45D18bc844CFb242B77cC5943bd318dcAd5407](https://basescan.org/address/0x2d45D18bc844CFb242B77cC5943bd318dcAd5407#code) |
| Blast | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://blastscan.io/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7#code) |
| BNB Chain | [0x2d45D18bc844CFb242B77cC5943bd318dcAd5407](https://bscscan.com/address/0x2d45D18bc844CFb242B77cC5943bd318dcAd5407#code) |
| Cronos | TBD |
| Fantom | [0x639126426445b709e7b67f210604115c277fdFaA](https://ftmscan.com/address/0x639126426445b709e7b67f210604115c277fdFaA#code) |
| Filecoin | TBD |
| Fraxtal | [0x193A2D15a9A8fA02301116d4f3666619154BEeB7](https://fraxscan.com/address/0x193A2D15a9A8fA02301116d4f3666619154BEeB7#code) |
| Kava | [0x639126426445b709e7b67f210604115c277fdFaA](https://kavascan.com/address/0x639126426445b709e7b67f210604115c277fdFaA/contracts) |
| Mantle | [0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee](https://explorer.mantle.xyz/address/0xDc2B62D05578A1f3d69c498dF7fF260152bCB6Ee/contracts) |
| Metis | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://explorer.metis.io/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A/contract/1088/code) |
| Mode | [0xbf9813FC8f99759A77D877F812ff065D2070F1cC](https://explorer.mode.network/address/0xbf9813FC8f99759A77D877F812ff065D2070F1cC?tab=contract) |
| Neon | TBD |
| Optimism | [0x2d45D18bc844CFb242B77cC5943bd318dcAd5407](https://optimistic.etherscan.io/address/0x2d45D18bc844CFb242B77cC5943bd318dcAd5407#code) |
| Polygon | [0x2d45D18bc844CFb242B77cC5943bd318dcAd5407](https://polygonscan.com/address/0x2d45D18bc844CFb242B77cC5943bd318dcAd5407#code) |
| Telos | [0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9](https://www.teloscan.io/address/0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9#contract) |
| zkSync Era | [0x63954018EdC88b17950e70Ade6bB606131265f02](https://explorer.zksync.io/address/0x63954018EdC88b17950e70Ade6bB606131265f02#contract) |
| Zora | [0xbf9813FC8f99759A77D877F812ff065D2070F1cC](https://explorer.zora.energy/address/0xbf9813FC8f99759A77D877F812ff065D2070F1cC) |

__CryptoLink Receiver__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | TBD |
| Avalanche | TBD |
| Base | TBD |
| Blast | TBD |
| BNB Chain | TBD |
| Cronos | [0x877fe019d5320bc5A1ab6d72f05D13ba8A651350](https://cronoscan.com/address/0x877fe019d5320bc5A1ab6d72f05D13ba8A651350#code) |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | [0xfe7C6aDbb0450b0B3e908724346eFcaDd5E7a0D3](https://kavascan.com/address/0xfe7C6aDbb0450b0B3e908724346eFcaDd5E7a0D3/contracts) |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | [0x17A5B068722B575134065b58DCA70ECA895EfB81](https://neonscan.org/address/0x17A5B068722B575134065b58DCA70ECA895EfB81#code) |
| Optimism | TBD |
| Polygon | TBD |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__CryptoLink Sender__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | TBD |
| Avalanche | TBD |
| Base | TBD |
| Blast | TBD |
| BNB Chain | TBD |
| Cronos | [0x523073f029C889242beBFbB7eE3BDaB52942a39A](https://cronoscan.com/address/0x523073f029C889242beBFbB7eE3BDaB52942a39A#code) |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | [0x2592248F13d142fF11AB585319149F92C859dDA8](https://kavascan.com/address/0x2592248F13d142fF11AB585319149F92C859dDA8/contracts) |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | TBD |
| Polygon | TBD |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__deBridge Receiver__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | TBD |
| Avalanche | TBD |
| Base | TBD |
| Blast | TBD |
| BNB Chain | TBD |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | [0x877fe019d5320bc5A1ab6d72f05D13ba8A651350](https://neonscan.org/address/0x877fe019d5320bc5A1ab6d72f05D13ba8A651350#contract) |
| Optimism | TBD |
| Polygon | [0x285d802117856ab0005771D572FD8c66912EA437](https://polygonscan.com/address/0x285d802117856ab0005771D572FD8c66912EA437#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__deBridge Sender__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | TBD |
| Avalanche | TBD |
| Base | TBD |
| Blast | TBD |
| BNB Chain | TBD |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | [0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9](https://neonscan.org/address/0x0d6cf9AF5062e20dE91480eF61E44F5C97C124D9#contract) |
| Optimism | TBD |
| Polygon | [0x8c2c06321151F2236eaFDB0816edb9Cb68dFCA57](https://polygonscan.com/address/0x8c2c06321151F2236eaFDB0816edb9Cb68dFCA57#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__DEX Weekly Updater__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | TBD |
| Avalanche | TBD |
| Base | TBD |
| Blast | TBD |
| BNB Chain | TBD |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | TBD |
| Polygon | [0xA28cEbC0f64Bb3D1974a3DF9441E2dF8414E376F](https://polygonscan.com/address/0xA28cEbC0f64Bb3D1974a3DF9441E2dF8414E376F#code) |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

__Chainlink Data Feed Publisher__

| Chain | Address |
| :--- | :--- |
| Arbitrum Nova | TBD |
| Arbitrum One | [0x4d4178E7b48cB5B6D0b7C6E860824838ffCb22b1](https://arbiscan.io/address/0x4d4178E7b48cB5B6D0b7C6E860824838ffCb22b1#code) |
| Avalanche | TBD |
| Base | TBD |
| Blast | TBD |
| BNB Chain | TBD |
| Cronos | TBD |
| Fantom | TBD |
| Filecoin | TBD |
| Fraxtal | TBD |
| Kava | TBD |
| Mantle | TBD |
| Metis | TBD |
| Mode | TBD |
| Neon | TBD |
| Optimism | TBD |
| Polygon | TBD |
| Telos | TBD |
| zkSync Era | TBD |
| Zora | TBD |

## Tokenlist

Arbitrum Nova: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-arbitrum-nova.json

Arbitrum One: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-arbitrum-one.json

Avalanche: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-avalanche.json

Base: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-base.json

Blast: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-blast.json

BNB Chain: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-bsc.json

Cronos: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-cronos.json

Fantom: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-fantom.json

Filecoin: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-filecoin.json

Fraxtal: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-fraxtal.json

Kava: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-kava.json

Mantle: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-mantle.json

Metis: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-metis.json

Mode: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-mode.json

Neon: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-neon.json

Optimism: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-optimism.json

Polygon: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-polygon.json

Telos: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-telos.json

zkSync Era: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-zksync-era.json

Zora: https://raw.githubusercontent.com/ArchlyFi/token-list/main/tokenlist-zora.json

## Chain IDs

| Chain | ID |
| :--- | :--- |
| Arbitrum Nova | 42170 |
| Arbitrum One | 42161 |
| Avalanche | 43114 |
| Base | 8453 |
| Blast | 81457 |
| BNB Chain | 56 |
| Cronos | 25 |
| Fantom | 250 |
| Filecoin | 314 |
| Fraxtal | 252 |
| Kava | 2222 |
| Mantle | 5000 |
| Metis | 1088 |
| Mode | 34443 |
| Neon | 245022934 |
| Optimism | 10 |
| Polygon | 137 |
| Telos | 40 |
| zkSync Era | 324 |
| Zora | 7777777 |

## Explorers

| Chain |
| :--- |
| [Arbitrum Nova](https://nova.arbiscan.io/) |
| [Arbitrum One](https://arbiscan.io/) |
| [Avalanche](https://snowtrace.io/) |
| [Base](https://basescan.org/) |
| [Blast](https://blastscan.io/) |
| [BNB Chain](https://bscscan.com/) |
| [Cronos](https://cronoscan.com/) |
| [Fantom](https://ftmscan.com/) |
| [Filecoin](https://fvm.starboard.ventures/explorer/) |
| [Fraxtal](https://fraxscan.com/) |
| [Kava](https://kavascan.com/) |
| [Mantle](https://explorer.mantle.xyz/) |
| [Metis](https://explorer.metis.io/) |
| [Mode](https://explorer.mode.network//) |
| [Neon](https://neonscan.org/) |
| [Optimism](https://optimistic.etherscan.io/) |
| [Polygon](https://polygonscan.com/) |
| [Telos](https://www.teloscan.io/) |
| [zkSync Era](https://explorer.zksync.io/) |
| [Zora](https://explorer.zora.energy/) |


## Audits

### DEX Audits

Audits performed on Solidly are available at [Solidly Audits](https://github.com/ArchlyFi/archly-solidly-contracts/blob/master/audits/).

### Rainbow Road Audits

| Contract |
| :--- |
| [Rainbow Road](https://docs.archly.fi/audits/f737df8d-849b-494b-a72d-bb8462610e76.pdf) |
| [ERC20 Transfer Handler](https://docs.archly.fi/audits/0d25c5fa-d202-41a5-baf6-d3052249a5e8.pdf) |
| [DEX Weekly Update Handler](https://docs.archly.fi/audits/549834e3-692e-4cb5-b40b-9788d5624aac.pdf) |
| [Chainlink Receiver](https://docs.archly.fi/audits/4f1df2e6-520c-4398-b181-eb6c473a26b0.pdf) |
| [Chainlink Sender](https://docs.archly.fi/audits/defbf087-5e16-4591-a1a2-efde6d4bfbed.pdf) |
| [Axelar Receiver](https://docs.archly.fi/audits/31243a98-e8cc-4f29-89f3-e8fa1e8f0243.pdf) |
| [Axelar Sender](https://docs.archly.fi/audits/9cfa557e-ea4d-44e4-8d8e-228af66526ca.pdf) |
| [LayerZero Receiver](https://docs.archly.fi/audits/47c487dc-72f9-44f8-9ea5-9db4628c8eac.pdf) |
| [LayerZero Sender](https://docs.archly.fi/audits/600c6aa2-97ce-4763-bf03-66158b6bb45c.pdf) |
| [Fee Collector Factory](https://docs.archly.fi/audits/eb8ebad5-8096-47f0-b0ec-86342be1df1c.pdf) |
| [Fee Collector](https://docs.archly.fi/audits/c64010e9-6dba-4896-b63d-9707907a81b4.pdf) |
| [DEX Weekly Updater](https://docs.archly.fi/audits/9380fd48-018d-483d-9192-c73ac2239df3.pdf) |
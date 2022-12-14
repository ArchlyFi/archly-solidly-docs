export default {
  projectLink: 'https://github.com/ArchlyFi/',
  docsRepositoryBase: 'https://github.com/ArchlyFi/archly-solidly-docs/blob/master',
  titleSuffix: ' – Archly Finance',
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_stork: false,
  darkMode: true,
  font: false,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} Archly Finance.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img src="/archly.svg" alt="Archly Finance" style={{height: '30px', padding: '0 5px'}} />
      <span className="mr-2 font-extrabold md:inline">Archly Finance</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The liquidity base-layer of the Telos ecosystem.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Archly Finance: The liquidity base-layer of the Telos." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ArchlyFi" />
      <meta name="twitter:title" content="Archly Finance: The liquidity base-layer of the Telos." />
      <meta name="twitter:description" content="Archly Finance is an automated market maker (AMM or simply, decentralized exchange aka DEX) on Telos EVM." />
      <meta name="twitter:image" content="https://docs.archly.fi/archly_banner.png" />

      <meta property="og:title" content="Archly Finance: The liquidity base-layer of the Telos." />
      <meta property="og:description" content="Archly Finance is an automated market maker (AMM or simply, decentralized exchange aka DEX) on Telos EVM." />
      <meta property="og:image" content="https://docs.archly.fi/archly_banner.png" />

      <meta name="apple-mobile-web-app-title" content="Archly Finance" />
      <link rel="stylesheet" href="/fonts.css" />
    </>
  )
}

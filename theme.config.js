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
  footer: false,
  footerText: `MIT ${new Date().getFullYear()} Archly Finance.`,
  footerEditLink: ``,
  logo: (
    <>
      <img src="/archly.png" alt="Archly" style={{height: '50px', padding: '0 5px'}} />
      <span className="mr-2 font-extrabold md:inline">Archly Finance</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Archly Finance" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ArchlyFi" />
      <meta name="twitter:title" content="Archly" />
      <meta name="twitter:description" content="Empowering users to seamlessly scale onchain and offchain." />
      <meta name="twitter:image" content="https://docs.archly.fi/the_future.jpg" />

      <meta property="og:title" content="Archly" />
      <meta property="og:description" content="Empowering users to seamlessly scale onchain and offchain." />
      <meta property="og:image" content="https://docs.archly.fi/the_future.jpg" />

      <meta name="apple-mobile-web-app-title" content="Archly" />
      <link rel="stylesheet" href="/fonts.css" />
    </>
  )
}

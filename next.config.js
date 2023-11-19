/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    relay: {
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
    },
    reactRemoveProperties: true,
    removeConsole: true,
  },
}

module.exports = nextConfig

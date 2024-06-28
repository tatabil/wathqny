import type { WathqnyConfig } from 'wtqdocs'

import CodeStyles from 'wtqdocs/styles/block?url'
import ThemeDocsStyles from 'wtqdocs/styles/docs?url'

const Config: WathqnyConfig = {
  logo: '/icon.svg',
  siteName: 'wathqny',
  OGImage: {
    src: '/og.png',
    alt: "Logo of wathqny, featuring Arabic text in green that translates to 'wathqny' with a tagline below in black text that reads 'Where Arab Technology Shines'.",
  },
  description: 'fruit UI a modular styling framework',
  keywords: [
    'ui',
    'css',
    'html',
    'js',
    'framework',
    'library',
  ],
  sidebar: [
    {
      label: 'Getting started',
      id: 'getting-started',
    },
  ],
  navbar: {
    items: [
      {
        label: 'docs',
        href: '/docs/',
      },
      {
        label: 'blog',
        href: '/blog',
      },
    ],
  },
  css: [
    {
      href: ThemeDocsStyles,
      rel: 'stylesheet',
    },
    {
      href: CodeStyles,
      rel: 'stylesheet',
    },
  ],
  font: '/font/RubikVF.woff2'
}

export default Config

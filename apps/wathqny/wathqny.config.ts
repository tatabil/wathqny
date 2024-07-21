import type { WathqnyConfig } from 'wtqdocs'

import ThemeStyles from 'wtqdocs/styles?url'

const Config: WathqnyConfig = {
  logo: '/icon.svg',
  siteName: 'wathqny',
  OGImage: {
    src: '/og.png',
    alt: "Logo of wathqny, featuring Arabic text in green that translates to 'wathqny' with a tagline below in black text that reads 'Where Arab Technology Shines'.",
  },
  description:
    'wathqny a fast, easy and accessible Astro powered documentation site framework',
  keywords: [
    'ui',
    'site',
    'easy',
    'fast',
    'accessible',
    'docs',
    'documentation',
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
      href: ThemeStyles,
      rel: 'stylesheet',
    },
  ],
  font: '/font/GeistVF.woff2',
}

export default Config

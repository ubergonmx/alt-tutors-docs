import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:description" content="Documentation for the developer team" />
      <link rel="icon" href="/alt-tutors-docs.png" type="image/png" />
    </>
  ),
  logo: (
    <span style={{ display: 'flex', gap: '5px' }}>
      <Image src="/alt-tutors-docs.png" alt="icon" width={24} height={24} />
      ALT Tutors Docs
    </span>
  ),
  project: {
    link: 'https://github.com/ubergonmx/alt-tutors-docs',
  },
  chat: {
    link: 'https://discord.gg/fMtTgw2MSr',
  },
  docsRepositoryBase: 'https://github.com/ubergonmx/alt-tutors-docs/blob/main',
  footer: {
    text: 'ALT Tutors Docs',
  },
}

export default config

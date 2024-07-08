import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import TanStack from 'app/components/Providers/TanStack'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next News',
  description:
    'Fernanda Familiar es un sitio web de noticias, entretenimiento, música y moda. Te damos las noticias más importantes de México y el mundo, además de videos ...',
}

const idTagManager = process.env.ANALYTICS_ID || ''

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <script
        src={`https://www.googletagmanager.com/gtm.js?id=${idTagManager}`}
        async
      ></script>
      <Head>
        <meta
          name='robots'
          content='index, follow'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:site_name'
          content='Next News'
        />
      </Head>
      <body className={inter.className}>
        <TanStack>{children}</TanStack>
      </body>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${idTagManager}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </html>
  )
}

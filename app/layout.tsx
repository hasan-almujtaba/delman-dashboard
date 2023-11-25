'use client'

import { Navbar, Wrapper } from 'features/layouts'

import { Providers } from './provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Wrapper />

          {children}
        </Providers>
      </body>
    </html>
  )
}

import './globals.css'
import { Rubik } from 'next/font/google'

import type { Metadata } from 'next'

// because auth cookies could not be static page
export const dynamic = 'force-dynamic'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`h-screen flex flex-col bg-slate-100 ${rubik.className}`}>
        {children}
      </body>
    </html>
  )
}
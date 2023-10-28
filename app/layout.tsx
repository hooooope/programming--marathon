import React from 'react'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'
import { APP_META } from '@/constants/meta'
import ThemeProvider from '@/components/providers/theme-provider'
import ConvexClientProvider from '@/components/providers/convex.provider'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = APP_META

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // change the theme may cause the hydration waring
    <html lang='en' suppressContentEditableWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            storageKey='theme'
          >
            <Toaster position='bottom-center' />
            <Navbar />
            <main className='min-h-full flex'>
              <Sidebar />
              <section className='w-full ml-40 mt-24'>{children}</section>
            </main>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}

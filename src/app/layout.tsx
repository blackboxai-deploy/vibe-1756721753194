import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/contexts/AppContext'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Productivity Workspace - Notion-like App',
  description: 'A modern productivity application for organizing your thoughts and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AppProvider>
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
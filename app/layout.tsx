import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Visibility Hub',
  description: 'Daily-updated AI visibility best practices and guidelines for writers, editors, and content creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

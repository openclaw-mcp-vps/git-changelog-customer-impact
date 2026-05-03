import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChangelogAI — Auto-generate changelogs with customer impact scores',
  description: 'Analyzes git commits and generates customer-facing changelogs with impact scoring and feature adoption tracking for product managers and engineering teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="73f376ff-9b1c-4d54-a1fe-dca155db146b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

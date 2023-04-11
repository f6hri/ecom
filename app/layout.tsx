import { IndexMetadata } from '@/config/metadata'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = { ...IndexMetadata };

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

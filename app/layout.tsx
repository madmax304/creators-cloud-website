import '@/app/globals.css'
import GoogleTagManager from '@/components/analytics/GoogleTagManager'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

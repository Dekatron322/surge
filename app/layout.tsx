import { Footer, Founder, Investors, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'TheSurge.tech - Igniting Innovation in Tech Startups',
  description: 'TheSurge.tech is a pioneering force dedicated solely to empowering tech startups across Africa. Our mission is to revolutionize the tech startup ecosystem, providing comprehensive support and resources to fuel innovation, accelerate growth, and drive unprecedented success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="relative">
      <Navbar />
        {children}
      <Footer />
      </body>
      
    </html>
  )
}

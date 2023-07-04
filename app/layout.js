import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const inter = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'SDA Kinyarwanda App',
  description: 'Your tagline or a short description of your app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

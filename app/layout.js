import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-24 my-12`}>{children}</body>
    </html>
  )
}

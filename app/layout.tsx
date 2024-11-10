import '@/global.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Diplomata } from '@next/font/google'

const diplomata = Diplomata({
  subsets: ['latin'], // Adjust subsets as needed
  weight: '400', // Specify weight(s) if needed, e.g., '400' for regular
})

export const metadata = {
  title: `Opal's Jewels and Gems`,
  description: 'Opals Jewels and gems ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className={diplomata.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

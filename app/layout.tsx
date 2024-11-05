import '@/global.css'

export const metadata = {
  title: `Opal's Jewels and Gems`,
  description: 'Opals Jewels and gems ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>{children}</body>
    </html>
  )
}

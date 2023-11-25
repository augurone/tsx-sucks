import './globals.css'

export const metadata = {
  title: 'Babalon Salon',
  description: 'A group of feminine magicians developing content for other femnine magicians',
  openGraph: {
      title: 'Babalon',
      description: 'A group of feminine magicians developing content for other femnine magicians',
      images: [
        {
          url: 'https://images.ctfassets.net/4krpru5jrq5t/zRP7mNPpFbOgOuRfzfiaK/56423e0935e7ddf16d09fa9bc5e8acbf/babalon_18x24.jpg?fm=webp&w=640',
        },
      ],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}

import React from 'react';
import '../styles/globals.css'

export const metadata = {
  title: 'College & Temple of Thelema',
  description: 'A Modern Mystery School',
  openGraph: {
      title: 'College & Temple of Thelema',
      description: 'A Modern Mystery School',
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
        {children}
    </html>
  )
}

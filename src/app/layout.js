import React from 'react';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';

initFontAwesome();

export const metadata = {
    title: 'College & Temple of Thelema',
    description: 'Since the 1970\'s, College of Thelema has been the standard of education in Thelemic Magick. Temple of Thelema offers initiation in the Western Mysteries.',
    keywords: 'Thelema, Magick, Western Mystery Tradition, Initiation, Occult, Thelemic Order, Aleister Crowley, Phyllis Seckler, James A. Eshelman',
    metadataBase: new URL('https://thelema.org'),
    alternates: {
      canonical: '/'
    },
    openGraph: {
        title: 'College & Temple of Thelema',
        description: 'A Modern Mystery School',
        images: [
            {
                url: 'https://images.ctfassets.net/4krpru5jrq5t/zRP7mNPpFbOgOuRfzfiaK/56423e0935e7ddf16d09fa9bc5e8acbf/babalon_18x24.jpg?fm=webp&w=640',
            },
        ],
    },
    icons: {
        other: [
        ]
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preload" href="https://use.typekit.net/fsb4dcv.css" as="style" />
                <link rel="stylesheet" href="https://use.typekit.net/fsb4dcv.css" as="style" />
            </head>
            {children}
        </html>
    )
}

import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
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
                url: 'https://thelema.org/jsonld.jpg',
            },
        ],
        type: 'website',
        url: "https://thelema.org"
    },
    twitterCard: {
        cardType: 'summary_large_image',
        title: 'College & Temple of Thelema',
        description: 'A Modern Mystery School',
        image: 'https://thelema.org/jsonld.jpg',
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "College and Temple of Thelema",
    "alternateName": "Temple of Thelema",
    "url": "https://thelema.org",
    "logo": "https://thelema.org/jsonld.png",
    "sameAs": [
      "https://www.facebook.com/templeofthelema",
      "https://www.instagram.com/explore/locations/432000883/temple-of-thelema/"
    ]
  };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="sitecheckerpro-site-verification" content="cbfde6cf576fc8f9b51319e89e0f0ece" />
                <link rel="preconnect" href="https://use.typekit.net" as="style" />
                <link rel="preload" href="https://use.typekit.net/fsb4dcv.css" as="style" />
                <link rel="stylesheet" href="https://use.typekit.net/fsb4dcv.css" as="style" />
                <script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}} ></script>
            </head>
            {children}
            <GoogleAnalytics gaId="G-4G9ST366HD"/>
        </html>
    )
}

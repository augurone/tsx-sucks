import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/navitgation/nav';
import Footer from '../../../components/navitgation/footer';
import LiberL from '../../../referecnces/liberl';

export const metadata = {
    title: 'Liber al vel Legis: The Book of the Law',
    description: 'Liber L, the Book of the Law, or more completely Liber al vel Legis, is the central holy book of Thelema; it is a "received" text, channeled by Rose Crowley (Kelly) and recorded by Aleister Crowley April 8th, 9th, and 19th of 1904 in Cairo Egypt. It describes a cosmology of balance between the Infinite (Nuit) and the Finite (Hadit), as represented by the emerging Aeon in the Child, Ra Hoor Khuit. Do what thou wilt shall be the whole of the Law. Love is the law, love under will. Describes love as a context for will, and when properly aligned—the human divine emerges.  ',
    keywords: 'A∴A∴, Book of the Law, Liber al vel Legis, Liber L, Crowley, Rose Edith Kelly, Nuit, Hadit, Ra Hoor Khuit, tunis comment',
    alternates: {
      canonical: '/aa/bookofthelaw'
    },
    openGraph: {
        title: 'Liber al vel Legis: The Book of the Law',
        description: 'Liber L, the Book of the Law, or more completely Liber al vel Legis, is the central holy book of Thelema; it is a "received" text, channeled by Rose Crowley (Kelly) and recorded by Aleister Crowley April 8th, 9th, and 19th of 1904 in Cairo Egypt. It describes a cosmology of balance between the Infinite (Nuit) and the Finite (Hadit), as represented by the emerging Aeon in the Child, Ra Hoor Khuit. Do what thou wilt shall be the whole of the Law. Love is the law, love under will. Describes love as a context for will, and when properly aligned—the human divine emerges.  ',
    keywords: 'A∴A∴, Book of the Law, Liber al vel Legis, Liber L, Crowley, Rose Edith Kelly, Nuit, Hadit, Ra Hoor Khuit, Crowly, Aiwass, thelema, thelemic temple, thelema website, temple of thelema, college of thelema',
        images: [
            {
                url: 'https://thelema.org/jsonld.jpg',
            },
        ],
        type: 'website',
        url: "https://thelema.org/aa/bookofthelaw"
    },
    twitterCard: {
        cardType: 'summary_large_image',
        title: 'Liber al vel Legis: The Book of the Law',
        url: "https://thelema.org/aa/bookofthelaw",
        description: 'Liber L, the Book of the Law, or more completely Liber al vel Legis, is the central holy book of Thelema; it is a "received" text, channeled by Rose Crowley (Kelly) and recorded by Aleister Crowley April 8th, 9th, and 19th of 1904 in Cairo Egypt. It describes a cosmology of balance between the Infinite (Nuit) and the Finite (Hadit), as represented by the emerging Aeon in the Child, Ra Hoor Khuit. Do what thou wilt shall be the whole of the Law. Love is the law, love under will. Describes love as a context for will, and when properly aligned—the human divine emerges.  ',
        keywords: 'A∴A∴, Book of the Law, Liber al vel Legis, Liber L, Crowley, Rose Edith Kelly, Nuit, Hadit, Ra Hoor Khuit',
        images: ['https://thelema.org/jsonld.jpg'],
        creator: '@fridazed'
    }
};

export default function Page() {
    return (
        <body id="page--top"  className='theme--Warmer'>
            <Navbar disableRoute='/aa' h1='Liber al vel Legis: The Book of the Law' />
            <main>
                <aside>
                    <div className="wrapper--sticky">
                        <h2 className="u-overflow--mobileList">On This Page:</h2>
                        <ul className="list">
                            <li>
                                <a aria-label="Book of the Law" href="#page--top">Liber Al vel Legis</a> |
                                <a href="#article--LiberLII"> II</a> |
                                <a href="#article--LiberLIII"> III</a> |
                                <a href="#article--LiberLComment"> Comment</a>
                            </li>
                            <li><a href="../aa">The A&there4;A&there4;</a></li>
                            <li><a href="../aa#article--AccountOfTheOrder">An Account Of The Order</a></li>
                            <li><a href="../aa#article--LegacyOfJaneWolfe">The Legacy of Jane Wolfe</a></li>
                            <li>
                                <a href="../aa#article--OneStarInSight">One Star In Sight</a> |
                                <a href="../aa#article--OneStarInSightII"> II</a> |
                                <a href="../aa#article--OneStarInSightIII"> III</a> |
                                <a href="../aa#article--OneStarInSightIV"> IV</a> |
                                <a href="../aa#article--OneStarInSightV"> V</a> |
                                <a href="../aa#article--OneStarInSightVI"> VI</a> |
                                <a href="../aa#article--OneStarInSightVII"> VII</a> |
                                <a href="../aa#article--OneStarInSightVIII"> VIII</a> |
                                <a href="../aa#article--OneStarInSightIX"> IX</a> |
                                <a href="../aa#article--OneStarInSightX"> X</a> |
                                <a href="../aa#article--OneStarInSightSuccession"> Attainment &amp; Success&#40;ion&#41;</a> |
                                <a href="../aa#article--OneStarInSightConclude"> To Conclude</a><br />
                            </li>
                            <li><a href="../aa#article--LiberXIII">Liber XIII</a></li>
                        </ul>
                    </div>
                </aside>
                <section className="pb-8">
                    <LiberL />
                </section>
            </main>
            <Footer />
        </body>
    );
}

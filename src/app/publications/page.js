import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from '../../../node_modules/next/image';
import Navbar from '../../components/navitgation/nav';
import Footer from '../../components/navitgation/footer';
import AmazonLogo from '../../vectors/Amazon_logo';
import AbesBooksLogo from '@/vectors/AbesBooksLogo';

export const metadata = {
    title: 'College of Thelema: Publications',
    description: 'Beginning with In the Continuum, College Of Thelema has a rich history of publishing high quality Thelemic writings spanning 50years.',
    keywords: 'A∴A∴, Soror Meral, Phyllis Seckler, In the Continuum, The Mystical and Magical System of the A∴A∴, 776.5, Visions & Voices, Pearls Of Wisdom, Black Pearl, Liber VII',
    alternates: {
      canonical: '/publications'
    },
    openGraph: {
        title: 'College of Thelema: Publications',
        description: 'Beginning with In the Continuum, College Of Thelema has a rich history of publishing high quality Thelemic writings spanning 50years.',
        images: [
            {
                url: 'https://thelema.org/jsonld.jpg',
            },
        ],
        type: 'website',
        url: "https://thelema.org/publications"
    },
    twitterCard: {
        cardType: 'summary_large_image',
        title: 'College of Thelema: Publications',
        description: 'Beginning with In the Continuum, College Of Thelema has a rich history of publishing high quality Thelemic writings spanning 50years.',
        image: 'https://thelema.org/jsonld.jpg',
    }
};

export default function Page() {
    return (
        <body id="page--top" className='theme--Warmer'>
            <Navbar disableRoute="/publications" />
            <main>
                <aside>
                    <div className="wrapper--sticky">
                        <h2 className="u-overflow--mobileList">On This Page:</h2>
                        <ul className="list">
                            <li><a href="#page--top" target="_self">Books</a></li>
                            <li><a href="#article--periodicals" target="_self">Periodicals for Download</a></li>
                            <li><a href="#article--monographs" target="_self">Monographs for Download</a></li>
                        </ul>
                    </div>
                </aside>
                <section>
                    <h2>College of Thelema: Publications</h2>
                    <article id="page--top" className="article article--fullWidth">
                        <h3>Books</h3>
                        <figure className="card--book flex flex-col md:flex-row items-start gap-8 w-full py-8">
                            <div className="flex flex-col items-start w-full md:w-[220px]">
                                <Image loading="eager" className="w-full md:w-[220px]" width="220" height="293" alt="The Mystical && Magical System of the AA: James A. Eshleman" src="/cover_MMAA-Eshelman.webp" style={{ backgroundImage: 'url(/cover_MMAA-Eshelman.webp)' }} />
                                <aside>
                                    <hgroup>
                                        <h4><strong>The Mystical &amp; Magical System of the A&there4;A&there4;</strong></h4>
                                        <span>James A. Eshelman</span>
                                    </hgroup><br />
                                    <a className="mt-6" href="https://www.amazon.com/Mystical-Magical-System-Step-Step/dp/0970449607/ref=sr_1_1?crid=1SGB4MN6ZRRFN&dib=eyJ2IjoiMSJ9.L5Fa7IO8lh8GianM6Kvj2Z1dOA-ipmKKOGA-nt7YDTkPHXRTcCM95HOrR5L83VHTxf4CPztsM2NJuPa2EzMe3MKZksq2yx6GQQ-q5EcTBSPNuPHLOSY1BSNr7xlsfu7IdW9432kSoc1326oQWsK1DjnCkYf-gNMLvc9rtbhskAFRaxkx3mQtMj30K2rMGRYXo9mOgmaStZooFmGMeZBLuqG3lrkO6p0qi7v49O4Zq_g.tOYPqa3bn_9R425zf-ryUFk5N7CkCKa-tv-XPijoXYM&dib_tag=se&keywords=james+a.+eshelman&qid=1708550641&sprefix=James+A.+Es%2Caps%2C151&sr=8-1" target="_blank">Find this title on: <AmazonLogo /> </a>
                                </aside>
                            </div>
                            <figcaption className="wrapper-text">
                                <blockquote>
                                    <p>In all systems of religion is to be found a system of Initiation, which may be defined as the process by which a [person] comes to learn that unknown Crown. Though none can communicate either the knowledge or the power to achieve this, which we may call the Great Work, it is yet possible for initiates to guide others.</p>
                                    <cite>Aleister Crowley summarizes the nature &amp; purpose of A&there4;A&there4; </cite>
                                </blockquote>
                                <p>This book describes the methods of the A&there4;A&there4;, step-by-step, in each of its grades from Probationer &#40;0=0&#41; through Exempt Adept &#40;7=4&#41;. Often called, by its readers, &quot;a user&apos;s guide to THE EQUINOX,&quot; it provides comprehensive description of a course of study that allows you to employ effectively the methods of Scientific Illuminism. Never before have the pathways of the Inner Journey been so finely mapped, nor the Way so clearly marked!</p>
                                <p>By the name &quot;A&there4;A&there4;&quot; we designate that One and Eternal Order that Paul Foster Case and Kenneth Mackenzie called the &quot;True and Invisible Order,&quot; and Karl von Eckartshausen titled the &quot;Interior Church&quot; or &quot;community of light.&quot;</p>
                                <p>Existing throughout history, silently guiding humanity&apos;s cultural and spiritual evolution, it is the Holy of Holies wherein that Sacred Ark rests inviolate. Every legitimate magical order, mystery school, fraternity, or religion disseminating some portion of Wisdom has been an Outer Vehicle of this Inner Fellowship of Light.</p>
                                <p>There is THAT within each of us, immortal and infinitely creative, which truly gives us birth. Something in us knows, instinctively, that we must &#40;each in our own ripe time&#41; seek this, embrace this, and surrender to this as we would to the most overpowering and fulfilling love. And then we must give it expression in our lives and our work, pouring forth the very essence of ourselves into that which we love most. It is this inner Truth-of-Self — this True Will, or central, guiding spiritual principle of our lives — that the mystical and magical system of the A&there4;A&there4; unveils and awakens from within each of us.</p>
                            </figcaption>
                        </figure>
                        <figure className="card--book flex flex-col md:flex-row items-start gap-8 w-full py-8">
                            <div className="flex flex-col items-start md:order-1 w-full md:w-[220px]">
                                <Image className="w-full md:w-[220px]" width="207" height="267" alt="776 & One half: James A. Eshleman" src="/cover_776-Eshelman.webp" style={{ backgroundImage: 'url(/cover_776-Eshelman.webp)' }} loading = 'lazy'/>
                                <aside>
                                    <hgroup>
                                        <h4><strong>776&frac12;</strong></h4>
                                        <span>James A. Eshelman</span>
                                    </hgroup>
                                    <strong><em>Reigniting the spark of magick in the hearts of a new generation of aspirants!</em></strong>
                                    <a className="block mt-6" href="https://www.amazon.com/776-Practical-Ceremonial-James-Eshelman/dp/0970449623/ref=sr_1_1?crid=2QSWG2S9H23WZ&dib=eyJ2IjoiMSJ9.DEIAKKmDBesvL1ZlLlvtnPWa0i7zE6UDgC-KLILttZs.rP7t0xBgxOMxLcNRgcbvLfDSpnToKIuTX3ZeKS2Kqi0&dib_tag=se&keywords=776+eshelman&qid=1708551509&sprefix=776+eshelman%2Caps%2C162&sr=8-1" target="_blank">Find this title on: <AmazonLogo /> </a>
                                </aside>
                            </div>
                            <figcaption className="wrapper-text">
                                <h4><strong>In this new edition, 776&frac12; has grown so much, it should be renamed 776&frac12;!</strong></h4>
                                <p>Have you ever tried to use <em>Liber 777</em> &#40;really <strong>use</strong> it!&#41; to design and implement magical ritual? Can you read it without your glasses? Can you read it <strong>with</strong> your glasses? Can you tell its Gimel from its Nun? Can you <strong>pronounce</strong> the Hebrew names and words in <em>777</em> once you can read them? Can you find your way around its tables quickly and efficiently? &#40;Can you answer &quot;yes&quot; to <strong>any</strong> of these questions?&#41;</p>
                                <p>Aleister Crowley&apos;s <em>Liber 777</em> remains one of the most important occult references of the 20th Century, demonstrating the interrelationships of diverse philosophical, religious, mystical, and magical systems from around the world. One of Crowley&apos;s finest contributions to both practical and theoretical philosophy was this correlation of numerous world traditions, of East and West alike. Yet it has never been very handy for the practicing magician.</p>
                                <p>Now, this extraordinary compilation by James A. Eshelman, titled <strong>776&frac12;,</strong>  is designed exclusively to support <strong>the practice of ceremonial magick.</strong> According to its author, &quot;<em>776&frac12;</em> is not quite <em>777</em>.&quot;</p>
                                <p><em>776&frac12;</em> contains 182 tables of the most useful practical ceremonial information. Although much of this comes originally from <em>777,</em> most of the tables have been supplemented and expanded. The Hebrew and other letters are large, clear, and readable. The columns have been reorganized into a more useful sequence. Additionally, almost every Hebrew word or Name in the entire work is also transliterated into English to assist the practitioner in pronunciation. Numerous typographical and other mistakes from <em>777</em> have been corrected.</p>
                                <p>New tables have been added on such topics as: The Genii and Averse Spirits of the 22 Paths from <em>Liber Arcanorum</em> and <em>Liber Carcerorum;</em> the Thelemic, Scandinavian, Assyro-Babylonian, Celtic, Voudoun, and Santeria pantheons; Psychological Attributions of the 32 Paths; use of the Unicursal Hexagram; the Enochian alphabet and three models of its enumeration; and more. Practical correspondences of animals, plants, precious and semiprecious stones, magical weapons, incenses, &quot;magical powers and mystical states,&quot; and others have been expanded.</p>
                                <strong>And that&apos;s just the first half of the book!</strong>
                                <p>Supplementing these extensive lists is a new essay on Ritual Construction &#40;which is also a partial study guide to Crowley&apos;s <em>Magick in Theory & Practice</em>&#41; and <strong>ten sample magick rituals</strong> for such purposes as generating magical force, prosperity, obtaining angelic guardians, remapping your character patterns, the highest spiritual attainments, and The Thelemic Mass.</p>
                                <p><strong>This third revised edition</strong> expands the already popular 1995 edition with new tables and additional data. The instructional essays have been significantly expanded and updated to incorporate new teaching approaches. A new Appendix contains instructions for frequently used small rituals of banishing, invoking, and energizing — including the never-before-published — <em>Liber Pleiades.</em></p>
                            </figcaption>
                        </figure>
                        <figure className="card--book flex flex-col md:flex-row items-start gap-8 w-full pb-8">
                            <div className="flex flex-col items-start w-full md:w-[220px]">
                                <Image className="w-full md:w-[220px]" width="220" height="293" alt="Pearls of Wishom: James A. Eshleman" src="/cover_Pearls-Eshelman.webp" style={{ backgroundImage: 'url(/cover_Pearls-Eshelman.webp)' }} loading = 'lazy'/>
                                <aside>
                                    <hgroup>
                                        <h4><strong>Pearls of Wishom</strong></h4>
                                        <span>James A. Eshelman</span>
                                    </hgroup>
                                    <strong><em>This is the “director&apos;s cut” of Black Pearl — and more!</em></strong> <br />
                                    <a className="block mt-6" title="Find Pearls of Wisdom on Amazon" href="https://www.amazon.com/Pearls-Wisdom-Journal-Black-Pearl/dp/0970449658/ref=sr_1_1?crid=K2UDGJQAJNIT&dib=eyJ2IjoiMSJ9.wPFLXSDxZGP6QnuhCyrIXcOFBYorjnE3QD2G02rZO1NRzyWwFGeduXOy-Wfr7Tf1.f-sAfRaRQ2J851XWrGXyr7oMwco792tdKZ-V8hcLBwE&dib_tag=se&keywords=pearls+of+wisdom+eshelman&qid=1708551329&sprefix=Pearls+of+Wisdom+eshel%2Caps%2C170&sr=8-1" target="_blank">Out of Print, find it on: <AmazonLogo /> </a>
                                </aside>
                            </div>
                            <figcaption className="wrapper-text">
                                <h4><strong>&quot;A Black Pearl of Infinite Preciousness&quot;</strong></h4>
                                <p>&quot;Seek the New in the Old ~ Seek the Old in the New.&quot; That was the motto of Black Pearl, Temple of Thelema / College of Thelema&apos;s biannual journal published 1997-2002. Author James A. Eshelman contributed 100 articles during one of the most prolific periods of his career. This anthology gathers over 40 essays, many of them substantially updated and expanded, and some of them never previously published.</p>
                                <p>An Introduction to Thelema - the ground shifting world-view of Aleister Crowley — explains Thelema&apos;s core principles of Will, Love, and Star, then expands on the nature of True Will and Love Under Will; Thelema&apos;s pantheon of gods; and the New Era of Aspiration now opening before us. The rest of the book is organized in 7 parts:</p>
                                <ul className="flex justify-start flex-wrap">
                                    <li>&#9956; It&apos;s in the Basics&nbsp;</li>
                                    <li>&#9956; Magick&nbsp;</li>
                                    <li>&#9956; Qabalah&nbsp;</li>
                                    <li>&#9956; Thelema&nbsp;</li>
                                    <li>&#9956; Sexual Mysteries&nbsp;</li>
                                    <li>&#9956; Holy Guardian Angel&nbsp;</li>
                                    <li>&#9956; The Path </li>
                                </ul>
                                <p>One section &#40;&quot;Magick&quot;&#41; explores a dozen topics of ceremonial magick, including traditional and newer forms of the pentagram and hexagram rituals, Sun adorations, new adaptations of classic initiation rites, the ancient art of evocation, and a new ritual for becoming a purer reflection of your deepest spiritual ideal. Chapter 32, The Magical Record of Brother Proserpinus, is a modern tale of a brother of A∴A∴ who undertook the Great Work and succeeded. Four times the size of excerpts published in Black Pearl, this is the centerpiece of the book.</p>
                            </figcaption>
                        </figure>
                        <figure className="card--book flex flex-col md:flex-row items-start gap-8 w-full py-8">
                            <div className="flex flex-col items-start md:order-1 w-full md:w-[220px]">
                                <Image className="w-full md:w-[220px]" width="207" height="267" alt="Visions & Voices: James A. Eshleman" src="/cover_VV-Eshelman.webp" style={{ backgroundImage: 'url(/cover_VV-Eshelman.webp)' }} loading = 'lazy'/>
                                <aside>
                                    <hgroup>
                                        <h4><strong>Visions &amp; Voices:</strong> Aleister Crowley&apos;s Enochian Visions, with Astrological & Qabalistic Commentary</h4>
                                        <span>James A. Eshelman</span>
                                    </hgroup> <br />
                                    <a className="mt-6" title="Find Visions and Voices on Amazon" href="https://www.amazon.com/Visions-Voices-Astrological-Qabalistic-Commentary/dp/097044964X/ref=sr_1_1?crid=35O1F7NQSZQ8P&dib=eyJ2IjoiMSJ9.D-m6VTIyRYFlWWdMXmlwrA.jmXVj2XERaub8OgU70P2jmVRhq-juyLbyJA-IZt6jo8&dib_tag=se&keywords=visions+and+voices+eshelman&qid=1708551444&sprefix=visions+and+voice+eshelman%2Caps%2C167&sr=8-1" target="_blank">Out of Print, find it on: <AmazonLogo /> </a>
                                    <a title="Find Visions and Voices on AbesBooks" href="https://www.abebooks.com/servlet/SearchResults?sts=t&cm_sp=SearchF-_-NullResults-_-Results&tn=Visions%20And%20Voices&an=Eshelman" target="_blank"><AbesBooksLogo /></a>
                                </aside>
                            </div>
                            <figcaption className="wrapper-text">
                                <strong>The Vision of Wonder is come!</strong>
                                <p>In 1909, Aleister Crowley and his protégé Victor Neuburg obtained a series of 33 mystical visions. At once beautiful, horrible, and inspiring, these inner world explorations &#40;and two earlier ones&#41; were published in 1911 as The Vision &amp; the Voice.</p>
                                <p>A classic, both of the Enochian magick of Elizabethan wizard John Dee and of Crowley&apos;s then-emerging Thelemic magick, The Vision &amp; the Voice remains a living work, its value increasing with each generation.</p>
                                <p>Astrologers also will find a previously unexploited treasure in this collection: Most of the visions include exact dates, times, and places they were received, providing a unique opportunity to study astrology&apos;s relationship to magical vision.</p>
                                <p>This research bonanza lay untapped for nearly a century.</p>
                                <p>In Visions &amp; Voices, James A. Eshelman joins the text of Aleister Crowley&apos;s Enochian visions with horoscopes for each. To this he adds a masterful astrological and Qabalistic analysis, expanding and deepening his original landmark study &#40;1997-2001&#41;. It is his most mature work to date, blending rare expertise in many subjects.</p>
                                <p>Preliminary chapters provide a valuable introduction to Qabalistic and astrological topics including: the Four Worlds, the Tree of Life, Qabalistic psychology, Enochian magick, the Three &AElig;ons, the Holy Guardian Angel and the Abyss, the impact of astrological factors on deep psychological states, and induced mystical vision as a means of exploring the personal and collective unconscious.</p>
                                <p>The lengthy Glossary will be a standard reference on many an occultist&apos;s bookshelf for decades to come.</p>
                                <p>Visions &amp; Voices will be of considerable interest to astrologers, ceremonial magicians, devotees of mythology and comparative religion, and all who are interested in the operation of symbols &#40;and the archetypes that engender them&#41; in the workings of the human psyche and in crises of transformation.</p>
                                <p>This book also describes historically rare, extraordinary spiritual states that are becoming increasingly accessible to living women and men. By its words and images, it engenders a contagion of a higher mode of consciousness spread by sympathy. Reading this book mindfully will provide one form of spiritual initiation.</p>
                                <p>Additionally, it portrays an eclectic spirituality that enthuses our universal need to intimately connect with our own spiritual ideals, rather than dictating what that ideal should be.</p>
                            </figcaption>
                        </figure>
                    </article>
                    <article id="article--periodicals" className="article article--fullWidth">
                        <h3>Periodicals For Download</h3>
                        <figure className="card--book flex flex-col md:flex-row items-start gap-8 w-full py-8">
                            <div className="flex flex-col items-start w-full md:w-[220px]">
                                <Image className="w-full md:w-[220px]" width="207" height="267" alt="In The Continuum Phyllis Seckler" src="/cover_ITC-Seckler.webp" style={{ backgroundImage: 'url(/cover_ITC-Seckler.webp)' }} loading = 'lazy'/>
                                <aside>
                                    <hgroup>
                                        <h4><strong>In the Continuum</strong> &#40;1973-96&#41;</h4>
                                        <span>Phyllis Seckler &#40;Soror Meral&#41;</span>
                                    </hgroup>
                                    <br />
                                    <strong><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> Download ITC</strong> <br />
                                    <a title="Download ITC Volume I" href="https://www.limitlesslight.org/ITCarchive/ITCvol1.zip" target="_blank"><strong>Volume I:</strong> (1973-1977)</a><br />
                                    <a title="Download ITC Volume II" href="https://www.limitlesslight.org/ITCarchive/ITCvol2.zip" target="_blank"><strong>Volume II:</strong> (1978-1981)</a><br />
                                    <a title="Download ITC Volume III" href="https://www.limitlesslight.org/ITCarchive/ITCvol3.zip" target="_blank"><strong>Volume III:</strong> (1982-1986)</a><br />
                                    <a title="Download ITC Volume IV" href="https://www.limitlesslight.org/ITCarchive/ITCvol4.zip" target="_blank"><strong>Volume IV:</strong> (1987-1991)</a><br />
                                    <a title="Download ITC Volume V" href="https://www.limitlesslight.org/ITCarchive/ITCvol5.zip" target="_blank"><strong>Volume V:</strong> (1991-1995)</a>
                                </aside>
                            </div>
                            <figcaption className="wrapper-text">
                                <p>IN THE CONTINUUM is a Thelemic periodical, published by <a href="../college/" target="_self">College of Thelema®</a> from 1976 through 1995. It features writings by Aleister Crowley that are difficult
                                    &#40;or even impossible&#41; to find in print, or which are basic studies in the understanding of Thelemic
                                    principles expressed in <a href="/aa/#article--LiberL" target="_self"><em>Liber L. vel Legis</em></a>.</p>
                                <p>For over thirty years it has been the leader and standard against which all other Thelemic
                                    educational periodicals have been compared. This journal includes basic instructional articles of
                                    value to all students of Thelema, and helps to clarify some of the profundities of Crowley&apos;s
                                    thought. Articles on Qabalah, tarot, magick ritual, basic astrology, the history of Thelema, and
                                    other related subjects are included which will assist the student to find his or her own True Will
                                    through self-knowledge. There is a regular section on the Qabalistic analysis of various numbers, as
                                    well as poetry by Crowley and others.</p>
                                <p>
                                    IN THE CONTINUUM is the core of College of Thelema&apos;s educational heritage, and continues to be central to our course work. Effective Summer Solstice 2008, it is being offered free in electronic form for download and use. &#40;TERMS: College of Thelema retains all rights to IN THE CONTINUUM and ownership of all electronic copies. You are licensed to download a copy for personal use. No reproduction rights are granted except as they may already exist under the law. We request that you refer interested others to this web page so that they can download copies directly. There is no charge, but your donations to College of Thelema are appreciated. Please specify &quot;For I.T.C.&quot; when you donate.&#41;
                                </p>
                            </figcaption>
                        </figure>
                        <figure className="card--book flex flex-col md:flex-row items-start gap-8 w-full py-8">
                            <div className="flex flex-col items-start md:order-1 w-full md:w-[220px]">
                                <Image className="w-full md:w-[220px]" width="207" height="267" alt="Black Pearl James A. Eshleman" src="/cover_BlackPearl-Eshelman.webp" style={{ backgroundImage: 'url(/cover_BlackPearl-Eshelman.webp)' }} loading = 'lazy'/>
                                <aside>
                                    <hgroup>
                                        <h4><strong>Black Pearl</strong> &#40;1997-2002&#41;</h4>
                                        <span>James A. Eshelman</span>
                                    </hgroup>
                                    <br />
                                    <strong><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> Download Black Pearl</strong> <br />
                                    <a title="Download Black Pearl Issues 1-4" href="https://www.limitlesslight.org/BParchive/bp_volI_i-iv.zip" target="_blank">Issues 1-4</a><br />
                                    <a title="Download Black Pearl Issues 5-9" href="https://www.limitlesslight.org/BParchive/bp_volI_v-ix.zip" target="_blank">Issues 5-9</a><br />
                                    <a title="Download Black Pearl Issues 10-11" href="https://www.limitlesslight.org/BParchive/bp_volI_x-volII_i.zip" target="_blank">Issues 10-11</a>
                                </aside>
                            </div>
                            <figcaption className="wrapper-text">
                                <p>BLACK PEARL is a Thelemic periodical published by <a href="/college/">College of Thelema</a> from 1997 through 2002. In addition to printing interesting &#40;and often unavailable&#41; pieces by Aleister Crowley, its primary focus was on supporting students of Thelema at all levels and, in particular, using the established legacy of Aleister Crowley and the methods of <a href="/aa" target="_self">A&there4;A&there4;</a> as a stable platform for the next generation of aspirants.</p>
                                <p>Continuing the proud tradition of In the Continuum, BLACK PEARL includes articles on Qabalah, tarot, ceremonial magick, astrology, and more to assist the aspirant undertake and fulfill the Great Work. It is particularly strong in the area of magick ritual. Regular features include a column on the Qabalistic analysis of various numbers, a 10-part series of astrological and Qabalistic analysis of <em>The Vision &amp; the Voice,</em> and a continuing series on how to construct magick ceremonial. Each issue is laced with poetry by Aleister Crowley, Soror Meral, and others, and features original artwork.</p>
                                <p>Eleven issues appeared twice yearly, at the Spring and Autumn Equinoxes. All issues are available in continuing physical or electronic publication. The superior proven value of their instructional content fills a great need among students of Thelema.</p>
                                <h4><strong>Download Electronic Copies</strong></h4>
                                <p>BLACK PEARL is core to the College of Thelema&apos;s educational heritage, and continue to be central to our course work. Both are now being offered free in electronic form for download and use. &#40;TERMS: College of Thelema retains all rights to BLACK PEARL and ownership of all electronic copies. You are licensed to download and use a copy. <strong>We request that you refer interested others to this web page so that they can download copies directly.</strong> There is no charge, but your <a href="/college/#article--donate" target="_blank">donations to College of Thelema</a> are appreciated. Please specify &quot;For Black Pearl&quot; when you donate.&#41;</p>
                            </figcaption>
                        </figure>
                    </article>
                    <article id="article--monographs" className="article article--fullWidth">
                        <h3>Monographs For Download</h3>
                        <ul className="list list--collection collection--4up">
                            <li className="card card--book flex flex-col">
                                <a title="Download the COT Monograph: Andromeda Sidereal Ephemeris of the 21st Century &#40;Outer Planets&#41;" href="/downloads/cot_monograph_eshleman-king_Andromeda-Ephemeris.pdf" target="_blank" >
                                    <Image className="w-full md:w-[220px]" width="207" height="267" alt="Andromeda Sidereal Ephemeris of the 21st Century &#40;Outer Planets&#41; James A. Eshleman Anna Kria King" src="/cover_Emphemeris-EshelmanKing.webp" style={{ backgroundImage: 'url(/cover_Emphemeris-EshelmanKing.webp)' }} loading = 'lazy' />
                                </a>
                                <cite><strong>Andromeda Sidereal Ephemeris of the 21st Century &#40;Outer Planets&#41;</strong></cite>
                                <span>Eshelman &amp; King</span><br />
                                <a title="Download the COT Monograph: Andromeda Sidereal Ephemeris of the 21st Century &#40;Outer Planets&#41;" className="block self-justify-end mt-auto" href="/downloads/cot_monograph_eshleman-king_Andromeda-Ephemeris.pdf"><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> <strong>pdf</strong> (293kb)</a>
                            </li>
                            <li className="card card--book flex flex-col">
                                <a title="Download the COT Monograph: The Ethics of Thelema" href="/downloads/cot_monograph_crowley_Ethics.pdf" target="_blank" >
                                    <Image className="w-full md:w-[220px]" width="207" height="267" alt="Ethics Of Thelema Aleister Crowley" src="/cover_Ethics-Crowley.webp" style={{ backgroundImage: 'url(/cover_Ethics-Crowley.webp)' }} loading = 'lazy'/>
                                </a>
                                <cite><strong>The Ethics of Thelema</strong></cite>
                                <span>Aleister Crowley</span><br />
                                <a title="Download the COT Monograph: The Ethics of Thelema" className="block self-justify-end mt-auto" href="/downloads/cot_monograph_crowley_Ethics.pdf" target="_blank" ><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> <strong>pdf</strong> (126kb)</a>
                            </li>
                            <li className="card card--book flex flex-col">
                                <a title="Download the COT Monograph: Liber VII: Liber Liberi vel Lapidis Lazuli" href="/downloads/cot_monograph_Liber7.pdf">
                                    <Image className="w-full md:w-[220px]" width="207" height="267" alt="Liber VII: Liber Liberi vel Lapidis Lazuli &#40;with commentary)" src="/cover_LapisLazuli.webp" style={{ backgroundImage: 'url(/cover_LapisLazuli.webp)' }} loading = 'lazy' />
                                </a>
                                <cite><strong>Liber VII: Liber Liberi vel Lapidis Lazuli &#40;with commentary)</strong>(v2.0&#41;</cite>
                                <span>Unattributed</span><br />
                                <a title="Download the COT Monograph: Liber VII: Liber Liberi vel Lapidis Lazuli" className="block self-justify-end mt-auto" href="/downloads/cot_monograph_Liber7.pdf" target="_blank"><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> <strong>pdf</strong> (306kb)</a>
                            </li>
                            <li className="card card--book flex flex-col">
                                <a title="Download the COT Monograph: Liber Theta: Tarot Symbolism & Divination" href="/downloads/cot_monograph_eshleman_LiberT.pdf" target="_blank">
                                    <Image className="w-full md:w-[220px]" width="207" height="267" alt="Liber Theta: Tarot Symbolism & Divination James A. Eshleman" src="/cover_LiberTheta-Eshelman.webp" style={{ backgroundImage: 'url(/cover_LiberTheta-Eshelman.webp)' }} loading = 'lazy' />
                                </a>
                                <cite><strong>Liber Theta: Tarot Symbolism & Divination</strong>(v4.0)</cite>
                                <span>Frater &#928;.</span><br />
                                <a title="Download the COT Monograph: Liber Theta: Tarot Symbolism & Divination" className="block self-justify-end mt-auto" href="/downloads/cot_monograph_eshleman_LiberT.pdf" target="_blank"><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> <strong>pdf</strong> (860kb)</a>
                            </li>
                            <li className="card card--book flex flex-col">
                                <a title="Download the COT Monograph: Sidereal Mundane Astrology" href="/downloads/cot_monograph_eshleman_SMA.pdf">
                                    <Image className="w-full md:w-[220px]" width="207" height="267" alt="Sidereal Mundane Astrology James A. Eshleman" src="/cover_SMA-Eshelman.webp" style={{ backgroundImage: 'url(/cover_SMA-Eshelman.webp)' }} loading = 'lazy' />
                                </a>
                                <cite><strong>Sidereal Mundane Astrology</strong> &#40;v8.0&#41;</cite>
                                <span>James A. Eshelman</span><br />
                                <a title="Download the COT Monograph: Sidereal Mundane Astrology" className="block self-justify-end mt-auto" href="/downloads/cot_monograph_eshleman_SMA.pdf" target="_blank"><FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'file-arrow-down',]} /> <strong>pdf</strong> (9.2mb)</a>
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
            <Footer />
        </body>
    );
}

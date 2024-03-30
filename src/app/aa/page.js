import React from 'react';
import Image from '../../../node_modules/next/image';
import Navbar from '../../components/navitgation/nav';
import Footer from '../../components/navitgation/footer';
import AccountOfTheOrder from '../../referecnces/anAccountOfTheOrder';
import LegacyOfJaneWolfe from '../../referecnces/legacyOfJaneWolfe';
import LiberL from '../../referecnces/liberl';
import LiberXIII from '../../referecnces/liberXIII';
import OneStarInSight from '../../referecnces/oneStartInSight';

export const metadata = {
    title: 'College and Temple of Thelema founded in service to A∴A∴',
    description: 'Directly from Perdurabo (Crowley), to Estai (Wolfe), to Meral (Seckler), to Heru Aur (Eshleman) all recognized adepts by their superiors, the A∴A∴ lives on.',
    keywords: 'A∴A∴, Soror Estai, Jane Wolfe, Soror Meral, Phyllis Seckler, Liber al vel Legis, One Start in Site, Lineages A∴A∴',
    metadataBase: new URL('https://thelema.org/aa'),
    alternates: {
      canonical: '/aa'
    }
};

export default function Page() {
    return (
        <body id="page--top"  className='theme--Warmer'>
            <Navbar disableRoute='aa/' />
            <main>
                <aside>
                    <div className="wrapper--sticky">
                        <h2 className="u-overflow--mobileList">On This Page:</h2>
                        <ul className="list">
                            <li><a href="#page--top">The A&there4;A&there4;</a></li>
                            <li><a href="#article--AccountOfTheOrder">An Account Of The Order</a></li>
                            <li><a href="#article--LegacyOfJaneWolfe">The Legacy of Jane Wolfe</a></li>
                            <li>
                                <a href="#article--OneStarInSight">One Star In Sight</a> |
                                <a href="#article--OneStarInSightII"> II</a> |
                                <a href="#article--OneStarInSightIII"> III</a> |
                                <a href="#article--OneStarInSightIV"> IV</a> |
                                <a href="#article--OneStarInSightV"> V</a> |
                                <a href="#article--OneStarInSightVI"> VI</a> |
                                <a href="#article--OneStarInSightVII"> VII</a> |
                                <a href="#article--OneStarInSightVIII"> VIII</a> |
                                <a href="#article--OneStarInSightIX"> IX</a> |
                                <a href="#article--OneStarInSightX"> X</a> |
                                <a href="#article--OneStarInSightSuccession"> Attainment &amp; Success&#40;ion&#41;</a> |
                                <a href="#article--OneStarInSightConclude"> To Conclude</a><br />
                            </li>
                            <li><a href="#article--LiberXIII">Liber XIII</a></li>
                            <li>
                                <a href="#article--LiberL">Liber Al vel Legis</a> |
                                <a href="#article--LiberLII"> II</a> |
                                <a href="#article--LiberLIII"> III</a> |
                                <a href="#article--LiberLComment"> Tunis Comment</a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section className="pb-8">
                    <h2>The A&there4;A&there4;</h2>
                    <article className="article article--fullWidth">
                        <Image loading="eager" alt="The AA Star" width="186" height="186" className="img-icon--xLarge" src="/aa_star.png" />
                        <strong>Do what thou wilt shall be the whole of the Law.</strong>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>The One True &amp; Invisible Order</h3>
                            <p>A&there4;A&there4; is the one true and invisible Order which has operated under various names and guises throughout history to guide the spiritual evolution of humanity. The goals of the A&there4;A&there4; are those which have motivated spiritual exploration and religious inquiry throughout human history. Its methods are those of science; its aims are those of religion.</p>
                            <p>It is the Arcanum Arcanorum, and the Holy of Holies wherein the Sacred Ark rests inviolate. Every legitimate magical order, mystery school, religion, or other agency disseminating some portion of Wisdom or Light is or has been but an Outer Vehicle of this Inner Fellowship of Light. &#40;All words are sacred and all prophets true; save only that they understand a little...&#41; &#40;Liber Legis, I:56&#41;.</p>
                            <p>This is the highest and purest meaning of A&there4;A&there4;.</p>
                            <p>More commonly, however, we use the name A&there4;A&there4; to mean not only this Invisible and Eternal Order, but a particular outer structure, or terrestrial incarnation of the Interior School, which came into being, beginning in 1906 E.V., at the hands of two Adepts named Aleister Crowley and George Cecil Jones. This Order survives today through various authentic lineages which can be traced back to these two Adepts.</p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Lineages of the A&there4;A&there4;</h3>
                            <p>Since the death of Aleister Crowley in 1947 there have been no universal Chiefs of the A&there4;A&there4;. Karl Germer &#40;S&there4;H&there4; Frater Saturnus, 8=3&#41;. was the senior living A&there4;A&there4; member at Crowley&apos;s death, and many turned to him for guidance; but he never took up the mantle of governance of the Order. After Germer&apos;s death, no single person emerged visibly as a central guiding figure.</p>
                            <p>Yet the Order itself has continued, according to its original plan whereby a member of sufficient Grade may admit others to the chain.</p>
                            <p>Various lineages have survived. Claims are periodically encountered that one individual or another is an authentic link to A&there4;A&there4;. Some of these claims are quite real; some are honest mistakes; and some are fraudulent. It is not our present purpose to play arbiter to these claims, to upraise one or knock down another. It is a universal truth of Initiation that each student, at each step along the way, gets the teacher he or she &#40;deserves,&#41; based on the real maturity and needs of the soul; and that while sometimes spiritual growth is fostered by finding the BEST teacher, at other times it is best fostered by lessons of discrimination taught in the School of Hard Knocks.</p>
                            <p>In this matter we give but one sage piece of advice: &#40;By their fruits shall ye know them!&#41; The Works of the Adept, the fruits of his or her garden, are the signs of his or her attainment.</p>
                            <ul className="list list--flex list--thumbnails u-justify--evenly u-wrap">
                                <li>
                                    <div className="wrapper-img wrapper-img--med">
                                        <Image alt="Aleister Crowley—The Beast" width="62" height="62" src="/profile-crowley_aliester.webp" style={{backgroundImage: 'url(/profile-crowley_aliester.webp)'}} loading = 'lazy'/>
                                    </div>
                                    <span className="text text--medium">
                                        Perdurabo
                                    </span>
                                </li>
                                <li>
                                    <div className="wrapper-img wrapper-img--med">
                                        <Image alt="Jane Wolf—Soror Estai" width="62" height="62" src="/profile-wolf_jane.webp" style={{backgroundImage: 'url(/profile-wolf_jane.webp) ', backgroundPosition: ' 0 0'}} loading = 'lazy'/>
                                    </div>
                                    <span className="text text--medium">
                                        Estai
                                    </span>
                                </li>
                                <li>
                                    <div className="wrapper-img wrapper-img--med">
                                        <Image alt="Phyllis Secklern (Soror Meral)" width="62" height="62" src="/profile-seckler_phyllis.webp" style={{backgroundImage: 'url(/profile-seckler_phyllis.webp'}} loading = 'lazy'/>
                                    </div>
                                    <span className="text text--medium">
                                       Meral
                                    </span>
                                </li>
                                <li>
                                    <div className="wrapper-img wrapper-img--med">
                                        <Image alt="James A. Eshleman—Prolocutor General" width="62" height="62" src="/profile-eshelman_jim.webp" style={{backgroundImage: 'url(/profile-eshelman_jim.webp)'}} loading = 'lazy'/>
                                    </div>
                                    <span className="text text--medium">
                                        Heru Aur
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Admission as Probationer</h3>
                            <p>From its beginning, the A&there4;A&there4; philosophy supported the admission of any interested person soever into the instruction and practice of Scientific Illuminism. In other words — in the earliest years — anyone at all could write to the A&there4;A&there4; and request an interview with a Neophyte who &#40;all things proceeding agreeably to the applicant&#41; would admit the individual as a Probationer &#40;0=0 Grade&#41; forthwith.</p>
                            <p>Unfortunately, this complete &quot;open door&quot; policy resulted in a very high percentage of failures. By early 1912 it was found necessary to make a change in the admission requirements. It was thus ordered &quot;that every person wishing to become a Probationer of A&there4;A&there4; must first pass three months as a Student of the Mysteries.&quot; A specific study and testing curriculum was established for this Student period.</p>
                            <p>However, although Aleister Crowley inaugurated this Studentship in 1912, and gave examination in it as late as 1945 &#40;about two and a half years before his death&#41;. there is little evidence that he paid much attention to it, in that form, during the intervening 33 years. Instead, he tried numerous ways of preparing people to undertake the Probationer Grade of A&there4;A&there4;. He moved from one approach to the next, apparently adapting each to the needs of a particular student as best he could.</p>
                            <p>Many years ago, this same approach was adopted by the Soror Estai lineage. While each applicant is required to pass through a formal Student period, many avenues are accepted for accomplishing this. &#40;For clarity, we should mention that beginning with Probationer, the administration of the A&there4;A&there4; Grades is strictly by the criteria established by Aleister Crowley and George Cecil Jones. It is only in the Student, or preparatory, stage that such broad variation is practiced.&#41;</p>
                            <p>Any sincere aspirant seeking to affiliate with the A&there4;A&there4; as a Probationer may write: <a href="mailto:admissions@collegeofthelema.org">Cancellarius, A&there4;A&there4;</a></p>
                        </section>
                        <Image alt="The Seal of the AA" width="186" height="186" className="img-icon--xLarge" src="/seal_of_aa.webp" loading = 'lazy' />
                        <strong>Love is the law, love under will.</strong>
                    </article>
                    <AccountOfTheOrder />
                    <LegacyOfJaneWolfe />
                    <OneStarInSight />
                    <LiberXIII />
                    <LiberL />
                </section>
            </main>
            <Footer />
        </body>
    );
}

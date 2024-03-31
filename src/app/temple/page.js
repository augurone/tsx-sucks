import React from 'react';
import Navbar from '@/components/navitgation/nav';
import Footer from '@/components/navitgation/footer';
import Image from '../../../node_modules/next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventCollection from '@/components/events/EventCollection';

export const metadata = {
    title: 'Tenple of Thelema: Initiation for the New Aeon',
    description: 'Founded in 1989 by Phyllis Seckler, Anna-Kria King, and James A. Eshelman, Temple of Thelema is an innovative organiztion with the mission of raising adepts.',
    keywords: 'A∴A∴, Soror Estai, Jane Wolfe, Soror Meral, Phyllis Seckler, James A. Eshelman,, Initiaion, Cipher Manuscript, LA, NYC, Bay Area',
    metadataBase: new URL('https://thelema.org/tmeple'),
    alternates: {
      canonical: '/'
    }
};

export default function Page() {
    return (
        <body id="page--top" className='theme--Warmer'>
            <Navbar disableRoute="temple/" />
                <main>
                    <aside>
                        <div className="wrapper--sticky">
                            <h2 className="u-overflow--mobileList">On This Page:</h2>
                            <ul className="list">
                                <li><a href="#page--top" target="_self">Temple of Thelema</a></li>
                                <li><a href="#article--invite" target="_self">Initiation, Magick, & Mysticism</a></li>
                                <li><a href="#article--temples" target="_self">Temples &amp; Membership</a></li>
                            </ul>
                        </div>
                    </aside>
                <section>
                    <h2>Temple of Thelema</h2>
                    <article className="article article--fullWidth">
                        <h3>AN OPEN LETTER to All who seek the Light of Gnosis and the Pure Light of Truth</h3>
                        <blockquote>
                            <p>There are four gates to one palace; the floor of that palace is of silver and gold; lapis lazuli & jasper are there; and all rare scents; jasmine & rose, and the emblems of death. [...] enter in turn or at once the four gates.</p>
                            <br />
                            <cite>– Liber Legis, I v.51</cite>
                        </blockquote>
                        <strong>Do what thou wilt shall be the whole of the Law.</strong>
                        <section className="wrapper-text wrapper-text--columns">
                            <p>If you have been seeking long and are already familiar with the formal avenues of initiation into the path of magick and mysticism, this short letter may tell you most of what you need to know about Temple of Thelema.</p>
                            <p>If the terms and references given here are less familiar to you, simply read on. The passages that follow will give a more careful explanation and serve as your introduction.</p>
                            <p>Temple of Thelema is an initiating Order—a modern Mystery School and nonprofit organization that facilitates the ongoing practice of group ritual work and the systematic training of its members in the spiritual disciplines of magick and mysticism. The teaching combines traditions of the East and West, from the ageless wisdom of Yoga meditation to the Hermetic Qabalistic traditions of Western esotericism. In our work, the ceremonies of the Hermetic Order of the Golden Dawn have been recrafted to resonate with Thelemic symbols and principles, while remaining true to the original patterns of the Cipher Manuscript Formulae. A tremendous amount of residual sexism—some overt, some exceedingly subtle—has been weeded out of the system, allowing the pure energy within the rituals to radiate through.</p>
                            <p>In addition to the simple &quot;Knowledge Lecture&quot; teachings of the old Hermetic Order of the Golden Dawn, we have published many teachings and practices that expand upon these sources. Much of the work focuses on self-exploration and self-knowledge, approached from multiple perspectives and with regard to innovations in spiritual technology.</p>
                            <p>We invite you to read further and to ask questions. By this letter, we invite all to search themselves sincerely, look within, and decide if they are of us.</p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <p> We have discovered that there is a fairly precise methodology to the means of preparation that allows a seeker to experience a lucid breakthrough in the conscious recognition—and inner articulation—of his or her own True Will. Our aim is to empower those in our Order to attain precisely this breakthrough.</p>
                            <p>Temple of Thelema operates on a &quot;Three Ray&quot; model that fosters the balanced development of Wisdom, Love, and Power, based upon practical methods that include intellectual training, meditation, and magical ritual at every stage of progress. Integrating these three forms creates a unifying quality that is the essence of self-knowledge &#40;Self-Gnosis&#41;.</p>
                            <p>In this matter we give but one sage piece of advice: &quot;By their fruits shall ye know them!&quot; The Works of the Adept, the fruits of the Adept&apos;s garden, are the signs of his or her attainment. &quot;Success is your proof.&quot;</p>
                            <p>The initiation rituals and other ceremonies published by Temple of Thelema are frequently described by members as having tremendous beauty and strength. The regular group ceremonial celebrations, and the ongoing group healing work that we perform, are central to the training method. In tandem with this, magical and mystical practices, undertaken at home by each individual, strengthen both the individual and the work done together.</p>
                        </section>
                        <strong>Love is the law, love under will.</strong>
                        <section>
                            <ul className="list list--flex list--thumbnails thumbnail--horizontal text text--medium">
                                <li>
                                    <div className="wrapper-img wrapper-img--med">
                                        <Image height="62" width="62" alt="Ayesha Adamo—Grand Praemonstrator" src="/profile-adamo_ayesha.webp" style={{backgroundImage: 'url(/profile-adamo_ayesha.webp)'}} loading = 'lazy'/>
                                    </div>
                                    <span className="text text--medium">
                                        Ayesha Adamo <br />
                                        Grand Praemonstrator
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </article>
                    <article className="article article--fullWidth" id="article--invite">
                        <h2>Initiation, Magick, & Mysticism</h2>
                        <blockquote>
                            <p>
                                In all systems of religion is to be found a system of Initiation, which may be defined as the process by which a man comes to learn that unknown Crown.<br />
                                Though none can communicate either the knowledge or the power to achieve this, which we may call the Great Work, it is yet possible for initiates to guide others.<br />
                                Every man must overcome his own obstacles, expose his own illusions. Yet others may assist him to do both, and they may enable him altogether to avoid many of the false paths, leading no whither, which tempt the weary feet of the uninitiated pilgrim. They can further insure that he is duly tried and tested...<br />
                                Now the Great Work is one, and the Initiation is one, and the Reward is one, however diverse are the symbols wherein the Unutterable is clothed.
                            </p>
                            <cite>– from Liber Causae Cap. I, v. 51</cite>
                        </blockquote>
                        <strong>Do what thou wilt shall be the whole of the Law.</strong>
                        <section className="wrapper-text wrapper-text--columns">
                            <p>THERE have existed, in all known periods of history, societies or orders or schools which have taught magick or mysticism or spirituality under these names, or others. The maxim of these orders has ever been, &quot;Know thyself!&quot; And the self-knowledge acquired has been represented as&quot;Light in extension&quot;&#40;or by a kindred expression&#41;. That gnostic LIGHT has survived throughout humanity&apos;s history, being conveyed from temple to temple by those who have received it and, knowing its worth, have seen fit to feed it, and to bear it to new temples where it again ignites the hearth fire of teaching. Thus have the true Wisdom Schools propagated from generation to generation.</p>
                            <p>In recent decades, increasing numbers of people have turned &#40;or returned&#41;.to a renewed spirituality. They have recognized a greater need for answers about themselves, their lives, and their world. This awakening spirit of inquiry reflects a stage of ripeness, a readiness, to move into a new phase of life, a stage of expanded awareness, participation, and responsibility, valuing tolerance over intolerance, unity over divisiveness, and inclusive acceptance over exclusive bigotry and parochialism.</p>
                            <p>It is a fundamental teaching of the Mysteries that when the student is ready, the teacher will appear. Each of us is led to the level of teaching that he or she can hear. Inherent safeguards ward the inmost sanctuaries from those not ready for them, and protect the unprepared Seeker as well.</p>
                            <p>
                                But for those who are prepared, there come the methods of the Mysteries. This pamphlet, now in your hands, gives you the opportunity to explore these pathways.
                            </p>
                            <p>
                                Each of history&apos;s great religions &#40;where we have a record of their establishment&#41;.was founded by an individual who actually experienced what may be called illumination, or realization, or liberation, or consciousness of the Divine, or union with God, or superconsciousness. The exact description does not matter. From culture to culture, religion to religion, era to era, the language employed has necessarily varied, because spiritual experience cannot be encapsulated in words, nor circumscribed by the boundaries of reason. 
                            </p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <p>
                                It exceeds reason. Despite a diversity of details unique to each culture and era, the messages of these liberated individuals have been wondrously alike. Looking beyond mere surface details, we find that essentially identical practices &#40;or religious observances, or methods of spiritual inquiry&#41;.were taught and employed in each case. The essential methods, where known, are so universal that only the enormity of human religious prejudice, intolerance, and bigotry could have kept this similarity from being widely recognized all along.
                            </p>
                            <p>
                                The Mysteries of Initiation teach that the attainment of the goals of religious aspiration — actual spiritual experience — are obtainable in this life, on earth, now; that while the nature of the Supreme Experience &#40;or &quot;Truth&quot;&#41; is necessarily unique for each individual, it can be universally recognized by all; and that these wonderful results are producible by known methods that, in one or another variety, have been employed for thousands of years.
                            </p>
                            <p>
                                The general populace, when sufficiently content with their circumstances in life, may not choose to undertake this great spiritual adventure which we call the Great Work. For the masses, conventional religions are provided. Each such orthodoxy is suitable to the time and place that it serves. In these orthodox religions, we therefore find greater diversity of outer form and specific doctrine.
                            </p>
                            <p>
                                Yet behind each, serving each, and the source of each, are universal and ecumenical spiritual principles. These principles are known. They can be verified — in fact, discovered anew — by each individual without the need of dogmatic assertion. Personal experience will confirm or, if necessary, deny the efficacy of these methods of meditation and of ceremony — that is, of mysticism and of ritual magick — so that each person who undertakes these methods will know, from practice and experimentation, what is true for him or her, and what is false.
                            </p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Silent Masters Of Wisdom</h3>
                            <p>FOR thousands of years, the principal methods of spiritual progress have been confined predominantly to the Mystery Schools, or initiated instruction, in the East and West alike.</p>
                            <p>Nearly four hundred years ago, a current was unleashed upon the Western world with the intent of preparing the day when the full secrets of Wisdom could be disclosed. The opening years of the 17th Century brought one of the greatest declarations of spiritual liberation in modern times — a message not yet for every man and woman, but at first only for the erudite, the elite, the spiritually privileged who would bear, thereby, the responsibility of establishing its principles for all, by necessary political, economic, social, and religious reforms in the centuries ahead. Europe was with child; and the birth announcement came under the banner of a Rosy Cross.</p>
                            <p>Early in the 17th Century, two small books appeared, initially in Germany, called the Fama Fraternitatis and the Confessio Fraternitatis. These two pamphlets purported to be the manifestos of the Fraternity of the Rosy Cross, more popularly called the Rosicrucians.</p>
                            <p>Since 1612, more rubbish has been written about the Rosicrucians than about any other detail of occultism. In one sense, that was the entire point! These manifestos were written and released to draw attention to the principles they enunciated — to stir the gifted to write and to think and to create. Although the resulting malarkey added much disinformation to the data pool, this, too, is of service; for an intuitively-informed sense of </p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                           <p>discrimination has always been one of the qualities that has sorted from the masses those who are ready for actual initiation.</p>
                           <p>Centuries of debate have ensued as to the identity of those who issued these manifestos. In the final analysis, it does not really matter who they were. No matter what individuals lent their hands to the production of these documents, the true Authorship, and the motivation for their production, must be credited to the Secret Masters of the Third Order. By this term, we designate those Wise Ones of that One and Eternal Order which has existed throughout history, silently guiding humanity&apos;s cultural and spiritual evolution. This &quot;true and invisible&quot; Order is the Arcanum Arcanorum &#40;&quot;Mystery of Mysteries&quot;&#41;, and the Sanctum Sanctorum &#40;&quot;Holy of Holies&quot;&#41;.wherein the Sacred Ark rests inviolate. Every legitimate magical order, mystery school, fraternity, religion, or other agency disseminating some portion of Wisdom or Light has been but an Outer Vehicle of this Inner Fellowship of Light, this College of Masters. The Fama and the Confessio were, above all, Their manifestos, announcing Themselves anew to certain individuals who had a capacity to serve the cause of humanity&apos;s spiritual progress.</p>
                           <p>The impact of the Fama and the Confessio on the cultural evolution of Europe was inestimable. Furthermore, these two documents determined the pattern, the principles, and the mythos of the Mysteries for centuries to follow. Not until three hundred years had passed were these two manifestos joined, and even succeeded, by a third.</p>
                         </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Thelema & The Book Of The Law</h3>
                            <p>IN 1904, a British poet, magician, and philosopher named Aleister Crowley received the channeled dictation of a book called Liber Legis, or The Book of the Law. The angelic &#40;or, as Crowley liked to say, &quot;praeterhuman&quot;&#41;.intelligence dictating the Book declared its Name to be Aiwass, and identified itself as &quot;the minister of Hoor-paar-kraat&quot; — that is, the minister of the Egyptian God of Silence, virtually the &quot;Voice of the Silence&quot; itself. The Book of the Law declared the dawning of a new spiritual era for humanity, an on governed by the God Horus, Child of Isis and Osiris, rather than by the &quot;slain god&quot;archetype of Osiris or Christ which had governed, in different forms, the few thousands of years preceding.</p>
                            <p>The significance of such a world transition must not be missed. Mystics for many decades had been promising the emergence of a New Age. The implication is that those universal archetypes most likely to draw human consciousness inward toward its spiritual roots, the archetypal forces which would oversee both the intentional and the natural evolution of humanity, had undergone a quantum shift. The slain or sacrificed god had been replaced by the Eternally Borning Child.</p>
                            <p>The primary message of The Book of the Law is concentrated in the Greek words thelema, meaning &quot;will&quot; — referring to the True Will, or dharma, or Divine Word inherent in each person — and in agape, &quot;love&quot; &#40;especially bhakti, or passionate love of the Divine as a basis for authentic human love&#41;. It is in the name of Love and of Will that the inward call is issued to this that we call the Great Work.</p>
                            <p>The Book of the Law declares that the old ritual forms and their accouterments were abrogated, and that new formulæ were to be prepared from the ashes. It charged Crowley with certain responsibilities in disseminating its message and in preparing the new ways of teaching, which he did.</p>
                            <p>The Book of the Law is a new manifesto authored by the same Source as the Fama and Confessio, addressed to men and women of a new age. No longer is the message addressed only to an elite. No, the new law is for all, and is open to every person in the world.</p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Temple of Thelema</h3>
                            <p>ALL of the foregoing is preparatory to understanding the nature and purposes of the magical Order which this invitation gives you the opportunity to explore further.</p>
                            <p>Temple of Thelema is an international spiritual, magical fellowship — a modern Mystery School — offering sincere and interested individuals the opportunity for ceremonial initiation, regular group temple work, association with like-minded companions, and a systematic and graded training designed to lead to a profound level of self-discovery, self-fulfillment, and service to life.</p>
                            <p>This transcendent experience of self-awareness &#40;gnosis&#41;.is known by many names, depending on the teacher or philosophy which one follows. It is, in any case, the fulfillment of the deepest heartfelt need of every awakening individual. In the language of Temple of Thelema, each person has an inner Truth-of-Self, or True Will. This True Will is at once the deepest personal desire, and one&apos;s own self-created destiny. It is the key to absolute freedom, and yet — ironically — is not consciously known by most people. Its conscious discovery explains to a person the mysteries of his or her life, what he or she is best suited to give to the world, and the most joyous and self-fulfilling avenues of self-expression.</p>
                            <p>It is the task of each to discover that True Will and then to do it, with one-pointedness, detachment, peace, and joy</p>
                            <p>The initiated member so fortified with this clear and conscious awareness of his or her nature, is then admitted to the magical and mystical practices of the Inner Order which place in the initiate&apos;s hands full control of his or her spiritual destiny.</p>
                            <p>There are marked differences between Temple of Thelema and the original Golden Dawn order. More practical instruction has been added in the early &#40;Outer Order&#41;.degrees, incorporating much that has been learned in the last century concerning self-exploration, the attaining of self-knowledge, and the internal processes of transformation or regeneration. Those who are charged with the formulation of Temple of Thelema ceremonies and teachings have worked mightily at removing both the overt and the subtle residuals of sexism which plagued and unbalanced our predecessors. Also — and of great importance — all of our work has been conformed to the Thelemic principles enunciated in The Book of the Law.</p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>College of Thelema</h3>
                            <p>Temple of Thelema was established upon the principles and methods of College of Thelema, of which it is a part.</p>
                            <p>C.O.T. is a magical and spiritual educational program founded by Phyllis Seckler in 1973. In addition to the formal initiatory and training functions of the Temple, College of Thelema offers courses of study &#40;combining seminars, private instruction, solitary work, and other instructional techniques&#41;.that seek to guide students to a deeper understanding of themselves, their role in the universe, and the Law of Thelema which provides the necessary guidance. In many of its locations, the College also offers ongoing or periodic classes open to the interested public.</p>
                            <p>From 1976 - 1996, the College published In the Continuum, a journal featuring important &#40;and rare&#41;.writings by Crowley, as well as other material. In continuous publication for over 20 years, all issues are still in print. This journal is recommended to all who are interested in any of the subject matter discussed in this present brochure. Further information can be obtained by writing directly to the Oroville address on the enclosed contact list. In addition, the new journal of the College, Black Pearl, commenced publication at the Vernal Equinox 1997.</p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>AN INVITATION...</h3>
                            <p>THE Temple of Thelema is selective in seeking only those who truly desire to grow in Love, Power, and Wisdom, and to serve humanity in conformity with The Book of the Law. Membership is, therefore, only by invitation. Interested parties are invited to submit a Preliminary Application.</p>
                            <p>An investment of time and effort is expected and required from each member. Each is expected to put the Great Work foremost in his or her life; to dare, with courage undaunted, to perfect that Work; and ever to apply best effort to effect Harmony within the Order, and within the world in general. Temple of Thelema does not urge any person to seek membership. The decision to seek initiation must be an individual one. But the Order does make itself and its principles known, so that those who seek initiation may find that which they seek.</p>
                            <p>By this present letter, we invite all to search themselves sincerely and decide if they are of us.</p>
                            <p>Preliminary Applications for an interview, or specific questions, should be addressed to the Cancellarius of any working Temple or Pronaos &#40;see the contact list &#41;.</p>
                            <p>By your present inquiry, you have taken a step that makes clear that your spiritual nature is seeking an avenue for its liberation and satisfaction. That avenue may be through Temple of Thelema, or through another path better suited to your own nature. Whatever your choice, we wish you the best in this, the most joyous and noble of all undertakings.</p>
                        </section>
                        <blockquote>
                            <p>This shall regenerate the world, the little world my sister, my heart & my tongue, unto whom I send this kiss.</p>
                            <cite>—Liber Legis, I v.53</cite>
                        </blockquote>
                        <strong>Love is the law, love under will.</strong>
                    </article>
                    <article className="article article--fullWidth" id="article--temples">
                        <h2>Temples &amp; Membership</h2>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Bodies Of The First Order</h3>
                            <p>
                                Temple of Thelema has two levels of First Order bodies &#40;or working groups): <strong>Temples</strong>, which are fully operating initiatory bodies, and <strong>Pronaoi</strong> (singular, Pronaos&#41;.— literally pre-Temples, Temples-in-the making.
                            </p>
                            <p>
                                When sufficient initiated membership exists in a geographic area, the members will be authorized to form a <strong>Pronaos</strong> — a ceremonial and teaching group authorized to meet, celebrate ongoing group rituals, perform public ceremonies, and undertake other outreach activities. <em>&#40;This is in addition to the initiated members&apos; personal practices.&#41;</em>
                            </p>
                            <p>A <strong>Pronaos</strong> operates under the authority of a <strong>Temple</strong> &#40;usually the one nearest in proximity to the Pronoas&#41;.and its Temple Chiefs, and may not perform initiations under its own authority. Various provisions are made for the initiation of approved candidates in developing areas.</p>
                            <p>Once a <strong>Pronaos</strong> develops a certain maturity and stability, and meets the criteria for <strong>Temple</strong> status, it is fully warranted as a <strong>Temple</strong> performing initiations and Degree Work.</p>
                        </section>
                        <section className="wrapper-text wrapper-text--columns">
                            <h3>Applying For Membership</h3>
                            <p>Temple of Thelema is selective in seeking only those who truly desire to grow in Love, Power, and Wisdom, and to serve humanity in conformity with The Book of the Law. Membership is, therefore, only by invitation. Interested parties are invited to submit a Preliminary Application.</p>
                            <p>An investment of time and effort is expected and required from each member. Each is expected to put the Great Work foremost in his or her life; to dare, with courage undaunted, to perfect that Work; and ever to apply best effort to effect Harmony within the Order, and within the world in general. Temple of Thelema does not urge any person to seek membership. The decision to seek initiation must be an individual one. But the Order does make itself and its principles known, so that those who seek initiation may find that which they seek.</p>
                            <p>By your present inquiry, you have taken a step that makes clear that your spiritual nature is seeking an avenue for its liberation and satisfaction. That avenue may be through Temple of Thelema, or through another path better suited to your own nature. Whatever your choice, we wish you the best in this, the most joyous and noble of all undertakings.</p>
                            <p>Preliminary Applications for an interview, or specific questions, should be addressed to the Cancellarius of any working Temple or Pronaos:</p>
                        </section>
                        <ul className="list list--container">
                            <li className="card--large">
                                <h3>Nuit Mother Temple No. 0</h3>
                                <section className="u-span--2">
                                    <h4>Officers</h4>
                                    <ul className="list list--flex list--thumbnails thumbnail--horizontal text text--medium u-justify--evenly">
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="James A. Eshleman—Prolocutor General" src="/profile-eshelman_jim.webp" style={{backgroundImage: 'url(/profile-eshelman_jim.webp)'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                James A. Eshleman <br/>
                                                Prolocutor General
                                            </span>
                                        </li>
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Zeph Bender—Prolocutor" src="/profile-bender_zeph.webp" style={{backgroundImage: 'url(/profile-bender_zeph.webp)', backgroundPosition: ' 0 0'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Zeph Bender <br />
                                                Prolocutor
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="list list--flex list--thumbnails thumbnail--horizontal text text--medium">
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image loading="lazy" height="62" width="62" alt="Ayesha Adamo—Grand Praemonstrator" src="/profile-adamo_ayesha.webp" style={{backgroundImage: 'url(/profile-adamo_ayesha.webp)'}} />
                                            </div>
                                            <span className="text text--medium">
                                                Ayesha Adamo <br />
                                                Grand Praemonstrator
                                            </span>
                                        </li>
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image loading="lazy" height="62" width="62" alt="Chad Augur—Grand Cancellarius" src="/profile-augur_chad.webp" style={{backgroundImage: 'url(/profile-augur_chad.webp)', backgroundPosition: '50% 0', backgroundSize: ' 156%'}} />
                                            </div>
                                            <span className="text text--medium">
                                                Chad Augur <br />
                                                Grand Cancelarius
                                            </span>
                                        </li>
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Juan Ramirez—Grand Imperator" src="/profile-ramirez_juan.webp" style={{backgroundImage: 'url(/profile-ramirez_juan.webp)'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Juan Ramirez <br />
                                                Grand Imperator
                                            </span>
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <h4>Contact Information</h4>
                                    <section className="wrapper--cta">
                                        <h5>Find Us On:</h5>
                                        <a href="https://www.facebook.com/templeofthelema" target="_blank" title="Temple of Thelema on Facebook"> <FontAwesomeIcon style={{'float': 'left'}} icon={['fab', 'facebook-f']} /></a>
                                    </section>
                                </section>
                            </li>
                            <li className="card--large">
                                <h3>Harpocrates Temple No. 1 — Los Angeles, CA</h3>
                                <section>
                                    <h4>Officers</h4>
                                    <ul className="list list--flex list--thumbnails thumbnail--horizontal u-justify--evenly">
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Gabriel Osuna—Praemonstrator" src="/profile-osuna_gabriel.webp" style={{backgroundImage: 'url(/profile-osuna_gabriel.webp)', backgroundPosition: '50% 20%', backgroundSize: '200%'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Gabriel Osuna <br />
                                                &#x1F714;
                                            </span>
                                        </li>
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Hannah Bender—Cancelarius" src="/profile-bender_hannah.webp" style={{backgroundImage: 'url(/profile-bender_hannah.webp)', backgroundPosition: '50% 20%', backgroundSize: '100%'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Hannah Bender<br />
                                                &#x263f;
                                            </span>
                                        </li>
                                        <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image height="62" width="62" alt="Kimberly Manibusan—Imperator" src="/profile-manibusan_kimberly.webp" style={{backgroundImage: 'url(/profile-manibusan_kimberly.webp)', backgroundPosition: '0 0'}} loading = 'lazy' />
                                        </div>
                                        <span className="text text--medium">
                                            Kimberly Manibusan <br />
                                            &#x1F70D;
                                        </span>
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <h4>Resources</h4>
                                    <address className="text text--medium">
                                        PO BOX 1433<br />
                                        Hawthorne, CA 90251<br />
                                        <a href="mailto:harpocrates@thelema.org" target="_self">harpocrates@thelema.org</a><br />
                                    </address>
                                    <section className="wrapper--cta">
                                        <h5>Find Us On:</h5>
                                        <a className="inline float-left" href="https://www.meetup.com/venice-thelema-study-group/" target="_blank" title="College of Thelema Harpocrates Study Group on Meetup">  <FontAwesomeIcon icon={['fab', 'meetup']}/></a>
                                        <a className="inline float-left" href="https://www.facebook.com/groups/thelemaharpocrates/events" target="_blank" title="College of Thelema Harpocrates Study Group on Facebook"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /></a> <br />
                                    </section>
                                    <section className="wrapper--cta">
                                        <h5>Download an Application:</h5>
                                        <a className="text text--medium" href="/downloads/application_TOT-harpocrates.pdf"> <FontAwesomeIcon style={{'float': 'left'}} icon={['fas', 'file-arrow-down',]} />&nbsp;PDF -- 11kb</a>
                                    </section>
                                </section>
                                <section>
                                    <h4>Events</h4>
                                    <EventCollection 
                                        qry="metadata.tags.sys.id[in]=losAngeles"
                                        limit= "&limit=1"
                                        order= "&order=-fields.dateAndTime"/>
                                    <section className="wrapper--event wrapper--cta">
                                        <h5>Regular Classes:</h5>
                                        <p className="text text--medium">In Person classes resume September 1, V<sup>9</sup></p>
                                    </section>
                                </section>
                                <section className="card--large">
                                    <h3>Burning Hearts Pronaos No.9 — Oakland, CA</h3>
                                    <section>
                                        <h4>Officers</h4>
                                        <ul className="list list--flex list--thumbnails thumbnail--horizontal text text--medium u-justify--evenly">
                                                <li>
                                                    <div className="wrapper-img wrapper-img--med">
                                                        <Image height="62" width="62" alt="Gabriel Osuna—Dean" src="/profile-osuna_gabriel.webp" style={{backgroundImage: 'url(/profile-osuna_gabriel.webp)', backgroundPosition: '50% 20%', backgroundSize: '200%'}} loading = 'lazy' />
                                                    </div>
                                                    <span className="text text--medium">
                                                        Gabriel Osuna <br />
                                                        &#x1F714;
                                                    </span>
                                                </li>
                                                <li>
                                                    <div className="wrapper-img wrapper-img--med">
                                                        <Image height="62" width="62" alt="Aleph Kali—Scribe" src="/profile-kali_aleph.webp" style={{backgroundImage: 'url(/profile-kali_aleph.webp)', backgroundPosition: '0 0'}} loading = 'lazy'/>
                                                    </div>
                                                    <span className="text text--medium">
                                                        Aleph Kali <br />
                                                        &#x263f;
                                                    </span>
                                                </li>
                                                <li>
                                                    <div className="wrapper-img wrapper-img--med">
                                                        <Image height="62" width="62" alt="Billie Austin—Bursar" src="/profile-austin_billie.webp" style={{backgroundImage: 'url(/profile-austin_billie.webp)', backgroundPosition: '0 0'}} loading = 'lazy' />
                                                    </div>
                                                    <span className="text text--medium">
                                                        Billie Austin <br />
                                                        &#x1F70D;
                                                    </span>
                                                </li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h4>Resources</h4>
                                        <address className="text text--medium">
                                            195 41st St PO BOX 11194<br />
                                            Oakland, CA 94611-9991<br />
                                            <a href="mailto:burninghearts@thelema.org" target="_self">burninghearts@thelema.org</a><br />
                                        </address>
                                        <section className="wrapper--cta">
                                            <h5>Find Us On:</h5>
                                            <a className="inline float-left" href="https://www.meetup.com/college-of-thelma-agape-study-group/" target="_blank" title="College of Thelema Burning Hearts Study Group on Meetup">  <FontAwesomeIcon icon={['fab', 'meetup']}/></a>
                                            <a className="inline float-left" href="https://www.facebook.com/burninghearts93" target="_blank" title="College of Thelema Burning Hearts Study Group on Facebook"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /></a><br />
                                        </section>
                                        <section className="wrapper--cta">
                                            <h5>Download an Application:</h5>
                                            <a className="text text--medium" href="/downloads/application_TOT-harpocrates.pdf"> <FontAwesomeIcon style={{'float': 'left'}} icon={['fas', 'file-arrow-down']} />&nbsp;PDF -- 11kb</a>
                                        </section>
                                    </section>
                                    <section>
                                        <h4>Events</h4>
                                        <EventCollection 
                                            qry="metadata.tags.sys.id[in]=bayArea&skip=1"
                                            limit= "&limit=1"
                                            order= "&order=-fields.dateAndTime" />
                                        <section className="wrapper--event wrapper--cta">
                                            <h5>Regular Public Meetings:</h5>
                                            <p className="text text--medium">3rd Wednesdays Monthly</p>
                                        </section>
                                    </section>
                                </section>
                            </li>
                            <li className="card--large">
                                <h3>Aiwass Temple No. 8 — New York, NY</h3>
                                <section>
                                    <h4>Officers</h4>
                                    <ul className="list list--flex list--thumbnails thumbnail--horizontal text text--medium u-justify--evenly">
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Juan Ramirez—Praemonstrator" src="/profile-ramirez_juan.webp" style={{backgroundImage: 'url(/profile-ramirez_juan.webp)', backgroundPosition: '0 0'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Juan Ramirez <br />
                                                &#x1F714;
                                            </span>
                                        </li>
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Lana Popovic—Cancelarius" src="/profile-popovic_lana.webp" style={{backgroundImage: 'url(/profile-popovic_lana.webp)', backgroundPosition: '0 0'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Lana Popovic <br />
                                                &#x263f;
                                            </span>
                                        </li>
                                        <li>
                                            <div className="wrapper-img wrapper-img--med">
                                                <Image height="62" width="62" alt="Tamara Wyndham—Imperator" src="/profile-wyndham_tamara.webp" style={{backgroundImage: 'url(/profile-wyndham_tamara.webp)', backgroundPosition: '0 0'}} loading = 'lazy' />
                                            </div>
                                            <span className="text text--medium">
                                                Tamara Wyndham<br />
                                                &#x1F70D;
                                            </span>
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <h4>Resources</h4>
                                    <address className="text text--medium">
                                        PO Box 156<br />
                                        New York, NY 10185<br />
                                        <a href="mailto:aiwass@thelema.org" target="_self">aiwass@thelema.org</a><br />
                                    </address>
                                    <section className="wrapper--cta">
                                        <h5>Find Us On:</h5>
                                        <a className="inline float-left" href="http://www.meetup.com/Aiwass-Study-Group/" target="_blank" title="College of Thelema Aiwass Study Group on Meetup">  <FontAwesomeIcon icon={['fab', 'meetup']}/></a> 
                                        <a className="inline float-left" href="https://www.facebook.com/groups/245645772187267" target="_blank" title="College of Thelema Aiwass Study Group on Facebook"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /></a><br />
                                    </section>
                                    <section className="wrapper--cta">
                                        <h5>Download an Application:</h5>
                                        <a className="text text--medium" href="/downloads/application_TOT-aiwass.pdf"> <FontAwesomeIcon style={{'float': 'left'}} icon={['fas', 'file-arrow-down']} />&nbsp;PDF -- 57kb</a>
                                    </section>
                                </section>
                                <section>
                                    <h4>Events</h4>
                                    <EventCollection 
                                        qry="metadata.tags.sys.id[in]=newYork"
                                        limit= "&limit=1"
                                        order= "&order=-fields.dateAndTime" />
                                    <section className="wrapper--event wrapper--cta">
                                        <h5>Regular Public Meetings:</h5>
                                        <p className="text text--medium">
                                            <a className="inline float-left" href="http://www.meetup.com/Aiwass-Study-Group/" target="_blank" title="College of Thelema Aiwass Study Group on Meetup">  <FontAwesomeIcon icon={['fab', 'meetup']}/></a>
                                            <a className="inline float-left" href="https://www.facebook.com/groups/245645772187267" target="_blank" title="College of Thelema Aiwass Study Group on Facebook"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                        </p>
                                    </section>
                                </section>
                                <section className="card--large">
                                    <h3>Hathor Pronaos No. 7 — Toronto, ONT, Canada</h3>
                                    <section>
                                        <h4>Contact</h4>
                                        <address className="text text--medium">
                                            P. O. Box 81535<br />
                                            1057 Steeles Ave West<br />
                                            North York ON M2R 2S0<br />
                                            <a href="mailto:hathor@thelema.org" target="_self">hathor@thelema.org</a>
                                        </address>
                                    </section>
                                </section>
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
            <Footer />
        </body>
    );
}

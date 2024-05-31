import React from 'react';
import Image from '../../../node_modules/next/image';
import Navbar from '../../components/navitgation/nav';
import Footer from '../../components/navitgation/footer';
import EventCollection from '@/components/events/EventCollection';
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";

export const metadata = {
    title: 'College of Thelema: The Standard in Thelemic Education',
    description: 'Soror Meral founded College of Thelema in the late 1970\'s to properly preparee indivuduals for entry into the A∴A∴',
    keywords: 'A∴A∴, Soror Estai, Jane Wolfe, Soror Meral, Phyllis Seckler, In the Continuum, LA, NYC, Bay Area',
    alternates: {
      canonical: '/college'
    },
    openGraph: {
        title: 'College of Thelema: The Standard in Thelemic Education',
        description: 'Soror Meral founded College of Thelema in the late 1970\'s to properly preparee indivuduals for entry into the A∴A∴',
        images: [
            {
                url: 'https://thelema.org/jsonld.jpg',
            },
        ],
        type: 'website',
        url: "https://thelema.org/college"
    },
    twitterCard: {
        cardType: 'summary_large_image',
        title: 'College of Thelema: The Standard in Thelemic Education',
        description: 'Soror Meral founded College of Thelema in the late 1970\'s to properly preparee indivuduals for entry into the A∴A∴',
        images: {
            url: 'https://thelema.org/jsonld.jpg',
            alt: 'thelema.org',
        }
    }
};

export default function Page() {
    return (
    <body id="page--top" className='theme--Warmer'>
        <Navbar disableRoute='/college' />
        <main>
            <aside>
                <div className="wrapper--sticky">
                    <h2 className="u-overflow--mobileList">On This Page:</h2>
                    <ul className="list">
                        <li><a href="#page--top" target="_self">College of Thelema</a></li>
                        <li><a href="#article--locations" target="_self">Classes & Study Groups</a></li>
                        <li><a href="#article--donate" target="_self">Donations and Fundraising</a></li>
                    </ul>
                </div>
            </aside>
            <section>
                <h2>College of Thelema</h2>
                <article className="article article--fullWidth">
                    <strong>Do what thou wilt shall be the whole of the Law.</strong>
                    <section className="wrapper wrapper-text wrapper-text--columns">
                        <h3>“Every man and every woman is a star” Liber Legis, I v.3</h3>
                        <div>
                            <span className="wrapper-img wrapper-img--large">
                                <Image loading="lazy" alt="Phyllis Seckler (Soror Meral)" width="93" height="93" src="/profile-seckler_phyllis.webp" style={{backgroundImage: 'url(/profile-seckler_phyllis.webp)'}} />
                            </span>
                            <p>
                                <strong>Founded in service to the A&there4;A&there4;</strong> in the early 1970&apos;s CE by Soror Meral, the College of Thelema seeks to guide the student to an understanding of the Law of Thelema. Most especially, this means a deeper understanding of oneself and of one&apos;s True Will.
                            </p>
                        </div>
                        <p>For over twenty years, the College of Thelema has continued to grow and expand, while ever maintaining its high standards of excellence and quality in Thelemic education. Originally composed of one individual campus headed by Soror Meral, the College of Thelema now has several locations throughout the United States, Canada and Europe, with a faculty of experienced and dedicated individuals.</p>
                        <p>During the years 1976 through 1996, Soror Meral continually published the bi-annual journal In the Continuum, which features important &#40;and rare&#41;.writings by Aleister Crowley, as well as original research and other material. All issues are still in print and available. Beginning in March of 1997, the College of Thelema will begin publication of its new journal, Black Pearl.</p>
                        <p>A personal teacher is assigned to each student. Successful completion of Course I is one way to fulfill the <strong>A&there4;A&there4;</strong> Student requirement. A combination of instruction techniques is employed, including seminars and classes, written texts, and individual work. The organization of the College is designed with the individual student in mind. Once enrolled, the student works at her own pace, within a two-year time period. The student is expected to determine how much personal instruction she requires, and take the initiative to seek out that instruction by maintaining contact with her teacher and attending classes and seminars.</p>
                        <p>The College of Thelema is suitable for serious students who wish to study Thelema and apply themselves actively to the Great Work, while working at their own pace and providing their own level of structure and schedule.</p>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>GENERAL INFORMATION</h3>
                        <p>Experience has shown that teaching done in a classroom or on an individualized, one-on-one basis is much more effective than any correspondence course can possibly be. Hence, the College requires in-person contact with students. A minimum amount of 60 class hours must be accumulated in order to complete each Course, and these hours may be acquired through attendance at classes, seminars, and personal instruction.</p>
                        <p>Should the student prove competent, and should she desire it, she may request admission into <strong>A&there4;A&there4;</strong> after successful completion of Course I. If accepted, she may affiliate through that Initiate in her vicinity, or with the teacher who appeals to her the most.</p>
                        <p>The College of Thelema holds high standards of excellency in both its teachers and students. All teachers of the College are Initiates of <strong>A&there4;A&there4;</strong>, and are bound to the Order and to Its precepts and philosophy as revealed in Liber AL vel Legis, and through the work of TO MEGA THERION, the Prophet of the Aeon of Horus. The College is autonomous, and is not affiliated with any other organization other than <strong>A&there4;A&there4;</strong>. The faculty of the College serve without personal pay in the great tradition of <strong>A&there4;A&there4;</strong>; any fees requested scarcely cover the cost of materials and operation. The College reserves the right to expel from its faculty and otherwise discipline any teacher who fails to live up to the Policies of the College as stated, and to the great principles of <strong>A&there4;A&there4;</strong>.</p>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>ENTRANCE REQUIREMENTS</h3>
                        <p>Following is an outline of the minimum requirements which must be met by the student applying for admission into enrollment in the College of Thelema:</p>
                        <ol>
                            <li>Acceptance of Liber AL vel Legis, with no desire to make changes therein.</li>
                            <li>Two years of previous college work, preferably with attention to psychology, philosophy, science, mathematics, English and humanities. Please be prepared to submit a transcript of this work. Exceptions to this requirement may be waived due to equivalent experience if deemed appropriate.</li>
                            <li>Desire to explore, understand and know, in all of its detail, and with integrity, honesty and love of Truth, the nature and powers of one&apos;s own Being — to Know Thyself.</li>
                        </ol>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>COURSE OVERVIEW</h3>
                            <p>The curriculum of the College of Thelema is broken into four consecutive Courses, which deal progressively with the practical application of psychology, Thelemic philosophy, qabalah, astrology, and magick.</p>
                            <p>Once enrolled, the Student has two years to complete the Course. If, at the end of this period, the Student has not completed the course work but would like to remain enrolled, extensions can be granted for an additional fee. Other than the two year time frame, there are no other time restrictions on the Student. You are free to work at your own pace, and accumulate a minimum of 60 class hours at your convenience. As an enrolled Student, the resources of the College will be made available to you. You will be assigned a personal teacher, with whom you will be responsible for keeping in contact, for arranging individual sessions and for coordinating examinations and assignments. Additionally, you will be informed of classes, seminars, and other events which you may choose to attend. The amount of your participation is left entirely up to you.</p>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>Application Procedure</h3>
                        <p>Write a detailed letter to the College of Thelema, introducing yourself, explaining all aspects of your background you feel to be relevant, and describing your reasons for seeking admission. The mailing addresses of several of the College&apos;s campuses are below. With the letter, be sure to include any transcripts of previous college work. If you do not have two years of college experience, then please explain what experience or background you have that may be equivalent. Please be as objective and candid as possible in your self-assessment.</p>
                        <p>In writing your letter, please include the following information:</p>
                        <ol>
                            <li>Your full legal name and sex.</li>
                            <li>Mail address, and preferred email address</li>
                            <li>Telephone numbers</li>
                            <li>Date, time, and place of birth.</li>
                        </ol>
                        <p>
                            If necessary, you may be requested to provide further information. If appropriate, you will be contacted for arranging a personal interview with a member of the faculty.
                        </p>
                        <p>
                            General questions on the College of Thelema may be sent via e-mail to <a href="mailto:admissions@thelema.org" target="_self">admissions@thelema.org</a>.
                        </p>
                    </section>
                    <strong>Love is the law, love under will.</strong>
                </article>
                <article className="article article--fullWidth" id="article--locations">
                    <h2>Classes &amp; Study groups</h2>
                    <ul className="list list--container">
                        <li className="card--large">
                            <h3>College of Thelema: Los Angeles</h3>
                            <section>
                                <h4>Teacher:</h4>
                                <ul className="list list--flex list--thumbnails thumbnail--horizontal u-justify--evenly">
                                    <li>
                                       <div className="wrapper-img wrapper-img--med">
                                           <Image alt="Zeph Bender— Chancellor" width="62" height="62" src="/profile-bender_zeph.webp" style={{backgroundImage: 'url(/profile-bender_zeph.webp)', backgroundPosition: '0 0'}} loading = 'lazy' />
                                       </div>
                                       <span className="text text--medium">
                                           Zeph Bender <br />
                                           Vice Chancellor, College of Thelema
                                       </span>
                                    </li>
                                    <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image height="62" width="62" alt="Gabriel Osuna—Dean" src="/profile-osuna_gabriel.webp" style={{backgroundImage: 'url(/profile-osuna_gabriel.webp)', backgroundPosition: '50% 20%', backgroundSize: '200%'}} loading = 'lazy' />
                                        </div>
                                        <span className="text text--medium">
                                            Gabriel Osuna
                                        </span>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h4>INFO</h4>
                                <address className="text text--medium">
                                    PO BOX 1433<br />
                                    Hawthorne, CA 90251<br />
                                    <a href="mailto:harpocrates@thelema.org" target="_self">harpocrates@thelema.org</a><br />
                                </address>
                                <section className="wrapper--cta">
                                    <h5>Find Us On:</h5>
                                    <a className="inline float-left" href="https://www.meetup.com/venice-thelema-study-group/" target="_blank" title="College of Thelema Harpocrates Study Group on Meetup"><FontAwesomeIcon style={{'float': 'left'}} icon={['fab', 'meetup']}/></a>
                                    <a className="inline float-left" href="https://www.facebook.com/groups/thelemaharpocrates/events" target="_blank"title="College of Thelema Harpocrates Study Group on Facebook"><FontAwesomeIcon style={{'float': 'left'}} icon={['fab', 'facebook-f']} /></a>
                                </section>
                            </section>
                            <section>
                                <h4>Classes: </h4>
                                <p className="text text--medium">Every Other Thursday starting September 1, V<sup>9</sup></p>
                                <EventCollection 
                                    qry="metadata.tags.sys.id[in]=losAngeles"
                                    limit= "&limit=1"
                                    order= "&order=-fields.dateAndTime" />
                            </section>
                        </li>
                        <li className="card--large">
                            <h3>College of Thelema: NYC</h3>
                            <section>
                                <h4>Led By:</h4>
                                <ul className="list list--flex list--thumbnails thumbnail--horizontal u-justify--evenly">
                                    <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image alt="Juan Ramirez—Treasurer" width="62" height="62" src="/profile-ramirez_juan.webp" style={{backgroundImage: 'url(/profile-ramirez_juan.webp)'}} loading = 'lazy'/>
                                        </div>
                                        <span className="text text--medium">
                                            Juan Ramirez <br />
                                            Treasurer, College of Thelema
                                        </span>
                                    </li>
                                    <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image alt="Ayesha Adamo—Dean" width="62" height="62" src="/profile-adamo_ayesha.webp" style={{backgroundImage: 'url(/profile-adamo_ayesha.webp)'}} loading = 'lazy' />
                                        </div>
                                        <span className="text text--medium">
                                            Ayesha Adamo <br />
                                            Certified Instructor, College of Thelema
                                        </span>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h4>INFO</h4>
                                <address className="text text--medium">
                        			PO Box 156<br />
                        			New York, NY 10185<br />
                        			<a href="mailto:aiwass@thelema.org" target="_self">aiwass@thelema.org</a><br />
                                </address>
                                <section className="wrapper--cta">
                                    <h5>Find Us On:</h5>
                                    <a className="inline float-left" href="https://www.meetup.com/Aiwass-Study-Group/" target="_blank" title="College of Thelema Aiwass Study Group on Meetup">  <FontAwesomeIcon style={{'float': 'left'}}  icon={['fab', 'meetup']}/></a>
                                    <a  className="inline float-left" href="https://www.facebook.com/groups/245645772187267" target="_blank"title="College of Thelema Aiwass Study Group on Facebook"> <FontAwesomeIcon style={{'float': 'left'}} icon={['fab', 'facebook-f']} /></a>
                                </section>
                            </section>
                            <section>
                                <h4>Classes: </h4>
                                <p className="text text--medium">To Be Announced</p>
                                <EventCollection 
                                    qry="metadata.tags.sys.id[in]=newYork"
                                    limit= "&limit=1"
                                    order= "&order=-fields.dateAndTime" />
                            </section>
                        </li>
                        <li className="card--large">
                            <h3>College of Thelema: Bay Area</h3>
                            <section>
                                <h4>Led By:</h4>
                                <ul className="list list--flex list--thumbnails thumbnail--horizontal u-justify--evenly">
                                    <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image loading="lazy" alt="Andrew Ferren—Dean" width="62" height="62" src="/profile-ferren_andrew.webp"style={{backgroundImage: 'url(/profile-ferren_andrew.webp)', backgroundPosition: '0 0'}} />
                                        </div>
                                        <span className="text text--medium">
                                            Andrew Ferren
                                        </span>
                                    </li>
                                    <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image alt="Chad Augur—Grand Cancellarius" width="62" height="62" src="/profile-augur_chad.webp"style={{backgroundImage: 'url(/profile-augur_chad.webp)', backgroundPosition: '50% 0', backgroundSize: '156%'}} loading = 'lazy'/>
                                        </div>
                                        <span className="text text--medium">
                                            Chad Augur <br />
                                            Secretary, College of Thelema
                                        </span>
                                    </li>
                                    <li>
                                        <div className="wrapper-img wrapper-img--med">
                                            <Image alt="Billie Austin—Bursar" width="62" height="62" src="/profile-austin_billie.webp" style={{backgroundImage: 'url(/profile-austin_billie.webp)', backgroundPosition: '0 0'}} loading = 'lazy'/>
                                        </div>
                                        <span className="text text--medium">
                                            Billie Austin
                                        </span>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h4>INFO</h4>
                                <address className="text text--medium">
                                    195 41st St PO BOX 11194<br />
                                    Oakland, CA 94611-9991<br />
                                    <a href="mailto:burninghearts@thelema.org" target="_self">burninghearts@thelema.org</a><br />
                                </address>
                                <section className="wrapper--cta">
                                    <h5>Find Us On:</h5>
                                    <a className="inline float-left" href="https://www.meetup.com/college-of-thelma-agape-study-group/" target="_blank" title="College of Thelema Burning Hearts Study Group on Meetup">  <FontAwesomeIcon style={{'float': 'left'}} icon={['fab', 'meetup']}/></a>
                                    <a  className="inline float-left" href="https://www.facebook.com/burninghearts93" target="_blank"title="College of Thelema Burning Hearts Study Group on Facebook"> <FontAwesomeIcon style={{'float': 'left'}} icon={['fab', 'facebook-f']} /></a>
                                </section>
                            </section>
                            <section>
                                <h4>Study Groups: </h4>
                                <p className="text text--medium">3rd Wednesdays Monthly, next topic:</p>
                                <EventCollection 
                                    qry="metadata.tags.sys.id[in]=bayArea"
                                    limit= "&limit=1"
                                    order= "&order=-fields.dateAndTime" />
                            </section>
                        </li>
                    </ul>
                </article>
                <article className="article article--fullWidth" id="article--donate">
                    <h2>Donations and Fundraising</h2>
                    <em>Dear Friends,</em>
                    <strong>Do what thou wilt shall be the whole of the Law.</strong>
                    <section className="wrapper-text wrapper-text--columns">
                        <p>This letter is an invitation for you to assist us directly, in any of several ways, in the important work we are undertaking.</p>
                        <p>College of Thelema and Temple of Thelema have been growing and expanding in many ways. One of our accomplishments, in recent years, was the obtaining of our tax exempt status with the Federal government as a non-profit religious organization.</p>
                        <p>This accomplishment is already helping facilitate a more permanent physical vehicle for the College, and for both the Outer and Inner Orders of the Temple work. The foundation of the Temple of Thelema has been assembled, since 1987, through the dedication and commitment of its founders and members; and these individuals continue to give to its growth with their funds, labor, and love. But as the organization grows, extending even further its outward reach to benefit more and more of humanity in general and the occult community in particular, we are also reaching out to invite contributions, of various types, from those such as yourself who make up the greater community.</p>
                        <p>The underlying theory of Federal tax exemption for nonprofit organizations is simple. The U.S. Government, in one of its more intelligent moves, has determined that the general public should be encouraged to support and lend its &#40;financial and other&#41;.energies toward institutions which exist primarily for the &quot;public good,&quot; rather than for the profit of individuals. Individuals may donate money to such organizations, to support their &quot;public benefit&quot; activities, and in turn receive a reduction in their income tax. It is a way to avoid punishing people for good deeds! Not only funds, but also goods, services, and labor may be donated, and a tax reduction granted to the donor based on the fair price of the donation.</p>
                        <p>The College of Thelema and Temple of Thelema comprise one such “public benefit” corporation and, if you believe that what we are doing is of real service to you and/or others, this letter is an invitation for you to contribute in whatever way you can and will.</p>
                        <p>The following is a partial list of ways in which you can offer your support to this Order.</p>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>Sponsorship:</h3>
                        <p>
                            Sponsorships can be a contribution either of products or of money, and may be either credited or anonymous as you choose. With a sponsorship, you can direct the particular purpose toward which your contribution is applied. Examples of sponsorships would include: underwriting some or all of the costs &#40;rent, food, advertising, supplies) for any of the public rituals offered by our various groups throughout the year; assisting with the publication of new material (books, monographs, etc.) by the Order; organizing and sponsoring public lectures both locally and in other parts of North America; supporting this present Web page (recently given by Magellan a Four Star rating, the highest rating received by any page on the World Wide Web&#41;.
                        </p>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>Donations:</h3>
                        <p>
                            Outright, unencumbered monetary donations are, of course, always welcome. Contributions of time or needed services are equally appreciated.
                        </p>
                        <p>
                            Any of the types of contributions mentioned above can be partially or fully compensated with a documenting receipt which will allow you a tax deduction for charitable contributions.
                        </p>
                    </section>
                    <section className="wrapper-text wrapper-text--columns">
                        <h3>Letters of Support:</h3>
                        <p>
                            <em>ALL</em> support and contributions of any kind — including simply your good wishes! — are truly appreciated. &#40;You have our sincere thanks just for wading through this letter!&#41;
                        </p>
                        <p>
                            Any of the types of contributions mentioned above can be partially or fully compensated with a documenting receipt which will allow you a tax deduction for charitable contributions.
                        </p>
                        <p>
                            In the near future, several avenues of expansion are planned. For example: As Soror Meral&apos;s journal In the Continuum concludes nearly a quarter of a century of publication, with its last issue coming out later this year, a new periodical is already in the planning stages to succeed it &#40;&quot;Succession is your proof!&quot;&#41;. Temple of Thelema groups are being planned and developed for new geographic areas, to make them more accessible to more people; and existing groups are looking forward to providing more ritual, teaching, and other activities open to the general public, as personal, financial, and other resources permit. New books and other educational materials are constantly being planned &#40;see our list of publications for an indication of what has already been done in just a few years). This Web page, already one of the best on the WWW (we can say this since the writers of the present letter are not responsible for the page&apos;s design, upkeep, or implementation!&#41;. will continue to grow and offer the best it can to a planet-wide community. By this present letter, we invite you to contribute to this growth and these services to whatever extent you wish.
                        </p>
                        <p>
                            Questions concerning any of the foregoing can be addressed by email to donate@thelema.org. Monetary gifts, or inquiries concerning specific sponsorships, can be directed to the Grand Imperator at the corporate headquarters address given previously.
                        </p>

                    </section>
                    <strong>Love is the law, love under will.</strong>
                    <em>Thank you,</em>
                    <p>
                        Board of Directors<br/>
                        COLLEGE OF THELEMA
                    </p>
                    <p>
                        Prolocutor and Grand Chiefs<br/>
                        TEMPLE OF THELEMA
                    </p>
                </article>
            </section>
        </main>
        <Footer />
    </body>
    );
}

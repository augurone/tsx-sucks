
import React from 'react';
// @ts-ignore
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";

const Footer = () => (
    <footer>
         <section>
                <h2>CONTACT US:</h2>
                <ul className="list list--flex list--contacts u-justify--between" >
                    <li>
                        <h3>COLLEGE OF THELEMA</h3>
                        <address>
                            490 Lake Park Ave. PO BOX 10562<br />
                            Oakland, CA 94610<br />
                            Organizational Communications:<br /><a href="mailto:secretary@collegeofthelema.org" target="_self">secretary@collegeofthelema.org</a><br />
                            Admissions:<br /><a href="mailto:admissions@collegeofthelema.org" target="_self">admissions@collegeofthelema.org</a>
                       </address>
                    </li>
            		<li>
                        <h3>Harpocrates Temple No. 1</h3>
                        <address>
                            PO BOX 1433<br />
                            Hawthorne, CA 90251<br />
                            <br />
                            <a href="mailto:harpocrates@thelema.org" target="_self">harpocrates@thelema.org</a>
                            <br />
                            <br />
                            <a className="inline float-left" href="https://www.meetup.com/venice-thelema-study-group/" target="_blank" title="College of Thelema Harpocrates Study Group on Meetup"></a>
                            <a className="inline float-left" href="https://www.facebook.com/groups/thelemaharpocrates/events" target="_blank" title="College of Thelema Harpocrates Study Group on Facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                       </address>
                    </li>
            		<li>
                        <h3>Hathor Pronaos No. 7</h3>
                        <address >
                			P. O Box 81535<br />
                			1057 Steeles Ave West<br />
                			North York ON M2R 2S0<br />
                			<a href="mailto:hathor@thelema.org" target="_self">hathor@thelema.org</a>
                        </address>
                    </li>
            		<li>
                        <h3>Aiwass Temple No. 8</h3>
                        <address >
                			PO Box 156<br />
                			New York, NY 10185<br />
                            <br />
                			<a href="mailto:&#097;&#105;&#119;&#097;&#115;&#115;&#064;&#116;&#104;&#101;&#108;&#101;&#109;&#097;&#046;&#111;&#114;&#103;" target="_self">&#097;&#105;&#119;&#097;&#115;&#115;&#064;&#116;&#104;&#101;&#108;&#101;&#109;&#097;&#046;&#111;&#114;&#103;</a>
                            <br />
                            <br />
                            <a className="inline float-left" href="http://www.meetup.com/Aiwass-Study-Group/" target="_blank" title="College of Thelema Aiwass Study Group on Meetup">
                                <FontAwesomeIcon icon={['fab', 'meetup']}/>
                            </a>
                            <a className="inline float-left" href="https://www.facebook.com/groups/245645772187267" target="_blank" title="College of Thelema Aiwass Study Group on Facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />    
                            </a>
                        </address>
                    </li>
            		<li>
                        <h3>Burning Hearts Pronaos No. 9</h3>
                        <address >
                            490 Lake Park Ave. PO BOX 10562<br />
                            Oakland, CA 94610<br />
                            <br />
                			<a href="mailto:&#x62;&#x75;&#x72;&#x6e;&#x69;&#x6e;&#x67;&#x68;&#x65;&#x61;&#x72;&#x74;&#x73;&#x40;&#x74;&#x68;&#x65;&#x6c;&#x65;&#x6d;&#x61;&#x2e;&#x6f;&#x72;&#x67;" target="_self">&#x62;&#x75;&#x72;&#x6e;&#x69;&#x6e;&#x67;&#x68;&#x65;&#x61;&#x72;&#x74;&#x73;&#x40;&#x74;&#x68;&#x65;&#x6c;&#x65;&#x6d;&#x61;&#x2e;&#x6f;&#x72;&#x67;</a>
                            <br />
                            <br />
                            <a className="inline float-left" href="https://www.meetup.com/college-of-thelma-agape-study-group/" target="_blank" title="College of Thelema Burning Hearts Study Group on Meetup">
                                <FontAwesomeIcon icon={['fab', 'meetup']} />
                            </a>
                            <a  className="inline float-left" href="https://www.facebook.com/burninghearts93" target="_blank" title="College of Thelema Burning Hearts Study Group on Facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                        </address>
                    </li>
            	</ul>
                <ul className="list list--flex info">
                    <li>
                        <a className="inline float-left" href="https://www.facebook.com/templeofthelema" target="_blank" title="Temple of Thelema on Facebook">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                    </li>
                    <li>Temple of Thelema<sup>&reg;</sup> | College of Thelema<sup>&reg;</sup>, a California Non-Profit Religious organization. © {new Date().getFullYear()}, All Rights Reserved</li>
                </ul>
            </section>
    </footer>
);

export default Footer;

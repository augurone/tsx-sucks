import React from 'react';
import Link from 'next/link';
import LamenNav from '@/vectors/Lamen_Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navConfig = [
    {
        href: 'aa/',
        name: 'A∴A∴'
    },
    {
        href: 'college/',
        name: 'College of Thelema'
    },
    {
        href: 'temple/',
        name: 'Temple of Thelema'
    },
    {
        href: 'publications/',
        name: 'Publications'
    },
    {
        href: '/forum',
        name: 'Forum'
    }
]

const Navbar = ({disableRoute = ''}) => {
    return (
    <header className="background--solar h-fit w-full span-all">
        <h1 className="u-offscreen">College of Thelema: Thelemic Education</h1>
        <input className="absolute invisible" id="toggleMobileMenu" name="toggleMobileMenu" type="checkbox" value="0" />
        <label className="absolute right-0 top-0 pt-4 md:invisible w-[32px] h-[32px] z-20" htmlFor="toggleMobileMenu">
            <FontAwesomeIcon style={{ 'float': 'left' }} icon={['fas', 'bars',]} />
        </label>
        <nav className="sticky w-full flex">
            <Link className="link link--img z-30" href="/" prefetch={true}>
                <h2 className="u-offscreen">College of Thelema and Temple of Thelema</h2>
                <LamenNav />
            </Link>
            <ul className="list flex flex-col md:flex-row w-full justify-end z-20">
               { navConfig.map(({ href, name }, i) => (
                <li key={i}>
                    {(disableRoute === href) && <span className="px-3">{name}</span>}
                    {(disableRoute !== href) && <Link className="px-3" href={href}  target="_self" prefetch={true}>{name}</Link>}
                </li>
               ))}
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;


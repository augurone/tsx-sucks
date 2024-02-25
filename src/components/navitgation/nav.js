import React from 'react';
import Link from '../../../node_modules/next/link';
import LamenNav from '@/vectors/Lamen_Nav';

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
        href: '',
        name: 'Forum'
    }
]

const Navbar = ({disableRoute = ''}) => {
    return (
    <header className="background--solar h-fit w-full">
        <h1 className="u-offscreen">College of Thelema: Thelemic Education</h1>
        <nav className="sticky w-full flex">
            <Link className="link link--img" href="/"prefetch={true}>
                <h2 className="u-offscreen">College of Thelema and Temple of Thelema</h2>
                <LamenNav />
            </Link>
            <ul className="list flex w-full justify-end">
               { navConfig.map(({ href, name }, i) => (
                <li key={i}>
                    {(disableRoute === href) && <span className="px-3">{name}</span>}
                    {(disableRoute !== href) && <Link className="px-3" href={href} prefetch={true}>{name}</Link>}
                </li>
               ))}
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;


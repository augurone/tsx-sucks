import React from 'react';
import Navbar from '../components/nav';

export default function Page() {
    return (
    <body id="page--top" className='theme--Warmer'>
        <Navbar disableRoute="publications/" />
        <main></main>
    </body>
    );
}

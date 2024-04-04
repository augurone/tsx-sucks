import React from 'react';
import Navbar from '../components/navitgation/nav';
import Footer from '../components/navitgation/footer';

export default function Custom404() {
    return (
    <body id="page--top" className='theme--Warmer'>
        <Navbar />
        <main>
            <section className="col-span-full">
               <h1 className="col-span-full text-center">You have reached this page in Error! </h1>
               <p className="col-span-full">Welcome to our site. We have recently updated everything after 20 years, and while we have done our best to get you all where you are going, there are going to be some instances of historical data we missed. </p>
            </section>
        </main>
        <Footer />
    </body>
    );
}

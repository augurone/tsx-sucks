import React from 'react';
import { draftMode } from 'next/headers'
import Events from './components/events/Events';
import Babalon from './vectors/Babalon';
import MultiSrcImg from './components/image/Image';
import Socials from './components/socialLinks/Socials';

export default async function Home() {
    const { isEnabled } = draftMode();

  return (
    <>
    <header className="absolute w-full px-16 flex justify-around z-1 top-0 left-0 overflow-visible md:overflow-hidden">
        <h1 className="flex items-center justify-center gap-4 text-6xl md:text-8xl lg:text-9xl leading-none text-rose-800 pt-[3rem] lg:pt-0">
            <span className="pt-[1.11rem] order-1">Babalon</span>
            <Babalon className="w-[56px] md:w-[107px] lg:w-[120px] h-auto flex-nowrap order-0 md:order-1 " />
            <span className="pt-[1.11rem] md:pr-[.675em] order-1">Salon</span>
        </h1>
        <nav className="absolute flex items-center right-0 top-0 min-w-[4.25rem] w-auto px-[.5rem] pb-[.5rem]" data-nav-conf="tag">
            <section className="w-full h-full pt-[0.375rem] z-10">
                <Socials className="pr-4 pl-8 pb-4" />
            </section>
        </nav>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between pt-[150px]">
      <Events />
    </main>
    <footer className="relative w-full p-24 grid grid-cols-1 md:grid-cols-[repeat(12,minmax(min-content,1fr))] gap-4">
        <MultiSrcImg
            className="col-span-1 justify-self-center md:justify-self-auto min-w-[93px]"
            description="Babalon Salon is women led group for all women affiliated with the College of Thelema whose lamen is represented here"
            height={236}
            loading="lazy"
            title="COT Lamen"
            unoptimized={true}
            url="/floating_lamen.png"
            width={123} />
        <p className="col-span-1 self-center md:col-span-3 min-w-[220px]">Babalon Salon is a women led group providing programming inclusive of all women. It is affiliated with the College of Thelema, a California Non-Profit Religous Organization. For more information regarding the College, Temple of Thelema, or A∴A∴ please visit <a className="underline" title="College of Thelema: Founded in servce to the A∴A∴" href="https://www.thelema.org">thelema.org</a></p>
        <div className="col-end-[-1] col-span-1 md:col-end-[-1] md:col-span-2 flex flex-col self-end justify-self-end gap-4 items-end justify-end  mt-6 md:mt-none">
            <Socials />
            <a className="underline justify-self-end self-end" title="Send an email to Babalon @ Balaon Salon" href="mailto:babalon@babalonsalon.org">babalon@babalonsalon.org</a>
            <span className="justify-self-end" >{`©${new Date().getFullYear()} all rights reserved`}</span>
        </div>
    </footer>
    </>
  );
}

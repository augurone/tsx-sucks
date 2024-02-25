import { draftMode } from 'next/headers'
import { getAllEvents } from './eventUtils';
import Event from './Event';

export default async function Events() {
    const { isEnabled } = draftMode();
    const events = await getAllEvents();
    const today = Date.now();
    const {
        upcoming,
        past
    } = events.reduce((collector, event) => {
        const {
            dateAndTime,
        } = event
        const date = new Date(dateAndTime);
        const inMs = date.getTime();

        if (inMs > (today - (24 * 60 * 60 * 1000))) collector.upcoming = [...collector.upcoming, event];

        if (inMs < (today - (24 * 60 * 60 * 1000))) collector.past = [...collector.past, event];

        return collector;
    }, {
        upcoming: [],
        past: []
    });

    // Sorts future events from oldest to newest, and takes the first one, this is the next event
    const [next, ...future] = upcoming.sort(({ dateAndTime: a }, { dateAndTime: b }) => {
        const aDate = new Date(a);
        const bDate = new Date(b);

        return aDate.getTime() - bDate.getTime();
    });
    const [last, ...furtherGone] = past;
    const hero = next ? next : last;
    const theRealPast = future.length ? past : furtherGone;

    if (!past.length) return;

    return (
        <>
        { hero &&
        <section className="w-full overflow-hidden relative flex items-start lg:items-center justify-center h-auto min-h-screen mx-auto mt-[-150px] pt-[150px] md:pt-[185px] lg:pt-[150px] pb-8 px-8 lg:pb-24 lg:px-24 mb-16 light">
            <Event {...hero} hero={true} />
        </section>
        }
        {!!(future.length) &&
        <section className="container px-8 md:px-24 my-[4rem] flex flex-col gap-8">
            <h3 className="text-2xl text-left font-extrabold leading-tight">Future Events</h3>
            {future.map((newEvent = {}, i) => <Event key={i} { ...newEvent } timeLine="future" />)}
        </section>}
        {!!(theRealPast.length) &&
        <section className="container px-8 md:px-24 flex flex-col gap-8">
            <h3 className="text-2xl text-left font-extrabold leading-tight">Past Events</h3>
            {theRealPast.map((newEvent = {}, i) => <Event key={i} { ...newEvent } />)}
        </section>}
        </>
    );
}

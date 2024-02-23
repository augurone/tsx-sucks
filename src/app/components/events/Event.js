import React from 'react';
import RichText from '../rte/RichText';
import MultiSrcImg from '../image/Image';
import Series from './Series';

const Event = (event = {}) => {
    const {
        coverImage,
        dateAndTime,
        description: {
            json: {
                content = {}
            } = {}
        } = {},
        herochk = false,
        heroBackgroundImage,
        name,
        registrationLink,
        series
    } = event;
    const dateTime = new Date(dateAndTime);
    const formattedDate = dateTime.toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: 'numeric' });
    const formattedTime = dateTime.toLocaleTimeString('en-us', {hour12: true, hour: '2-digit', minute:'2-digit'});
    const notThePast = dateTime.getTime() >= Date.now();
    const timlineString = notThePast ? `${formattedDate} @ ${formattedTime}` : 'Last Event';
    
    return (
        <figure className={`mx-auto max-w-[83.75rem] grid grid-cols-1 md:grid-cols-8 gap-6 items-start
        ${!herochk ? 'min-h-fit relative p-8 rounded-lg overflow-hidden vignette--deep light' : ''}
        `}>
            {/* add W & H for none hero */}
            {(heroBackgroundImage) && <MultiSrcImg hero={true} {...heroBackgroundImage} {...herochk ? {loading:"eager"} : {loading:"lazy"}} />}
            {herochk &&
            <h2 className="text-left text-3xl font-bold md:col-span-8 p-4 bg-opacity-75 bg-white rounded-lg">
                <span className="font-light font-italic">{`${timlineString} — `}</span>
                {name}
            </h2>}
            <aside className="relative col-span-1 md:col-span-3">
                {/* add W & H */}
                {coverImage?.description && <MultiSrcImg {...coverImage} {...herochk ? {loading:"eager"} : {loading:"lazy"}} />}
            </aside>
            <figcaption className={`container grid col-span-1 md:col-span-5 grid-cols-5 gap-3`}>
                {!herochk &&
                <h4 className="text-left text-3xl font-light leading-tight col-span-5">
                    {name}
                </h4>}
                <div className={`col-span-5 ${herochk ? 'p-4 bg-opacity-75 bg-white rounded-lg' : ''} ${!!(herochk && series) ? '2xl:col-span-3' : ''}`}>
                    <RichText textNodeArray={content} />

                    {(timlineString !== 'Last Event' && registrationLink) &&
                    <a href={registrationLink} className="block w-full text-center text-xl text-pink-900 font-bold pt-2">&#10027;&#10027;Participate&#10027;&#10027;</a>}
                </div>
                <Series {...series} elevateHierarchy={herochk} />
            </figcaption>
        </figure>
    );
};


export default Event;

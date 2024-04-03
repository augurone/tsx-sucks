import React from 'react';

const Event = ({
    coverImage: {
        height = '',
        url: imgSrc = '',
        width = ''
    } = {},
    dateAndTime = '',
    name = '',
    registrationLink = '',
} = {}) => {
    const date = new Date(dateAndTime);
    const compDate = Date.now() > parseInt(dateAndTime, 10);
    const exlcudeZoom = compDate && /zoom/.test(registrationLink) ? true : false;
    const formattedDate = date.toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: 'numeric' });
    const formattedTime = date.toLocaleTimeString('en-us', {hour12: true, hour: '2-digit', minute:'2-digit'});
    
    return (
        <figure className="wrapper--event card--event flex flex-col items-stretch mb-o">
            <div className="wrapper-img wrapper-img--rect">
                <img 
                    alt={`${name} — ${formattedDate} ${formattedTime}`} 
                    src={`${imgSrc}?fm=webp&w=286`} 
                    style={{ backgroundImage: `url(${imgSrc}?fm=webp&w=286)`, backgroundPosition: '50% 0' }} 
                    width={width} 
                    height={height} 
                    fetchPriority="high"
                    title={name}
                    loading="lazy" />
            </div>
            <figcaption className="flex flex-col items-stretch shrink grow basis-full h-full">
                <div>{name}</div>
                <div className="mt-auto">{`${formattedDate} ${formattedTime}`}</div>
            </figcaption>
            {(registrationLink && !exlcudeZoom) && <a className="link link--blocker" href={registrationLink} target="_blank" title={name}></a>}
        </figure>
    );
};


export default Event;

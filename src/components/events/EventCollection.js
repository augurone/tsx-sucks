import React from 'react';
import EventCard from '@/components/events/EventCard';
import { generalQuery } from './eventUtils';

const EventCollection = async ({
    contentType = 'event',
    qry = '',
    limit = '',
    order = '',
    title = '',
} = {}) => {
    const {
        includes: {
            Asset = []
        } = {},
        items = [],
        metadata: {
            tags = []
        } = {}
    } = await generalQuery({
        contentType,
        qry,
        limit,
        order
    });
    const Gutz = () => (
        <>
            {items.map(({
            fields: {
                coverImage: {
                    sys: {
                        id: coverImgId = ''
                    } = {}
                } = {},
                dateAndTime = '',
                name = '',
                registrationLink = ''
            } = {}
        } = {}, i) => {
            console.log(name, coverImgId);
            const {
                fields: {
                    file: {
                        details : {
                            height = '',
                            width = '',
                        } = {},
                        url: imgSrc = '',
                    } = {}
                } = {}
            } = Asset.find(({ sys: { id }}) => id === coverImgId) || {};

            return (
                <EventCard 
                    key={i}
                    coverImage={{ height, url: imgSrc, width }}
                    dateAndTime={dateAndTime}
                    name={name} 
                    registrationLink={registrationLink} />
            );
        })}
        </>  
    );

    if (title) {
        return (
            <section className=' grid grid-cols-auto-fill-3up gap-8'>
                <h4 className="article--fullWidth"><strong>{title}</strong></h4>
                <Gutz />
            </section>
            );
    }

    return (<Gutz />);
};

export default EventCollection;

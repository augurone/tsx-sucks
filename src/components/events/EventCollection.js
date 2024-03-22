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
            <section className="flex flex-wrap align-item-start col-span-all w-full gap-8">
                <h4 className="article--fullWidth w-full"><strong>{title}</strong></h4>
                <Gutz />
            </section>
            );
    }

    return (<Gutz />);
};

export default EventCollection;

import React from 'react';
import EventCard from '@/components/events/EventCard';
import { generalQuery } from './eventUtils';

const EventCollection = async ({
    contentType = 'event',
    qry = '',
    limit = '',
    order = ''
} = {}) => {
    const {
        includes: {
            Entry = [],
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
    
    return (
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
                    }
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
};

export default EventCollection;

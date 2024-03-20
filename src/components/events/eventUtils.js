import { cdnFetching } from '../../utils/fetching';

// src/utils.js
const setContentQry = (ct = '') => {
    if (!ct) return '';

    if (ct.split(',').length <= 1) return `&content_type=${ct}`;

    return `&sys.contentType.sys.id[in]=${ct}`;
} 

const flexQuery = (qry) => (qry) ? `&${qry}`: '';

const generalQuery = async ({
    contentType = '',
    entityType = 'entries',
    qry = '',
    limit = '',
    order = ''
} = {}) => {
    const base = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/${entityType}`;
    const access = `access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;
    const contentStr = setContentQry(contentType);
    const queryStr = flexQuery(qry); 
    const url = `${base}?${access}${contentStr}${queryStr}${limit}${order}`;

    try {
        return await cdnFetching(url);
    } catch(e) {
        console.error(e)
    }
}

export {
    generalQuery,
};

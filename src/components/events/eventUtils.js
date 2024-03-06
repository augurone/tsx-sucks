import { cdnFetching, gqlFetching } from '../../utils/fetching';

// src/utils.js
const EVENT_GRAPHQL_FIELDS = `
  contentfulMetadata {
    tags {
        id
        name
    }
  }
  name
  description {
    json
  }
  coverImage {
    title
    url
    description
    width
    height
  }
  heroBackgroundImage {
    title
    url
    description
    width
    height
  }
  artworkCollection(limit: 5) {
    items {
        title
        url
        description
        width
        height
    }
  }
  group {
    name
  }
  series {
    seriesName
    description {
        json
    }
    blurb {
        json
    }
  }
  eventLocation {
    lat
    lon
  }
  online
  dateAndTime
  registrationLink
`;

const extractEventEntries = ({
    data: {
        eventCollection: {
            items = []
        } = {}
    } = {}
} = {}) => items;

// Retrieve the list of blog posts from Contentful
const getAllEvents = async (isDraftMode = false) => {
    const entries = await gqlFetching(
        `query {
          eventCollection(
            where: { name_exists: true },
            limit: 100,
            skip: 0
            order: dateAndTime_DESC,
            preview: ${isDraftMode ? 'true' : 'false'}
          ) {
            items {
              ${EVENT_GRAPHQL_FIELDS}
            }
          }
        }`,
        isDraftMode
      );

      // console.log(extractEventEntries(entries));

      return extractEventEntries(entries);
};

const setContentQry = (ct = '') => {
    if (!ct) return '';

    if (ct.split(',').length <= 1) return `&content_type=${ct}`;

    return `&sys.contentType.sys.id[in]=${ct}`;
} 

const flexQuery = (qry) => (qry) ? `&${qry}`: '';

const generalQuery = async ({
    contentType = 'event',
    entityType = 'entries',
    qry = 'metadata.tags.sys.id[in]=babalonSalon',
    limit = '&limit=3',
    order = '&order=-fields.dateAndTime'
} = {}) => {
    const base = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/${entityType}`;
    const access = `access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;
    const contentStr = setContentQry(contentType);
    const queryStr = flexQuery(qry); 
    const url = `${base}?${access}${contentStr}${queryStr}${limit}${order}`;

    const entries = await cdnFetching(url)
    .then(data => data)
    .catch((e) => console.error(e));

    return entries;
}

export {
    generalQuery,
    getAllEvents,
};

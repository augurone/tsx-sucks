import fetching from '../../utils/fetching';

// src/utils.js
const EVENT_GRAPHQL_FIELDS = `
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
    const entries = await fetching(
        `query {
          eventCollection(
            where: {
                name_exists: true,
                contentfulMetadata:{
                    tags : {
                        id_contains_some: "babalonSalon"
                    }
                }
            },
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

    //   console.log(extractEventEntries(entries));

      return extractEventEntries(entries);
};

export {
    getAllEvents,
};

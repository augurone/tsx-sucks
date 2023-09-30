import fetching from '../../utils/fetching';

// src/utils.js
const EVENT_GRAPHQL_FIELDS = `
  name
  description {}
  coverImage {}
  series {}
  online
  dateAndTime
  location
  registrationLink {}
`;

const extractEventEntries = ({
    data: {
        eventCollection: {
            items = []
        } = {}
    } = {}
} = {}) => items;

// Retrieve the list of blog posts from Contentful
const getAllEvents = async (isDraftMode) => {
    const entries = await fetching(
        `query {
          eventCollection(
            where: { name_exists: true },
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

      console.log(entries);
      
      return extractEventEntries(entries);
};

export {
    getAllEvents,
};

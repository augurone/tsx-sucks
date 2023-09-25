import fetching from '../../utils/fetching';

// src/utils.js
const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

const extractPostEntries = ({
    data: {
        postCollection: {
            items = []
        } = {}
    } = {}
} = {}) => items;

// Retrieve the list of blog posts from Contentful
const getAllPosts = async (isDraftMode) => {
    const entries = await fetching(
        `query {
          postCollection(
            where: { slug_exists: true },
            order: date_DESC,
            preview: ${isDraftMode ? 'true' : 'false'}
          ) {
            items {
              ${POST_GRAPHQL_FIELDS}
            }
          }
        }`,
        isDraftMode
      );
        console.log(entries);
      return extractPostEntries(entries);
};

export {
    getAllPosts,
};

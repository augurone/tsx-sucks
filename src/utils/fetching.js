const fetching = async (query, preview = false)  => fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
        preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ['posts'] },
    }
).then((response) => response.json());

export default fetching;

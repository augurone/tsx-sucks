
const cdnFetching = (url = '') => fetch(url)
.then((response) => {
    if (!response.ok) return Promise.reject('Bad Request');

    return response.json();
})
.catch(e => console.error(e));

export {
    cdnFetching
};

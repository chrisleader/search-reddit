const baseUrl = 'https://www.reddit.com';

//This function retrieves Reddit posts for a given query, sort and time configuration.
export const getPosts = async (query, sort, time) => {
    const searchSyntax = '/search.json?q=';
    const sortSyntax = '&sort=';
    const timeSyntax = '&t=';
    const urlToFetch = `${baseUrl}${searchSyntax}${query}${sortSyntax}${sort}${timeSyntax}${time}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }
    } catch(error) {
        console.log(error);
    }
};

//This query retrieves comments for a given Reddit post URL.
export const getComments = async (url) => {
    try {
        const response = await fetch(`${url}.json`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch(error) {
        console.log(error);
    }
};
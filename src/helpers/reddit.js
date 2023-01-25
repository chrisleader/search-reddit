const baseUrl = 'https://www.reddit.com';

const getPosts = async (query, sort, time) => {
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
}

export { getPosts };
const baseUrl = 'https://www.reddit.com';

const getPosts = async (searchTerm) => {
    const searchSyntax = '/search.json?q=';
    const urlToFetch = `${baseUrl}${searchSyntax}${searchTerm}`;

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
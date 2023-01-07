//import fetch from 'node-fetch';
import { json } from 'react-router-dom';

const baseUrl = 'https://www.reddit.com';

export const getPosts = async (searchTerm) => {
    const searchSyntax = '/search/?q=';
    const urlToFetch = `${baseUrl}${searchSyntax}${searchTerm}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = response.json();
            return jsonResponse;
        }
    } catch(error) {
        console.log(error);
    }
}
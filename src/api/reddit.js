import fetch from 'node-fetch';
import { json } from 'react-router-dom';

const baseUrl = 'https://www.reddit.com';

export const getPosts = async (searchTerm) => {
    const urlToFetch = `${baseUrl}${searchTerm}`;

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
const BASE_URL_API = `https://api.nasa.gov/planetary/apod`;
const KEY = 'w1qZiSyElNKvBmMGpk3BYjIsrJSzpqz3caMVp90b';

export const fetchData = async (type, firstEntry, secondEntry) => {
    try {
        let url;

        if (type === 'apod') {
            url = `${BASE_URL_API}?api_key=${KEY}`;
        } else if (type === 'date') {
            url = `${BASE_URL_API}?date=${firstEntry}&api_key=${KEY}`;
        } else if (type === 'range') {
            url = `${BASE_URL_API}?start_date=${firstEntry}&end_date=${secondEntry}&api_key=${KEY}`;
        } else if (type === 'random') {
            url = `${BASE_URL_API}?count=${firstEntry}&api_key=${KEY}`;
        } else if (type === 'thumbs') {
            url = `${BASE_URL_API}?thumbs=${firstEntry}&api_key=${KEY}`;
        } else {
            throw new Error(`Type de requête non pris en charge : ${type}`);
        }

        console.log(`Fetching URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur API : ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur dans fetchData :', error);
        throw error;
    }
};

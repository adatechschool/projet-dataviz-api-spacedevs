export const FIRST_USER_CHOICE = ''
export const SECOND_USER_CHOICE = ''

/** Selection des conteneur pour APOD ( 'APOD' => photo du jour ) */

export const body = document.getElementById('body');
export const headingApod = document.querySelector('h1')
export const apodContainer = document.getElementById('apod-container');
export const apod = document.getElementById('APOD')
export const titleApod = document.getElementById('title-apod');
export const explanationApod = document.getElementById('explanation-apod');
export const dateApod = document.getElementById('date-apod');
export const imageApod = document.getElementById('img-apod');
/** toggle button */
export const toggleButton = document.getElementById('toggle-button');
export const optionsContainer = document.getElementById('options-container');
export const dateSearch = document.getElementById('date-search');
export const dateRangeSearch = document.getElementById('date-range-search');
export const eraseButton = document.getElementById('erase-button');
export const loadingMessage = document.createElement('h2');
optionsContainer.appendChild(loadingMessage);
loadingMessage.style.display = 'none'
loadingMessage.innerText = 'Loading ...';
loadingMessage.style.fontSize = '30px';
loadingMessage.style.color = 'white';

export const API_KEY = "w1qZiSyElNKvBmMGpk3BYjIsrJSzpqz3caMVp90b";
export const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
export const BASE_URL_API = `https://api.nasa.gov/planetary/apod`
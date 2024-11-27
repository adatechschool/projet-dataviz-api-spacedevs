/** Selection des conteneur pour APOD ( 'APOD' => photo du jour ) */
export const body = document.getElementById('body');
export const headingApod = document.querySelector('h1')
export const apodContainer = document.getElementById('apod-container');

/** BOUTONS */
export const toggleButton = document.getElementById('toggle-button');
export const buttonContainer = document.getElementById('buttons-container');
export const apodButton = document.getElementById('button-apod');
export const searchDateButton = document.getElementById('button-search-date');
export const searchRangeButton = document.getElementById('button-search-range');
export const countButton = document.getElementById('button-count');
export const thumbsButton = document.getElementById('button-thumbs');
export const eraseButton = document.getElementById('button-erase');
export const resultContainer = document.getElementById('results-container');
resultContainer.innerHTML = '';

/** Message de chargement */
export const loadingMessage = document.createElement('h2');
resultContainer.appendChild(loadingMessage);
loadingMessage.style.display = 'none'
loadingMessage.innerText = 'Loading ...';
loadingMessage.style.fontSize = '30px';
loadingMessage.style.color = 'white';


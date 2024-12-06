/** IMPORT DE NÔTRE TABLEAU */
import { jamesWebbPictures } from "./james-webb-pictures.js";



/** CONSTANTES GLOBALES */
const BASE_URL_API = `https://api.nasa.gov/planetary/apod`;
const KEY = 'w1qZiSyElNKvBmMGpk3BYjIsrJSzpqz3caMVp90b';



/** FONCTION PRINCIPALE ASYNCHRONE 
 * CETTE FONCTION VA FAIRE LES REQUÊTES EN FONCTION DU CHOIX DE L'UTILISATEUR */ 
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

        } else {
            throw new Error(`Type de requête non pris en charge : ${type}`);
        }

        console.log(`URL: ${url}`);
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



/** FONCTION QUI VA SE CHARGER DE RÉCUPERER LES DONNÉES DE NOTRE TABLEAU JS 
 *  ELLE NOUS PERMET AUSSI DE FAIRE DEFFILER NOS IMAGES AVEC DES BOUTON.
*/
if (window.location.pathname.endsWith("galerie.html")) {
    document.addEventListener("DOMContentLoaded", () => {

        const container = document.querySelector(".container");
        const infoBox = document.querySelector(".info-box");
        const leftButton = document.querySelector(".nav-button.left");
        const rightButton = document.querySelector(".nav-button.right");

        let currentIndex = 0;
        
        const updateSlide = () => {

            const slide = jamesWebbPictures[currentIndex];
            container.style.backgroundImage = `url(${slide.image_url})`;
            infoBox.innerHTML = 
            `
                <h2>${slide.titre}</h2>
                <h3>${slide.sous_titre}</h3>
                <p><strong>Date :</strong> ${slide.date}</p>
                <p><strong>Constellation :</strong> ${slide.constellation}</p>
                <p><strong>Distance :</strong> ${slide.distance}</p>
                <p><strong>Description :</strong> ${slide.description}</p>
                <a href="${slide.image_hdurl}" target="_blank" class="hd-link">Voir en haute définition</a>
            `;
        };

        updateSlide();

        
        leftButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + jamesWebbPictures.length) % jamesWebbPictures.length;
            updateSlide();
        });
      

        rightButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % jamesWebbPictures.length;
            updateSlide();
        });
      });
}
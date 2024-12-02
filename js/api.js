import { jamesWebbPictures } from "./james-webb-pictures.js";
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

if (window.location.pathname.endsWith("galerie.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector(".container");
        const infoBox = document.querySelector(".info-box");
        const leftButton = document.querySelector(".nav-button.left");
        const rightButton = document.querySelector(".nav-button.right");
      
        let currentIndex = 0;
      
        const updateSlide = () => {
          const slide = jamesWebbPictures[currentIndex];
      
          // Update the image or background
          container.style.backgroundImage = `url(${slide.image_url})`;
      
          // Update the info-box content
          infoBox.innerHTML = `
            <h2>${slide.titre}</h2>
            <h3>${slide.sous_titre}</h3>
            <p><strong>Date :</strong> ${slide.date}</p>
            <p><strong>Constellation :</strong> ${slide.constellation}</p>
            <p><strong>Distance :</strong> ${slide.distance}</p>
            <p><strong>Description :</strong> ${slide.description}</p>
            <a href="${slide.image_hdurl}" target="_blank" class="hd-link">Voir en haute définition</a>
          `;
        };
      
        // Initialize the first slide
        updateSlide();
      
        // Navigation logic
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



/*
const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Erreur de chargement : ${src}`));
    });
};

export const loadGallery = async () => {
    try {
        const galerieContainer = document.getElementById('galerie-container');
        
        for (const item of jamesWebbPictures) {
            await loadImage(item.image_url);
            galerieContainer.innerHTML += `
                <div class="galerie-item">
                    <h1>${item.date}</h1>
                    <h2>${item.titre}</h2>
                    <h3>${item.sous_titre}</h3>
                    <h4>${item.constellation}</h4>
                    <h5>${item.distance}</h5>
                    <p>${item.description}</p>
                    <img src="${item.image_url}" alt="${item.titre}">
                </div>
                <a href=${item.image_hdurl} target="_blank"><button>Télécharger HD</button></a>
                <br>
                <br>
            `;
        }
    } catch (error) {
        console.error("Erreur dans le chargement des images :", error);
    }
};
*/

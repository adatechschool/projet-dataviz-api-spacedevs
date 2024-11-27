/** importation des modules */
import { body, headingApod, apodContainer, apod, titleApod, explanationApod, 
    dateApod, imageApod, toggleButton, optionsContainer, 
    dateSearch, dateRangeSearch, eraseButton, loadingMessage } from "./dom.js";

import { displayAPOD,  } from "./api.js";


/** affficher/masquer boutons */
toggleButton.addEventListener('click', () => {
    const isHidden = optionsContainer.style.display === 'none' || optionsContainer.style.display === '';
    if (isHidden) {
        optionsContainer.style.display = 'block';
        toggleButton.innerText = "Masquer bouton";
    } else {
        optionsContainer.style.display = 'none';
        toggleButton.innerText = 'Afficher boutons'
    }
});


/** effacer contenue page */
eraseButton.addEventListener('click', () => {
    headingApod.innerHTML = '';
    titleApod.innerHTML = '';
    explanationApod.innerHTML = '';
    dateApod.innerHTML = '';
    imageApod.innerHTML = '';
});


/** Afficher Apod */
apod.addEventListener('click', () => {
    displayAPOD()
});



dateRangeSearch.addEventListener('click', () => {
    displayRange();
})

/** importation des modules */
import { toggleButton, loadingMessage, eraseButton, buttonContainer, resultContainer } from "./dom.js";

import { fetchData } from "./api.js";

let startDate;
let endDate;
let dateUserChoice;
let randomUserChoice;
let thumbsUserChoice;

/** affficher/masquer boutons */
toggleButton.addEventListener('click', () => {
    const isHidden = buttonContainer.style.display === 'none' || buttonContainer.style.display === '';
    if (isHidden) {
        buttonContainer.style.display = 'block';
        toggleButton.innerText = "Masquer";
    } else {
        buttonContainer.style.display = 'none';
        toggleButton.innerText = 'Afficher'
    }
});

/** BOUTONS */
buttonContainer.addEventListener('click', (event) => {
    const buttonType = event.target.dataset.type;
    console.log(buttonType);

    if (buttonType === 'apod') {
        fetchData(buttonType);
    } else if (buttonType === 'date') {
        dateUserChoice = prompt("Veuillez entrer la date")
        fetchData(buttonType, dateUserChoice)
    } else if (buttonType === 'range') {
        startDate = prompt("Veuillez entrer la date de debut");
        endDate = prompt("Veuillez entrer la date de fin");
        fetchData(buttonType, startDate, endDate)
    } else if (buttonType === 'random') {
        randomUserChoice = prompt("combien d'image voulez vous ?")
        fetchData(buttonType, randomUserChoice)
    } else if (buttonType === 'thumbs') {
        fetchData(buttonType, thumbsUserChoice)
    } else if (buttonType === 'erase') {
        resultContainer.innerHTML = '';
    }
});
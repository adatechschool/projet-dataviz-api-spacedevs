/** IMPORT DE NOS FONCTIONS ET IMPORT DE CERTAINS ELEMENTS DEU DOM
 *  & SELECTION DE CERTAINS CONTENEURS
 */
import { fetchData } from "./api.js";
import { buttonDisplayRange, displayContainer, displayLoadingMessage } from "./dom.js";
const apodContainer = document.getElementById("apod-container");
const randomContainer = document.getElementById('random-container');



/** FONCTION QUI VA AFFICHER LES DONNÉES EN FONCTION DE LA REQUETES API */
const dataWriting = (data, param) => {
  if (param === 'range') {
    return `
              <div class="data-item">
                <h1>${data.date}</h1>
                <h2>${data.title}</h2>
                <img src="${data.url}" alt="${data.title}"/>
                <p>${data.explanation}</p>
              </div>
           `;

  } else if (param === 'date') {
    return `
              <div class="data-item">
                <h1>${data.date}</h1>
                <h2>${data.title}</h2>
                <img src="${data.url}" alt="${data.title}"/>
                <p>${data.explanation}</p>
              </div>
           `;

  } else if (param === 'simple') {
    return `
              <h1>${data.date}</h1>
              <h2>${data.title}</h2>
              <img src=${data.url}>
              <h3>${data.explanation}</h3>
           `;
  }
};

/** FONCTION QUI VA AFFICHER L'IMAGE DU JOUR DANS NOTRE PAGE D'ACCUEIL
 * CETTE FONCTION NE S'EXECUTERAS QUE SI L'UTILISATEUR SE TROUVE DANS 'index.html'
*/
if (window.location.pathname.endsWith("index.html")) {
  const loadApod = async (type) => {
    const loadingMessage = displayLoadingMessage(apodContainer);

    try {
      const data = await fetchData(type);
      apodContainer.innerHTML = dataWriting(data, 'simple');

    } catch (error) {
      console.error(error);

    } finally {
      loadingMessage.remove();
    }
  };
  loadApod('apod');
}



/** FONCTION QUI FAIRE LA REQUETE ALÉATOIRE DE 10 IMAGES */  
if (window.location.pathname.endsWith("random.html")) {
  const displayRandomPicture = async () => {
    //const loadingMessage = displayLoadingMessage(randomContainer);

    try {
      const data = await fetchData('random', '10');
      console.log(data)            
                                               // il reste encore a regler l'affichage du message de chargement.
      data.forEach((item) => {
        randomContainer.innerHTML += dataWriting(item,'simple');
      });
    } catch (error) {
      console.error(error)

    } /*finally {
      loadingMessage.remove();
    }*/
  }
  displayRandomPicture();
}



// FONCTION QUI VA FAIRE APPEL A LA FONCTION 'fetchData()'
if (window.location.pathname.endsWith("search-by-date.html")) {

  buttonDisplayRange.addEventListener("click", async () => {
    const inputStartDate = document.getElementById("input-start-date").value;
    const inputEndDate = document.getElementById("input-end-date").value;
    displayContainer.innerHTML = '';
    try {

      const loadingMessage = displayLoadingMessage(displayContainer);
      if (!inputEndDate) {
        const data = await fetchData('date', inputStartDate);
        loadingMessage.style.display = 'none';
        displayContainer.innerHTML += dataWriting(data, 'date');

      } else {
        const data = await fetchData("range", inputStartDate, inputEndDate);
        loadingMessage.style.display = 'none';
        data.forEach((item) => {
          displayContainer.innerHTML += dataWriting(item, 'range');
      });
      }
    } catch (error) {
      console.error("Erreur dans fetchData:", error);
      displayContainer.innerHTML =
        "<p>Une erreur est survenue lors du chargement des données.<br> veuillez introduire une date valide</p>";

    } finally {
      if (loadingMessage) loadingMessage.remove();
    }
  });
};
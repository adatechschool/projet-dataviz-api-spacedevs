import { body, headingApod, apodContainer, apod, titleApod, explanationApod, 
    dateApod, imageApod, toggleButton, optionsContainer, 
    dateSearch, dateRangeSearch, eraseButton, loadingMessage, API_KEY, BASE_URL_API,
URL } from "./dom.js";

/** fonction asynchrone qui va récuperer les donées  */
export async function fetchAPOD() {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`);
    }
    return await response.json();
}

/** fonction qui va afficher les donées en asynchrone, donc qui attendras fetchAPOD() */
export async function displayAPOD() {
    loadingMessage.style.display = 'block'
    try {
        const data = await fetchAPOD();
        if (!data || !data.title || !data.explanation || !data.date || !data.hdurl) {
            throw new Error("Données manquantes dans la réponse de l'API");
        }
        loadingMessage.style.display = 'none'
        headingApod.innerText = "PICTURE OF THE DAY";
        titleApod.innerHTML = `<strong>${data.title}</strong>`;
        explanationApod.innerHTML = `<p>${data.explanation}</p>`;
        dateApod.innerHTML = `<strong>${data.date}</strong>`;
        imageApod.innerHTML = `<img src="${data.hdurl}" alt="${data.title}">`;
    } catch (error) {
        console.error("Erreur serveur :", error);
        headingApod.innerText = "Erreur lors du chargement de l'image du jour.";
        apodContainer.innerHTML = "<p>Veuillez réessayer plus tard.</p>";
    }
}



/** fonction pour chercher par range de date 
export async function fetchRange(startDate, endDate) {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error;
    }
}


export async function displayRange() {
    const startDate = prompt("Entrez la date de début (YYYY-MM-DD) :");
    const endDate = prompt("Entrez la date de fin (YYYY-MM-DD) :");
    if (!startDate || !endDate) {
        alert("Vous devez entrer les deux dates !");
        return;
    }

    try {
        loadingMessage.style.display = 'block';
        const data = await fetchRange(startDate, endDate);
        loadingMessage.style.display = 'none';
        apodContainer.innerHTML = '';
        if (data.length === 0) {
            apodContainer.innerHTML = "<p>Aucun résultat pour cette plage de dates.</p>";
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h3>${item.title}</h3>
                <p><strong>Date:</strong> ${item.date}</p>
                <img src="${item.url}" alt="${item.title}" style="max-width: 100%; height: auto;">
                <p>${item.explanation}</p>
            `;
            apodContainer.appendChild(card);
        });
    } catch (error) {
        loadingMessage.style.display = 'none'; 
        apodContainer.innerHTML = "<p>Erreur lors du chargement des données. Veuillez réessayer.</p>";
    }
}
*/
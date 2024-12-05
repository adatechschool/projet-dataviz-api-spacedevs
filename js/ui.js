import { fetchData } from "./api.js";
import { buttonDisplayRange, displayContainer } from "./dom.js";
const apodContainer = document.getElementById("apod-container");
const randomContainer = document.getElementById("random-container");

if (window.location.pathname.endsWith("index.html")) {
  const loadApod = async (type) => {
    try {
      const data = await fetchData(type);
      apodContainer.innerHTML = `<h1>${data.date}</h1>
    <h2>${data.title}</h2>
    <img src=${data.url}>
    <p>${data.explanation}</p>`;
    } catch (error) {
      console.error(error);
    }
  };
  loadApod("apod");
}

if (window.location.pathname.endsWith("search-by-date.html")) {
  buttonDisplayRange.addEventListener("click", async () => {
    const inputStartDate = document.getElementById("input-start-date").value;
    const inputEndDate = document.getElementById("input-end-date").value;
    const startDate = inputStartDate;
    const endDate = inputEndDate;
    //console.log(startDate, endDate);
    displayContainer.innerHTML = "";
    const loadingMessage = document.createElement("h2");
    displayContainer.appendChild(loadingMessage);
    loadingMessage.style.display = "none";
    loadingMessage.innerText = "Chargement des ressources ...";
    loadingMessage.style.fontSize = "30px";
    loadingMessage.style.color = "white";

    try {
      loadingMessage.style.display = "block";

      if (!endDate) {
        const data = await fetchData("date", startDate);
        loadingMessage.style.display = "none";
        displayContainer.innerHTML += `
          <div class="data-item">
              <h1>${data.date}</h1>
              <h2>${data.title}</h2>
              <img src="${data.url}" alt="${data.title}" />
              <p>${data.explanation}</p>
            </div>
          `;
      } else {
        const data = await fetchData("range", startDate, endDate);
        loadingMessage.style.display = "none";
        data.forEach((item) => {
          displayContainer.innerHTML += `
            <div class="data-item">
            <h1>${item.date}</h1>
              <h2>${item.title}</h2>
              <img src="${item.url}" alt="${item.title}" />
              <p>${item.explanation}</p>
            </div>
          `;
        });
      }
    } catch (error) {
      console.error("Erreur dans fetchData:", error);
      displayContainer.innerHTML =
        "<p>Une erreur est survenue lors du chargement des données.<br> veuillez introduire une date valide</p>";
    }
  });
}

const displayRandomPicture = async () => {
  const data = await fetchData("random", "10");
  console.log(data);
  data.forEach((item) => {
    randomContainer.innerHTML += `
    <h1>${item.date}</h1>
    <h2>${item.title}</h2>
    <img src=${item.url}>
    <p>${item.explanation}</p>
    `;
  });
};

if (window.location.pathname.endsWith("random.html")) {
  displayRandomPicture();
}

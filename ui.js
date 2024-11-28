import { fetchData } from "./api.js";
import { buttonDisplayRange, displayContainer } from "./dom.js";
const apodContainer = document.getElementById('apod-container');

let userChoiceDate;
let startDate;
let endDate;



const loadApod = async (type) => {
  try {
    const data = await fetchData(type);
    apodContainer.innerHTML = 
  `<h1>${data.date}</h1>
  <h2>${data.title}</h2>
  <img src=${data.url}>
  <p>${data.explanation}</p>`

  } catch (error) {
    console.error(error)
  }
}

loadApod('apod');

buttonDisplayRange.addEventListener('click', async () => {
  const inputStartDate = document.getElementById('input-start-date').value;
  const inputEndDate = document.getElementById('input-end-date').value;
  const startDate = inputStartDate;
  const endDate = inputEndDate;
  console.log(startDate, endDate);

  try {
    const data = await fetchData('range', startDate, endDate);
      data.forEach(item => {
        displayContainer.innerHTML += `
          <div class="data-item">
            <h3>${item.title}</h3>
            <p><strong>Date:</strong> ${item.date}</p>
            <img src="${item.url}" alt="${item.title}" />
            <p>${item.explanation}</p>
          </div>
        `;
      });
  } catch (error) {
    console.error('Erreur dans fetchData:', error);
    displayContainer.innerHTML = '<p>Une erreur est survenue lors du chargement des données.</p>';
  }
});



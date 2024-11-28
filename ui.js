//import { fetchData } from "api.js";
//import { apodContainer } from "./dom";
const apodContainer = document.getElementById('apod-container');
async function loadApod() {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=w1qZiSyElNKvBmMGpk3BYjIsrJSzpqz3caMVp90b');
  console.log(response);
  const data = await response.json();
  console.log(data)
 apodContainer.innerHTML = 
  `<h1>${data.date}</h1>
  <h2>${data.title}</h2>
  <img src=${data.hdurl}>
  <p>${data.explanation}</p>`
}
loadApod();

  /*
  data.innerHTML = data.date;
  titre.innerHTML = data.title;
  picture.innerHTML = `<img src="${data.hdurl}" alt="${data.title}">`;
  description.innerHTML = data.explanation;
  */
























/*const choiceDate = document.getElementById("dateInput");
const btnSearch = document.getElementById("search-btn");
const result = document.getElementById("result");

async function loadPicture() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=2024-02-18&api_key=XP0cvfospdzNkNsHoKJQheIgg6YH30nW7ltVbpgj`
  );
  const data = await response.json();
  result.innerHTML = data.title;
  console.log(data);
}

btnSearch.addEventListener("click", loadPicture());*/

/*let getDate = () => {
  let date = choiceDate.value;
  let url = `https://api.nasa.gov/planetary/apod?date=2024-02-18&api_key=XP0cvfospdzNkNsHoKJQheIgg6YH30nW7ltVbpgj`;*/

//si le champ input est vide
/*if (date.length <= 0) {
    result.innerHTML = `<h3 class="msg">Merci de renter une date valide`;
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //si la date existe dans la base de données
        if (data.response == "true") {
          result.innerHTML = `
          <div class ="info">
          
          <h2>${data.title}</h2>
          
          <h3>${data.date}</h3>
          <p>${data.explanation}</p>

          </div>
          <div class = "picture">
          <img src = ${data.hdurl}
          </div>`;
        }
        //si la date n'existe pas
        else {
          result.innerHTML = `<h3 class="msg">${data.error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Il y a une erreur</h3>`;
      });
  }
};

btnSearch.addEventListener("click", getDate);
window.addEventListener("load", getDate);*/

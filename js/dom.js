// INDEX.HTML
export const homeScreen = document.getElementById("hoem-screen");
// GALERIE.HTML

// SEARCH-BY-DATE.HTML
export const buttonDisplayRange = document.getElementById(
  "button-display-range"
);
export const displayContainer = document.getElementById("display-container");

// RANDOM
export const randomButton = document.getElementById("random-button");

const button = document.querySelector("#toggleTheme");
const body = document.querySelector("body");
let isDarkMode = true;

button.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  isDarkMode ? update("black", "white") : update("white", "black");
});

function update(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

// INDEX.HTML
export const homeScreen = document.getElementById("hoem-screen");



// SEARCH-BY-DATE.HTML
export const buttonDisplayRange = document.getElementById(
  "button-display-range"
);



export const displayContainer = document.getElementById("display-container");



function update(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}



/** MESSAGE DE CHARGEMENTS */
export const displayLoadingMessage = (container, message = "Chargement des ressources ...") => {
  const loadingMessage = document.createElement("h2");
  loadingMessage.style.fontSize = "30px";
  loadingMessage.style.color = "white";
  loadingMessage.style.textAlign = "center";
  loadingMessage.innerText = message;

  container.appendChild(loadingMessage);
  return loadingMessage;
};



/** DARK MODE */
const button = document.querySelector("#toggleTheme");
const body = document.querySelector("body");
let isDarkMode = true;
button.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  isDarkMode ? update("black", "white") : update("white", "black");
});
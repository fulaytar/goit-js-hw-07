function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
const widgetBlock=document.querySelector(".widget")

function changeColor() {
  let randomHex = getRandomHexColor();
  spanText.textContent = randomHex;
  widgetBlock.style.backgroundColor=`${randomHex}`
}
button.addEventListener("click", changeColor);
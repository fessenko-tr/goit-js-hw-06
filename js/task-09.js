const btnBgRandomizer = document.querySelector(".change-color");
const bgColorText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnBgRandomizer.addEventListener("click", (e) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bgColorText.innerText = randomColor;
});

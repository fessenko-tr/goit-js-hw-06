const quantityInput = document.querySelector("input");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");
let boxesToCreate = 0;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = (amount) => {
  const boxes = [];
  let initiaBoxSize = 20;
  for (let i = 0; i < amount; i++) {
    initiaBoxSize += 10;
    const box = document.createElement("div");
    box.style.width = initiaBoxSize + "px";
    box.style.height = initiaBoxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxContainer.append(...boxes);
};

const destroyBoxes = () => {
  const existingBoxex = boxContainer.querySelectorAll("div");

  existingBoxex.forEach((el) => {
    el.remove();
  });
};

quantityInput.addEventListener("input", (e) => {
  const unserInput = e.currentTarget.value;
  boxesToCreate = unserInput === "" ? 0 : unserInput;
});

btnCreateRef.addEventListener("click", (e) => {
  createBoxes(boxesToCreate);
});
btnDestroyRef.addEventListener("click", destroyBoxes);

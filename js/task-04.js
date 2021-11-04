const counterValueRef = document.querySelector("#value");
const counterBtnDecrement = document.querySelector("[data-action=decrement]");
const counterBtnIncrement = document.querySelector("[data-action=increment]");

let counterValue = 0;

counterBtnIncrement.addEventListener("click", (e) => {
  counterValue += 1;
  updateValue();
});

counterBtnDecrement.addEventListener("click", (e) => {
  counterValue -= 1;
  updateValue();
});

const updateValue = () => {
  counterValueRef.innerHTML = counterValue;
};

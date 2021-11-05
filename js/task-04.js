const counterValueRef = document.querySelector("#value");
const counterBtnDecrement = document.querySelector("[data-action=decrement]");
const counterBtnIncrement = document.querySelector("[data-action=increment]");

let counterValue = 0;

const updateCounterValue = (dataAtr) => {
  dataAtr.dataset.action === "decrement" ? counterValue-- : counterValue++;
  counterValueRef.innerHTML = counterValue;
};

counterBtnIncrement.addEventListener("click", (e) => {
  updateCounterValue(counterBtnIncrement);
});

counterBtnDecrement.addEventListener("click", (e) => {
  updateCounterValue(counterBtnDecrement);
});

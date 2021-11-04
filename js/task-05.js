const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", (e) => {
  const currentInput = e.currentTarget.value;
  nameOutputRef.innerText = currentInput === "" ? "Anonymous" : currentInput;
});

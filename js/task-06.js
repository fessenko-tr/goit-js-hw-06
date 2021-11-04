const textInputRef = document.querySelector("#validation-input");

textInputRef.addEventListener("blur", (e) => {
  const currentInp = e.currentTarget;
  const currentLength = currentInp.value.length;

  if (currentLength > currentInp.dataset.length) {
    currentInp.classList.add("invalid");
    currentInp.classList.remove("valid");
  } else {
    currentInp.classList.add("valid");
    currentInp.classList.remove("invalid");
  }
});

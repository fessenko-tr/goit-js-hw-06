const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const pass = e.currentTarget.elements.password.value;
  const formData = new FormData(e.currentTarget);

  if (email === "" || pass === "") {
    alert("blanks are prohibited");
  } else {
    const dataFromUser = {};
    formData.forEach((value, name) => {
      dataFromUser[name] = value;
    });
    console.log(dataFromUser);
    e.currentTarget.reset();
  }
});

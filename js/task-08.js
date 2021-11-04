const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const pass = e.currentTarget.elements.password.value;

  if (email === "" || pass === "") {
    alert("blanks are prohibited");
  } else console.log(`email: ${email} \npassword: ${pass}`);

  e.currentTarget.reset();
});

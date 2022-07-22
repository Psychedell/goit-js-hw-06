const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(element) {
  element.preventDefault();
  const {
    elements: { email, password },
  } = element.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  element.currentTarget.reset();
}

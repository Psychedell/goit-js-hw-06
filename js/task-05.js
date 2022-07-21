const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", oninputElInput);

function oninputElInput(event) {
  spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  }
}

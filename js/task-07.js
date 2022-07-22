const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("change", onInputElChange);

function onInputElChange(element) {
  spanEl.style.fontSize = element.currentTarget.value + "px";
}

const inputEl = document.querySelector("#validation-input");

const dataAtributeLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", oninputElBlur);

function oninputElBlur(element) {
  const elementInputLength = element.currentTarget.value.trim().length;
  if (elementInputLength === dataAtributeLength) {
    classinvalidRemove(element);
    classValidAdd(element);
  } else {
    classValidRemove(element);
    classinvalidAdd(element);
  }
}

function classValidAdd(element) {
  element.currentTarget.classList.add("valid");
}

function classValidRemove(element) {
  element.currentTarget.classList.remove("valid");
}

function classinvalidAdd(element) {
  element.currentTarget.classList.add("invalid");
}

function classinvalidRemove(element) {
  element.currentTarget.classList.remove("invalid");
}

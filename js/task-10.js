function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsEl: document.querySelector("#controls"),
  controlsInputEl: document.querySelector("#controls > input"),
  buttonCreateEl: document.querySelector("#controls button[data-create]"),
  buttonDestroyEl: document.querySelector("#controls button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.controlsInputEl.addEventListener("input", getAmount);
refs.buttonCreateEl.addEventListener("click", createBoxes);
refs.buttonDestroyEl.addEventListener("click", onbuttonDestroyClick);

function onbuttonDestroyClick(element) {
  refs.boxesEl.innerHTML = "";
}

function getAmount(event) {
  const amount = event.currentTarget.value;
  console.log(amount);
}

function createBoxes(amount) {
  let newBox = document.createElement("div");
  newBox.style.height = "30px";
  newBox.style.width = "30px";
  newBox.style.backgroundColor = getRandomHexColor();
  console.log(newBox);
  refs.boxesEl.append(newBox);
  // increaseBoxes();

  for (let i = 0; i <= amount; i += 1) {}
}

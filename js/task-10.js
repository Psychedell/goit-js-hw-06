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

// refs.boxesEl.style.margin = "100px";

// refs.buttonCreateEl.setAttribute("type", "submit");

refs.controlsInputEl.addEventListener("input", boxQuantitytoAdd);
refs.buttonCreateEl.addEventListener("click", createBoxes);
// refs.buttonDestroyEl.addEventListener('click')
function boxQuantitytoAdd(event) {
  return event.currentTarget.value;
}

function createBoxes(boxQuantitytoAdd) {
  let newBox = document.createElement("div");
  newBox.style.height = "30px";
  newBox.style.width = "30px";
  newBox.style.backgroundColor = getRandomHexColor();
  console.log(newBox);
  refs.boxesEl.append(newBox);
  // increaseBoxes();

  for (let i = 0; i <= boxQuantitytoAdd; i += 1) {
    if (boxQuantitytoAdd > 1) {
      createBoxes;
    }
  }
}

// function increaseBoxes(boxQuantitytoAdd, createBoxes) {
//   for (let i = 0; i <= boxQuantitytoAdd; i += 1) {}
// }

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newItemsEl = document.querySelector("#ingredients");

const arrElements = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  return itemEl;
});

newItemsEl.append(...arrElements);

// const itemEl = document.createElement("li");
// itemEl.classList.add("item");
// itemEl.textContent = ingredients[0];
// console.log(itemEl);

// newItemsEl.append(itemEl);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newItemsEl = document.querySelector("#ingredients");

const makeIngredientsItems = (ingredients) => {
  return ingredients.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = element;
    return itemEl;
  });
};

const items = makeIngredientsItems(ingredients);
newItemsEl.prepend(...items);

// const arrElements = ingredients.map((element) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = element;
//   return itemEl;
// });

// newItemsEl.append(...arrElements);

// const itemEl = document.createElement("li");
// itemEl.classList.add("item");
// itemEl.textContent = ingredients[0];
// console.log(itemEl);

// newItemsEl.append(itemEl);

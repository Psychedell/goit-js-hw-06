const categoriesEl = document.querySelector("#categories");
const amountEl = categoriesEl.children.length;
console.log(`Number of categories: ${amountEl}`);

const textListEl = document.querySelectorAll("li > ul");
const finalResultEl = textListEl.forEach((item) => {
  const names = item.previousElementSibling.textContent;
  console.log(`Category: ${names}`);
  const length = item.children.length;
  console.log(`Elements: ${length}`);
});

// const categoriesChildrenEl = categoriesEl.children;
// for (const el of categoriesChildrenEl) {
//   const title = el.firstElementChild.textContent;
//   console.log(`Category: ${title}`);
// }

// const textListEl = document.querySelectorAll("li > ul");
// for (const el of textListEl) {
//   const titleInner = el.children.length;
//   console.log(titleInner);
// }

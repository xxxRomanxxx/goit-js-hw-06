const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');

const listElArr = [];

for (const element of ingredients) {
  const listEl = document.createElement('li');
  listEl.textContent = element;
  listEl.classList.add('item');
  listElArr.push(listEl);
}
listIngredients.append(...listElArr);

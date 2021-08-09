const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');


const createIngredientEl = ingredient => {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient;
  return itemEl
   
}

const createIngredientList = ingredients.map(createIngredientEl);
list.append(...createIngredientList);

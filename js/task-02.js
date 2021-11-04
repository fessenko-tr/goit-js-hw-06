const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const addIngredientsToList = (ingredients, list) => {
  const ingredientsList = [];

  ingredients.forEach((el) => {
    const ingredient = document.createElement("li");
    ingredient.innerText = el;
    ingredient.classList.add("item");
    ingredientsList.push(ingredient);
  });

  list.append(...ingredientsList);
};

addIngredientsToList(ingredients, ingredientsListRef);

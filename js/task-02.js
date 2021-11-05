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
  list.append(
    ...ingredients.map((el) => {
      const ingredient = document.createElement("li");
      ingredient.innerText = el;
      ingredient.classList.add("item");
      return ingredient;
    })
  );
};

addIngredientsToList(ingredients, ingredientsListRef);

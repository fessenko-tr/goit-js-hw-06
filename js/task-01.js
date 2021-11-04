const categoriesRef = document.querySelector("#categories");

const categoriesItemRef = categoriesRef.querySelectorAll(".item");

console.log;
categoriesItemRef.forEach(() => {
  console.log();
});

const printCategories = (items) => {
  console.log(`Number of categories: ${items.length}`);

  items.forEach((item) => {
    console.log("\n");
    console.log(`Category: ${item.querySelector("h2").innerText}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
  });
};

printCategories(categoriesItemRef);

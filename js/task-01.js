// Pobranie wszystkich elementów li.item z ul#categories
const categoriesList = document.querySelectorAll("#categories.item");

// Wyświetlenie liczby kategorii
console.log(`Number of categories: ${categoriesList.length}`);

// Iteracja po każdej kategorii
categoriesList.forEach((category) => {
  // Pobranie tytułu kategorii
  const categoryName = category.querySelector("h2").textContent;

  // Pobranie wszystkich elementów li w danej kategorii
  const categoryElements = category.querySelectorAll("ul li");

  // Wyświetlenie informacji o kategorii
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

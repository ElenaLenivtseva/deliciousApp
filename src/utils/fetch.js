export const getSomething = async (name, src, setFunction) => {
    const url = `${src}${name}`;
    const data = await fetch(url);
    const recipes = await data.json();
    setFunction(recipes.results);
}
// const getCuisine = async (name) => {
//   const data = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&cuisine=${name}`
//   );
//   const recipes = await data.json();
//   setCuisine(recipes.results);
// };

// const getSearched = async (name) => {
//   const data = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&query=${name}`
//   );
//   const recipes = await data.json();
//   setSearchedRecipes(recipes.results);
// };

// const getVeggie = async () => {
//   const check = localStorage.getItem("veggie");
//   if (check) {
//     setVeggie(JSON.parse(check));
//   } else {
//     const api = await fetch(
//       `https://api.spoonacular.com/recipes/random?apiKey=a75795e5e52d40d4ad16a13c53b75620&number=9&tags=vegetarian`
//     );
//     const data = await api.json();
//     localStorage.setItem("veggie", JSON.stringify(data.recipes));
//     setVeggie(data.recipes);
//   }
// };

// const getPopular = async () => {
//   const check = localStorage.getItem("popular");
//   if (check) {
//     setPopular(JSON.parse(check));
//   } else {
//     const api = await fetch(
//       `https://api.spoonacular.com/recipes/random?apiKey=a75795e5e52d40d4ad16a13c53b75620&number=9`
//     );
//     const data = await api.json();
//     localStorage.setItem("popular", JSON.stringify(data.recipes));
//     setPopular(data.recipes);
//   }
// };

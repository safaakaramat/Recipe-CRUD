import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (data) => {
    setRecipes([...recipes, data]);
  }
  const deleteRecipe = (recipe) => {
    const recipeIndex = recipes.findIndex(item => item.id === recipe.id);
    const newRecipes = recipes.filter((recipe, index) => index!==recipeIndex)
    setRecipes(newRecipes);
  }



  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;

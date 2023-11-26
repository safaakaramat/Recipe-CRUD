import React from "react";

function RecipeList({ recipes, deleteRecipe}) {

  const RecipeItem = ({ recipe }) => {
    const { name, cuisine, photo, ingredients, preparation } = recipe;



    return (
      <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img src={photo} alt={name} /></td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
      </tr>
    );
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

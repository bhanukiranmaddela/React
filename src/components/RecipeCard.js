import React from "react";
import  '../components/style.css'

function RecipeCard({ title, calories, image,ingredients }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <h3>Calories: {calories}</h3>
      <img alt={title} src={image} />
      <h3>Recipe</h3>
      <ul>
        {ingredients.map(e=><li>{e.text}</li>)}
      </ul>
    </div>
  );
}

export default RecipeCard;

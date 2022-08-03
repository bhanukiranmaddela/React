import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  const APP_ID = "3c1a";
  const APP_KEY = "938c806001c461";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    setRecipes([]);
    const example = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    await axios
      .get(example)
      .then((resp) => {
        setRecipes(resp.data.hits);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getSeach = (ev) => {
    ev.preventDefault();
    setQuery(search);
  };

  const changeText = (ev) => {
    setSearch(ev.target.value);
  };
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSeach}>
        <input
          className="search-bar"
          onChange={changeText}
          value={search}
          type="text"
        />
        <button onClick={getRecipes} className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((each) => {
          return (
            <RecipeCard
              key={each.recipe.label}
              title={each.recipe.label}
              calories={each.recipe.calories}
              image={each.recipe.image}
              ingredients={each.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

import React from "react";

import PreviousSearch from "../Components/PreviousSearch";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  // const recipes = [
  //   {
  //     title: "Fish Curry",
  //     image: "",
  //     authorImage: "",
  //   },
  // ].sort(() => Math.random() - 0.5);
  return (
    <>
      <PreviousSearch />
      <div className="recipes-container">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        {/* {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))} */}
      </div>
    </>
  );
};

export default Recipes;

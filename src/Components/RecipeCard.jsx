import React from "react";
import CustomImage from "./CustomImage";
import image from "../Images/fish.jpg";
import chief from "../Images/chief.png";
const RecipeCard = () => {
  return (
    <>
      <div className="recipe-card">
        <CustomImage imgSrc={image} />
        <div className="recipe-card-info">
          <img src={chief} alt="Top chief" className="author-img" />
          <p className="recipe-title">Fish Curry</p>
          <p className="recipe-desc">
            Very Easy and very delicious dish you can make
          </p>
          <a href="#" className="recipe-btn">
            VIEW RECIPE
          </a>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;

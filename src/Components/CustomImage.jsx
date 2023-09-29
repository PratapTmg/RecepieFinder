import React from "react";

const CustomImage = ({ imgSrc }) => {
  return (
    <div className="customImage">
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default CustomImage;

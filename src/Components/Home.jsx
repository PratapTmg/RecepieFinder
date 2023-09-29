import React from "react";
import CustomImage from "./CustomImage";
import Image1 from "../Images/breadSalad.jpg";
import Image2 from "../Images/burger.jpg";
import Image3 from "../Images/fish.jpg";

const Home = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image3,
    Image2,
    Image1,
    Image1,
    Image2,
    Image3,
  ];
  return (
    <>
      <div className="section home">
        <div className="column1 typography">
          <h1 className="title">What Are We About</h1>
          <p className="info">
            This the right place where you can find your dream food recepie. We
            provide Cost Free recepie service and you can explore different
            variety of recepie as your choice. So why waiting let's explore now.
          </p>
          <button className="btn">EXPLORE NOW</button>
        </div>
        <div className="column2 pictures-gal">
          {images.map((src, index) => (
            <CustomImage key={index} imgSrc={src} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

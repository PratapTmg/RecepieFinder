import React from "react";
import image from "../Images/fish.jpg";

const Improveskills = () => {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <>
      <div className="section improve-skills">
        <div className="column1 img">
          <img src={image} alt="Picture" />
        </div>
        <div className="column2 typography">
          <h1 className="title">Improve Your Cooking Skills</h1>
          <div className="listItems">
            {list.map((item, index) => (
              <p className="skill-item" key={index}>
                {item}
              </p>
            ))}
          </div>
          <button className="btn">SIGNUP NOW</button>
        </div>
      </div>
    </>
  );
};

export default Improveskills;

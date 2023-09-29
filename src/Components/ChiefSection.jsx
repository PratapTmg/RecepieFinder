import React from "react";
import ChiefCard from "./ChiefCard";

const ChiefSection = () => {
  // const chiefs = [
  //   {
  //     name: "John Don",
  //     recipiesCount: "10",
  //     cuisine: "Bulgaian",
  //   },
  // ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        {/* {chiefs.map((chief) => (
            <ChiefCard key={chief.name} chief={chief} />
          ))} */}
      </div>
    </div>
  );
};

export default ChiefSection;

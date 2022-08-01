import React from "react";
import RepCard from "./RepCard";

function RepContainer({ legislators }) {
  return (
    <div className= "cards">
      {
        legislators.map((legislator) => (
          <RepCard
            key={legislator.id.bioguide}
            legislator={legislator}
          />
        ))
      }
    </div>
  );
}

export default RepContainer;

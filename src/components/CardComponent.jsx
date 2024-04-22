import React from "react";
import Card from "./Card";

const CardComponent = ({ cardInfo }) => {
  return (
    <div className="container">
     
      <div className="inner_container">
        {cardInfo.map((currEle) => {
          return <Card key={currEle.id} cardData={currEle} />;
        })}
      </div>
    </div>
  );
};

export default CardComponent;

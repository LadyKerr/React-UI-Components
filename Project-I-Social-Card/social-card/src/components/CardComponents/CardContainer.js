import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;

//wrap entire carcontainer in an <a /> tag then use css to style text-decoration.

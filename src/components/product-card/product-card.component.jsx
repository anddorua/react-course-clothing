import "./product-card.component.scss";

import React from "react";
import Button from "../button/button.component";

export const ProductCard = ({ product: { name, price, imageUrl } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

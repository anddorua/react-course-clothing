import "./product-card.component.scss";

import React, { useContext } from "react";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartDrawerContext } from "../../contexts/cart-drawer.context";

export const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartDrawerContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <div className="name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

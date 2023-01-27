import "./checkout-item.component.scss";
import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cart.context";

export const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, price, quantity } = cartItem;
  const { decreaseQuantity, increaseQuantity, removeItem } =
    useContext(CartDrawerContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseQuantity(id)}>
          &#10095;
        </div>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

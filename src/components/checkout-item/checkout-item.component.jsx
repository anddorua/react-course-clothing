import "./checkout-item.component.scss";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/cart/cart.action";

export const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => dispatch(decreaseQuantity(id))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(increaseQuantity(id))}>
          &#10095;
        </div>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={() => dispatch(removeItem(id))}>
        &#10005;
      </div>
    </div>
  );
};

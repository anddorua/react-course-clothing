import "./checkout.component.scss";

import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { itemsSelector, totalSelector } from "../../store/cart/cart.selector";

export const Checkout = () => {
  const cartItems = useSelector(itemsSelector);
  const total = useSelector(totalSelector);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

import "./cart-dropdown.component.scss";
import "../button/button.component.scss";
import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cart-drawer.context";
import { CartItem } from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems, setOpened } = useContext(CartDrawerContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const onCheckoutLinkClickHandler = () => {
    setOpened(false);
    goToCheckoutHandler();
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button onClick={onCheckoutLinkClickHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

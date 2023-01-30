import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  StyledShoppingIcon,
  ItemCount,
} from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  itemsSelector,
  openedSelector,
} from "../../store/cart/cart.selector.js";
import { setOpened } from "../../store/cart/cart.action.js";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const opened = useSelector(openedSelector);
  const cartItems = useSelector(itemsSelector);

  const onClickHandler = () => {
    dispatch(setOpened(!opened));
  };

  return (
    <CartIconContainer onClick={onClickHandler}>
      <StyledShoppingIcon />
      <ItemCount>
        {cartItems.reduce((sum, { quantity }) => sum + quantity, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};

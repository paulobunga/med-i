import { changeItemQuantityInCart } from '../../utils/addItemToCart';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_CART':
      return {
        ...state,
        cartItems: changeItemQuantityInCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

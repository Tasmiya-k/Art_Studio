import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmound: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check whether item already exist in cart
      console.log("In create slice.js");
      console.log(state.cartItems);
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //if exist then increment the quantity else add the product to cart
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`One more ${state.cartItems[itemIndex].name} added`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} is added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //another reducer for removing item from the cart
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        //array which have all other cart items expect one which we will remove
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        //find item to be decreased
        (cartItem) => (cartItem.id = action.payload.id)
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(` Decreased ${action.payload.name} cart quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        //remove item from the cart
        const nextCartItems = state.cartItems.filter(
          //array which have all other cart items expect one which we will remove
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      }
    },
  },
});
//addToCart is action creator
export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;

//export cartslice reducer
export default cartSlice.reducer;

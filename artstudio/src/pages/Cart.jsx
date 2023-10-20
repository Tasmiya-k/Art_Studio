import { useGetAllProductsQuery } from "../features/ProductApi";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import CartCartTotal from "../components/CartCartTotal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../features/cartSlice";

export default function Cart() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <>
      <Navbar />
      <h1>Shopping Cart</h1>

      {cart.cartItems.length == 0 ? (
        <div className="cart-empty">
          <p>Your Cart is currently Empty</p>
          <div className="start-shopping">
            <span>Start Shopping</span>
          </div>
        </div>
      ) : (
        <div className="cart-body-main">
          <div className="card-body-left">
            {cart.cartItems?.map((cartItem) => (
              <div className="card-cart-main">
                <img src={cartItem.img} alt="item-img" className="cart-img" />
                <div className="card-cart-content">
                  <p className="item-title">{cartItem.name}</p>
                  <p className="item-desc">{cartItem.desc}</p>
                  <p className="item-price">{cartItem.price}</p>
                  <p className="item-desc"></p>
                  <p>In stock</p>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>
                    Remove
                  </button>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-body-right">
            <CartCartTotal />
          </div>
        </div>
      )}
    </>
  );
}

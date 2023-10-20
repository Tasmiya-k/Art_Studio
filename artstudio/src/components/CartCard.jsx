import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

export default function CartCard(props) {
  console.log(props);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  return (
    <div className="card-cart-main">
      <img src={props.image} alt="item-img" className="cart-img"></img>
      <div className="card-cart-content">
        <p className="item-title">{props.name}</p>
        <p className="item-desc">{props.desc}</p>
        <p className="item-price">
          {props.price !== undefined && props.price !== null
            ? "$" + props.price
            : "$40"}
        </p>
        <p className="item-desc"></p>
        <p>In stock</p>
        <button
          className="remove-button"
          onClick={() => handleRemoveFromCart(props)}
        >
          Remove
        </button>
        <div className="cart-product-quantity">
          <button>-</button>
          <div className="count">{props.quantity}</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

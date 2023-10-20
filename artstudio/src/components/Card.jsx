import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("In Cart");
  console.log(props);

  const handleAddToCart = (props) => {
    dispatch(addToCart(props));
    navigate("/cart");
  };
  return (
    <div className="card-main">
      <div className="card-row-1">
        <img src={props.img} className="card-img"></img>
        <div className="card-col-2">
          <div className="card-price">
            {props.price !== undefined && props.price !== null
              ? "$"+props.price
              : "$40"}
          </div>
          {/* <div className="card-quantity">1</div> */}
        </div>
      </div>

      <row>
        <h4 className="card-title">{props.name}</h4>
      </row>

      <div className="card-addcart" onClick={() => handleAddToCart(props)}>
        <img src="/Cart.png" className="card-cart-img" />
        <p className="cart-title">Add to cart</p>
      </div>
    </div>
  );
}

import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="profile-left">
        <img src="/Logo.png" className="logo"></img>
        <ul className="navitems">
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop" className="nav-link" activeClassName="active">
              SHOP
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              CONTACT
            </NavLink>
          </li>

          <li>
            <NavLink to="/aboutus" className="nav-link" activeClassName="active">
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </div>
      <SearchBar />
      <div className="profile-right">
        <img src="/Profile.png" className="profile-img"></img>
        <NavLink to="/cart">
        <img src="/Cart.png" className="profile-img"></img>
        </NavLink>
        {/* item quantity */}
        <span className="cart-quantity">0</span>                
      </div>
    </nav>
  );
}

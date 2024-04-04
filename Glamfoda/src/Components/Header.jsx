import { NavLink } from "react-router-dom";
import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="header">
      {/* title */}
      <div className="header__logo">
        <NavLink to="/">
          <ShoppingBagIcon />
        </NavLink>
        <h1 className="header__logo-name">Glamfoda.</h1>
      </div>
      {/* navigation */}
      <div className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kids</NavLink>
      </div>{" "}
      {/* cart */}
      <div className="header__cart">
        <div className="header__cart-icon">
          <HeartIcon />
          <span className="header__cart-label">1</span>
        </div>
        <div className="header__cart-icon">
          <NavLink to="/cart">
            <ShoppingCartIcon />
          </NavLink>
          <span className="header__cart-label">1</span>
        </div>
        <div className="header__bars">
          <Bars3Icon />
        </div>
      </div>
    </div>
  );
}

export default Header;

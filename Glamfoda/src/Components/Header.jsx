import { NavLink } from "react-router-dom";
import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="header">
      {/* title */}
      <div className="header__logo">
        <NavLink to="/">
          <ShoppingBagIcon />
        </NavLink>
        <h1 className="header__logo-name">Glamfoda</h1>
      </div>
      {/* navigation */}
      <div className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kids</NavLink>
      </div>{" "}
      {/* cart */}
      <div className="header__nav-side">
        <div className="header__navicon">
          <HeartIcon />
          <span className="header__navicon-label">1</span>
        </div>
        <div className="header__navicon">
          <NavLink to="/cart">
            <ShoppingCartIcon />
          </NavLink>
          <span className="header__navicon-label">1</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

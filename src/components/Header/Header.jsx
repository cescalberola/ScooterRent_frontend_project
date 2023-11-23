import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container-menu">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/rental" className="navbar-link">
              Rental
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">
              Shop
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/bag" className="navbar-link">
              Bag
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/support" className="navbar-link">
              Support
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/myaccount" className="navbar-link">
              My Account
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/logout" className="navbar-link">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

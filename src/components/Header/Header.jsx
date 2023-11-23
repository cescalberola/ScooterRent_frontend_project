import { Link } from "react-router-dom";
import "./Header.scss";
import 'boxicons';


const Header = () => {
  return (
    <div className="container-menu">
      <nav className="navbar">
        <ul className="header-container">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/rental" className="navbar-link">
              Rental
            </Link>
            <Link to="/shop" className="navbar-link">
              Shop
            </Link>
            <Link to="/bag" className="navbar-link">
            <box-icon name='shopping-bag'></box-icon>
            </Link>
            <Link to="/support" className="navbar-link">
              Support
            </Link>
            <Link to="/myaccount" className="navbar-link">
              My Account
            </Link>
            <Link to="/logout" className="navbar-link">
              Logout
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

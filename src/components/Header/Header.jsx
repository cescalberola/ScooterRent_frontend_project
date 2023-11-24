import { Link } from "react-router-dom";
import "./Header.scss";
import "boxicons";
import { useEffect, useLayoutEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const updateSize=()=>{
    if(window.innerWidth >= 768){
      setIsMenuOpen(true);
    }
  }
  
  window.addEventListener('resize', updateSize);


  const toggleMenu = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      return setIsMenuOpen(!isMenuOpen);
    }
    return setIsMenuOpen(isMenuOpen);
  };

  return (
    <div className="container-menu">
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <box-icon name={isMenuOpen ? "x" : "menu"}></box-icon>
      </div>
      {isMenuOpen && (
        <nav className="navbar">
          <ul className="header-container">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/rental" className="navbar-link" onClick={toggleMenu}>
              Rental
            </Link>
            <Link to="/shop" className="navbar-link" onClick={toggleMenu}>
              Shop
            </Link>
            <Link to="/bag" className="navbar-link" onClick={toggleMenu}>
              <box-icon name="shopping-bag"></box-icon>
            </Link>
            <Link to="/support" className="navbar-link" onClick={toggleMenu}>
              Support
            </Link>
            <Link to="/myaccount" className="navbar-link" onClick={toggleMenu}>
              My Account
            </Link>
            <Link to="/logout" className="navbar-link" onClick={toggleMenu}>
              Logout
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;

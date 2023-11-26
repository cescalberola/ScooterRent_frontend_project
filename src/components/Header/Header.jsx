import { Link } from "react-router-dom";
import "./Header.scss";
import "boxicons";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMenuOpen(window.innerWidth >= 768 || isMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="container-menu">
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <box-icon name={isMenuOpen ? "x" : "menu"}></box-icon>
      </div>
      {isMenuOpen && (
        <nav className="navbar">
          <ul className="header-container">
            <Link to="/" className="navbar-link" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/rental" className="navbar-link" onClick={handleLinkClick}>
              Rental
            </Link>
            <Link to="/shop" className="navbar-link" onClick={handleLinkClick}>
              Shop
            </Link>
            <Link to="/bag" className="navbar-link" onClick={handleLinkClick}>
              <box-icon name="shopping-bag"></box-icon>
            </Link>
            <Link to="/support" className="navbar-link" onClick={handleLinkClick}>
              Support
            </Link>
            <Link to="/myaccount" className="navbar-link" onClick={handleLinkClick}>
              My Account
            </Link>
            <Link to="/logout" className="navbar-link" onClick={handleLinkClick}>
              Logout
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;

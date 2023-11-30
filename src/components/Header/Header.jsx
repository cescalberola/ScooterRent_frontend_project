import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined, LogoutOutlined,LoginOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import "./Header.scss";
import logo from "../../assets/Sin título-1 copia.png";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="menuNav">
        <img src={logo} alt="Logo" className="logo" />
        
        <NavLink to="/products">
          <span className="linkText">Products</span><ThunderboltOutlined />
        </NavLink>
        <NavLink to="/cart">
          <span className="linkText">Cart</span>
          <Badge count={cart.length} size="medium">
            <ShoppingCartOutlined className="cartIcon" />
          </Badge>
        </NavLink>

        {user ? (
          <>
            <NavLink to="/myaccount">
              <span className="linkText">{user.FirstName}</span> <UserOutlined />
            </NavLink>
            <NavLink to="/login" onClick={logout}>
              <span className="linkText">Logout</span><LogoutOutlined />
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">
            <span className="linkText">Login</span> <LoginOutlined />
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Header;

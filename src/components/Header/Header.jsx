import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import "./Header.scss";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="menuNav">
        {user ? (
          <>
            <NavLink to="/myaccount">
              {user.FirstName} <UserOutlined />
            </NavLink>
            <NavLink to="/login" onClick={logout}>
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart
          <Badge count={cart.length} size="medium" >
          <ShoppingCartOutlined className="cartIcon" />
          </Badge>
        </NavLink>
      </div>
    </>
  );
};

export default Header;

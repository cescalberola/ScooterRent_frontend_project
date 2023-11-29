import React from "react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss"
import { Badge } from "antd";

const Header = () => {
  const { user,logout } = useContext(UserContext);
  const {cart}= useContext(ProductsContext);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  return (
    <>
    <div className="menuNav">
      {user ? (
        <>
          <NavLink to="/myaccount">
            {user.FirstName} <UserOutlined />
          </NavLink>
          <NavLink to="/login" onClick={logout}>Logout</NavLink>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
        )}
        <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart"> <Badge count={cart.length} size="small" > Cart<ShoppingCartOutlined /></Badge> </NavLink>
    </div>
    </>
  );
};

export default Header;
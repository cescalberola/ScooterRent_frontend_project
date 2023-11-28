import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const { user,logout } = useContext(UserContext);

  return (
    <div>
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
    </div>
  );
};

export default Header;
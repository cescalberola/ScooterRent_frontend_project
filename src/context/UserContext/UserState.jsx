import { useReducer } from "react";
import { createContext } from "react";
import UserReducer from "./UserReducer.js";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: token || null,
  user: user||null,
};

const API_URL = "http://localhost:8080/customers";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const signUp = async (valuesUser) => {
    const res = await axios.post(API_URL + "/register", valuesUser);
    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  };
  const login = async (valuesUser) => {
    const res = await axios.post(API_URL + "/login", valuesUser);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.customer));
    }
  };

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/info", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
        type:"LOGOUT"
    })
  
    if(res.data){
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        signUp,
        login,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
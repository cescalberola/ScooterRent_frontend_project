import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import MyAccount from "./components/MyAccount/MyAccount";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register"
import Cart from "./components/Cart/Cart";
import Rental from "./components/Rental/Rental";


function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;

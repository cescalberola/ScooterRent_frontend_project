import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Login from "./components/Login/Login";
import MyAccount from "./components/MyAccount/MyAccount";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register"
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
// import Rental from "./components/Rental/Rental";


function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
          <Header/>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myaccount" element={<MyAccount />} />
            {/* <Route path="/rental" element={<Rental />} /> */}
          </Routes>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;

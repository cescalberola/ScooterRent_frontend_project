import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";
import Rental from "./components/Rental/Rental.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Bag from "./components/Bag/Bag.jsx";
import Support from "./components/Support/Support.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import Home from "./components/Home/Home.jsx";
import Logout from "./components/Logout/Logout.jsx";
import { UserProvider } from "./context/UserContext/UserState";

const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Rental" element={<Rental />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Bag" element={<Bag />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;

import "./App.scss"
import Header from "./components/Header/Header.jsx";
import Rental from "./components/Rental/Rental.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Bag from "./components/Bag/Bag.jsx";
import Support from "./components/Support/Support.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Logout from "./components/Logout/Logout.jsx";

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rental" element={<Rental />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/Logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

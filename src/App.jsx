import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";
import Rental from "./components/Rental/Rental.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Bag from "./components/Bag/Bag.jsx";
import Support from "./components/Support/Support.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import Home from "./components/Home/Home.jsx";
import Logout from "./components/Logout/Logout.jsx";
import Register from "./components/Register/Register.jsx";

const items = [
  {
    name: "GripGuard Pro:",
    description: "A silicone-based handlebar grip that offers superior comfort and anti-slip properties.",
    img: "https://imgs.search.brave.com/PwR-KiXL1omnnN98QRDHjvZ4dm5hbhjzq6dfD-woWBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFLWjIrcUxVS1Mu/anBn",
    price: 10,
  },
  {
    name: "LED Lights",
    description:
      "High-intensity, weather-resistant LED lights designed to improve visibility and safety during.",
    img: "https://imgs.search.brave.com/u5KyqRZB1pXFmkfED4QBjFZq3Tm8lH2BiY-TT9Xcibc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yaWRl/b25lbGVjdHJpYy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvREFOQ1JB/LVNjb290ZXItTEVE/LVN0cmlwLUxpZ2h0/LmpwZw",
    price: 20,
  },
  {
    name: "SwiftLock Basket:",
    description: "A sturdy, collapsible basket attachment that securely holds belongings while riding.",
    img: "https://imgs.search.brave.com/Ez7y7yrRhQuaAOPZWaxveT_AebzkNcCbRuJuJCyF0EI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYzMzQzOS9maWxl/cy80NTg2MzkxMy83/Njh4NzY4eDMvc3dp/ZnQtaW5kdXN0cmll/cy1zd2lmdC1pbmR1/c3RyaWVzLWJhc2tl/dC1iYWcuanBn",
    price: 15,
  },
];

const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Rental" element={<Rental />} />
            <Route
              path="/Shop"
              element={<Shop menuObject={items} sectionTitle="Items 1" />}
            />
            <Route path="/Bag" element={<Bag />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;


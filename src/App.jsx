import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import MyAccount from "./components/MyAccount/MyAccount";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register"

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;

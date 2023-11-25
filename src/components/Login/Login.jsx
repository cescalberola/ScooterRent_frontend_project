import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

  
export const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (data.email.length < 3) {
      setMessage("El email tiene que tener como mínimo 3 caracteres");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login realizado con éxito");
    setTimeout(() => {
      setData(initialValue);
      navigate("/");
    }, 3000);
  };

  return (
  <div className="form-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
        value={data.email}
        className="form-input"
      />
      <input
        type="password"
        placeholder="password"
        onChange={handleInputChange}
        name="password"
        value={data.password}
        className="form-input"
      /><br></br>
      <button type="submit" disabled={btnDisabled} className="form-button">
        Login
      </button>
      <button type="submit" disabled={btnDisabled} className="form-button">
        Sign in
      </button>
      {message && (
        <p style={{ marginTop: "10px", color: "brown" }}>{message}</p>
      )}
    </form>
  </div>
); 
}

export default Login;
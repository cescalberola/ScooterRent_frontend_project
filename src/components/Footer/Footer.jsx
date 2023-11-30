import React from "react";
import { ThunderboltOutlined } from "@ant-design/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p>© {new Date().getFullYear()} VAL scooters</p>
        <p>
          <span>info@valscooters.com</span> 
        </p>
        <p>
          <span>+1234567890</span> 
        </p>
        <p>
          <span>Colón Street, 19, Valencia, Spain</span> 
        </p>
        <p>
          
          <a href="https://twitter.com/tunombredeempresa" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://instagram.com/tunombredeempresa" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;

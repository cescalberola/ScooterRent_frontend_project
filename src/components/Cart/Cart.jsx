import React, { useContext } from "react";
import { Button, Divider, List, Typography } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss";
import orderService from "../../services/OrderService";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { token } = useContext(UserContext);
  const data = cart.map((product) => ({
    model: product.Model,
    image: product.Img,
  }));
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <br />
      <List 
      
        header={<div>Products</div>}
        footer={
          <div className="container-buttons">
            <Button onClick={clearCart}>Clear Cart</Button>
            {token ? (
              <Button
                type="primary"
                onClick={() => {
                  orderService.createOrder(cart);
                  clearCart();
                }}
              >
                Create Order
              </Button>
            ) : (
              <Link to="/login">Go to login to shops</Link>
            )}
          </div>
        }
        bordered 
        dataSource={data}
        renderItem={(scooter) => (
          <List.Item>
            <img src={scooter.image} alt={scooter.model} style={{ marginLeft: '20px', marginRight: '20px', width: '50px', height: '50px' }} />
             {scooter.model}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;

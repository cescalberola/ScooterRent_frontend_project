import React, { useContext } from "react";
import { Button, Divider, List, Typography } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss"
import orderService from "../../services/OrderService";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const {token} = useContext(UserContext)
  const data = cart.map((product) => product.Model);
  return (
    <>
      <Divider orientation="left">Cart</Divider>
      <List
        header={<div>Products</div>}
        footer={
          <div className="container-buttons">
            <Button onClick={clearCart}>Clear Cart </Button>
            {token ?<Button type="primary" onClick={()=>{
                orderService.createOrder(cart)
                clearCart()
                }}>Create Order</Button>:<Link to="/login">Go to login to shops</Link>}
            
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>Name product:</Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  );
};

export default Cart;

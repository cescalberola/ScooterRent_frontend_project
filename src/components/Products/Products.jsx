import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Card } from "antd";
import "./Products.scss"
import {ShoppingCartOutlined} from "@ant-design/icons"
const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
    <div className="scooter-container">
    <div className='scooter-container-row'>
      {products.map((product) => {
        return (
          
          <Card
          title={product.Brand}
          bordered={true}
          style={{
            width: 300
          }}
          key={product.id}
        >
          <p>{product.Model}</p>
          <img src={product.Img} alt={product.Model} style={{ width: '100%', height: 'auto' }} />
          <p>{product.Price} €</p>
          <Button onClick={() => addCart(product)}>Add Cart <ShoppingCartOutlined /></Button>
        </Card>
        );
      })}
      </div>
    </div>
    </>
  );
};

export default Products;
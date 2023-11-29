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
    <div className="products-container">
      {products.map((product) => {
        console.log(product)
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
              <p>{product.Price}</p>
              <Button onClick={()=>addCart(product)}>Add Cart  <ShoppingCartOutlined /></Button>
             
            </Card>
        );
      })}
    </div>
    </>
  );
};

export default Products;
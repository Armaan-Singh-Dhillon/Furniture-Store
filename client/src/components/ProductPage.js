import React, { useContext, useState } from "react";
import styled from "styled-components";
import QuantityCounter from "./QuantityCounter";
import MyContext from "../MyContext";
import { Link } from "react-router-dom";
const ProductPage = (data) => {
  const product = data.product;
  const { cartItems, setCartItems, total, setTotal } = useContext(MyContext);
  const { id, name, price, image, company, description } = product;
  const [quantity, setQuantity] = useState(0);
  const clickHandler = () => {
    setCartItems([
      ...cartItems,
      { id, name, price, image, company, description, quantity },
    ]);
  };
  const obj = {
    quantity,
    setQuantity,
  };
  return (
    <>
      <Wrapper>
        <div className="product-page">
          <div className="product-image">
            <img src={image} alt="product" />
          </div>
          <div className="product-info">
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>

            <div> Price : -${price}</div>
            <div className="product-quantity">
              <QuantityCounter data={obj}></QuantityCounter>
            </div>
            <div>Company : {company}</div>
            <div>
              <button className="btn" onClick={clickHandler}>
                Add to Cart
              </button>
              <Link to="/cart">
                <button className="btn">Check Out Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .btn {
    padding: 0.3rem;
    border-radius: 0;
  }
  .product-info {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.2rem;
    margin: 1.2rem;
  }
  .product-page {
    display: flex;
    margin: 1.2rem;
    background: aliceblue;
  }

  .product-image {
    height: auto;
    object-fit: cover;
  }
`;

export default ProductPage;

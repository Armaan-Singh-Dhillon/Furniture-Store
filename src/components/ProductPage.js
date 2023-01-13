import React, { useState } from "react";
import styled from "styled-components";
import QuantityCounter from "./QuantityCounter";
const ProductPage = (data) => {
  const product = data.product;
  const { id, name, price, image, company, description } = product;
  console.log(id, name, price, image, company, description);
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
              <QuantityCounter></QuantityCounter>
            </div>
            <div>Company : {company}</div>
            <div>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .btn {
    margin: 0;
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

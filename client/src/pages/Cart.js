import styled from "styled-components";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, setCartItems, total, setTotal } = useContext(MyContext);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems.length]);

  const ClickHandler = (elId) => {
    setCartItems(
      cartItems.filter(({ id }) => {
        return elId != id;
      })
    );
  };

  if (cartItems.length == 0) {
    return (
      <>
        <Wrapper1>
          <div className="main">
            <div>Your Cart IS Empty</div>
            <div>
              <Link to="/products">
                <button className="btn">Fill it</button>
              </Link>
            </div>
          </div>
        </Wrapper1>
      </>
    );
  } else {
    return (
      <>
        <Wrapper>
          {cartItems.map(
            ({ id, name, price, image, company, description, quantity }) => {
              return (
                <>
                  <div className="container">
                    <div className="category">
                      <div className="holders">
                        <h3>Items</h3>
                        <div className="image-container">
                          <img src={image} alt="" />
                        </div>
                        <div>{name}</div>
                      </div>
                      <div className="holders">
                        <h3>Price</h3>
                        <div className="inner-holder">-$ {price}</div>
                      </div>

                      <div className="holders">
                        <h3>Quantity</h3>
                        <div className="inner-holder">{quantity}</div>
                      </div>
                      <div className="holders">
                        <h3>Subtotal</h3>
                        <div className="inner-holder">-$3389</div>
                      </div>
                      <div className="holders">
                        <h3>Remove-item</h3>
                        <div className="inner-holder">
                          <button
                            className="btn"
                            onClick={() => ClickHandler(id)}
                          >
                            <BsTrashFill></BsTrashFill>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  ;
                </>
              );
            }
          )}
        </Wrapper>
      </>
    );
  }
};

const Wrapper = styled.div`
  .btn {
    margin: 0;
    padding: 0;
    border-radius: 0;
    display: flex;
    background: aliceblue;
    color: #39a1ae;
  }
  .inner-holder {
    margin: 1.2rem;
  }
  .holders {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: center;
    width: 25%;
  }
  .image-container {
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .category {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
  }
  .container {
    display: flex;
    margin: 0 1.4rem;
    background: aliceblue;
    flex-direction: column;
  }
`;
const Wrapper1 = styled.div`
  .main {
    display: flex;
    margin: 1.4rem;
    background: blanchedalmond;
    height: 30vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.8rem;
  }
`;
export default Cart;

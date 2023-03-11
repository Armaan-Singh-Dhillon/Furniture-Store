import styled from "styled-components";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, setCartItems} = useContext(MyContext);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems.length]);

  const clickHandler = (e) => {
    e.preventDefault()
    const elId= e.target.value
    setCartItems(
      cartItems.filter(({ _id }) => {
        return  _id!= elId;
      })
    );
  };
  let total = 0

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
          <div className="container">
            <div className="head">
              <h1>Your Cart</h1>
            </div>
          {cartItems.map(
            ({ _id, name, price, image,quantity ,subtotal }) => {
              total=total+subtotal
              return (
                <>
                  
                    <div className="category">
                      <div className="holders">
                        <h3>Items</h3>
                        <div className="image-container">
                          <Link to={`/products/${_id}`}>
                            <img src={image} alt="" />
                          </Link>
                          
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
                        <div className="inner-holder">-${subtotal}</div>
                      </div>
                      <div className="holders">
                        <h3>Remove-item</h3>
                        <div className="inner-holder">
                          <button className="btn" value={_id} onClick={(e)=>clickHandler(e)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  
                  ;
                </>
              );
            }
          )}
        </div>
        </Wrapper>
      </>
    );
  }
};

const Wrapper = styled.div`
.head{
  display: flex;
  justify-content: space-evenly;
}
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
    width: 100%;
  }

  .image-container img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: 1.2rem;
    transition: all 0.2s;
    :hover{
      opacity: 0.5;
      scale: 1.05;
    }
  }
  
  .category {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
  }
  .container {
    display: flex;
    margin: 1.4rem;
    background: aliceblue;
    flex-direction: column;
  }
`;
const Wrapper1 = styled.div`
  .main {
    display: flex;
    margin: 1.4rem;
    background: aliceblue;
    height: 30vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.8rem;
  }
  
`;
export default Cart;

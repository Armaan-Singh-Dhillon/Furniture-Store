import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import QuantityCounter from "./QuantityCounter";
import MyContext from "../MyContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Star from "./Star";
import Loader from './Loader'
import { useNavigate } from "react-router-dom";
import { GrFormSubtract } from 'react-icons/gr';
import { GrFormAdd } from 'react-icons/gr';
const ProductPage = (data) => {
  const navigate = useNavigate()
  const { _id } = data
  const { user, cartItems, setCartItems } = useContext(MyContext);
  const [product, setproduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [reviews, setReviews] = useState([])
  const [showModal, setModal] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const fetchData = async () => {
    const { data } = await axios.post('http://localhost:2000/api/v1/products/get', { _id })
    setproduct(data.data)
    setLoading(false)
    setReviews(data.data.reviews)

  }
  useEffect(() => {
    fetchData()
  }, [])
  const clickHandler = () => {
    setModal(!showModal)
  }
  const [formData, setFormData] = useState({
    username: '' || user.name,
    rating: '',
    comment: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData(prevState => ({ ...prevState, [name]: value }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { reviews } = product
    reviews = [...reviews, formData]
    await axios.post('http://localhost:2000/api/v1/products/reviews', { _id, reviews })
    setModal(!showModal)
    fetchData()

  };
  const deleteHandler = async (e) => {
    e.preventDefault();
    let { reviews } = product
    reviews = reviews.filter((el) => {
      return el._id != e.target.value
    })
    await axios.post('http://localhost:2000/api/v1/products/reviews', { _id, reviews })
    fetchData()
  }
  const addCart = () => {
    product["quantity"]=quantity
    product["subtotal"]=quantity*product.price

    console.log(product)
    setCartItems([...cartItems, product])
    // navigate('/cart')
  }

  if (loading) {
    return <Loader></Loader>
  }
  else {
    const { image, description, price, name, company } = product

    return (
      <>
        <Wrapper>
          <div className={`product-page ${showModal ? 'transparent' : ''}`}>
            <div className="upper">


              <div className="product-image">
                <img src={image} alt="product" />
              </div>
              <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>

                <div> Price : -${price}</div>
                <div className="product-quantity">

                </div>
                <div>Company : {company}</div>
                <div>
                  Quantitiy
                  <div className="counter">
                    <GrFormSubtract className="add-sub" onClick={() => setQuantity(quantity - 1)}></GrFormSubtract>
                    <div className="qunat">

                      {quantity}
                    </div>
                    <GrFormAdd className="add-sub" onClick={()=>setQuantity(quantity+1)}></GrFormAdd>

                  </div>
                </div>
                <div>
                  <button className="btn" onClick={addCart}>
                    Add to Cart
                  </button>
                  <Link to="/cart">
                    <button className="btn">Check Out Cart</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="reviews">

              <div className="title">
                {reviews.length != 0 ? <h1>Reviews</h1> : <h1>No reviews for this product</h1>}

              </div>



              {reviews.map((el) => {
                console.log(el._id)
                console.log(user._id)
                return <>
                  <div className="review-card">
                    <div className="review-head">

                      <h2>

                        {el.username}
                      </h2>

                      <Star stars={el.rating}></Star>
                    </div>
                    <div className="review-comment">
                      "{el.comment}"
                    </div>
                    <div>

                    </div>
                    <button value={el._id} className="btn" onClick={(e) => deleteHandler(e)}>Delete</button>
                  </div>
                </>
              })}

            </div>

            <div>

              <button className="btn" onClick={clickHandler}>

                Add review
              </button>
            </div>
          </div>

          <div className={`main ${showModal ? '' : 'none'}`}>
            <h1>Thanks for giving feedback</h1>
            <form onSubmit={handleSubmit}  >

              <div className='form'>


                <div className='item'>
                  <label>
                    Name:
                  </label>
                  <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Name' />
                </div>



                <div className='item'>


                  <label>
                    Rating:
                  </label>
                  <input type="number" name="rating" value={formData.rating} onChange={handleChange} />

                </div>
                <div className='item'>
                  <label>
                    Comment:
                  </label>
                  <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
                </div>


                <div>

                  <button type="submit" className='btn btnm'>Submit</button>
                </div>
              </div>



            </form>
            <div>

              <button className="btntext " onClick={clickHandler}>Go back</button>
            </div>
          </div>


        </Wrapper>
      </>
    );
  }

};

const Wrapper = styled.div`
.add-sub{
  background-color: white;
  color: #39A1AE;
  font-size: 1.2rem;
}
.counter{
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
}

.btntext{
  background: none;
  color: #39A1AE;
  border: none;
  font-size: 1.2rem;
  padding-top:1.2rem;
  margin: 1.2rem;
  :hover{
    cursor: pointer;
  }
}
.main{
  position: absolute;
  top: 20%;
  display: flex;
  width: 35rem;
  left: 35%;
  padding: 6rem;
  background-color: aliceblue;
  flex-direction: column;
  
  
  
}
.review-card{
  margin: 1.8rem 1.4rem;
  
}
.review-comment{
  font-size: 1.4rem;
}
.review-head{
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;
}
.title{
  display: flex;
  justify-content: space-evenly;
}
.reviews{
  background-color: aliceblue;
  padding: 1.4rem;
}
.upper{
    display: flex;
    
    margin: 1.2rem;
    background: aliceblue;
}
  
  .product-info {
    padding: 1.8rem;
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.4rem;
    margin: 1.2rem;
  }
  .product-page {
    display: flex;
    flex-direction: column;
    margin: 1.2rem;
    background: aliceblue;
    
  }
  .transparent{
    opacity: 0.2;
  }
  .none{
    display: none;
  }


  input{
    padding: 1.2rem;
    width: 60%;
    font-size: 1.4rem;
}
form{
  
  font-size: 1.2rem;
}
.item{
  display: flex;
  justify-content: space-between;
   align-items: center; 
   margin: 1.2rem;
}
img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
    border-radius: 1.2rem;
  }
  img:hover {
    opacity: 80%;
    cursor: pointer;
  }
.product-image{
  width: 50%;
}
`;

export default ProductPage;

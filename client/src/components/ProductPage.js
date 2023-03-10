import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import QuantityCounter from "./QuantityCounter";
import MyContext from "../MyContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Star from "./Star";


const ProductPage = (data) => {
  const { _id } = data
  const { user } = useContext(MyContext);
  const [product, setproduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [reviews, setReviews] = useState([])
  const [showModal, setModal] = useState(false)
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

  }
  const [formData, setFormData] = useState({
    username: '',
    rating: '',
    comment: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData(prevState => ({ ...prevState, [name]: value }));
    
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let {reviews}= product 
    reviews=[...reviews,formData]
    await axios.post('http://localhost:2000/api/v1/products/reviews',{_id,reviews})
   
  };
  const deleteHandler=async(e)=>{
    e.preventDefault();
    let { reviews } = product
    reviews = reviews.filter((el)=>{
        return el._id!=e.target.value
    })
    await axios.post('http://localhost:2000/api/v1/products/reviews', { _id, reviews })
  }

  if (loading) {
    return <h1>Loading</h1>
  }
  else {
    const { image, description, price, name, company } = product

    return (
      <>
        <Wrapper>
          <div className="product-page">
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
                  <button className="btn" >
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
                    <button value={el._id} className="btn" onClick={(e)=>deleteHandler(e)}>Delete</button>
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

          <div className='main'>
            <form onSubmit={handleSubmit}  >
              
              <div className='form'>


                <div className='item'>
                  <label>
                    Name:
                  </label>
                  <input type="text" name="username" value={formData.username} onChange={handleChange} />
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

                  <button type="submit" className='btn'>Submit</button>
                </div>
              </div>

            </form>
          </div>


        </Wrapper>
      </>
    );
  }

};

const Wrapper = styled.div`
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

  .product-image {
    height: auto;
    object-fit: cover;
  }
  input{
    padding: 1.2rem;
    width: 60%;
    font-size: 1.4rem;
}
.main{
  
  display: flex;
}
form{
  width: 50%;
  font-size: 1.2rem;
}
.item{
  display: flex;
  justify-content: space-between;
   align-items: center; 
}


`;

export default ProductPage;

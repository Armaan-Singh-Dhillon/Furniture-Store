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
import refurbished from '../assets/refurbished.jpg';
import newsvg from '../assets/new.svg'
import no_termite from '../assets/notermite.png'
import norefund from '../assets/refund.png'
import refund from '../assets/refund.svg'
import termite from '../assets/termite.png'


const ProductPage = (data) => {
  const navigate = useNavigate()
  const { _id } = data
  const { user, cartItems, setCartItems } = useContext(MyContext);
  const [product, setproduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [reviews, setReviews] = useState([])
  const [showModal, setModal] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:2000/api/v1/products/get/${_id}`)
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
    product["quantity"] = quantity
    product["subtotal"] = quantity * product.price

    
    setCartItems([...cartItems, product])
    // navigate('/cart')
  }
  const add = () => {
    setQuantity(quantity + 1)
  }
  const sub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // add 1 to convert from 0-indexed to 1-indexed
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2); // extract the last 2 digits of the year
    return `${month}/${day}/${year}`;
  }

  if (loading) {
    return <Loader></Loader>
  }
  else {
    const { image, description, price, name, company, averageRating, offers, termiteResistant, refundable ,used } = product
    
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
                <div className="stars properites">
                  <Star stars={averageRating}></Star>
                <div>

                  {averageRating}
                  </div>
                </div>
             
                <div className="properites"> Price : -${price}</div>
                <div className="properites">
                 {offers.map((el)=>{
                  console.log(el)
                  return <>
                    <div className="price ">
                      <div>
                        {el.offerName}
                      </div>
                      <div>

                        -{el.discount}
                      </div>
                      <div>
                        Available
                      </div>
                    </div>
                 
                  </>
                 })}
                </div>

                <div className="properites">
                  Product Desciption: {description}
                  </div>

                
                
                <div className="properites">Company : {company}</div>
                <div className="properites">
                  Quantitiy
                  <div className="counter">
                    <GrFormSubtract className="add-sub" onClick={() => sub()}></GrFormSubtract>
                    <div className="qunat">

                      {quantity}
                    </div>
                    <GrFormAdd className="add-sub" onClick={() => add()}></GrFormAdd>

                  </div>
                  <div>
                    Woodtype : {product.woodType.length != 0 ? product.woodType.map(el => el + '  ') : 'Engineered'}
                  </div>
                  <div className="stickers">

                  {termiteResistant == "Yes" ? <>
                    <div className="contain">

                      <img className="props" src={no_termite} alt="" />

                    </div>
                  </> : <>
                  <div className="contain">
                          <img className="props" src={termite} alt="" />
                  </div>
                  
                       
                  </>}
                  {refundable == "true" ? <>
                    <div className="contain">

                        <img className="props" src={refund} alt="" />

                    </div>
                  </> : <>
                  <div className="contain">

                          <img className="props" src={norefund}
                            alt="" />
                  </div>
                  
                  </>}
                  {used == "false" ? <>
                    <div className="contain">

                        <img className="props" src={newsvg} alt="" />

                    </div>
                  </> : <>
                  <div className="contain">
                          <img className="props" src={refurbished}
                            alt="" />

                  </div>
                  
                        
                  </>}

                  </div>
                </div>
                <div className="btn-section">
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
               
                return <>
                  <div className="review-card">
                    <div className="review-head">

                      <h2>

                        {el.username}
                      </h2>

                      <div >
                        <h2>

                          {formatDate(el.date)}
                        </h2>
                      </div>

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
.stickers{
  display: flex;
 
 justify-content: left;
}


.btn-section{
  display: flex;
  justify-content: center;
}

h2{
  margin: 0;
  padding: 0;
}

.properites{
  font-size: 1.6rem;
  margin: 1.4rem ;
}
.price{
    display: flex;
  width: 30%;
  justify-content: space-between;
}
.stars{
  display: flex;
  width: 20%;
  justify-content: space-between;
}
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
  position:fixed;
  top: 15%;
  left: 20%;
  padding: 6rem;
  background-color: aliceblue;
  flex-direction: column;
  width: 50%;

  
  
  
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
  width: 55%;
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
  position: sticky;
  top: 0;
}
.props{
    height: 8rem;
    object-fit: contain;
    border-radius: 1.2rem;
}
.contain{
 margin-right: 1.8rem;
 margin-top: 1.2rem;
}
`;

export default ProductPage;

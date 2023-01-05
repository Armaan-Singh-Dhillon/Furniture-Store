
import styled from "styled-components";
import {Link} from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import {useState} from "react";




const Navbar=()=>{

    return <>
    <Nav >

        <div className="header">
            <Link to='/'>

            <img src="http://www.furniture-wirral.com/wp-content/uploads/2018/02/furniture_shop_liscard_logo.png" alt=""/>
            </Link>
        </div>

        <div className="body">
            <div>
               <Link to={'/'}className='links'> <h4>Home</h4>  </Link>
            </div>
            <div>
                <Link to={'/about' }className='links'> <h4>About</h4> </Link>

            </div>
            <div>

                <Link to={'/products'} className='links'> <h4>Products</h4> </Link>
            </div>
        </div>


        <div className="footer">
            <div className='cart'>
                <Link to={'/products'} className='links'> <BsFillCartFill className='carti'></BsFillCartFill> </Link>

            </div>
            <div className='cart'>
                <Link to={'/products'} className='links'> <FaUserAlt className='carti'></FaUserAlt></Link>

            </div>
        </div>




    </Nav>

    </>
}
const Nav=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 1.2rem 0 1.2rem;
  .body{
    width: 55%;
    display: flex;
    justify-content: space-around;
  }
  h4{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }
  .links{
    text-decoration: none;
    color: #282c34;
    
  }
  .links :hover{
    color: #61dafb;
  }
  .header{
    width: 25%;
  }
  .header img{
    width: 100%;
    
  }
  .footer {
    display: flex;
    align-content: center;
    width: 15%;
    
  }
  
  .cart{
    width: 50%;
  }
  .carti{
    width: 100%;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 900px) {
   
    .footer{
      
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {

    .body{
      
      display: none;
    }
    .header{
      width: 50%;
      
    }
    
  }


`

export default Navbar
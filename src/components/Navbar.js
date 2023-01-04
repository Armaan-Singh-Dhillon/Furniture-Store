
import styled from "styled-components";
import {Link} from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

const Navbar=()=>{
    return <>
    <Nav>
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
                <Link to={'/about' }className='links'> <h4>about</h4> </Link>

            </div>
            <div>

                <Link to={'/products'} className='links'> <h4>products</h4> </Link>
            </div>
        </div>
        <div className="footer">
            <div className='cart'>

            <BsFillCartFill className='carti'></BsFillCartFill>
            </div>
            <div className='cart'>

                <FaUserAlt className='carti'></FaUserAlt>
            </div>
        </div>

    </Nav>

    </>
}
const Nav=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .body{
    width: 55%;
    display: flex;
    justify-content: space-evenly;
  }
  h4{
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
  }
  .links{
    text-decoration: none;
    color: #282c34;
  }
  .header {
    width: 24%;
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
  
  
  
  
`

export default Navbar
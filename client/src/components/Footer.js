
import styled from "styled-components";
import { AiFillFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiFillYoutube } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import {Link} from "react-router-dom";
const Footer=()=>{
    return <>
    <Wrapper>

     <div className='follow'>
         <div><h2>Follow Us On:</h2></div>
         <div className='icons'>
             <AiFillFacebook className='ic'></AiFillFacebook>
             <FiTwitter className='ic'></FiTwitter>
             <AiFillYoutube className='ic'></AiFillYoutube>
             <FiInstagram className='ic'></FiInstagram>
             <AiFillLinkedin className='ic'></AiFillLinkedin>
             <BsPinterest className='ic'></BsPinterest>
         </div>
     </div>


    </Wrapper>
    </>
}

const Wrapper=styled.footer`
  .ic:hover{
    color: #39A1AE;
    cursor: pointer;
  }
  
  .icons{
   width :40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.6em;
  }
  .follow{
    width: 100%;
    display: flex;
    
    justify-content: space-evenly;
  }
 
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  background-color: black;
  margin: 0 1.2rem;
  color: white;
  text-align: center;
  font-size: 1rem;
`
export default Footer
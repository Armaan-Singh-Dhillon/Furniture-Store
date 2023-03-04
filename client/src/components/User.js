import styled from "styled-components"
import { useContext } from "react";
import userImage from '../assets/user.png'
import MyContext from "../MyContext";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
const User = () => {
  const { user ,token } = useContext(MyContext);
  const navigate =useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[])
  return (
    <>
      <Wrapper>

        <div className="main">
          <div className="photo">
            <img src={userImage} alt="" />
          </div>
          <div className="address-section">
            <div className="name">
              <div>
                Name:
              </div>
              <div>
                Email:
              </div>
              <div>
                Mobile:
              </div>
            </div>
            <div className="address">
              <div>
                address 1
              </div>
              <div>
                address 2
              </div>



            </div>
          </div>

        </div>
        <div className="lower">
          <div className="section">
            <div >
              <Link to='/user/product' className="links">
              Your Products/Furniture
              </Link>
            </div>
            <div >
              <Link to='/user/order' className="links">
              Orders
              </Link>
            </div>
            <div >
              <Link to='/user/offer' className="links">
              Offers And Coupons
              </Link>
            </div>
            <div >
              <Link to='/user/edit' className="links">
              Edit Profile
              </Link>
            </div>
            <div >
              <button className="btn">Logout</button>
            </div>
          </div>
          <div className="outlet">
           <Outlet/>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
.links{
  color:#39A1AE ;
  margin: 0.8rem;
  text-decoration: none;
}
.links:hover{
  cursor: pointer;
}
.outlet{
  width: 80%;
}
.section{
  width:20%
  
}
.lower{
    background-color: aliceblue;
    opacity: 0.8;
  font-size: 1.8rem;
  display: flex;
  margin: 0 1.4rem ;
  padding: 1.4rem;
}
.address{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.name{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.address-section{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
img{
  width: 60%;
}

.main{
  background-color: aliceblue;
  font-size: 1.8rem;
  display: flex;
  margin: 1.4rem 1.4rem 0 1.4rem;
  padding: 1.4rem;
}
`
export default User
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import mainLogo from '../logos/furniture_shop_liscard_logo.png'

import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="header">
          <Link to="/">
            <img
              src={mainLogo}
              alt=""
            />
          </Link>
        </div>

        <div className="body">
          <div>
            <Link to={"/"} className="links">
              {" "}
              <h4>Home</h4>{" "}
            </Link>
          </div>
          <div>
            <Link to={"/about"} className="links">
              {" "}
              <h4>About</h4>{" "}
            </Link>
          </div>
          <div>
            <Link to={"/products"} className="links">
              {" "}
              <h4>Products</h4>{" "}
            </Link>
          </div>
        </div>

        <div className="footer">
          <div className="cart">
            <Link to="/cart" className="links">
              
              <BsFillCartFill className="carti"></BsFillCartFill>
            </Link>
          </div>
          <div className="cart">
            <Link to="/login" className="links">
              
              <FaUserAlt className="carti"></FaUserAlt>
            </Link>
          </div>
        </div>
      </Nav>
    </>
  );
};
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 1.4rem;
  background: aliceblue;
  .body {
    width: 55%;
    display: flex;
    justify-content: space-around;
  }
  h4 {
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
  }
  .links {
    text-decoration: none;
    color: #282c34;
  }
  .links :hover {
    color: #39a1ae;
  }
  .header {
    width: 25%;
  }
  .header img {
    width: 100%;
  }
  .footer {
    display: flex;
    align-content: center;
    width: 15%;
  }

  .cart {
    width: 50%;
  }
  .carti {
    width: 100%;
    font-size: 2rem;
  }
  @media only screen and (max-width: 900px) {
    .footer {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .body {
      display: none;
    }
    .header {
      width: 50%;
    }
  }
`;

export default Navbar;

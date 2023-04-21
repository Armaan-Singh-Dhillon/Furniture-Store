
import styled from "styled-components";
import appStores from '../assets/appstores.jpg'
import mastercard from '../assets/mastercard-svgrepo-com.svg'
import visa from '../assets/visa-svgrepo-com.svg'
import maestro from '../assets/maestro-svgrepo-com.svg'
import wallet from '../assets/wallet-svgrepo-com.svg'
import netbanking from '../assets/samsung-internet-browser-svgrepo-com.svg'
import insta from '../assets/instagram-1-svgrepo-com.svg'
import facebook from '../assets/facebook-svgrepo-com.svg'
import youtube from '../assets/youtube-svgrepo-com.svg'
import twitter from '../assets/twitter-svgrepo-com.svg'
import linkdin from '../assets/linkedin-svgrepo-com.svg'
const Footer = () => {
  return <>
    <Wrapper>
      <Wrapper3>
        <div className="letter">
          <div className="text1">
            <div>
              <h1>Join Our Newsletter</h1>
              <p>
                Stay updated with our latest collections and exclusive discounts
                by joining our newsletter! Simply enter your email address below
                and hit 'Subscribe' to receive updates on sales and new
                arrivals. As a thank you for subscribing, you'll also receive a
                special discount code to use on your next purchase
              </p>
            </div>
          </div>
          <div className="text">
            <div className="inner">
              <form action="">
                <input type="email" placeholder="Enter Email" />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Wrapper3>
      <hr />
      <div className='follow'>
        <div className="card">
          <h2>Corporate</h2>
          <p>About Us</p>
          <p> Corporate Governance</p>
          <p> The Furniture Shop in the News</p>
          <p> Careers</p>
        </div>
        <div className="card">
          <h2>Corporate</h2>
          <p>About Us</p>
          <p> Corporate Governance</p>
          <p> The Furniture Shop in the News</p>
          <p> Careers</p>
        </div>
        <div className="card">
          <h2>Useful Links</h2>
          <p>Explore Gift Cards</p>
          <p> Buy in Bulk</p>
          <p> Discover Our Brands</p>
          <p> Find a Studio</p>
        </div>
        <div className="card">
          <h2>Partner With Us</h2>
          <p>Become a franchise</p>
          <p> Our Market Policies</p>
          <p> Become Our Channel Partner</p>

        </div>
        <div className="card">
          <h2>Need Help ?</h2>
          <p>FAQs</p>
          <p> Policies</p>
          <p> Contact Us</p>

        </div>
        <div className="card">

          <img src={appStores} alt="" />

        </div>

      </div>
    
      <div className="foot">
        <div className="card-containers">
          <h2>We Accept</h2>
          <div className="cards">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={maestro} alt="" />
            
            <img src={netbanking} alt="" />
          </div>
        </div>
        <div className="card-containers">
          <h2>Like What You See? Follow us Here</h2>
          <div className="stickers">
            <img src={insta} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            
          </div>
        </div>
        
      </div>
      <hr />
      <div className="closing">

        <p>
          Whitehat
        </p>
        <p>
          Sitemap
        </p>
        <p>
          Terms Of Use
        </p>
        <p>
          Privacy Policy
        </p>
        <p>
          Your Data and Security
        </p>
        <p>
          Grievance Redressal
        </p>
      </div>
      <div className="closing">
        	&#169; Copyright The Furniture Shop Limited
      </div>



    </Wrapper>
  </>
}

const Wrapper = styled.footer`
padding: 1.4rem;
 background-color: aliceblue;
 margin: 0 1.4rem 1.4rem 1.4rem;
 .closing{
  display: flex;
  justify-content: center;
  font-size: larger;
  font-family: Georgia, 'Times New Roman', Times, serif;
  p{
    margin: 1.2rem;
  }
 }
 .stickers{
  display: flex;
  width: 80%;
  justify-content: space-between;
  img{
    width: 15%;
  }
 }
 .card-containers{
  width: 30%;
 }
 .foot{
  display: flex;
  justify-content: space-between;
 }
 h2{
  color: #39A1AE;
 }
 .cards{
  display: flex;
  width: 90%;
  justify-content: space-between;
  img{
    width: 15%;
  }
 }
.follow{
  display: flex;
  justify-content: space-between;
 
}
.card{
  width: 15%;
  padding: 1.2rem;
 
  h2{
    color: #39A1AE;
  }
  img{
    width: 100%;
  }
}


`
const Wrapper3 = styled.div`
  background: aliceblue;
  margin: 1.4rem;
  

  form {
    display: flex;
    width: 80%;
  }

  .inner {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .text1 {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding: 1.2rem;
  }

  .text {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .letter {
    height: 50vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .btn {
    margin: 0;
    border-radius: 0;
  }

  input {
    width: 100%;
    border-style: solid;

    font-size: 1.4rem;
    padding: 1.2rem;
  }
`;
export default Footer
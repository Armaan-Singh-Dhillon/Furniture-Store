import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { Link } from "react-router-dom";
import MainTile from "../logos/main-title-tv.jpg";
import side1 from "../logos/TVC-600x600.jpg";
import side2 from "../logos/Center-Table-Set-of-3-600x600.jpg";
import side3 from "../logos/side3.jpg";
import wood from '../assets/wood.jpg'
import sofa from '../assets/home-main.jpg'
const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="zone">
            <h1>Design Your Comfort</h1>
            <p className="text">


              <p>
                At our furniture company, we prioritize sustainability and environmental responsibility in all aspects of our operations. From sourcing materials to manufacturing and delivery, we are committed to reducing our environmental impact and promoting eco-friendly practices.

              </p>

              <p>

                By choosing our furniture, you can feel good about supporting a company that is committed to the environment and the well-being of our community. Together, we can make a positive impact on the world while enjoying beautiful, high-quality furniture that will last for years to come.
              </p>

            </p>
            <Link to="/products">
              <button className="btn">shop now</button>
            </Link>
          </div>
          <div className="main-image">
            <img src={sofa} alt="" />
          </div>
        </div>
        <div>
          <div className="custom">

          <h1>Totally Customizable</h1>
          </div>
          <div className="env">

            <div className="img-container">
              <img src={wood} alt="" />
            </div>
            <div className="wood-description">
              <p>
                With our furniture, you have the ability to create your dream piece, tailor-made to your exact specifications. Choose from a wide range of colors, textures, and finishes, as well as the option to add your own personal touch with bespoke detailing.
              </p>
              <p>
                Our expert craftsmen will bring your vision to life, creating a piece that is truly one of a kind. At our furniture site, we pride ourselves on providing a seamless customer experience, ensuring that you are completely satisfied with your purchase from start to finish.
              </p>
              <p>
                Whether you are looking to add a statement piece to your home or create a cohesive look throughout, our furniture is the perfect choice for those seeking both exceptional design and customizability.
              </p>
            </div>



          </div>
        </div>

        
      </Wrapper>

      <Wrapper1>
        <div>
          <h1> Featured Products </h1>
        </div>

        <div className="products">
          <div className="product">
            <img src={side3} alt="" />

            <div className="text">
              <div>
                <h2>Modern Chair </h2>
              </div>
              <div>
                <h2>-$399</h2>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={side1} alt="" />
            <div className="text">
              <div>
                <h2> Living Room Table </h2>
              </div>
              <div>
                <h2>-$799</h2>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={side2} alt="" />
            <div className="text">
              <div>
                <h2>Low Height Table </h2>
              </div>
              <div>
                <h2>-$999</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/products">
            <button className="btn">Products</button>
          </Link>
        </div>

      </Wrapper1>
      <Wrapper2>
        <div className="mission">
          <div className="text">
            <div className="inner">
              <div>
                <h2>Popular Categories</h2>
              </div>
              <div>
                <p>
                  Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets,
                  Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book
                  Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets,
                  Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table
                  Cloth, Living Room Furniture, Study Tables, Dining Room
                  Furniture, Office Furniture, Bed Room Furniture, Dining Table,
                  Beds, Sofas, Sofa Set, Trundle Bed
                </p>
              </div>
            </div>

            <div className="inner">
              <div>
                <h2>Cities we deliver to</h2>
              </div>
              <div>
                <p>
                  Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune,
                  Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad,
                  Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam,
                  Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore,
                  Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik,
                  Madurai, Kanpur, Aurangabad and many more
                </p>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="s-text">
              <div>
                <h2>Mission</h2>
              </div>
              <div>
                <p>
                  Our mission at (The Furniture Shop) is to provide
                  high-quality, stylish, and affordable furniture to our
                  customers. We strive to create a welcoming and inclusive
                  shopping experience for all, and to make the process of
                  furnishing your home as seamless and enjoyable as possible.
                </p>
              </div>
            </div>

            <div className="s-text">
              <div>
                <h2>Vision</h2>
              </div>
              <div>
                <p>
                  Our vision is to be the go-to destination for all of your home
                  furnishings needs. We aim to be the industry leader in
                  customer service, product selection, and design inspiration.
                  We want to empower our customers to create beautiful,
                  comfortable, and functional living spaces that reflect their
                  unique style and personality.
                </p>
              </div>
            </div>

            <div className="s-text">
              <div>
                <h2>History</h2>
              </div>
              <div>
                <p>
                  Throughout our history, we've been committed to providing our
                  customers with the very best products, services, and shopping
                  experience. And we'll continue to do so in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper2>
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
    </>
  );
};

const Wrapper = styled.div`
  background: aliceblue;
  margin: 1.4rem;
  padding: 1.2rem;
  .custom{
    display: flex;
    justify-content: space-evenly;
  }
  .img-container{
    width: 50%;
    
  }
  .env{
     display: flex;
     justify-content: space-between;
     font-size: 1.4rem;
     margin-top: 1.2rem;
     .wood-description{
      width: 48%;
     }
  }
  
  .main {
    display: flex;
    justify-content: space-between;
    .main-image{
      width: 50%
    }
  }
  .zone {
    width: 50%;
    padding: 1.2rem;
  }
  img {
    max-width: 100%;
  }
  .text {
    line-height: 2.5rem;

    font-size: 1.4rem;
  }
  .quotes {
    font-size: 1rem;
  }
  
  @media only screen and (max-width: 1100px) {
    .main {
      flex-direction: column-reverse;
      align-items: center;
    }
    .zone {
      width: 100%;
    }
  }
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4rem;
  background: aliceblue;
  .products {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  img {
    border-radius: 1.2rem;
  }
  img:hover {
    opacity: 80%;
    cursor: pointer;
  }
 
`;

const Wrapper2 = styled.div`
  display: flex;
  .text {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 0 1.4rem 0;
  }
  .inner {
    width: 47.5%;
    display: flex;
    padding: 1.2rem;
    flex-direction: column;
    align-items: center;
    font-size: 1.35rem;
    text-align: center;
    line-height: 2rem;
    background: aliceblue;
  }
  .mission {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 1.4rem;
  }
  .services {
    display: flex;
    justify-content: space-between;
  }

  .s-text {
    display: flex;
    flex-direction: column;
    background: aliceblue;
    align-items: center;
    padding: 1.2rem;
    width: 30.5%;

    line-height: 2rem;
    font-size: 1.35rem;
    text-align: center;
  }
`;
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

export default Home;

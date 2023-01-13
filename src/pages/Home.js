import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="zone">
            <h1>Design Your Comfort</h1>
            <p className="text">
              <ImQuotesLeft className="quotes" /> Furniture is a big deal in the
              design industry. A well-executed concept can result in a timeless
              piece of furniture that never goes out of style. With this in
              mind, we've found these inspirational examples of furniture
              design. Some are classics that have been around for years, others
              are recent and more modern. But they're all fantastic designs -
              which of them would you have in your home?{" "}
              <ImQuotesRight className="quotes" />
            </p>
            <Link to="/products">
              <button className="btn">shop now</button>
            </Link>
          </div>
          <div>
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/five-important-interior-design-concepts/title-tv-unit-and-wall-panel-design.jpg"
              alt=""
            />
          </div>
        </div>
      </Wrapper>
      <Wrapper1>
        <div>
          <h1> Featured Products </h1>
        </div>

        <div className="products">
          <div className="product">
            <img
              src="https://www.ikea.com/in/en/images/products/aepplaroe-table-2-folding-chairs-outdoor-brown-stained-froesoen-duvholmen-beige__0801501_pe768160_s5.jpg?f=s"
              alt=""
            />
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
            <img
              src="https://www.driftingwood.in/wp-content/uploads/2022/02/TVC-600x600.jpg"
              alt=""
            />
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
            <img
              src="https://www.eshopregal.in/wp-content/uploads/2022/07/Center-Table-Set-of-3-600x600.jpg"
              alt=""
            />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid atque blanditiis debitis eius et, explicabo fugit ipsum
                minus molestiae optio pariatur porro, quidem ullam vel voluptas
                voluptate. A cumque distinctio harum nam quos?
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

  .main {
    display: flex;
    justify-content: space-evenly;
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

    font-size: 1.8rem;
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
    font-size: 1.5rem;
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
    font-size: 1.5rem;
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
    font-size: 1.2rem;
    line-height: 1.5rem;
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

import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from '../components/Loader.js'
import { useContext } from "react";
import MyContext from "../MyContext.js";
import wood from '../assets/wood.jpg'
import sofa from '../assets/home-main.jpg'
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { useEffect } from "react";
import { Icon } from 'leaflet'
import Star from "../components/Star.js";
import Footer from "../components/Footer.js";

const customIcon = new Icon({
  iconUrl: 'https://www.svgrepo.com/show/302636/map-marker.svg',
  iconSize: [38, 38]
})
const Home = () => {


  const { data, isLoading } = useContext(MyContext);
  const [isLoadinglocal, setLoadinglocal] = useState(true)
  const [cities, setCities] = useState([])
  const [products, setProducts] = useState([])
  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:2000/api/v1/cities/getAll')

    setCities(data.cities)
    setLoadinglocal(false)
  }
  function selectThreeRandomItems(array) {

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array.slice(0, 6);
  }
  const get3products = () => {
    if (!isLoading) {

      setProducts(selectThreeRandomItems(data))

    }

  }
  useEffect(() => {
    fetchData()
    get3products()
  }, [isLoading])

  if (isLoadinglocal) {
    return <Loader></Loader>
  }
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

        <div className="map">
          <div>
            <h1>Cities we deliver to</h1>
          </div>
          <div>
            <p className="">
              Several new furniture stores were opening across India, including in Bengaluru, Mumbai, Delhi, Hyderabad, Pune, and Chennai. The stores featured a wide range of contemporary and traditional designs, as well as expert design services and customer support. The openings were highly anticipated, and the stores attracted large crowds of eager customers.
            </p>
          </div>
          <MapContainer center={[20.5937, 78.9629]} zoom={6} scrollWheelZoom={false} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {cities.map((el) => {
              const position = [el.latitude, el.longitude]
              return <Marker position={position} icon={customIcon}>
                <Popup>
                  {el.label}
                  <div>
                    {el.latitude},{el.longitude}
                  </div>
                </Popup>
              </Marker>
            })}

          </MapContainer>
        </div>

        <div>
          <h1> Products of the day </h1>
         
        </div>

        {isLoading ? <Loader></Loader> : <div className="products">

          {products.map((obj) => {

            return (
              <>
                <div className="card">
                  <div className="image">
                    <Link to={`/products/${obj._id}`}>
                      <img src={obj.image} alt="" />
                    </Link>
                  </div>

                  <div className="text">
                    <div>
                      Rating:
                    </div>

                    <Star className="val" stars={obj.averageRating}></Star>

                  </div>
                  <div className="text">
                    <div>Name:</div>
                    <div className="val">{obj.name}</div>
                  </div>
                  <div className="text">
                    <div>Price:</div>
                    <div className="val">-${obj.price}</div>
                  </div>
                  <div className="text">
                    <div>Company</div>
                    <div className="val">{obj.company}</div>
                  </div>
                </div>

              </>
            );
          })}

        </div>}
      


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

          
        </div>
      </Wrapper2>
      
      
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
  padding: 1.4rem;
 .map{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
 p{
  font-size: 1.4rem;
 }
  
 }
  .leaflet-container{
    width: 100%;
    height: 80rem;
    
  }
.products {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: aliceblue;
    
  }

  .card {
    flex-direction: column;
    width: 29.5%;
    justify-content: space-evenly;
    transition: all .5s;
   
    align-items: center;
    padding: 1.2rem;
    margin: 1.4rem;
  }
  .card:hover{
    scale: 1.08;
  }
  .text {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 1.2rem;
    align-items: center;
    
    
  }
  .val{
  color: #39a1ae;
  
  font-weight: 500;
}
  
  
    img{
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 1.2rem;
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


export default Home;

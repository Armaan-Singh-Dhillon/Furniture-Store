import styled from "styled-components";
import { useContext } from "react";
import MyContext from "../MyContext";
import { BsTrashFill } from "react-icons/bs";
const Cart = () => {
  const { cartItems, setCartItems, total, setTotal } = useContext(MyContext);

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="category">
            <div className="holders">
              item
              <div className="image-container">
                <img
                  src="https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?b=1&k=20&m=968086564&s=612x612&w=0&h=n4ihvhMTaMQDoIxIxEj8tPAl6A0OinvYx0l51Wh9FQg="
                  alt=""
                />
              </div>
            </div>
            <div className="holders">
              price
              <div className="inner-holder">-$ 12599</div>
            </div>

            <div className="holders">
              quantity
              <div className="inner-holder">3</div>
            </div>
            <div className="holders">
              subtotal
              <div className="inner-holder">-$3389</div>
            </div>
            <div className="holders">
              Remove-item
              <div className="inner-holder">
                <BsTrashFill></BsTrashFill>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .inner-holder {
    margin: 1.2rem;
  }
  .holders {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: center;
    width: 25%;
  }
  .image-container {
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .category {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
  }
  .container {
    display: flex;
    margin: 1.2rem;
    background: blanchedalmond;
    flex-direction: column;
  }
`;

export default Cart;
// {
//   "id": "recd1jIVIEChmiwhe",
//     "name": "armchair",
//     "price": 12599,
//     "image": "https://v5.airtableusercontent.com/v1/14/14/1673596800000/Stjd9FMsYVm_r8QCWHys-g/ER1kmlgP9V_NqIAQw1AMuRuW0mG3jh8AGiFLQO-uRYD6fLPblmPzt6MvY1x3ipokQx-gwewm-hTh3gP_yYjiRg/cnCdEYYZK7VWqsPuAA5Nu1Gtyd6yMTBmr32F3ItImYY",
//     "colors": [
//   "#000",
//   "#00ff00",
//   "#0000ff"
// ],
//     "company": "marcos",
//     "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//     "category": "bedroom",
//     "shipping": true
// }

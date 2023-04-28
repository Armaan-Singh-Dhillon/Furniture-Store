import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars}) => {
    console.log(stars)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className="icon" />
                ) : stars >= number ? (
                    <FaStarHalfAlt className="icon" />
                ) : (
                    <AiOutlineStar className="icon" />
                )}
            </span>
        );
    });

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
               
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: calc(.2em + 1vw);
      color:#39A1AE;
      
    }

    .empty-icon {
      font-size: calc(.4em + 1vw);
    }
    
  }
`;

export default Star;
import styled from "styled-components";
import timeline from '../assets/timeline.jpg'
import gif from '../assets/treegif.gif'
const About = () => {
  return (
    <>
      <Wrapper>
        <div className="main">
          <div>
            <div className="title">
              <h1>About us</h1>
            </div>
          <div className="about">
            <Container>
              
              <Paragraph>
                The Furniture Shop is a family-owned business that has been
                providing high-quality, stylish, and affordable furniture to our
                customers for over 30 years. We believe that everyone should
                have access to beautiful and functional living spaces, and we
                strive to make that a reality for our customers.
              </Paragraph>
              <Paragraph>
                Our mission is to provide our customers with an unparalleled
                shopping experience. We have a wide selection of furniture and
                home decor products, as well as knowledgeable and friendly staff
                who are always ready to help. We are committed to being the
                go-to destination for all of your home furnishings needs.
              </Paragraph>
              <Paragraph>
                We believe that every home is unique, and we want to help our
                customers create living spaces that reflect their individual
                style and personality. Whether you're looking for a new couch, a
                dining room table, or a statement piece of decor, we have
                something for everyone.
              </Paragraph>
            </Container>
            <div className="gif">
              <img src={gif} alt="" />
            </div>
          </div>
          </div>
          <div className="timeline">
            <div>
              <h1>Milestones</h1>
            </div>
            <img src={timeline} alt="" />
          </div>
        </div>
        
      </Wrapper>
    </>
  );
};
const Container = styled.div`
  
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
`;

const Wrapper = styled.div`

.about{
  display: flex;
}
 .gif{
  width: 60%;
  display: flex;
  align-items: center;
  img{
    width: 100%;
  }
 }
  .main {
   
    justify-content: space-evenly;
    padding: 1.4rem;
    margin: 1.4rem;
    background: aliceblue;
    .title{
      display: flex;
      justify-content: space-evenly;
    }
  }
  .timeline{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .timeline img{
    width: 65%;
  }

 
`;

export default About;

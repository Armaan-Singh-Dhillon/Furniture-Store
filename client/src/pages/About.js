import styled from "styled-components";

const About = () => {
  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="image-holder">
            <img
              src="https://i.pinimg.com/originals/e5/a7/12/e5a7124258f196b0aefb5efbc4696eec.jpg"
              alt=""
            />
          </div>
          <div>
            <Container>
              <Title>About The Furniture Shop</Title>
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
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Container = styled.div`
  width: 80%;
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
  font-size: 1.3rem;
`;

const Wrapper = styled.div`
  .image-holder {
    width: 60%;
  }
  .main {
    display: flex;
    justify-content: space-evenly;
    padding: 1.4rem;
    margin: 1.4rem;
    background: aliceblue;
  }
`;

export default About;

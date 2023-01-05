
import styled from "styled-components";

const Footer=()=>{
    return <>
    <Wrapper>


       <h5>© 2023 The Furniture Shop All rights reserved</h5>

    </Wrapper>
    </>
}

const Wrapper=styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 1.5rem;
`
export default Footer
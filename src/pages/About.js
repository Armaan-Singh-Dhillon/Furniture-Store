import styled from "styled-components";

const About=()=>{
    return <>
   <Wrapper>

       <div className='main'>
           <div className='image-holder'>
               <img src="" alt=""/>
           </div>
           <div>
               <div>
                   <h2>Our Story</h2>
               </div>
               <div>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur error est explicabo necessitatibus soluta. Architecto enim libero pariatur sed soluta!
               </div>
           </div>
       </div>
   </Wrapper>

    </>
}


const Wrapper=styled.div`
  .image-holder{
    width: 50%;
  }
 .main{
   display: flex;
   justify-content: space-evenly;
   margin: 1.4rem;
   background: blanchedalmond;
 }
`

export default About
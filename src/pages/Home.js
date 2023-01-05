import styled from "styled-components";
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import {Link} from "react-router-dom";

const Home=()=>{
    return <>
      <Wrapper>
          <div className='main'>
              <div className='zone' >
                  <h1>Design Your Comfort</h1>
                  <p className='text'>
                      <ImQuotesLeft className='quotes'/> Furniture is a big deal in the design industry. A well-executed concept can result in a timeless piece of furniture that never goes out of style.

                      With this in mind, we've found these inspirational examples of furniture design. Some are classics that have been around for years, others are recent and more modern. But they're all fantastic designs - which of them would you have in your home? <ImQuotesRight className='quotes'/>
                     </p>
                  <Link to='/products'>

                  <button className='btn'>shop now</button>
                  </Link>
              </div>
              <div>

                  <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/five-important-interior-design-concepts/title-tv-unit-and-wall-panel-design.jpg" alt=""/>
              </div>
          </div >

      </Wrapper>
      <Wrapper1>

        <div>
            <h1> Featured Products </h1>


        </div>

          <div className='products'>
             <div className='product'>
                 <img src="https://www.ikea.com/in/en/images/products/aepplaroe-table-2-folding-chairs-outdoor-brown-stained-froesoen-duvholmen-beige__0801501_pe768160_s5.jpg?f=s" alt=""/>
                 <div className='text'>
                     <div>
                         <h2>Modern Chair </h2>
                     </div>
                     <div>
                         <h2>-$399</h2>
                     </div>


                 </div>
            </div>

              <div className='product'>
                  <img src="https://www.driftingwood.in/wp-content/uploads/2022/02/TVC-600x600.jpg" alt=""/>
                  <div className='text'>
                      <div>
                          <h2> Living Room Table </h2>
                      </div>
                      <div>
                          <h2>-$799</h2>
                      </div>


                  </div>
              </div>

              <div className='product'>
                  <img src="https://www.eshopregal.in/wp-content/uploads/2022/07/Center-Table-Set-of-3-600x600.jpg" alt=""/>
                  <div className='text'>
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
              <Link to='/products'><button className='btn'>Products</button></Link>

          </div>


      </Wrapper1>

    </>
}

const Wrapper=styled.div`
  background: aliceblue;
  margin: 1.2rem;
  padding: 1.2rem;
  
  .main{
    display: flex;
    justify-content: space-evenly;
    
  }
  .zone{
    width: 50%;
    padding: 1.2rem;
  }
  img{
    max-width: 100%;
    
  }
  .text{
    line-height: 2.5rem;
    font-family: 'PT Sans', sans-serif;
    font-size: 1.8rem;
    
  }
  .quotes{
    font-size: 1rem;
  }
  @media only screen and (max-width: 1100px) {
    .main {
      flex-direction: column-reverse;
      align-items: center;
      
      
    }
    .zone{
      width: 100%;
    }
    
  }
 
  
`

const Wrapper1=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  background: aliceblue;
  .products{
    display: flex;
    justify-content: space-around;
    width: 100%;
    
    
  }
  .product{
    display: flex;  
    flex-direction: column;
    align-items: center;
  }
  .text{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  img{
    border-radius: 1.2rem;
    
  }
  img:hover{
    opacity: 80%;
    cursor: pointer;
    
  }
`

export default Home
import {useEffect, useState} from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';

const Products=()=>{
    const [loader,setloader]=useState(true)
    const [data,setdata]=useState([])

    const fetchdata=async ()=>{
        await fetch('https://course-api.com/react-store-products').then((res)=>{
            res.json().then((data)=>{
                setdata(data)
                setloader(false)
            })
        })

    }
    useEffect(()=>{

        fetchdata()


    },[])

    if(loader){
        return<>
        <h1>Loading</h1>
        </>
    }
    else{
        return <>

            {console.log(data)}
            <Wrapper>
                 <div className='main'>
                     <div className='search'>
                     <div className='input'>
                         <input type="text" placeholder='Search'/>
                         <div className='view'>
                          Grid Enabled
                         <TfiLayoutGrid2Alt className='icon'></TfiLayoutGrid2Alt>
                         </div>
                     </div>

                      <div className='sort'>
                       <div className='inner-sort'>
                           <label htmlFor="Sort">Sort By : </label>
                           <select name="Sort" className='select'>
                               <option value="Price(Lowest)" selected>Price(Lowest)</option>
                               <option value="Price(Highest)">Price(Highest)</option>
                               <option value="Name(a-z)">Name(a-z)</option>
                               <option value="Name(z-a)">Name(z-a)</option>

                           </select>
                       </div>
                      </div>
                     </div>
                     <div className='middle'>
                         <div className='category'>
                             <div className='category-cat'>
                                 <div className='heading'>
                                 <h2>Category</h2>
                                 </div>
                                 <div>

                                 <button>All</button>
                                 </div>
                                 <div>

                                 <button>Office</button>
                                 </div>

                                 <div>

                                 <button>Living Room</button>
                                 </div>

                                 <div>

                                 <button>Kitchen</button>
                                 </div>

                                 <div>

                                 <button>Bedroom</button>
                                 </div>

                                 <div>

                                 <button>Dining</button>
                                 </div>
                                 <div>

                                 <button>Kids</button>
                                 </div>
                             </div>



                               <div>

                             <div >
                                 <div className='heading'>
                                     <h2>Company</h2>
                                 </div>
                                 <div className='company' >
                                     <label htmlFor="membership">Select : </label>
                                     <select name="membership" className='select'>
                                         <option value="all" selected>all</option>
                                         <option value="marcos">marcos</option>
                                         <option value="liddy">liddy</option>
                                         <option value="ikea">ikea</option>
                                         <option value="caressa">caressa</option>
                                     </select>
                                 </div>
                               </div>

                             </div>

                             <div>
                                 <button className='clear'>
                                     Clear Filters
                                 </button>
                             </div>

                         </div>
                         <div className='products'>
                             {
                                 data.map((obj)=>{
                                   return<>
                                       <div className='card'>
                                           <div className='image'>
                                               <img src={obj.image} alt=""/>
                                           </div>

                                           <div className='text'>
                                               <div>
                                                   {obj.name}
                                               </div>
                                               <div>
                                                   {obj.price}
                                               </div>
                                           </div>
                                       </div>

                                   </>

                                 })

                             }
                               {/*<div className='card'>*/}
                               {/*    <div className='image'>*/}
                               {/*        <img src="https://v5.airtableusercontent.com/v1/14/14/1673049600000/Q-suEEz-ZbZOt-yTKb6lYw/6UmYJcJETvHgmC7I97hFk7eLxLwXlDphAjgB_8gFRUdkFV2yAbSuyVSXI7rB0Nfu9Vni2yADto4mu3jWvBCczw/3YkMn380xrJlf5KVPr1N1t87F96Mvi-YMz0zMOcn9AI" alt=""/>*/}
                               {/*    </div>*/}

                               {/*    <div className='text'>*/}
                               {/*      <div>*/}
                               {/*         Name*/}
                               {/*      </div>*/}
                               {/*        <div>*/}
                               {/*         Price*/}
                               {/*        </div>*/}
                               {/*    </div>*/}
                               {/*</div>*/}


                         </div>
                     </div>
                 </div>
            </Wrapper>
        </>
    }

}


const Wrapper=styled.div`
 .text{
   display: flex;
   justify-content: space-between;
   font-size: 1.2rem;
   margin: 1.2rem;
 }
  .products{
    display: flex;
    flex-wrap: wrap;
    width: 78.5%;
    background: aliceblue;
  }
  

   img {
    
    width: 100%;
     height: 20rem;
     object-fit: cover;
    border-radius: 1.2rem; 
   }

  
  .card {
    flex-direction: column;
    width: 29.5%;
    
    justify-content: space-evenly;
    align-items: center;
    padding: 1.2rem;
    margin: 0.5rem;
    
  }
  .inner-sort{
    width: 40%;
    font-size: 1.2rem;
  }
  .view{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
  }
  
  .icon{
    font-size: 1.2rem;
    color: #39A1AE;
  }
  
  input{
    width: 75%;
    border: none;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  .sort{
    width: 65%;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .input{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
  }
  .search{
    display: flex;
    justify-content: space-between;
    margin: 0 0 1.2rem 0;
  }
  
  .company{
    font-size: 1.2rem;
    margin: 1.2rem;
  }
  
  .select{
    font-size: 1.2rem;
    border: none;
    width: 40%;
   padding: 0.3rem;
    
  }
  
 .heading{
   padding: 1.2rem;
 }
  button{
    border: none;
    background: aliceblue;
    text-align: left;
    margin: 0;
    padding: 1.2rem;
    font-size: 1.25rem;
    
  }
  .clear{
    color: #39A1AE;
  }
  button:hover{
    cursor: pointer;
    color: #39A1AE;
  }
  .search{
    background: aliceblue;
  }
.main{
  display: flex;
  flex-direction: column;
 
  
  margin: 1.4rem;

}
  .middle{
    display: flex;
    justify-content: space-between;
    background: #39A1AE;
    
  }
  .category{
    width: 20%;
    background: aliceblue;
  }
 
`



export default Products
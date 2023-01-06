import {useEffect, useState} from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';

const Products=()=>{
    const [loader,setloader]=useState(false)
    const [data,setdata]=useState([])

    // const fetchdata=async ()=>{
    //     await fetch('https://course-api.com/react-store-products').then((res)=>{
    //         res.json().then((data)=>{
    //             setdata(data)
    //             setloader(false)
    //         })
    //     })
    //
    // }
    // useEffect(()=>{
    //
    //     fetchdata()
    //     console.log(data)
    //
    // },[])

    if(loader){
        return<>
        <h1>Loading</h1>
        </>
    }
    else{
        return <>
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
                       Sort
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
                                Products
                         </div>
                     </div>
                 </div>
            </Wrapper>
        </>
    }

}

const Wrapper=styled.div`
  .view{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
  }
  
  .icon{
    font-size: 1.2rem;
  }
  
  input{
    width: 75%;
    border: none;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  .sort{
    width: 65%;
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
    background: aquamarine;
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
  .products{
    width: 78.5%;
    background: blanchedalmond;
  }
`



export default Products
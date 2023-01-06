import {useEffect, useState} from "react";
import styled from "styled-components";


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
                     Search
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
                                 <h2>Company</h2>
                             </div>

                             <div>
                                 <h2>Colors</h2>
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
  background: aliceblue;
}
  .middle{
    display: flex;
    justify-content: space-between;
  }
  .category{
    width: 30%;
  }
  .products{
    width: 95%;
    background: blanchedalmond;
  }
`



export default Products
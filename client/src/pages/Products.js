import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import Loader from "../components/Loader";
import MyContext from "../MyContext";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import Star from "../components/Star";
const itemsPerPage = 12;
const Products = () => {
  const {

    data,
    setdata,
    isLoading,
    setLoading,
    searchFunction,
    sortname,
    setsortname,
    sortprice,
    setsortprice
  } = useContext(MyContext);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setLoading(true)
    setCurrentPage(pageNumber);
    setTimeout(() => {
      setLoading(false)
    }, 500);
  };



  const handleSelect = (e) => {
    e.preventDefault()
    const data = e.target.value

    const [tag, val] = data.split(' ')
    if (tag == 'name') {
      setsortname(val)
      setsortprice(0)
    }
    if (tag == 'price') {
      setsortprice(val)
      setsortname(0)
    }
  };
  const clickHandler = (e) => {

  };
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    searchFunction(search)

  };
  const handleoptions = (e) => {
    e.preventDefault()
    
    setSearch(e.target.value)
    searchFunction(e.target.value)

  };




  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pages ${currentPage === i ? "active " : ""}`}

        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };


  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="search">
            <div className="input">
              <input
                type="text"
                placeholder="Search"
                value={search}

                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch onClick={handleSearch} className='icon'></FaSearch>
              <div className="view">
                Grid Enabled
                <TfiLayoutGrid2Alt className="icon"></TfiLayoutGrid2Alt>
              </div>
            </div>

            <div className="sort">
              <div className="inner-sort">
                <label htmlFor="Sort">Sort By : </label>
                <select name="Sort" className="select" onChange={(e) => handleSelect(e)}>
                  <option value={'price 1'} >
                    Price(Lowest)
                  </option>
                  <option value={'price -1'} >Price(Highest)</option>
                  <option value={'name 1'} >Name(a-z)</option>
                  <option value={'name -1'} >Name(z-a)</option>
                  <option value={'name 0'} selected>None</option>
                </select>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="category">
              <div className="category-cat">
                <div className="heading">
                  <h2>Category</h2>
                </div>
                <div className="inner-cat">
                  <div>
                    <button value="" onClick={(e) => handleoptions(e)}>
                      All
                    </button>
                  </div>
                  <div>
                    <button value="office" onClick={(e) => handleoptions(e)}>
                      Office
                    </button>
                  </div>

                  <div>
                    <button
                      value="living room"
                      onClick={(e) => handleoptions(e)}
                    >
                      Living Room
                    </button>
                  </div>

                  <div>
                    <button value="kitchen" onClick={(e) => handleoptions(e)}>
                      Kitchen
                    </button>
                  </div>

                  <div>
                    <button value="bedroom" onClick={(e) => handleoptions(e)}>
                      Bedroom
                    </button>
                  </div>

                  <div>
                    <button value="dining" onClick={(e) => handleoptions(e)}>
                      Dining
                    </button>
                  </div>
                  <div>
                    <button value="kids" onClick={(e) => handleoptions(e)}>
                      Kids
                    </button>
                  </div>
                </div>
              </div>



              <div className="clear-cat">
                <button
                  className="clear"
                  value="all"
                  onClick={(e) => clickHandler(e)}
                >
                  Clear Filters
                </button>
              </div>
            </div>
            {isLoading ? <Loader></Loader> : <div className="products">
              {currentItems.length == 0 ? <>

                <div className="sorry">
                  <div>


                    <h1>{`Sorry no Products related to "${search}"`}</h1>
                  </div>
                </div>
              </> : <>


                {currentItems.map((obj) => {

                  return (
                    <>
                      <div className="card">
                        <div className="image">
                          <Link to={`/products/${obj._id}`}>
                            <img src={obj.image} alt="" />
                          </Link>
                        </div>

                        <div className="text">
                          <div>
                            Rating:
                          </div>

                          <Star className="val" stars={obj.averageRating}></Star>

                        </div>
                        <div className="text">
                          <div>Name:</div>
                          <div className="val">{obj.name}</div>
                        </div>
                        <div className="text">
                          <div>Price:</div>
                          <div className="val">-${obj.price}</div>
                        </div>
                        <div className="text">
                          <div>Company</div>
                          <div className="val">{obj.company}</div>
                        </div>
                      </div>

                    </>
                  );
                })}
              </>}
            </div>}

          </div>

        </div>
        <div className="pagecontainer">

          <div className="pagination">

            {renderPageNumbers()}
          </div>
        </div>
      </Wrapper>
    </>
  );

};

const Wrapper = styled.div`
.sorry{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  color: #39a1ae;
}
.icon{
  font-size: 1.2rem;
  margin: 1.2rem;
  :hover{
    cursor: pointer;
  }
}
.loader{
  background-color: aliceblue;
  height: 30vh;
}
.val{
  color: #39a1ae;
  
  font-weight: 500;
}
.btn{
  background-color: #39a1ae;
  border-radius: 0rem;
  transition: all 0.2s;
}
.btn:hover{
  color:white;
  scale: 1.5;
  
}

.pagecontainer{
  display: flex;
  justify-content: space-evenly;
  

}
.pages{
  padding: 1.2rem;
  transition: all 0.2s;
  :hover{
    scale:1.12;
  }
}
.pagination{
  width: 20%;
  display: flex;
  margin: 0 1.4rem;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  justify-content: space-evenly;
  color: aliceblue;
  .active{
    background-color: aliceblue;
    color: #39a1ae;
    
    
  }
}
  h2 {
    color: #39a1ae;
  }
  .clear-cat {
    display: flex;
  }
  .company-cat {
    width: 30%;
  }
  .text {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 1.2rem;
    align-items: center;
    
    
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: aliceblue;
    
    
    
  }

  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 1.2rem;
  }
  img:hover {
    opacity: 80%;
    cursor: pointer;
  }

  .card {
    flex-direction: column;
    width: 29.6%;
    justify-content: space-evenly;
    transition: all .5s;
   
    align-items: center;
    padding: 1.2rem;
    margin: 1.4rem;
  }
  .card:hover{
    scale: 1.08;
  }
  .inner-sort {
    font-size: 1.2rem;
  }
  .view {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
  }

  .icon {
    font-size: 1.2rem;
    color: #39a1ae;
  }

  input {
    width: 75%;
    border: none;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  .sort {
    width: 65%;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
  }
  .search {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
  }

  .company {
    font-size: 1.2rem;
    margin: 1.2rem;
  }

  .select {
    font-size: 1.2rem;
    border: none;

    padding: 0.3rem;
  }

  .heading {
    padding: 1.2rem;
  }
  button {
    border: none;
    background: aliceblue;
    text-align: left;
    margin: 0;
    padding: 1.2rem;
    font-size: 1.25rem;
  }
  .clear {
    color: #39a1ae;
  }
  button:hover {
    cursor: pointer;
    color: #39a1ae;
  }
  .search {
    background: aliceblue;
  }
  .main {
    display: flex;
    flex-direction: column;

    margin: 1.4rem;
  }
  .middle {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #39a1ae;
  }
  .category {
    width: 100%;
    display: flex;
    background: aliceblue;
    justify-content: space-between;
  }
  .category-cat {
    display: flex;
    flex-direction: column;
  }
  .inner-cat {
    display: flex;
  }
`;

export default Products;

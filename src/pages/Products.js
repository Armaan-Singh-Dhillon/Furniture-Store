import { useEffect, useState } from "react";
import styled from "styled-components";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";

const Products = () => {
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);
  const [alldata, allsetdata] = useState([]);

  const fetchdata = async () => {
    const response = await fetch("https://course-api.com/react-store-products");
    const data = await response.json();
    setdata(data);
    setloader(false);
    allsetdata(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const clickHandler = (e) => {
    const val = e.target.value;

    if (val == "all") {
      setdata(alldata);
      return;
    }

    const newdata = alldata.filter((obj) => {
      return obj.category == val;
    });
    setdata(newdata);
  };
  const handleSelect = (e) => {
    const val = e.target.value;

    if (val == "all") {
      setdata(alldata);
      return;
    }

    const newdata = alldata.filter((obj) => {
      return obj.company == val;
    });
    setdata(newdata);
  };

  if (loader) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  } else {
    return (
      <>
        <Wrapper>
          <div className="main">
            <div className="search">
              <div className="input">
                <input type="text" placeholder="Search" />
                <div className="view">
                  Grid Enabled
                  <TfiLayoutGrid2Alt className="icon"></TfiLayoutGrid2Alt>
                </div>
              </div>

              <div className="sort">
                <div className="inner-sort">
                  <label htmlFor="Sort">Sort By : </label>
                  <select name="Sort" className="select">
                    <option value="Price(Lowest)" selected>
                      Price(Lowest)
                    </option>
                    <option value="Price(Highest)">Price(Highest)</option>
                    <option value="Name(a-z)">Name(a-z)</option>
                    <option value="Name(z-a)">Name(z-a)</option>
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
                  <div>
                    <button value="all" onClick={(e) => clickHandler(e)}>
                      All
                    </button>
                  </div>
                  <div>
                    <button value="office" onClick={(e) => clickHandler(e)}>
                      Office
                    </button>
                  </div>

                  <div>
                    <button
                      value="living room"
                      onClick={(e) => clickHandler(e)}
                    >
                      Living Room
                    </button>
                  </div>

                  <div>
                    <button value="kitchen" onClick={(e) => clickHandler(e)}>
                      Kitchen
                    </button>
                  </div>

                  <div>
                    <button value="bedroom" onClick={(e) => clickHandler(e)}>
                      Bedroom
                    </button>
                  </div>

                  <div>
                    <button value="dining" onClick={(e) => clickHandler(e)}>
                      Dining
                    </button>
                  </div>
                  <div>
                    <button value="kids" onClick={(e) => clickHandler(e)}>
                      Kids
                    </button>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="heading">
                      <h2>Company</h2>
                    </div>
                    <div className="company">
                      <label>Select : </label>
                      <select className="select" onChange={handleSelect}>
                        <option value="all" selected>
                          all
                        </option>
                        <option value="marcos">marcos</option>
                        <option value="liddy">liddy</option>
                        <option value="ikea">ikea</option>
                        <option value="caressa">caressa</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    className="clear"
                    value="all"
                    onClick={(e) => clickHandler(e)}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
              <div className="products">
                {data.map((obj) => {
                  return (
                    <>
                      <div className="card">
                        <div className="image">
                          <img src={obj.image} alt="" />
                        </div>

                        <div className="text">
                          <div>{obj.name}</div>
                          <div>{obj.price}</div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
};

const Wrapper = styled.div`
  .text {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin: 1.2rem;
  }
  .products {
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
  .inner-sort {
    width: 40%;
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
    margin: 0 0 1.2rem 0;
  }

  .company {
    font-size: 1.2rem;
    margin: 1.2rem;
  }

  .select {
    font-size: 1.2rem;
    border: none;
    width: 40%;
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
    background: #39a1ae;
  }
  .category {
    width: 20%;
    background: aliceblue;
  }
`;

export default Products;

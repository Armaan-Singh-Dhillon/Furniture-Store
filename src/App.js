import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sharedlayout from "./components/Sharedlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import MyContext from "./MyContext";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ProductPage from "./components/ProductPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);
  const [alldata, allsetdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Price(Lowest)");

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
  if (loader) {
    return <Loader></Loader>;
  } else {
    return (
      <MyContext.Provider
        value={{
          cartItems,
          setCartItems,
          total,
          setTotal,
          loader,
          setloader,
          data,
          setdata,
          alldata,
          allsetdata,
          searchTerm,
          setSearchTerm,
          sortBy,
          setSortBy,
        }}
      >
        <Routes>
          <Route path="/" element={<Sharedlayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            {data.map((el) => {
              return (
                <Route
                  path={`/products/${el.id}`}
                  element={<ProductPage />}
                ></Route>
              );
            })}
          </Route>
        </Routes>
      </MyContext.Provider>
    );
  }
}

export default App;

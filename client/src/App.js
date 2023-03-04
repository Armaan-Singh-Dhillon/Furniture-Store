
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
import Login from './pages/Login.js'
import User from "./components/User";
import EditProfile from './pages/user/EditProfile'
import Offer from './pages/user/Offers'
import Order from './pages/user/Orders'
import YourProducts from './pages/user/YourProducts'
import Register from './pages/Register.js'
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);
  const [alldata, allsetdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Price(Lowest)");

  const [token, setToken] = useState(''||localStorage.getItem('token'))
  const [user, setUser] = useState(null || localStorage.getItem('user'))
  
  

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
          token,
          setToken,
          user,
          setUser
        }}
      >
        <Routes>
          <Route path="/" element={<Sharedlayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path='/user' element={<User></User>}>
              <Route path='/user/edit' element={<EditProfile></EditProfile>}></Route>
              <Route path='/user/offer' element={<Offer></Offer>}></Route>
              <Route path='/user/product' element={<Order></Order>}></Route>
              <Route path='/user/order' element={<YourProducts></YourProducts>}></Route>
            </Route>
            {data.map((el) => {
              const product = {
                id: el.id,
                name: el.name,
                price: el.price,
                image: el.image,
                company: el.company,
                description: el.description,
              };
              return (
                <Route
                  path={`/products/${el.id}`}
                  element={<ProductPage key={el.id} product={product} />}
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

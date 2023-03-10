
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
import axios from "axios";
import AddYourProduct from "./pages/user/AddYourProduct";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState([]);
  const [alldata, allsetdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Price(Lowest)");

  const [token, setToken] = useState('' || localStorage.getItem('token'))

  const [page, setpage] = useState(1)
  const [totalPages, settotalPages] = useState(1)
  const [limit, setLimit] = useState(9)

  const [user, setUser] = useState({
    _id: '' || localStorage.getItem('_id'),
    name: '' || localStorage.getItem('name'),
    email: '' || localStorage.getItem('email'),
    address1: '' || localStorage.getItem('address1'),
    address2: '' || localStorage.getItem('address2'),
    phone: '' || localStorage.getItem('phone'),
    orders: '' || localStorage.getItem('orders'),
    offers: '' || localStorage.getItem('offers'),
    products: '' || localStorage.getItem('products'),
  })



  const fetchdata = async () => {
    const { data } = await axios.get(`http://localhost:2000/api/v1/products/getAll?limit=${limit}&page=${page}`);

    setdata(data.data);
    settotalPages(data.totalPages)
    
    setloader(false);
    allsetdata(data.data);
  };

  useEffect(() => {
    fetchdata();
  }, [page]);

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
          setUser,
          page,
          setpage,
          limit,
          setLimit,
          totalPages
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
              <Route path='/user/order' element={<Order></Order>}></Route>
              <Route path='/user/product' element={<YourProducts></YourProducts>}></Route>
              <Route path='/user/addyourproduct' element={<AddYourProduct></AddYourProduct>}></Route>
            </Route>
            {data.map((el) => {
             
              return (
                <Route
                  path={`/products/${el._id}`}
                  element={<ProductPage key={el.id} _id={el._id} />}
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

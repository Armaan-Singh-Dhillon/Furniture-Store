
import './App.css';
import { Route,Routes } from "react-router-dom";
import Sharedlayout from "./components/Sharedlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
function App() {
  return (
   <Routes>

       <Route path='/' element={<Sharedlayout/>}>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/products' element={<Products/>}></Route>
       </Route>
   </Routes>
  );
}

export default App;

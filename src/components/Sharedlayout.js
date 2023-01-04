import {Outlet} from "react-router";
import Navbar from "./Navbar";

const Sharedlayout=()=>{
    return <>

        <Navbar></Navbar>

        <Outlet/>

        {/*<Footer/>*/}

    </>
}

export default Sharedlayout
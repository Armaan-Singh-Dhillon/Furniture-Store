
import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return <>
    <Nav>
        <div className="header">
            Furniture Store

        </div>

        <div className="body">
            <div>
               <Link to={'/'}> Home </Link>
            </div>
            <div>
                <Link to={'/about'}> about </Link>

            </div>
            <div>

                <Link to={'/products'}> products </Link>
            </div>
        </div>
        <div className="footer">

            Footer
        </div>

    </Nav>

    </>
}
const Nav=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .body{
    width: 65%;
    display: flex;
    justify-content: space-evenly;
  }
  
`

export default Navbar
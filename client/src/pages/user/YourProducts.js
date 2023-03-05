import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import { useState } from "react";
const YourProducts = () => {
  const { user } = useContext(MyContext);
  

  if (user.products.length == 0) {
    return (
      <div>You have no products to sell</div>
    )
  }
  else {
    return (
     <>
     hi</>
    )
  }
}

export default YourProducts
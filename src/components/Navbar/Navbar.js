import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <div className="flex justify-center w-full h-20 bg-sky">
      <div className="w-1140px flex items-center">
        <div className="text-white ml-auto mr-20"><NavLink to='/'>Main</NavLink></div>
        <div className="text-white ml-auto ml-20"><NavLink to='/products'>Products</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar;
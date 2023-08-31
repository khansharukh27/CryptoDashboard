import React from "react";
import '../index.css'
// import logo from "../assets/Logo.svg";

 function Header() {
  return (
    <div>
      <div className="mx-2 md:mx-10 bg-white px-10 py-3 border-1 rounded-b-md shadow-md box">
        {/* <img className="h-12 w-24" src={logo} alt="sharukh Dashboard Logo"  style={{height:"100px",width:"100px"}}/> */}
        <h1 className="Name">sharukh khan</h1>
      </div>
    </div>
  );
}
export default Header;
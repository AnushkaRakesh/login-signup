import React from "react";
import './Navbar.css';

const Navbar = (props) => {
  return (
    <>
      <div className="container-fluid top-nav">
        <div className="left-floater">
          <div className="inline-container">
            <img src="https://i.ibb.co/YbHsdnz/mp.png" alt="website logo" />
          </div>
          <div className="website-name">MedPad</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

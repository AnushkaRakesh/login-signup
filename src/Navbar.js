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

        <div className="navigation-bars">
          <button onClick={() => props.onFormSwitch('/')} className="home">Home</button>
          <button onClick={() => props.onFormSwitch('register')} className="signup">Register</button>
          <button onClick={() => props.onFormSwitch('login')} className="login">Login</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;

import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <div className="buttons" style={{display: 'block', width:'100%'}}>
          <button style={{float: 'left', width:'50%'}}><Link to={'/login'} style={{textDecoration: 'none'}}>Login</Link></button>
          <button style={{float: 'left', width:'50%'}}><Link to={'/register'} style={{textDecoration: 'none'}}>Register</Link></button>
      </div>
    </>
  );
}

export default App;

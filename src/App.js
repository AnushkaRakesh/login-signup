import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Navbar from "./Navbar";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Navbar onFormSwitch={toggleForm} />
      <div className="App">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
}

export default App;

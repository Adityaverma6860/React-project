import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const mynav = useNavigate();
  const [mode, setmode] = useState("light");
  const changemode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };


  const handleLogout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('auth')
    window.location.reload()
  }
  return (
    <>
      <nav class={`navbar navbar-expand-lg bg-${mode}`}>
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
            style={{ color: mode === "light" ? "black" : "white" }}
          >
            My Website
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  style={{ color: mode === "light" ? "black" : "white" }}
                  class="nav-link active"
                  aria-current="page"
                  onClick={() => mynav("/")}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  style={{ color: mode === "light" ? "black" : "white" }}
                  class="nav-link"
                  onClick={() => mynav("/About")}
                >
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a
                  style={{ color: mode === "light" ? "black" : "white" }}
                  class="nav-link"
                  onClick={() => mynav("/GlobelRedux")}
                >
                  Globel Redux
                </a>
              </li>
              <li class="nav-item">
                <a
                  style={{ color: mode === "light" ? "black" : "white" }}
                  class="nav-link"
                  onClick={(e)=>handleLogout(e)}
                >
                  Contact us
                </a>
              </li>
              
              <button class="btn btn-outline-danger"  onClick={(e)=>handleLogout(e)}>Logout</button>
              
              <button onClick={changemode}>Change Color</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navigation;

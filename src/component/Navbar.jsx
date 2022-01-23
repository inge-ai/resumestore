import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

// import '../index.css';


const Navbar = () => {

  const state = useSelector((state)=> state.addItem)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 text-green" to="#">
          MY STORE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                HOME 
                {/* <span className="sr-only">(current)</span> */}
              </NavLink>
            </li>

            <li className="nav-item btn-group">              
              <NavLink className="nav-link" to="/products">
                PRODUCTS
              </NavLink>
              <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="caret"></span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item">All</a>
              </div>
            </li>
            
          </ul>

          <div className="buttons">
            <NavLink to="/cart" className="btn btn-outline-dark">
            <i className="fa fa-shopping-cart me-1"></i>
            Cart ({state.length})
            </NavLink>
          </div>

        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="container">
        <div className="col-12">
      <div className="px-4 my-5 rounded-3 divCartItem" key={cartItem.id}>
        <div className="container py-3">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="120px"
                width="120px"
              />
            </div>
            <div className="col-md-4">
              <h5>{cartItem.title}</h5>
              <p className="lead fw-bold pPrice">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container">
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
      </div>
    );
  };

  const button = () => {
      return(
          <div className="container">
              <div className="row text-right ">
                  <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Go to Checkout</NavLink>
              </div>
          </div>
      )
  }

  return (
    <>
      <div className="container my-0 py-5">
        <div className="row header-products">
          <div className="col-12 mb-5 pt-5">
            <h1 className="display-6 text-center">Your Cart</h1>
            {/* <hr /> */}
          </div>
        </div>
      </div>

      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;

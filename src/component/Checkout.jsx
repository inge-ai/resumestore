import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container">
        <div className="container my-0 py-5">
          <div className="row header-products">
            <div className="col-12 mb-5 pt-5">
              <h1 className="display-6 text-center">Checkout</h1>
              {/* <hr /> */}
            </div>
          </div>
        </div>

        <div className="col-md-4 order-md-2 mb-4 mx-auto">
          <ul className="list-group mb-3">
            {state.map(itemList)}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <div className="input-group-append">
                <button type="submit" className="btn btn-outline-dark btnAdd">
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;

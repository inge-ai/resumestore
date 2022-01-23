import React from "react";

const Home = () => {
  return (
    <div>
      {/* SECTION - hero */}
      <div className="container py-5">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="/assets/bg-overlay1.png"
          alt="Background"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h2 className="card-title display-3 mb-2 text-dark">
              NEW PRODUCTS OUT NOW!
            </h2>
            <p className="card-text">
              BROWSE THE PRODUCTS PAGE TO SEE WHAT WE HAVE IN STORE
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* SECTION - about */}
      <div class="container mb-5">
        <div className="row">
          <div className="col-5 pr-5">
            <img
              className="card-img"
              src="/assets/cust1.png"
              alt="customer"
              height="100%"
            />
          </div>

          <div className="col-7">
            <div className="row">
              <h1>About Us</h1>
              <hr/>
            </div>
            <div className="row">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="row row d-flex justify-content-center">
              <div className="col mx-4 mt-5 py-3 div-info">
                <p className="text-center"><i class="fa fa-envelope ico" aria-hidden="true"></i></p>
                <h5 className="text-center">EMAIL</h5>
                <hr/>
                <p className="text-center">fakestore@gmail.com</p>
              </div>
              <div className="col mx-4 mt-5 py-3 div-info">
              <p className="text-center"><i class="fa fa-phone-square ico" aria-hidden="true"></i></p>
                <h5 className="text-center">PHONE</h5>
                <hr/>
                <p className="text-center">084 938 3892</p>
              </div>
              <div className="col mx-4 mt-5 py-3 div-info">
              <p className="text-center"><i class="fa fa-globe ico" aria-hidden="true"></i></p>
                <h5 className="text-center">LOCATION</h5>
                <hr/>
                <p className="text-center">30 Address Street</p>
                <p className="text-center">Cape Town</p>
                <p className="text-center">Western Cape</p>
                <p className="text-center">South Africa</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

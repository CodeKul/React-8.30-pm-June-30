import React from "react";

export default function CheckoutGridEx() {
  return (
    <div>
      <div className="row">
        <div className="col-7">

            <h3 className="">Billing Cart</h3>

<form action="">
    <div className="row">
        <div className="col-6">
            <label htmlFor="" className="form-label float-start text-start">First Name</label>
            <input placeholder="First Name" type="text" className="form-control" />
        </div>
        <div className="col-6">
        <label htmlFor="" className="form-label float-start">Last Name</label>
            <input placeholder="Last Name" type="text" className="form-control" />
        </div>
    </div>
</form>





        </div>
        <div className="col-3">
          <h4>Your Cart</h4>

          <div className="row border">
            <div className="col-6">
              <p className="mb-0">Product Name</p>
              <p>Brief Description</p>
            </div>

            <div className="col-6">
              <p>$12</p>
            </div>
          </div>
          <div className="row border">
            <div className="col-6">
              <p className="mb-0">Product Name</p>
              <p>Brief Description</p>
            </div>

            <div className="col-6">
              <p>$12</p>
            </div>
          </div>
          <div className="row border">
            <div className="col-6">
              <p className="mb-0">Product Name</p>
              <p>Brief Description</p>
            </div>

            <div className="col-6">
              <p>$12</p>
            </div>
          </div>
          <div className="row border">
            <div className="col-6">
              <p className="mb-0">Product Name</p>
              <p>Brief Description</p>
            </div>

            <div className="col-6">
              <p>$12</p>
            </div>
          </div>
          <div className="row border">
            <div className="col-6">
              <p className="mb-0">Product Name</p>
              <p>Brief Description</p>
            </div>

            <div className="col-6">
              <p>$12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

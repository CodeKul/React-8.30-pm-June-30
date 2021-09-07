import React from "react";

export default function Modal() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        Launch demo modal
      </button>

      <div id="modal" className="modal" data-bs-backdrop="static">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Dialog</h5>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn-close"
              ></button>
            </div>

            <div className="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">First Name</label>
                    <input id="fName" type="text" className="form-control" />
                  </div>

                  <div className="col-6">
                    <label htmlFor="fName" className="form-label">
                      Last Name
                    </label>
                    <input id="lName" type="text" className="form-control" />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">Submit</button>
              <button data-bs-dismiss="modal" className="btn btn-danger">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

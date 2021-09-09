import React from "react";


// 1.add class for form element -> .need-validation, add attribute novalidate as well
// 

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
              <form action="" className="needs-validation">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">First Name</label>
                    <input id="fName" type="text" className="form-control form-control-lg" />
                 <div className="valid-feedback">
                   Correct Input
                 </div>
                  </div>

                  <div className="col-6 form-floating">
                   
                    <input id="lName" type="text" placeholder="Last Name" className="form-control form-control-sm" />
                    <label htmlFor="fName" >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <input type="text" value="Codekul" className=" h-100 form-control" disabled readonly/>
                  </div>

                  <div className="input-group col-3">
                    <input type="text" name="gender" className="form-control" />
                    <button className="btn btn-primary">Submit</button>
                    
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

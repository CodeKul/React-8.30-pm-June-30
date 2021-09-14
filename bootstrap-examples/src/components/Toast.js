import React from "react";

export default function Toast() {

    let date =  "Tue, 21 Apr 2020 09:20:30 GMT";
    console.log(date)
  return (
      <>
    <div
      className="toast show position-absolute bottom-0 end-0"
      role="alert"
      aria-atomic="true"
      aria-live="assertive"
    >
      <div className="toast-header">
        <strong>Enquiry Submitted</strong>
        <small>{date.toString()}</small>
        <button className="btn-close" data-bs-dismiss="toast"></button>
      </div>

      <div className="toast-body">
        <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
     
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
    </div>

<div
className="toast show"
role="alert"
aria-atomic="true"
aria-live="assertive"
>
<div className="toast-header">
  <strong>Enquiry Submitted</strong>
  <small>1 min ago</small>
  <button className="btn-close" data-bs-dismiss="toast"></button>
</div>

<div className="toast-body">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni
  expedita minus, doloribus, aliquam culpa hic alias iure odit beatae
  unde, possimus voluptates maiores suscipit. Inventore, vel? Explicabo,
  omnis quas.
</div>
</div>
</>
  );
}

import React from "react";

export default function Grid() {
  return (
    <div>
      <div className="row ">
        <div className="col-lg-1 col-md-4 col-sm-12 border">One</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Two</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Three</div>

        <div className="col-lg-1 col-md-4 col-sm-12 border">Four</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Five</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Six</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Seven</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Eight</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Nine</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Ten</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Eleven</div>
        <div className="col-lg-1 col-md-4 col-sm-12 border">Tweleve</div>
      </div>
      {/* if you are using row-cols-value also using cols-lg-value, cols-md-value,
      cols-sm-value so inb this case whatever responsiveness class we have
      defined for columns it will use that *
      
      
      
      if you are using just col for columns and row-cols-value then it select row-cols-value part 
      
      
      row-cols-lg-4 row-cols-md-2 row-cols-sm-1 it means that for desktop layout it will have 4 columns, for medium device width 2 columns and smaller device width 1 column
      for column items just use col class
      */}

      <div className="row row-cols-4">
        <div className="col-lg-4 col-md-6 col-sm-12 border">One</div>
        <div className="col-lg-4 col-md-6 col-sm-12 border">Two</div>
        <div className="col-lg-4 col-md-6 col-sm-12 border">Three</div>
        <div className="col-lg-4 col-md-6 col-sm-12 border">Four</div>
        <div className="col-lg-4 col-md-6 col-sm-12 border">Five</div>
        <div className="col-lg-4 col-md-6 col-sm-12 border">Six</div>
      </div>
      <div className="row w-50">
        <div className="col-6 border">One</div>
        <div className="col-6 border">Two</div>
        <div className="col-lg-1 border">Three</div>

        {/* <div className="col-lg-1 border">Four</div>
              <div className="col-lg-1 border">Five</div>
              <div className="col-lg-1 border">Six</div>
              <div className="col-lg-1 border">Seven</div>
              <div className="col-lg-1 border">Eight</div>
              <div className="col-lg-1 border">Nine</div>
              <div className="col-lg-1 border">Ten</div>
              <div className="col-lg-1 border">Eleven</div>
              <div className="col-lg-1 border">Tweleve</div> */}
      </div>
    </div>
  );
}

import React from 'react'

export default function Grid() {
    return (
        <div>
            <div className="row">
              <div className="col-1 border">One</div>
              <div className="col-1 border">Two</div>
              <div className="col-1 border">Three</div>

              <div className="col-1 border">Four</div>
              <div className="col-1 border">Five</div>
              <div className="col-1 border">Six</div>
              <div className="col-1 border">Seven</div>
              <div className="col-1 border">Eight</div>
              <div className="col-1 border">Nine</div>
              <div className="col-1 border">Ten</div>
              <div className="col-1 border">Eleven</div>
              <div className="col-1 border">Tweleve</div>
            </div>

            <div className="row w-50">
              <div className="col-6 border">One</div>
              <div className="col-6 border">Two</div>
              <div className="col-1 border">Three</div>

              {/* <div className="col-1 border">Four</div>
              <div className="col-1 border">Five</div>
              <div className="col-1 border">Six</div>
              <div className="col-1 border">Seven</div>
              <div className="col-1 border">Eight</div>
              <div className="col-1 border">Nine</div>
              <div className="col-1 border">Ten</div>
              <div className="col-1 border">Eleven</div>
              <div className="col-1 border">Tweleve</div> */}
            </div>
        </div>
    )
}

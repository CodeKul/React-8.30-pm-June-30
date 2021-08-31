import React, { useEffect, useState } from 'react'

export default function Pgination2(props) {

    const { data, RenderComponent, title, pageLimit, dataLimit } = props;
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({behavior: "smooth", top: "0px"})
    }, [currentPage])

    function goToNextPage() {
      setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
      setCurrentPage((page) => page - 1);
    }

    function changePage(e) {
      const pageNumber = Number(e.target.textContent);
      setCurrentPage(pageNumber);
    }

    function getPaginatedData() {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      return data.slice(startIndex, endIndex);
    }

    function getPaginationGroup() {
      let start = Math.floor(((currentPage - 1) / pageLimit) * pageLimit);
      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }


    return (
        <div>
          <h1>{title}</h1>
  
          <div className="dataContainer">
            {getPaginatedData().map((d, idx) => (
              <RenderComponent key={idx} data={d} />
            ))}
          </div>
  
          <div className="pagination">
            <button 
            className={`prev ${currentPage === 1 ? "disabled": ""}`}
             onClick={goToPreviousPage}>Prev</button>
  
            {getPaginationGroup().map((item, index) => (
              <button
              className={`paginationItem ${currentPage === item ? "active" : null}`} 
              key={index} onClick={changePage}>
                <span>{item}</span>
              </button>
            ))}
  
            <button 
            className={`next ${currentPage === pages ? "disabled" : ""}`} onClick={goToNextPage}>Next</button>
          </div>
        </div>
      );

}

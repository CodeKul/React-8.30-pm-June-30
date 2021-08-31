import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../components/Pagination.css";
import "../components/Pagination.module.css";

// 1. create variables to store data with useState
// 2. create or define variables for current page and content size with useState
// 3. calculates the number of pages according number of content length and items per page
// 4.

const renderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key="index">{todo.title}</li>;
      })}
    </ul>
  );
};

export default function Pagination() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setData(response.data);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(3);
  const pageNumberLimit = 10;

  // calculates the number of pages according number of content length and items per page
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const Button = styled.button`
    background-color: blue;
    padding: 6px;
    color: white;
    border-radius: 5px;
  `;

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
      
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage == number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  console.log(data);

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % maxPageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <h1>To do List</h1>

      {renderData(data)}

      <ul className="pageNumbers">
        <li
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          <button>Prev</button>
        </li>
        {renderPageNumbers}

        <li
          onClick={handleNextbtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          Next
        </li>
      </ul>

      <Button>Styled component button</Button>
    </div>
  );
}

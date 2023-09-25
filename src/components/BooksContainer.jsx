/* eslint-disable */
import React from "react";
import AddNewBook from "./AddNewBook";
import Book from "./Book";

const BooksContainer = () => {
  return (
    <div className="book-container">
      <Book  />
      <AddNewBook />
    </div>
  );
};

export default BooksContainer;

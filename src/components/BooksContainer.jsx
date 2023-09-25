import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const BooksContainer = () => (
  <div className="book-container">
    <Book />
    <AddNewBook />
  </div>
);

export default BooksContainer;

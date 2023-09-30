import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const BooksContainer = () => (
  <div className="wrapper">
    <Book key="book-component-key" />
    <AddNewBook />
  </div>
);

export default BooksContainer;

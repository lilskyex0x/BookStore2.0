import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-container">
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <span>
            <button type="button" onClick={() => handleRemoveBook(book.id)}>
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Book;

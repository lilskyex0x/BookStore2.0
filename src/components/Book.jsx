import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/bookSlice';

const Book = () => {
  const books = useSelector((state) => Object.values(state.book.books).flat());
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="book-container">
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <span>
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Book;

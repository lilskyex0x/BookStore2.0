import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookAsync } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const books = useSelector((state) => Object.values(state.book.books).flat());
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="book__container">
      {books.map((book) => (
        <div className="individual__book" key={book.item_id}>
          <div className="first__column">
            <p className="book__category">{book.category}</p>
            <h3 className="book__title">{book.title}</h3>
            <p className="book__author">{book.author}</p>
            <div className="footer">
              <span className="comments">Comments</span>
              <div className="line__separate" />
              <button
                className="remove__btn"
                type="button"
                onClick={() => handleRemoveBook(book.item_id)}
              >
                Remove
              </button>
              <div className="line__separate" />
              <span className="edit">Edit</span>
            </div>
          </div>
          <div className="oval">
            <CircularProgressbar
              className="oval-2"
              value={59}
              text={`${59}%`}
            />
            <div className="progress">
              <span className="percent__complete">59%</span>
              <span className="completed">Completed</span>
            </div>
          </div>
          <div className="line__separate2" />
          <div className="update__chapter">
            <span className="current__chapter">Current Chapter</span>
            <span className="current__lesson">Chapter 17</span>
            <div className="updateProgress__container">
              <span className="update__progress">Update progress</span>
            </div>
          </div>
        </div>
      ))}
      <span className="span__line" />
    </div>
  );
};

export default Book;

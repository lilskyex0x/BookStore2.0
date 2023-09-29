import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAsync } from '../redux/books/bookSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });

  const getLastItemId = () => {
    const lastItem = books[books.length - 1];
    if (lastItem && lastItem.item_id) {
      const lastItemIdMatch = lastItem.item_id.match(/\d+/);
      if (lastItemIdMatch) {
        const lastItemId = parseInt(lastItemIdMatch[0], 10);
        return lastItemId;
      }
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextItemId = `item${getLastItemId() + 1}`;
    const newBook = {
      item_id: nextItemId,
      ...formData,
    };

    try {
      await dispatch(addBookAsync(newBook));
      setFormData({
        title: '',
        author: '',
        category: 'Fiction',
      });
    } catch (error) {
      alert('Error adding book:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="add-new-book">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Fiction">Fiction</option>
          <option value="NonFiction">NonFiction</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddNewBook;

import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddnewBook from "./AddBook";
import Book from "./Book";

const Books = () => {
  const book = [
    { id: uuidv4(), title: "The Atomic habit", author: "James Clear" },
    {
      id: uuidv4(),
      title: "The Subtle art of not giving F",
      author: "Mark Manson.",
    },
    { id: uuidv4(), title: "Harry Potter", author: "J. K. Rowling" },
  ];

  return (
    <div className="book-container">
      <Book book={book} />
      <AddnewBook />
    </div>
  );
};

export default Books;

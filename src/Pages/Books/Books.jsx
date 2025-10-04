import React from 'react';
import Book from '../Book/Book';

const Books = ({ bookdata }) => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center">Books</h1>
      {bookdata.map((singlebookdata) => (
        <Book
          key={singlebookdata.bookId}
          singlebookdata={singlebookdata}
        ></Book>
      ))}
    </div>
  );
};

export default Books;
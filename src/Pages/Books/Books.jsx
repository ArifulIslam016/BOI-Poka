import React from 'react';
import Book from '../Book/Book';

const Books = ({ bookdata }) => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center">Books</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {bookdata.map((singlebookdata) => (
          <Book
            key={singlebookdata.bookId}
            singlebookdata={singlebookdata}
          ></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
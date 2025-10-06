import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({ singlebookdata }) => {
 const {
   totalPages,
   review,
   rating,
   publisher,
   category,
   author,
   bookName,
   image,
   tags,
   yearOfPublishing,
   bookId,
 } = singlebookdata;
  return (
    <div>
      
      <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border">
          <figure>
            <img
              className="h-[166px] px-[104px] py-[32px] bg-gray-200 rounded-2xl m-6"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body space-y-2">
            <div className="flex">
              {tags.map((tag, i) => (
                <button
                  key={i}
                  className=" bg-[#23BE0A10] mr-1 text-green-500 rounded-full px-4 py-[7px]"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>BY {publisher}</p>
            <div className="card-actions justify-between">
              <div className="badge ">{category}</div>
              <div className="badge ">
                {rating} <CiStar></CiStar>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
/***
 * {bookId: 9, bookName: 'The Girl on the Train', author: 'Paula Hawkins', image: 'https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg', review: "'The Great Gatsby' by F. Scott Fitzgerald is a tim…a literary gem that resonates across generations.", …}
author
: 
"Paula Hawkins"
bookId
: 
9
bookName
: 
"The Girl on the Train"
category
: 
"Mystery"
image
: 
"https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg"
publisher
: 
"Riverhead Books"
rating
: 
4.2
review
: 
"'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
tags
: 
(2) ['Suspense', 'Psychological']
totalPages
: 
316
yearOfPublishing
: 
2015
 */
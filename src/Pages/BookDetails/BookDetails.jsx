import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const booksData=useLoaderData()
  const {id} = useParams();
 const DetailedbookData = booksData.find(
   (bookdata) => bookdata.bookId === parseInt(id)
 );
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
 } = DetailedbookData;
 console.log( DetailedbookData)
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row ">
        <img
          className="max-w-[475px] p-10px md:p-[74px] bg-gray-300 rounded-2xl"
          src={image}
          alt=""
        />
        <div className="ml-8">
          <h1 className="text-4xl font font-extrabold ">{bookName}</h1>
          <div>
            <p className="text-3xl text-gray-300 my-5">BY {publisher}</p>
            <div className="text-2xl border-t-1 border-b-1 p-3 border-gray-300">
              {category}
            </div>
            <p className="my-2">
              {" "}
              <span className="text-xl font-bold ">Review: </span>
              {review}
            </p>
            {tags.map((tag, i) => (
              <button
                key={i}
                className=" bg-[#23BE0A10] mr-1 text-green-500 rounded-full px-4 py-[7px]"
              >
                {tag}
              </button>
            ))}
            <div className="flex justify-between w-2/3">
              <h4 className=" text-gray-400">Number Of Pages</h4>
              <h4 className="text-lg font-bold">{totalPages}</h4>
            </div>
            <div className="flex justify-between w-2/3">
              <h4 className=" text-gray-400">Year of Publishing:</h4>
              <h4 className="text-lg font-bold">{yearOfPublishing}</h4>
            </div>
            <div className="flex justify-between w-2/3">
              <h4 className=" text-gray-400">Rating:</h4>
              <h4 className="text-lg font-bold">{rating}</h4>
            </div>
            <div className="flex space-x-3">
              <button class="btn ">Read</button>
              <button class="btn bg-[#59C6D2]">Add Wished</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
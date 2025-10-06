import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getFromLs } from '../../Utilitys/Utility';
import Book from '../Book/Book';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ListedBook = () => {
  const [actualisted,setactualisted]=useState([])
   const [sort, setSort] = useState("");
    const booksData=useLoaderData()
    const listedBookString = getFromLs()
    const listedBoksData=listedBookString.map(bookst=>JSON.parse(bookst))
  useEffect(()=>{
      setactualisted(booksData.filter((bookdata) =>
      listedBoksData.includes(bookdata.bookId)
    ));
  },[])
  const handleSort=(type)=>{
 if (type === "Ratings") {
  setSort(type)
  const sorted = [...actualisted].sort((a, b) => a.rating - b.rating);
   setactualisted(sorted);
 }
 else if(type==="Pages"){
  setSort(type)
  setactualisted([...actualisted].sort((a, b) => a.totalPages - b.totalPages));
 }
 else if (type === "Published Year") {
  setSort(type)
   setactualisted([...actualisted].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing));
 }
  }
   

      return (
        <Tabs>
          <div className="max-w-[300px] mx-auto ">
            <div className="dropdown bg-green-500 rounded-2xl text-center">
              <div tabIndex={0} role="button" className="btn p-1 bg-green-500">
                Sort By {sort}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li
                  className="rounded-xl hover:bg-green-400 "
                  onClick={() => handleSort("Pages")}
                >
                  <a>Sort By Pages</a>
                </li>
                <li className="rounded-xl hover:bg-green-400 " onClick={() => handleSort("Ratings")}>
                  <a>Sort By Ratings</a>
                </li>
                <li className="rounded-xl hover:bg-green-400 " onClick={() => handleSort("Published Year")}>
                  <a>Sort By Published Year</a>
                </li>
              </ul>
            </div>
          </div>
          <TabList>
            <Tab>Readed Books</Tab>
            <Tab>Whishlisht</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {actualisted.map((singlebook) => (
                <Book
                  key={singlebook.bookId}
                  singlebookdata={singlebook}
                ></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      );
};

export default ListedBook;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getFromLs } from '../../Utilitys/Utility';
import Book from '../Book/Book';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ListedBook = () => {
    const booksData=useLoaderData()
    const listedBookString = getFromLs()
    const listedBoksData=listedBookString.map(bookst=>JSON.parse(bookst))
    const actualisted = booksData.filter((bookdata) =>
      listedBoksData.includes(bookdata.bookId)
    );
    const [sort, setSort]=useState('')
    return (
      <Tabs>
        <div className="max-w-[300px] mx-auto ">
          <div className="dropdown bg-green-500">
            <div tabIndex={0} role="button" className="btn m-1 bg-green-500">
              Sort By {sort}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setSort("Pages")}>
                <a>Sort By Pages</a>
              </li>
              <li onClick={() => setSort("Ratings")}>
                <a>Sort By Ratigs</a>
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
              <Book key={actualisted.bookId} singlebookdata={singlebook}></Book>
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
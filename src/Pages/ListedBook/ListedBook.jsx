import React from 'react';
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
    return (
      <Tabs>
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
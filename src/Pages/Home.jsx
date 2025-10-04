import React from "react";
import Banner from "../Components/Banner/Banner";
import Books from "./Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const bookdata = useLoaderData();
  
  
  return (
    <div>
      <Banner></Banner>
      <Books bookdata={bookdata}></Books>
    </div>
  );
};

export default Home;

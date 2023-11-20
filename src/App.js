import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import Post from "./Post";
import Header from "./Header";
import Profile from "./Profile";

const App = () => {
 const [ind,setind]=useState(0)

  return (
    <>
      <Header setind={setind}/>
      <Profile currUser={data[ind]}/>
      <Post curruserPost={data[ind].posts}/>
    </>
  );
};

export default App;

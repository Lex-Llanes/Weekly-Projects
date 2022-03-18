import React from "react";

import './App.css';
//User components
import AddUser from "./components/adduser";
import ListAllUsers from "./components/listalluser";
//Event coponents
import AddEvent from "./components/addevents";
import ListAllEvents from "./components/listallevents";


function App() {
  return (
    <>
      <AddUser />
      <ListAllUsers />
      <br></br>
      <br></br>
      <br></br>
      <h1>=========================================================</h1>
      <br></br>
      <br></br>
      
      <AddEvent />
      <ListAllEvents />
    </>
  )
}

export default App;

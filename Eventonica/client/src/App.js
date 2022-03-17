import React from "react"
import "./App.css";
import User from "./components/user"
import Events from "./components/events"


function App() {
  return (
    <div className="App">
     <User />
     <br></br>
     <br></br>
     
     <Events />
    </div>
  );
}

export default App;
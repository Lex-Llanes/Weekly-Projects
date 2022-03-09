import logo from './logo.svg';
import './App.css';
import React from "react"
import { useState, useEffect, useRef } from "react"

function App() {


  const [currentUrl, setUrl] = useState('/general');
  const [quizData, setQuiz] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(currentUrl)
      .then((response) => {
        if(response.ok){
          return response.json()
        } else {
          throw response
        }
      })
      .then(setQuiz)
      .then()
      .catch((error) => {
        console.error("Something went wrong with quiz", error)
        setError(error)
      })
      .finally(() => {
        /* Place Holder */
      })
  }, [currentUrl])


console.log(quizData)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
      </header>
    </div>
  );
}

export default App;

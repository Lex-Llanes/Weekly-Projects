import logo from './logo.svg';
import './App.css';
import { React, useState, useEffect, useRef } from "react"
import Button from "./components/buttons"


function App() {


  const [currentUrl, setUrl] = useState('/general');
  const [quizData, setQuiz] = useState();
  const [error, setError] = useState(null);


  let [correctAnswer, setCorrect] = useState()
  let [wrongAnswers, setWrong] = useState([]) //Use .map to set 3 wrong answers

  //FETCHES API DATA
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


  //Checking API data
  console.log("This is the data", quizData);
  console.log(quizData?.results)



  const handleStartButton = (event) => {
    setCorrect(correctAnswer = quizData.results[0].correct_answer)
    setWrong(wrongAnswers = quizData.results[0].incorrect_answers)
    wrongAnswers.push(correctAnswer)
  }

  console.log("wrong ", wrongAnswers)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* This button will trigger the set of the game */}
        <button 
          onClick={handleStartButton}
        >
          START QUIZ GAME
        </button>

        <Button answers={wrongAnswers} />
      </header>
    </div>
  );
}

export default App;

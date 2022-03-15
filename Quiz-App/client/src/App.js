import logo from './logo.svg';
import './App.css';
import { React, useState, useEffect, useRef } from "react"
import Button from "./components/button/buttons"
import Question from "./components/question/question"
import Restart from "./components/restart/restart"


function App() {


  const [currentUrl, setUrl] = useState('/general');
  const [quizData, setQuiz] = useState();
  const [error, setError] = useState(null);


  let [question, setQuestion] = useState()
  let [correctAnswer, setCorrect] = useState()
  let [wrongAnswers, setWrong] = useState([]) //Use .map to set 3 wrong answers

  //FETCHES API DATA


  //Checking API data
  console.log("This is the data", quizData);
  console.log(quizData?.results)

  function refreshPage() {
    window.location.reload(false);
  }

  const handleStartButton = (event) => {
    fetch(currentUrl)
      .then((response) => {
        if(response.ok){
          return response.json()
        } else {
          throw response
        }
      })
      .then((quizData) => {
        setQuiz(quizData)
        setQuestion(question = quizData.results[0].question)
        setCorrect(correctAnswer = quizData.results[0].correct_answer)
        setWrong(wrongAnswers = quizData.results[0].incorrect_answers)
        wrongAnswers.push(correctAnswer)
      })
      .catch((error) => {
        console.error("Something went wrong with quiz", error)
        setError(error)
      })
    
  }

  console.log("wrong ", wrongAnswers)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* This button will trigger the set of the game */}
        <button data-testid="start-button"
          onClick={handleStartButton}
        >
          START QUIZ GAME
        
        </button>
        <br></br>
        <Restart restart={refreshPage} />
        <Question question={question}/>
        <Button answers={wrongAnswers} />

      </header>
    </div>
  );
}

export default App;

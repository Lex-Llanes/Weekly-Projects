import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/START QUIZ GAME/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders the question', () => {


  //Mocking the server
  jest.spyOn(global, "fetch").mockImplementation(() =>
  
  {console.log("fake data called");
    return Promise.resolve({
      ok:true,
    json: () => Promise.resolve({
      response_code:0,
      results:[{
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When was the Sega Genesis released in Japan?",
        "correct_answer": "October 29, 1988",
        "incorrect_answers": [
            "August 14, 1989",
            "November 30, 1990",
            "September 1, 1986"
        ]
    }]
    })
  })}
  );

  render(<App />);

  //Testing if it renders string
  const question = screen.getByTestId("question-text")
  expect(question).toBeEmptyDOMElement()

  //Testing button click
  const startbutton = screen.getByTestId("start-button")
  act(() => fireEvent.click(startbutton))
  expect(question).not.toBeEmptyDOMElement()
})


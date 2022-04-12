import './App.css';
import { useState } from 'react'
import Homepage from './components/Homepage'
import Question from './components/Question'
import questionMark from './images/question_mark.jpg'

function App() {
  const [quiz, setQuiz] = useState(true)

  const styles = {flexDirection: quiz ? "column" : "row"}

  function startQuiz() {
    setQuiz(true)
  }

  return (
    <div className="App" style={styles}>
      <img className='qm-left' src={questionMark} alt="question_mark" />
      {!quiz && <Homepage startQuiz={startQuiz} />}
      {quiz && <Question />}
      {quiz && <Question />}
      {quiz && <Question />}
      {quiz && <Question />}
      {quiz && <Question />}
      <img className='qm-right' src={questionMark} alt="question_mark" />
      {quiz && <button className='checkAnswers'>Check Answers</button>}
    </div>
  );
}

export default App;

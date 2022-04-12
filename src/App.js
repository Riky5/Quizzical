import './App.css';
import { useState } from 'react'
import Homepage from './components/Homepage'
import questionMark from './images/question_mark.jpg'

function App() {
  const [quiz, setQuiz] = useState(false)

  function startQuiz() {
    setQuiz(true)
  }

  return (
    <div className="App">
      <img className='qm-left' src={questionMark} alt="question_mark" />
      {!quiz && <Homepage startQuiz={startQuiz} />}
      <img className='qm-right' src={questionMark} alt="question_mark" />
    </div>
  );
}

export default App;

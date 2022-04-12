import './App.css';
import { useEffect, useState } from 'react'
import Homepage from './components/Homepage'
import Question from './components/Question'
import questionMark from './images/question_mark.jpg'

function App() {
  const [quiz, setQuiz] = useState(true)
  const styles = {flexDirection: quiz ? "column" : "row"}

  function startQuiz() {
    setQuiz(true)
  }

  const [questions, setQuestions] = useState([])

    useEffect(()=>{
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
    },[])
    
    const questionData = questions.map((item,index) => {
      return (
        <Question key={index} q={item.question} />
      )
    })

  return (
    <div className="App" style={styles}>
      <img className='qm-left' src={questionMark} alt="question_mark" />
      {!quiz && <Homepage startQuiz={startQuiz} />}
      {quiz && questionData}
      <img className='qm-right' src={questionMark} alt="question_mark" />
      {quiz && <button className='checkAnswers'>Check Answers</button>}
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react'
import Homepage from './components/Homepage'
import Question from './components/Question'
import questionMark from './images/question_mark.jpg'
import { nanoid } from 'nanoid'

function App() {
  const [quiz, setQuiz] = useState(true)
  const styles = {flexDirection: quiz ? "column" : "row"}

  function startQuiz() {
    setQuiz(true)
  }

  const [questionAndAnswers, setQuestionAndAnswers] = useState([])

    useEffect(()=>{
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuestionAndAnswers(data.results))
    },[])

    const questionData = questionAndAnswers.map(item => {
      const newItem = {
        question: item.question,
        incorrect_answers: item.incorrect_answers,
        correct_answer: item.correct_answer,
        id: nanoid()
      }
      return (
        <Question key={newItem.id} data={newItem} />
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

import './App.css';
import { useEffect, useState } from 'react'
import Homepage from './components/Homepage'
import Question from './components/Question'
import questionMark from './images/question_mark.jpg'
import { nanoid } from 'nanoid'

function App() {
  const [quiz, setQuiz] = useState(false)
  const [result, setResult] = useState(false)
  const [score, setScore] = useState(0)
  const styles = {flexDirection: quiz ? "column" : "row"}
  const [questionAndAnswers, setQuestionAndAnswers] = useState([])

    useEffect(()=>{
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => setQuestionAndAnswers(data.results))
    },[quiz])

  const [newQuestionAndAnswers, setNewQuestionAndAnswers] = useState([])

    function startQuiz() {
      setQuiz(true)
      const newQA = questionAndAnswers.map(item=>{
        const answerArray = []
        item.incorrect_answers.forEach(answer=>{
          answerArray.push({
            id: nanoid(),
            answer: answer,
            isSelected: false,
            isCorrect: false,
            backgroundColor: ""
          })
        })
        answerArray.push({
          id: nanoid(),
          answer: item.correct_answer,
          isSelected: false,
          isCorrect: true,
          backgroundColor: ""
        })
        return {
          id: nanoid(),
          question: item.question,
          allAnswers: randomizeAnswers(answerArray),
          correct_answer: item.correct_answer
        }
      })
      setNewQuestionAndAnswers(newQA)
    }
  
    function randomizeAnswers(arr) {
      return [...arr].map( (_, i, arrCopy) => {
        let rand = i + ( Math.floor( Math.random() * (arrCopy.length - i) ) );
        [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
        return arrCopy[i]
      })
    }
    
    function checkAnswersOrPlayAgain() {
      if (result) {
        console.log("start new quiz")
        setQuiz(false)
        setScore(0)
        setResult(false)
      } else {
        setResult(true)
        const newData = newQuestionAndAnswers.map(obj=>{
          const newAnswers =  obj.allAnswers.map(a=>{
            if (a.isSelected && a.answer === obj.correct_answer) {
              setScore(prev => prev += 1)
              a.backgroundColor = "#b3ffe0"
            } else if (a.isSelected && a.answer !== obj.correct_answer) {
              a.backgroundColor = "#ff99c2"
            } else {
              a.backgroundColor = ""
            }
            return a
          })
          return {
             ...obj,
             allAnswers: newAnswers
          }
        })
        setNewQuestionAndAnswers(newData)
      }  
    }

    const questionData = newQuestionAndAnswers.map(item => {
      return (
        <Question key={item.id} data={item} checkAnswers={()=>checkAnswersOrPlayAgain()} />
      )
    })
    
  return (
    <div className="App" style={styles}>
      <img className='qm-left' src={questionMark} alt="question_mark" />
      {!quiz && <Homepage startQuiz={startQuiz} />}
      {quiz && questionData}
      <img className='qm-right' src={questionMark} alt="question_mark" />
      {result && <p>You scored {score}/5 correct answers</p>}
      {quiz && <button onClick={checkAnswersOrPlayAgain} className='checkAnswers'>{result ? "Play Again" : "Check Answer"}</button>}
    </div>
  );
}

export default App;

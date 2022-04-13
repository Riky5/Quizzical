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
            isSelected: false
          })
        })
        answerArray.push({
          id: nanoid(),
          answer: item.correct_answer,
          isSelected: false
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

    const questionData = newQuestionAndAnswers.map(item => {
      return (
        <Question key={item.id} data={item} checkAnswers={()=>checkAnswers()} />
      )
    })

    function checkAnswers() {
      // setResult(true)
      // return answers.map(a=>{
      //   if(a.isSelected && a.answer === correct_item) {
      //     setScore(prev=>prev++)
      //     return "Green"
      //   } else {
      //     return "Red"
      //   }
      // })
    }

  return (
    <div className="App" style={styles}>
      <img className='qm-left' src={questionMark} alt="question_mark" />
      {!quiz && <Homepage startQuiz={startQuiz} />}
      {quiz && questionData}
      <img className='qm-right' src={questionMark} alt="question_mark" />
      {result && <p>You scored {score}/5 correct answers</p>}
      {quiz && <button onClick={checkAnswers} className='checkAnswers'>{result ? "Play Again" : "Check Answer"}</button>}
    </div>
  );
}

export default App;

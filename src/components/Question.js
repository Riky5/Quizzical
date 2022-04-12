import './Question.css'
import Answer from '../components/Answer'
import { useEffect, useState } from 'react'

export default function Question(props) {
  const [answers, setAnswers] = useState([])

  useEffect(()=>{
    const answerArray = []
    props.data.incorrect_answers.forEach(answer=>{answerArray.push(answer)})
    answerArray.push(props.data.correct_answer)

    setAnswers(answerArray)
  },[])
  
  const answerData = answers.map((answer,i)=>{
    return (
      <Answer key={i} a={answer} />
    )
  })

  return (
    <div className='question'>
      <h3>{props.data.question}</h3>
      <div className='answers'>
        {answerData}
      </div> 
    </div>
  )
}

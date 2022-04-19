import './Question.css'
import Answer from '../components/Answer'
import { useEffect, useState } from 'react'

export default function Question(props) {
  
  const [answers, setAnswers] = useState([])
  
  useEffect(()=>{
    setAnswers(props.data.allAnswers)
  },[props.data.allAnswers])

  const answerData = answers.map(answer=>{
    return (
      <Answer 
      key={answer.id} 
      a={answer.answer}
      isSelected={answer.isSelected}
      backgroundColor={answer.backgroundColor}
      toggleAnswer={()=>toggleAnswer(answer.id)} 
      />
    )
  })

  function toggleAnswer(id) {
    if (answers.every(answ => !answ.isSelected)) {
      selectAnswer(id)
    } else {
      unselectAnswer(id)
    } 
  }
  
  function selectAnswer(id) {
    const newAnswers = answers.map(answer=>{
      if (answer.id === id){
        answer.isSelected = !answer.isSelected
      }
      return answer
    })
    setAnswers(newAnswers)
  }

  function unselectAnswer(id) {
    const newAnswers = answers.map(answer=>{
      if (answer.id === id && answer.isSelected){
        answer.isSelected = !answer.isSelected
      }
      return answer
    })
    setAnswers(newAnswers)
  }

  return (
    <div className='question'>
        <h3>{props.data.question}</h3>
        <div className='answers'>
          {answerData}
        </div> 
    </div>
  )
}

import './Question.css'
import Answer from '../components/Answer'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

export default function Question(props) {
  const [answers, setAnswers] = useState([])

  useEffect(()=>{
    const answerArray = []
    props.data.incorrect_answers.forEach((answer)=>answerArray.push({
      id: nanoid(),
      answer: answer,
      isSelected: false
    }))
    answerArray.push({
      id: nanoid(),
      answer: props.data.correct_answer,
      isSelected: false
    })
    const randomized = randomizeAnswers(answerArray)
    setAnswers(randomized)
  },[])
  
  function randomizeAnswers(arr) {
    return [...arr].map( (_, i, arrCopy) => {
      let rand = i + ( Math.floor( Math.random() * (arrCopy.length - i) ) );
      [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
      return arrCopy[i]
    })
  }
  
  const answerData = answers.map((answer)=>{
    return (
      <Answer 
      key={answer.id} 
      a={answer.answer}
      isSelected={answer.isSelected}
      selectAnswer={()=>selectAnswer(answer.id)} 
      />
    )
  })

  function selectAnswer(id) {
    const newAnswers = answers.map(answer=>{
      if (answer.id === id){
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

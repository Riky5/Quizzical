import './Question.css'
import Answer from '../components/Answer'

export default function Question(props) {
  return (
    <div className='question'>
      <h3>{props.q}</h3>
      <div className='answers'>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
      
    </div>
  )
}

import './Answer.css'

export default function Answer(props) {
  return (
    <div>
      <button className='answer-btn'>{props.a}</button>
    </div>
  )
}
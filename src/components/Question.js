import './Question.css'

export default function Question() {
  return (
    <div className='question'>
      <h3>Question here?</h3>
      <div className='answers'>
        <button className='answer-btn'>Answer here</button>
        <button className='answer-btn'>Answer here</button>
        <button className='answer-btn'>Answer here</button>
        <button className='answer-btn'>Answer here</button>
      </div>
    </div>
  )
}

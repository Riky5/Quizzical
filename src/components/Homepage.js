import './Homepage.css'

export default function Homepage(props) {
  return (
    <section>
      <h1>Quizzical</h1>
      <p>How knowledgeable are you? Answer to 5 questions and let's find out 😊</p>
      <button className='startQuiz' onClick={props.startQuiz}>Start Quiz</button>
    </section>
  )
}
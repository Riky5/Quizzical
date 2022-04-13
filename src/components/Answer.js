import './Answer.css'

export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? "#99c2ff" : "",
    border: props.isSelected ? "none" : "",
  }
  return (
    <div>
      <button onClick={props.selectAnswer} className='answer-btn' style={styles}>{props.a}</button>
    </div>
  )
}
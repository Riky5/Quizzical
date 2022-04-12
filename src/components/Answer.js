import './Answer.css'

export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? "blue" : "white",
    color: props.isSelected ? "white" : "black"
  }
  return (
    <div>
      <button onClick={props.selectAnswer} className='answer-btn' style={styles}>{props.a}</button>
    </div>
  )
}
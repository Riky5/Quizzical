import './Answer.css'

export default function Answer(props) {
  const styles = {
    backgroundColor: props.backgroundColor
  }
  return (
    <div>
      <button onClick={props.toggleAnswer} className={props.isSelected ? 'selected-btn' : 'answer-btn'} style={styles}>{props.a}</button>
    </div>
  )
}
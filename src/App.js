import './App.css';
import Homepage from './components/Homepage'
import questionMark from './images/question_mark.jpg'

function App() {
  return (
    <div className="App">
      <img className='qm-left' src={questionMark} alt="question_mark" />
      <Homepage />
      <img className='qm-right' src={questionMark} alt="question_mark" />
    </div>
  );
}

export default App;

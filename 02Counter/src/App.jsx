import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(3);

  const adding = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  const subtracting = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2>Wellcome to counter</h2>
      <h1>this is number : {counter}</h1>
      <button onClick={adding}>add </button>
      <button onClick={subtracting}>sub </button>
    </div>
  )
}

export default App

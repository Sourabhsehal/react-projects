import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert("Button clicked!");
  };


  return (
    <>
      <div className="App">
        <div>
          <input type="text" id="password" value="" placeholder='hgsdfbjksdlsdh' /> <button onClick={handleClick}>Copy</button>
          <h1>Password Generator</h1>
        </div>
        <div className="controls">
          <div className="slider-row">
            <input type="range" min="4" max="32" defaultValue="12" />
            <div className="length-label">Length (12)</div>
          </div>

          <div className="checkbox-row">
            <label>
              <input type="checkbox" /> Numbers
            </label>

            <label>
              <input type="checkbox" /> Characters
            </label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

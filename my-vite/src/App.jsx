// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

const name ="Sourabh";
const date = new Date();


function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div>
    //   <h1>Array Methods Example</h1>
    //   <p>Check the console for output of array methods.</p>
    //   <h3>Hello! My name is {name}</h3>
    //   <ul>
    //     <li>map()</li>
    //     <li>filter()</li>
    //     <li>reduce()</li>
    //   </ul>
    // </div>
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

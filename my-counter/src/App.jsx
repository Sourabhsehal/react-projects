import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);
  
  const addvalue = () => {
    console.log("Add Value Clicked")
    if(count < 20){
      setCount(count + 1);
    }

  }
  const deletevalue = () => {
    console.log("Delete Value Clicked")
    if(count > 0){
      setCount(count - 1);
    }
  }
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 > Counter App </h1>
      <h3>You have Clicked the button {count} times</h3>
      <button onClick={addvalue}>Add Value </button>
      <button onClick={deletevalue}>Delete Value </button>
    </>
  )
}

export default Counter

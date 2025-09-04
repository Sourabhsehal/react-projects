import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {

  return (
    <>
      <div className='flex justify-center align-item-center m-12 '>
      <div className="max-w-md bg-gray-100 rounded-2xl border hover:border-blue-200 shadow-md p-5 ">
        <div>{props.image && <img src={props.image} className={props.className} alt={props.alt} />}</div>
        <div>
          <h2>Flat in {props.place}</h2>
          <p>{props.guests} Guest {props.bedrooms} Bedroom {props.bathrooms} Bathroom</p>
          <p>{props.rating}</p>
        </div>
        </div>
      </div>
    
    </>
  )
}

export default App

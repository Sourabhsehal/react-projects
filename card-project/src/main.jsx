import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex justify-center align-item-center'>
      <App place=' Noida' guests='4' bedrooms='2' bathrooms='2' rating='4.70' image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdicP5APOYA4fb_0pW7pellbb35vt5dAjc6A&s' className="w-full h-40 rounded-t-2xl" alt="Vite logo"/>
      <App place=' Delhi' guests='5' bedrooms='1' bathrooms='1' rating='4.90' image ='https://sun-b2b.s3.us-east-2.amazonaws.com/transfer/Hotel%20in%20Noida.jpg' className="w-full h-40 rounded-t-2xl" alt="Vite logo"/>
      <App place=' New York' guests='2' bedrooms='3' bathrooms='2' rating='4.99' image='https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2020/12/THE-STANDARD-HIGH-LINE-2.jpg?fit=970%2C546&ssl=1' className="w-full h-40 rounded-t-2xl" alt="Vite logo" />
    </div>
  </StrictMode>,
)

import { useState } from 'react'
import Clock from './Clock'
import useToggle from './useToggle'



function App() {
  const [isOn, toggleBtn] = useToggle(true)

 
  
  return (
    <>
    <main>
     
        {isOn === true && <button className="clock-btn" onClick={toggleBtn}>Clock is on <span role="img" aria-label="clock">⏰</span></button>}
        {isOn === false && <button className="clock-btn" onClick={toggleBtn}>Clock is off <span role="img" aria-label="question-face">🤨</span></button>}
    
    {/* If clock button is on, only then show the clock display */}
    {isOn &&  <Clock />}
    </main>
   
       
    </>
  )
}

export default App

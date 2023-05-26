import { useState } from 'react'
import Clock from './Clock'
import useToggle from './useToggle'



function App() {
  const [isOn, toggleBtn] = useToggle(false)

 
  
  return (
    <>
    <main>
      <button className="clock-btn" onClick={toggleBtn}>
         <span role="img" aria-label="clock">⏰</span> Clock is {isOn ? 'on' : 'off'} 
      </button>
    
    {/* If clock button is on, only then show the clock display */}
    {isOn &&  <Clock />}
    </main>
   
       
    </>
  )
}

export default App

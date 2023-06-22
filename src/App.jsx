import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer/Timer'


function App() {
  const [session, setSession] = useState(true)
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5)

  const handleSession = () => {
    setSession(!session)
  }

  function handleIncrement(e) {
    console.log(e.target.id)
    if (e.target.id === 'session-increment' && sessionTime < 60) {
      setSessionTime(prev => prev + 1)
    } else if (e.target.id === 'break-increment' && breakTime < 60) {
      setBreakTime(prev => prev + 1)
    }

    console.log(sessionTime)







  }

  function handleDecrement(e) {
    console.log(e.target.id)
    if (e.target.id === 'session-decrement' && sessionTime >= 0) {
      setSessionTime(prev => prev - 1)
    } else if (e.target.id === 'break-decrement' && breakTime >= 0) {
      setBreakTime(prev => prev - 1)
    }

    console.log(sessionTime)



  }




  return (
    <>
      <div id="app">
        <div id='session-label'>Session Length</div>

        <button id="session-increment" onClick={handleIncrement}>increment</button>
        <div id="session-length">{sessionTime}</div>
        <button id="session-decrement" onClick={handleDecrement}>decrement</button>


        <div id='break-label'>Break Length</div>
        <button id="break-increment" onClick={handleIncrement}>increment</button>
        <div id="break-length">
          {breakTime}
        </div>

        <button id="break-decrement" onClick={handleDecrement}>decrement</button>

        {session ? <Timer type='session' userTime={sessionTime} /> : <Timer type='break' userTime={breakTime} />}



        <button onClick={handleSession}>Session</button>



      </div>
    </>
  )
}

export default App

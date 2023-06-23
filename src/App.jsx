import { useState, useEffect } from 'react'

import './App.css'
import Timer from './components/Timer/Timer'


function App() {
  const [session, setSession] = useState(false)
  const [sessionTime, setSessionTime] = useState(1);
  const [breakTime, setBreakTime] = useState(1)
  const [renderedSession, setRenderedSession] = useState(false)
  const [restarted, setRestarted] = useState(false);

  useEffect(() => {
    if (renderedSession === true) {
      handleSession()
    }

  }, [renderedSession])

  useEffect(() => {
    if (restarted === true) {
      restartAll()
      console.log('restartAll App')
    }

  }, [restarted])

  const handleSession = () => {


    setSession(!session)
    console.log(session)
  }

  function renderSession(minutes, seconds) {
    if (minutes === 0 && seconds === 0) {
      setRenderedSession(true)

    } else {
      setRenderedSession(false)
    }

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
    if (e.target.id === 'session-decrement' && sessionTime > 0) {
      setSessionTime(prev => prev - 1)
    } else if (e.target.id === 'break-decrement' && breakTime > 0) {
      setBreakTime(prev => prev - 1)
    }

    console.log(sessionTime)



  }

  function getRestart(reset) {
    if (reset) {
      setRestarted(!restarted)
      console.log('restarted getRestart App')
      console.log(restarted)
    }

  }

  function restartAll() {
    if (restarted) {
      setSessionTime(25)
      setBreakTime(5)
      console.log('restart All Function')
    }
  }


  return (
    <>
      <div id="app">
        <h1>25 x 5 Timer</h1>

        <div id='timerBox'>
          {session ? <Timer
            type='session'
            userTime={sessionTime}
            handleSession={renderSession} getRestart={getRestart} /> :
            <Timer
              type='break'
              userTime={breakTime}
              handleSession={renderSession} getRestart={getRestart} />}

        </div>


        <div id="userTimes">
          <div id="session">
            <div id='session-label'>Session Length</div>
            <div id="session-buttons">
              <button id="session-increment" onClick={handleIncrement}>🔼</button>
              <div id="session-length">{sessionTime}</div>
              <button id="session-decrement" onClick={handleDecrement}>🔽</button>
            </div>
          </div>

          <div id="break">
            <div id='break-label'>Break Length</div>
            <div id="break-buttons">
              <button id="break-increment" onClick={handleIncrement}>🔼</button>
              <div id="break-length">{breakTime}</div>
              <button id="break-decrement" onClick={handleDecrement}>🔽</button>
            </div>
          </div>

        </div>

        <button onClick={handleSession}>Session</button>




      </div>
    </>
  )
}

export default App

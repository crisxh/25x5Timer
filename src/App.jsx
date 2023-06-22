import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer/Timer'


function App() {
  const [session, setSession] = useState(true)

  const handleSession = () => {
    setSession(!session)
  }



  return (
    <>
      <div id="app">
        <div id='session-label'></div>
        <div id='break-label'></div>

        {session ? <Timer type='session' userMin={4} /> : <Timer type='break' userMin={5} />}
        <button onClick={handleSession}>Session</button>



      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer/Timer'


function App() {





  return (
    <>
      <div id="app">
        <Timer type='break' />
        <Timer type='session' />
      </div>
    </>
  )
}

export default App

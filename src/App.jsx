import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer/Timer'


function App() {





  return (
    <>
      <div id="app">
        <Timer minutes={1} type='break' />
        <Timer minutes={25} type='session' />
      </div>
    </>
  )
}

export default App

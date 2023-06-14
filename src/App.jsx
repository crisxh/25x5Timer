import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerType from './components/TimerType/TimerType'


function App() {





  return (
    <>
      <div id="app">
        <TimerType id='id' minutes={5} type='rest' />
        <TimerType id='id2' minutes={25} type='session' />
      </div>
    </>
  )
}

export default App

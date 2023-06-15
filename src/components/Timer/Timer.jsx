import { useState } from 'react'
import './Timer.css'

function Timer({ type, minutes, id }) {
    const [min, setMin] = useState(minutes)
    const [seconds, setSeconds] = useState(5)
    const [timer, setTimer] = useState(min);
    const [intervalId, setIntervalId] = useState(false);
    const [secIntervalId, setSecIntervalid] = useState(false)
    const [userTime, setUserTime] = useState(0);

    let secTime = seconds;

    function handleIncrement() {
        console.log(min)

        setMin(prev => prev + 1)
        //  setTimer(min)

        console.log(timer)

    }

    function handleDecrement() {
        console.log(min)
        console.log(type)

        setMin(prev => prev - 1)
        // setTimer(min)


        console.log(timer)
    }



    //helper function to convert min
    const secondsToMinutes = (seconds) => {
        let minutes = seconds / 60;
        let timerSeconds = seconds % 60
        return parseInt(minutes) + ":" + timerSeconds;
    }
    const minutesToSeconds = (minutes) => {
        let seconds = minutes * 60;
        return seconds;
    }

    const countdown = () => {

        if (secTime > 0) {
            setSeconds(prev => prev - 1);
            console.log('seconds ', seconds)
        }
        if (secTime == 0) {
            setMin(prev => prev - 1)


        }








    }

    const startStopCountDown = () => {
        if (!intervalId) {


            setIntervalId(setInterval(countdown, 1000));
        }


        console.log(intervalId)

        if (intervalId) {
            console.log(intervalId)
            console.log(secondsToMinutes(1430))
            clearInterval(intervalId);
            setIntervalId(false);

        }



    }

    const startCountDown = () => {


        if (!intervalId) {


            setIntervalId(setInterval(countdown, 1000));
        }


        console.log(intervalId)
    }
    const stopCountDown = () => {
        if (intervalId) {
            console.log(intervalId)
            console.log(secondsToMinutes(1430))

        }

        clearInterval(intervalId);
        setIntervalId(false);


    }
    const restartCountDown = () => {
        setSeconds(5);
        setIntervalId(false);
        clearInterval(intervalId);
    }

    return (
        <div id={id}>
            <div id={`${type}-length`}>{min}</div>
            <button id={`${type}-decrement`} onClick={handleIncrement}>increment</button>
            <button id={`${type}-increment`} onClick={handleDecrement}>decrement</button>


            <div id='Countdown' >
                <div id={`${type}-label`}>
                    <h3>break length</h3>
                </div>
                <div id="sesson-label">
                    <h3>session length</h3>
                </div>
                <div id='timer'> timer: {min}:{seconds}</div>
                <div id='buttons'>
                    <button className='timerButton' id="" onClick={startStopCountDown}>
                        Start
                    </button>
                    {/* <button className='timerButton' onClick={stopCountDown}>Stop</button> */}
                    <button className='timerButton' onClick={restartCountDown}>
                        Restart
                    </button>
                </div>
                {/* <div id='inputDiv'>
                    <input type='number' onChange={handleUserTime} max='60'></input>
                    <button onClick={handleUserTimeButton}>Set Time</button>
                </div> */}
            </div>

        </div>

    )
}

export default Timer;
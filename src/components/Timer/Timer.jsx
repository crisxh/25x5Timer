import { useState } from 'react'
import './Timer.css'

function Timer({ type, minutes, id }) {
    const [min, setMin] = useState(minutes)
    const [seconds, setSeconds] = useState(5)
    const [timer, setTimer] = useState(min);
    const [intervalId, setIntervalId] = useState(false);
    const [secIntervalId, setSecIntervalid] = useState(false)
    const [userTime, setUserTime] = useState(0);

    function handleIncrement() {
        console.log(min)

        setMin(prev => prev + 1)
        //  setTimer(min)

        console.log(timer)

    }

    function handleDecrement() {
        console.log(min)

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

        if (seconds > 0) {
            setSeconds(prev => prev - 1);
            console.log('seconds ', seconds)
        }
        if (seconds == 0) {
            setMin(prev => prev - 1)


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
            {type} {min}
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>


            <div id='Countdown' >
                <div id="break-label">
                    <h3>break length</h3>
                </div>
                <div id="sesson-label">
                    <h3>session length</h3>
                </div>
                <div id='timer'> timer: {min}:{seconds}</div>
                <div id='buttons'>
                    <button className='timerButton' id="" onClick={startCountDown}>
                        Start
                    </button>
                    <button className='timerButton' onClick={stopCountDown}>Stop</button>
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
import { useState } from 'react'
import './TimerType.css'

function TimerType({ type, minutes, id }) {
    const [time, setTime] = useState(minutes)
    const [timer, setTimer] = useState(minutes);
    const [intervalId, setIntervalId] = useState(false);
    //const [userTime, setUserTime] = useState(0);

    function handleIncrement() {
        console.log(time)
        setTime(prev => prev + 1)

    }

    function handleDecrement() {
        console.log(time)
        setTime(prev => prev - 1)
    }



    //helper function to convert time
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

        if (time > 0) {
            setTimer(prev => prev - 1);

            if (time === 0) {
                stopCountDown()
            }

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
        setTimer(userTime);
        setIntervalId(false);
        clearInterval(intervalId);
    }

    return (
        <div id={id}>
            {type} {time}
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            timer: {timer}

            <div id='Countdown' >
                <div id="break-label">
                    <h3>break length</h3>
                </div>
                <div id="sesson-label">
                    <h3>session length</h3>
                </div>
                <div id='timer'> {timer} </div>
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
export default TimerType;
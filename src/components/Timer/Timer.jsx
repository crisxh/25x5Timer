import { useState, useEffect, useRef } from 'react'
import './Timer.css'

function Timer({ type }) {
    const [userTime, setUserTime] = useState(2);
    const [min, setMin] = useState(userTime - 1)
    const [seconds, setSeconds] = useState(59)
    //const [timer, setTimer] = useState(min);
    const [intervalId, setIntervalId] = useState(false);
    const sec = useRef(59)


    useEffect(() => {




        if (intervalId && seconds > 0) {
            // setTimeout(() => {
            //     setSeconds(prev => prev - 1);
            //     console.log('seconds ', seconds)


            // }, 1000)

        }
        if (seconds === 0 && min != 0) {
            setMin(prev => prev - 1)
            if (min >= 0) {
                setSeconds(sec.current)

            }


        }
        if (min === 0 && seconds === 0) {
            setIntervalId(false)
            clearInterval(intervalId)
        }






    }, [seconds, intervalId, min])



    function handleIncrement() {
        console.log(min)

        setUserTime(prev => prev + 1)
        restartCountDown()
        //  setTimer(min)

        console.log(timer)

    }

    function handleDecrement() {
        console.log(min)
        console.log(type)

        setUserTime(prev => prev - 1)
        restartCountDown()

    }




    const countdown = () => {


        setSeconds(prev => prev - 1);
        console.log('seconds ', seconds)



        // if (seconds > 0) {
        //     setSeconds(prev => prev - 1);
        //     console.log('seconds ', seconds)
        // }
        // if (seconds === 0) {
        //     setMin(prev => prev - 1)


        // }








    }

    const startStopCountDown = () => {
        if (!intervalId) {


            setIntervalId(true);
            setIntervalId(setInterval(countdown, 1000))
        }


        console.log(intervalId)

        if (intervalId) {

            clearInterval(intervalId);
            setIntervalId(false);

        }



    }

    // const startCountDown = () => {


    //     if (!intervalId) {


    //         setIntervalId(setInterval(countdown, 1000));
    //     }


    //     console.log(intervalId)
    // }
    // const stopCountDown = () => {
    //     if (intervalId) {
    //         console.log(intervalId)
    //         console.log(secondsToMinutes(1430))

    //     }

    //     clearInterval(intervalId);
    //     setIntervalId(false);


    // }
    const restartCountDown = () => {
        setSeconds(sec.current);
        setMin(userTime);
        setIntervalId(false);
        clearInterval(intervalId);
    }

    return (
        <div id={`${type}-timer`} className='timer'>
            <div id={`${type}-length`}>{userTime}</div>
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
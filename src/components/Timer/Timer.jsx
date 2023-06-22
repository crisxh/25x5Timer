import { useState, useEffect, useRef } from 'react'
import './Timer.css'

function Timer({ type, userMin }) {
    const [userTime, setUserTime] = useState(userMin);
    const [min, setMin] = useState(userTime)
    const [seconds, setSeconds] = useState(60)
    //const [timer, setTimer] = useState(min);
    const [intervalId, setIntervalId] = useState(false);

    //initial seconds amount can be lowered to not wait the whole time
    const sec = useRef(60)


    useEffect(() => {



        if (seconds === 59 && min === userTime) {
            setMin(prev => prev - 1)


        }


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






    }, [seconds, intervalId, min, userTime])

    useEffect(() => {
        restartCountDown()

    }, [userTime])




    function handleIncrement() {
        console.log(min)
        if (userTime < 60) {
            setUserTime(prev => prev + 1)

        }
        else {
            setUserTime(60)
        }





    }

    function handleDecrement() {
        if (userTime > 0) {
            setUserTime(prev => prev - 1)


            console.log(min)
            console.log(type)
            console.log('usertime', userTime)

        } else {
            setUserTime(0)
        }



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

    const returnMinSec = () => {









    }

    return (
        <div id={`${type}-timer`} className='timer'>
            <div id={`${type}-length`}>{userTime}</div>
            <button id={`${type}-decrement`} onClick={handleIncrement}>increment</button>
            <button id={`${type}-increment`} onClick={handleDecrement}>decrement</button>


            <div id='Countdown' >
                <div id={`${type}-label`}>

                </div>
                <div id="sesson-label">
                    <h3>session length</h3>
                </div>
                <div id='time-left'>



                    {min <= 9 ? "0" + min : min}:{seconds === 60 ? '00' : seconds <= 9 ? "0" + seconds : seconds}



                </div>
                <div id='buttons'>
                    <button className='timerButton' id="start_stop" onClick={startStopCountDown}>
                        Start
                    </button>
                    {/* <button className='timerButton' onClick={stopCountDown}>Stop</button> */}
                    <button className='timerButton' id="reset" onClick={restartCountDown}>
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
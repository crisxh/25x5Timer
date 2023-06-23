import { useState, useEffect, useRef } from 'react'
import './Timer.css'

function Timer({ type, userTime, handleSession, getRestart }) {

    const [min, setMin] = useState(userTime)
    const [seconds, setSeconds] = useState(60)
    const [timer, setTimer] = useState(true);
    const [intervalId, setIntervalId] = useState(false);


    //initial seconds amount can be lowered to not wait the whole time
    const sec = useRef(6)


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

            restartCountDown()





        }








    }, [seconds, intervalId, min, userTime, timer])

    useEffect(() => {
        restartCountDown()

    }, [userTime])

    useEffect(() => {
        handleSession(min, seconds)

    }, [min, seconds])







    const countdown = () => {


        setSeconds(prev => prev - 1);

    }

    const startStopCountDown = () => {
        if (!intervalId && min > 0 || seconds >= 0) {


            setIntervalId(true);
            setIntervalId(setInterval(countdown, 1000))
        }




        if (intervalId) {

            clearInterval(intervalId);
            setIntervalId(false);

        }




    }


    const restartCountDown = () => {
        setSeconds(sec.current);
        setMin(userTime);
        setIntervalId(false);
        clearInterval(intervalId);

    }



    return (
        <div id={`${type}-timer`} className='timer'>
            <h1 id="timer-label">{type}</h1>




            <div id='Countdown' >

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

            </div>

        </div>

    )
}

export default Timer;
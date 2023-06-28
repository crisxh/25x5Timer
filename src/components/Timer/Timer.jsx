import { useState, useEffect, useRef } from 'react'
import './Timer.css'
import beep from "/src/assets/mixkit-data-scaner-2847.wav"
const alarm = new Audio(beep)




function Timer({ type, userTime, handleSession, getRestart, parentInterval }) {

    const [min, setMin] = useState(userTime)
    const [seconds, setSeconds] = useState(60)
    const [timer, setTimer] = useState(true);
    const [intervalId, setIntervalId] = useState(false);
    const [checkParentInterval, setCheckParentInterval] = useState(parentInterval)


    //initial seconds amount can be lowered to not wait the whole time
    const sec = useRef(60)


    useEffect(() => {
        if (checkParentInterval) {
            startStopCountDown()
        }
    }, [checkParentInterval, parentInterval])

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
            setMin(0)
            setSeconds(0)
            restartCountDown()
            alarm.play()





        } if (type === 'break' && min === 0 && seconds === 0) {
            startStopCountDown()
        }







    }, [seconds, intervalId, min, userTime, timer])

    useEffect(() => {
        restartCountDown()

    }, [userTime])

    useEffect(() => {
        handleSession(min, seconds, startStopCountDown)



    }, [min, seconds])







    const countdown = () => {


        setSeconds(prev => prev - 1);

    }

    const startStopCountDown = () => {
        if (!intervalId && min > 0 && seconds > 0) {


            setIntervalId(true);
            setIntervalId(setInterval(countdown, 100))
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
            <div id='time-left'>

                {min <= 9 ? "0" + min : min}:{seconds === 60 ? '00' : seconds <= 9 ? "0" + seconds : seconds}



            </div>



            <div id='Countdown' >


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
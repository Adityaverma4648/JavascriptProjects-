import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Timer = () => {
    const Ref = useRef(null);

    const [timer , setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
   
        setTimer('01:00:00');
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
 
        deadline.setSeconds(deadline.getSeconds() + 3600);
        return deadline;
    }
  
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  return (
    <div className='Timer d-flex justify-content-end'>
            <h2>{timer}</h2>
            <button onClick={onClickReset} className="border-0 px-2 py-1 mx-2">Reset</button>
    </div>
  )
}

export default Timer;

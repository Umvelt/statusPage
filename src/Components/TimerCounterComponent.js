import React, { useState, useEffect } from 'react';

const TimerCounterComponent = () => {
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <div>
            <h2>Timer: {timer} seconds</h2>
            <h2>Counter: {counter}</h2>
            <button onClick={incrementCounter}>Increment Counter</button>
        </div>
    );
};

export default TimerCounterComponent;

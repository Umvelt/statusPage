import React, { useState, useEffect } from 'react';

const DateTimeAndEarnings = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [earnings, setEarnings] = useState(0);

    useEffect(() => {
        // Update date and time every second
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        const generateRandomNumber = () => {
            return Math.floor(Math.random() * 2001) - 1000;
        };

        const earningsInterval = setInterval(() => {
            setEarnings(generateRandomNumber());
        }, 3000);


        return () => {
            clearInterval(interval);
            clearInterval(earningsInterval);
        };
    }, []);

    return (
        <div>
            <div>
                <h2>Date & Time: {currentDateTime.toLocaleString()}</h2>
            </div>
            <div>
                <h2>Your current earnings are:</h2>
                <div style={{ border: '1px solid black', padding: '10px' }}>
                    <h3>${earnings}</h3>
                </div>
            </div>
        </div>
    );
};

export default DateTimeAndEarnings;

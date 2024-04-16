import React, { useState, useEffect } from 'react';

const ColorWordSwitcher = () => {
    const colors = ['red', 'blue', 'green'];
    const words = ['Magic', 'Cloud', 'Future'];

    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const colorInterval = setInterval(() => {
            setCurrentColorIndex(prevIndex =>
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            );
        }, 1000);

        const wordInterval = setInterval(() => {
            setCurrentWordIndex(prevIndex =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => {
            clearInterval(colorInterval);
            clearInterval(wordInterval);
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: colors[currentColorIndex],
                    marginBottom: 20,
                }}
            ></div>
            <div
                style={{
                    width: 200,
                    height: 200,
                    border: '1px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h2 style={{ margin: 0 }}>{words[currentWordIndex]}</h2>
            </div>
        </div>
    );
};

export default ColorWordSwitcher;

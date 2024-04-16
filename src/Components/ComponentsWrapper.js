import React from 'react';
import ColorWordSwitcher from "./ColorWordSwitcher";
import TimerCounterComponent from './TimerCounterComponent';
import DateTimeAndEarnings from './DateTimeAndEarnings';

const ComponentWrapper = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <ColorWordSwitcher />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <TimerCounterComponent />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <DateTimeAndEarnings />
            </div>
        </div>
    );
};

export default ComponentWrapper;
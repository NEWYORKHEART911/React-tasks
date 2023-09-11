import React, { useState, useEffect } from 'react';
import styles from './DateTimeDisplay.css';

function DateTimeDisplay() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=> {
        setInterval(()=> {
            setCurrentTime(new Date());
        }, 1000);
    }, []);

    const formatDate = (date) => {
        const month = (date.getMonth() +1);
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const ampm = hours <= 12 ? "AM" : "PM";
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    }

    return (
        <div class="datetime">
            <p id="time">Time: {formatTime(currentTime)}</p>
            <p id="date">Date: {formatDate(currentTime)}</p>
        </div>
    )
}

export default DateTimeDisplay;
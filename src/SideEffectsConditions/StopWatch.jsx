import { useState, useEffect, useRef } from "react";
import styles from "./StopWatch.module.css";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // useRef holds the interval ID without causing a re-render when it changes
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        // Cleanup: clears the interval whenever `isRunning` changes
        // (so pausing doesn't leave a second interval running underneath)
        // and also when the component unmounts entirely
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
        const secs = (totalSeconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div className={styles.container}>
            <h1 className={`${styles.time} ${isRunning ? styles.glitching : ""}`}>
                {formatTime(seconds)}
            </h1>

            <div className={styles.buttons}>
                <button
                    className={`${styles.btn} ${isRunning ? styles.pause : styles.start}`}
                    onClick={handleStartPause}
                >
                    {isRunning ? "Pause" : "Start"}
                </button>

                <button className={`${styles.btn} ${styles.reset}`} onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;
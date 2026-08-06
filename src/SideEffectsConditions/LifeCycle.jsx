import { useState, useEffect } from "react";
import styles from "./LifeCycle.module.css";

function LifeCycle() {
    const [n, setN] = useState(0);
    const [k, setK] = useState(0);
    const [nClicks, setNClicks] = useState(0);
    const [kClicks, setKClicks] = useState(0);

    useEffect(() => {
        console.log("N has changed:", n);
    }, [n]);

    useEffect(() => {
        console.log("K has changed:", k);
    }, [k]);

    const upgradeN = () => {
        setN(n + 1);
        setNClicks(nClicks + 1);
    };

    const downgradeN = () => {
        setN(n - 1);
        setNClicks(nClicks + 1);
    };

    const upgradeK = () => {
        setK(k + 1);
        setKClicks(kClicks + 1);
    };

    const downgradeK = () => {
        setK(k - 1);
        setKClicks(kClicks + 1);
    };

    return (
        <div>
            <div>
                <button className={`${styles.btn} ${styles.upgrade}`} onClick={upgradeN}>Upgrade N</button>
                <b>{n}</b>
                <button className={`${styles.btn} ${styles.downgrade}`} onClick={downgradeN}>Downgrade N</button>
                <p className={`${styles.paragraph}`}>
                    N clicked {nClicks} times — currently {n} ({n % 2 === 0 ? "even" : "odd"})
                </p>
            </div>

            <div>
                <button className={`${styles.btn} ${styles.upgrade}`} onClick={upgradeK}>Upgrade K</button>
                <b>{k}</b>
                <button className={`${styles.btn} ${styles.downgrade}`} onClick={downgradeK}>Downgrade K</button>
                <p className={`${styles.paragraph}`}>
                    K clicked {kClicks} times — currently {k} ({k % 2 === 0 ? "even" : "odd"})
                </p>
            </div>

            {/* ONE combined component — reacts to n OR k changing */}
            <EvenorOdd n={n} k={k} />
        </div>
    );
}

function EvenorOdd(props) {
    const { n, k } = props;
    const total = n + k;

    if (total % 2 === 0) {
        return <EvenComponents />;
    } else {
        return <OddComponents />;
    }
}

function EvenComponents() {
    useEffect(() => {
        console.log("Even component rendered");

        // Cleanup: runs right before this component unmounts —
        // i.e. right before it "dies" and gets swapped for OddComponents
        return () => {
            console.log("Even component is dying (unmounting)");
        };
    }, []);

    return (
        <div>
            <h1 className={`${styles.h1}`}>Even Components</h1>
        </div>
    );
}

function OddComponents() {
    useEffect(() => {
        console.log("Odd component rendered");

        return () => {
            console.log("Odd component is dying (unmounting)");
        };
    }, []);

    return (
        <div>
            <h1>Odd Components</h1>
        </div>
    );
}

export default LifeCycle;
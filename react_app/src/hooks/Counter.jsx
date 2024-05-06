import React, { useState } from "react";
import styles from './Counter.module.css';

const Counter = function () {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div  className={styles.counterContainer}>
                <h1 className={styles.counterDisplay}>{count}</h1>
                <button onClick={decrement} className={styles.counterButton}>Decrement</button>
                <button onClick={reset} className={styles.counterButton}>Reset</button>
                <button onClick={increment} className={styles.counterButton}>Increment</button>
            </div>
        </>
    )

}

export default Counter;
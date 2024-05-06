import React, { useState } from "react";
import styles from './ColorPicker.module.css'

const ColorPicker = () => {

    const [color, setColor] = useState("salmon");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (<>
        <div className={styles.colorContainer}>
            <h1 className={styles.colorTitle}>Color Picker</h1>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>

    </>)
}

export default ColorPicker;
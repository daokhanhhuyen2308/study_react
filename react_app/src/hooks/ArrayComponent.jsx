import React, { useState } from 'react';

const ArrayComponent = () => {

    const [foods, setFoods] = useState(['apple', 'orange', 'banana']);

    function handleAddFood() {

        const newFoot = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(foods => ([...foods, newFoot]));

    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (<>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) =>
                <li key={index} onClick={() => {handleRemoveFood(index)}}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
    </>)

}

export default ArrayComponent;
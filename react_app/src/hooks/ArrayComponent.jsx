import React, { useState } from 'react';

const ArrayComponent = () => {

    const [foods, setFoods] = useState(['apple', 'orange', 'banana']);
    const [inputValue, setInputValue] = useState('');

    

    function handleAddFood() {

        // const newFoot = document.getElementById("foodInput").value;
        // document.getElementById("foodInput").value = "";
        setFoods(foods => ([...foods, inputValue]));
        setInputValue('');

    }

    function handleRemoveFood(index) {
        //do không sử dụng element trong hàm filter((element, i)) nên sẽ thay thế bằng dấu _
        setFoods(foods.filter((_, i) => i !== index));
    }

    function handleInputValueChange(event) {
        setInputValue(event.target.value);
    }


    const foodList = foods.map((food, index) =>
    (<li key={index} onClick={() => {handleRemoveFood(index)}}>
        {food}
    </li>));

    return (<>
        <h2>List of food</h2>
        <ul>
            {foodList}
            {/* {foods.map((food, index) =>
                <li key={index} onClick={() => {handleRemoveFood(index)}}>{food}</li>)} */}
        </ul>
        <input type="text" id="foodInput" value={inputValue} placeholder="Enter food name"
        onChange={handleInputValueChange} />
        <button onClick={handleAddFood}>Add Food</button>
    </>)

}

export default ArrayComponent;
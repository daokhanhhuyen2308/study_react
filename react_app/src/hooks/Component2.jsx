import React, { useState } from "react";
export default function Component2() {

    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        
        const newCar = ({year: carYear,make: carMake, model: carModel});
        setCar(car => [...car, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index) {
        setCar(car => car.filter((_, i) => i !== index));
    }

    const carList = car.map((c, index) => {
        return (<li key={index} onClick={() => handleRemoveCar(index)}>
            {c.year} {c.make} {c.model}
            </li>)
    })


    return (
        <>
        <h2>List of Car Objects</h2>
        <ul style={{margin: "10px"}}>
            {carList}
        </ul>
            <input type="number" value={carYear}
                onChange={(e) => setCarYear(e.target.value)} placeholder="Enter year"
                style={{ marginBottom: "10px" }} /> <br />
            <input type="text" value={carMake}
                onChange={(e) => setCarMake(e.target.value)} placeholder="Enter make"
                style={{ marginBottom: "10px" }} /> <br />
            <input type="text" value={carModel}
                onChange={(e) => setCarModel(e.target.value)} placeholder="Enter model"
                style={{ marginBottom: "10px" }} /> <br />
            <button onClick={handleAddCar}>Add Car</button>
        </>)
}
import React, { useState } from "react";
const MyComponent = function () {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const updateAge = () => {
        setAge((age) => age + 1);
    }

    const toggleEmployeeStatus = () => {
        setIsEmployee((isEmployee) => !isEmployee);
    }
    return (<>

         <p>Name: {name}</p>
         <button onClick={() => setName("Bro")}>Click me</button>
        <button onClick={updateName}>set name</button>
        <br />
        <p>Age : {age}</p>
        <button onClick={updateAge}>set age</button>
        <p>IsEmployee : {(isEmployee) ? "Yes" : "No"}</p>
        <button onClick={toggleEmployeeStatus}>set status</button>

    </>)

}

export default MyComponent;
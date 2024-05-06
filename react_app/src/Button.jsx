import Card from "./Card.jsx";
import React, { useState } from 'react';

function Button(){

    // let count = 0;

    // const handleClick1 = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`{name} clicked me ${count} time/s`);
    //     }else{
    //         console.log(`{name} stop clicking me`);
    //     }
    // }

    // const handleClick2 = function(name){
    //     console.log(`{name} stop clicking me`);
    // }

    const [showCard, setShowCard] = useState(false);

    // const img = Card;

    const handleClick = () => {
        setShowCard(true);
    }

    return(<>
    {/* nếu mà viết function có chứa parameters thì ta phải viết như này */}
    <button onClick={() => {{handleClick()}}}>Click me 😁</button>
    {showCard && <Card/>}
    {/* <button onClick={() => {{handleClick2("Bro")}}}>Click me 😁</button> */}
    {/* <button onClick={() => {{handleClick1("Bro")}}}>Click me 😁</button> */}

    </>);

}

export default Button;
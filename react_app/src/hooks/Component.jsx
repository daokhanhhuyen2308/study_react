import React, { useState } from "react";

const Component = () => {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    const style = {
        "margin-right": "20px"
    }

    return (<>
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>Name: {name}</h1>
            <br />
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <h1>Quantity: {quantity}</h1>
            <textarea value={comment} onChange={handleCommentChange}
                placeholder="Enter your text" />
            <p>Comment: {comment}</p>
            <select name="payment" value={payment} onChange={handlePaymentChange}>
                <option value="">select the option</option>
                <option value="cash">Cash</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>
            <h1>Payment: {payment}</h1>
            <label style={style}>
                <input type="radio" value={"Pick up"}
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange} />
                Pick up</label>
            <label>
                <input type="radio" value={"Delivery"}
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                Delivery</label>

            <p>Shipping: {shipping}</p>


        </div>
    </>)

}

export default Component;
import { render } from "@testing-library/react";
import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuOrder(props){

console.log(props?.order)
    const orderHTML = props?.order.map(item =>  <div><h3>{item.title}</h3><p>{item.price}</p></div>)
    console.log(orderHTML);
    const priceHTML = props?.order.map(item => item.price);
    const totalPrice = props.order.reduce((acc, item) => acc + item.price, 0);
    console.log(totalPrice);

    return (
        <> 
        <h2>Order</h2>
        {orderHTML}
        {`Subtotal: $${totalPrice}`}
        <button type="delete" >Clear Order</button>
        </>
    )
}

export default MenuOrder;
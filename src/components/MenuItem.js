import { useState } from "react";

function MenuItem(props){
    // console.log(props)
    // console.log(props.menuItem?.title);


    const previewHTML = (
        <>
        <h3>{props.menuItem?.title}</h3>
        <p>{props.menuItem?.price}</p>
        <img src={props.menuItem?.img} alt="" />
        <p>{props.menuItem?.desc}</p>
        <button type="button" onClick={() => props.addOrder(props.menuItem?.title, props.menuItem?.price)}>Add to order </button>
        <button type="button" onClick={() => props.deleteOrder(props.id)}>Remove from order </button>
        </>
    )


    return(
        <>
            {previewHTML}
        </>
    )
}

export default MenuItem;
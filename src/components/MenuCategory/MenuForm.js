import { useState } from "react"

function MenuForm(props){

const [fullName, setFullName] = useState("");
const [number, setNumber] = useState("");

    function handleChange(event) {
        setFullName(event.target.value);
    }
    function handleChangeNumber(event) {
        setNumber(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        props.submitOrder(fullName, props?.order, number);
        setFullName("");
        setNumber("");
        console.log(event.target.value);
        console.log(event);
    }

    return(
        <>


        <form class="form" action="" onSubmit={handleSubmit}>
           
            <input name="name"  type="text" value={fullName} placeholder="Full Name" onChange={handleChange}></input>
            <input name="number" type="tel" value={number} placeholder="Phone Number" onChange={handleChangeNumber}></input>
            {/* <input name="email" type="email" value={email} placeholder="Email Adress"></input> */}
            {/* <input name="address" type='text' value={adress} placeholder="Address"></input> */}
            <button class="submit-btn" type="submit">Place Order</button>

        </form>
        </>
    )
}

export default MenuForm;
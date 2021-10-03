import { useState } from "react"

function MenuForm(props){

const [fullName, setFullName] = useState("");

    function handleChange(event) {
        setFullName(event.target.value);
    }

    return(
        <>


        <form action="" onSubmit={props.submitOrder(fullName, props.order, props.order  )}>
           
            <input name="name"  type="text" value={fullName} placeholder="Full Name" onChange={handleChange}></input>
            {/* <input name="email" type="email" value={email} placeholder="Email Adress"></input> */}
            {/* <input name="address" type='text' value={adress} placeholder="Address"></input> */}
            <button type="submit" onClick={() => props.submitOrder(fullName)}>Place Order</button>

        </form>
        </>
    )
}

export default MenuForm;
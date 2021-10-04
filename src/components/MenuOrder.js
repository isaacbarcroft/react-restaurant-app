function MenuOrder(props){

 
console.log(props?.order)
    const orderHTML = props.order?.map(item =>  <div><h3>{item.title}</h3><p>{item.price}</p></div>)
    console.log(orderHTML);
    const priceHTML = props.order?.map(item => item.price);
    const totalPrice = props.order?.reduce((acc, item) => acc + item.price, 0);
    console.log(totalPrice);

    return (
        <> 
    <div class="order" >
        <h2>Order</h2>
        {orderHTML}
        <p>{`Subtotal: $${totalPrice}`}</p>
        <button class="delete-btn" type="delete" onClick={props.deleteOrder} >Clear Order</button>
    </ div>
        </>
    )
}

export default MenuOrder;
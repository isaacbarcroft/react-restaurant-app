function MenuItem(props){
    // console.log(props)
    // console.log(props.menuItem?.title);


    const previewHTML = (
        <>
    <div class="menuItemList">
        <h3 class="itemName">{props.menuItem?.title}</h3>
        <p>{props.menuItem?.price}</p>
        <img src=  { props.menuItem?.img}  alt="" />
        <p>'{props.menuItem?.desc}'</p>
        <button class="btn2" type="button" onClick={() => props.addOrder(props.menuItem?.title, props.menuItem?.price)}>Add to order </button>
        <button class="btn2"  type="button" onClick={() => props.deleteItem(props.id)}>Remove from order </button>
        </div>
        </>
    )


    return(
        <>
            {previewHTML}
        </>
    )
}

export default MenuItem;
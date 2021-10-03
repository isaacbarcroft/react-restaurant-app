import { useState } from "react";
import MenuItem from './MenuItem';


function MenuList(props){
    const menuItems = props.menuItems.map(menuItem => <MenuItem menuItem={menuItem} deleteOrder={props.deleteOrder}  addOrder={props.addOrder} />);
    return(
        <>
        <h2>{props.selection ? props.selection.toUpperCase() : 'All'}</h2>
        {menuItems}
        </>
    )
}

export default MenuList;
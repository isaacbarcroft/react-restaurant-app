import MenuItem from './MenuItem';


function MenuList(props){
    const menuItems = props.menuItems.map(menuItem => <MenuItem menuItem={menuItem} deleteItem={props.deleteItem}  addOrder={props.addOrder} />);
    return(
        <>
        <h2 class="headers" >{props.selection ? props.selection.toUpperCase() : 'All'}</h2>
        {menuItems}
        </>
    )
}

export default MenuList;
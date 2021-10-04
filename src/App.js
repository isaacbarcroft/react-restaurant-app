
import './App.css';
import { useState, useEffect } from 'react';
import menu from './menu';
import MenuList from './components/MenuList';
import MenuOrder from './components/MenuOrder';
import MenuForm from './components/MenuCategory/MenuForm';


// const BASE_URL = 'https://tiny-taco-server.herokuapp.com/FeedMe/';

function App() {
  const [menuItems,setMenuItems] = useState(menu);
  const [selection, setSelection] = useState();
  const [order, setOrder] = useState([]);

  const categories = [...new Set(menu.map(item => item.category))];
  const categoriesHTML = categories.map(category => <button class="nav-btn" key={category} onClick={() => setSelection(category)}>{category}</button>);

  const filteredMenuItems = menuItems.filter(menuItem => selection ? menuItem.category === selection : menuItem);

  async function submitOrder(name, order, number){
    const newOrder = {
      fullname: name, 
      title: order, 
      number: number,
    };
    console.log(newOrder);
    // updateOrder([...order, newOrder]);
const response = await fetch('https://tiny-taco-server.herokuapp.com/FeedMe/', {
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json',
  },
  body: JSON.stringify(newOrder),
});
if(response.ok){
 return response.json();
 
}  
  }
  function deleteOrder(){
        setOrder(null);
  }


function deleteItem(id){
  const index = order.findIndex(item=> item.id === id)
    const remaingOrder = [...order];
    remaingOrder.splice(index, 1)
    setOrder(remaingOrder);
}

function addOrder(title, price){

  const newOrderItem = {
    title, 
    price,
  }
  setOrder([...order, newOrderItem]);
}

  return (
    <div className="App">
      <div>
      <button class="nav-btn" onClick={() => setSelection(null)}>All</button>
      {categoriesHTML}
      </div>
      <MenuList selection={selection} menuItems={filteredMenuItems} deleteItem={deleteItem} addOrder={addOrder}/>
     <div class="menuOrder">
     <MenuOrder  order={order} menuItem={menuItems} deleteOrder={deleteOrder} />
     </div>
     <MenuForm  order={order} submitOrder={submitOrder} />
      
    </div>
  );
}

export default App;

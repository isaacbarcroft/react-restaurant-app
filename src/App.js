
import './App.css';
import { useState, useEffect } from 'react';
import menu from './components/menu';
import MenuList from './components/MenuList';
import MenuOrder from './components/MenuOrder';
import MenuForm from './components/MenuCategory/MenuForm';


// const BASE_URL = 'https://tiny-taco-server.herokuapp.com/FeedMe/';

function App() {
  const [menuItems,setMenuItems] = useState([]);
  const [selection, setSelection] = useState();
  const [order, setOrder] = useState([]);



  useEffect(() => {
    getMenuItems()
    // GET request using fetch with async/await
    async function getMenuItems(){
    const response = await fetch('https://django-restaurant-app--isaac.herokuapp.com/api_v1/menuitems/');
    const data = await response.json();
   console.log(data)
    setMenuItems(data) ;

    }// return menuItemsAPI

},[setMenuItems])
console.log(menuItems)
console.log(setMenuItems)

  const categories = [...new Set(menuItems?.map(item => item.category))];
  const categoriesHTML = categories.map(category => <button class="nav-btn" key={category} onClick={() => setSelection(category)}>{category}</button>);

  const filteredMenuItems = menuItems.filter(menuItem => selection ? menuItem.category === selection : menuItem);

  async function submitOrder(name, order, number){
    const newOrder = {
      title: name, 
      item: order, 
      phone_number: number,
      // total_price:
    };
    console.log(newOrder);
    const response = await fetch('https://django-restaurant-app--isaac.herokuapp.com/api_v1/orders/', {
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
        setOrder([]);
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
     <MenuOrder  order={order} menuItem={menuItems} deleteOrder={deleteOrder} deleteItem={deleteItem} />
     </div>
     <MenuForm  order={order} submitOrder={submitOrder} />
      
    </div>
  );
}

export default App;

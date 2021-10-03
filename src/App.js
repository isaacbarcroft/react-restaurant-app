
import './App.css';
import { useState, useEffect } from 'react';
import menu from './menu';
import MenuList from './components/MenuList';
import MenuOrder from './components/MenuOrder';
import MenuForm from './components/MenuCategory/MenuForm';

const BASE_URL = 'https://tiny-taco-server.herokuapp.com/FeedMe/';

function App() {
  const [menuItems,setMenuItems] = useState(menu);
  const [selection, setSelection] = useState();
  const [order, updateOrder] = useState([]);

  const categories = [...new Set(menu.map(item => item.category))];
  const categoriesHTML = categories.map(category => <button key={category} onClick={() => setSelection(category)}>{category}</button>);

  const filteredMenuItems = menuItems.filter(menuItem => selection ? menuItem.category === selection : menuItem);
// useEffect(() => {
//   async function submitOrder(fullname = ""){
//     const newOrder = [{
//       fullname, 
//       title: order, 
//       price: totalPrice, 
//     }];
//     updateOrder([...order, newOrder]);
// const response = await fetch(`${BASE_URL}`, {
//   method: 'POST',
//   headers: {
//     'Content-Type' : 'application/json',
//   },
//   body: JSON.stringify(newOrder),
// });
// if(response.ok){
//   const data = await response.json();
//   updateOrder([...order, data]);
// }  
//   }
// })

function deleteOrder(id){
  const index = order.findIndex(item=> item.id === id)
    const remaingOrder = [...order];
    remaingOrder.splice(index, 1)
    updateOrder(remaingOrder);
}

function addOrder(title, price){

  const newOrderItem = {
    title, 
    price,
  }
  updateOrder([...order, newOrderItem]);
}

  return (
    <div className="App">
      <button onClick={() => setSelection(null)}>All</button>
      {categoriesHTML}
      <MenuList selection={selection} menuItems={filteredMenuItems} deleteOrder={deleteOrder} addOrder={addOrder}/>
     <MenuOrder  order={order} menuItem={menuItems}/>
     <MenuForm  order={order} />
      
    </div>
  );
}

export default App;


import './App.css';
import { useState, useEffect } from 'react';
import menu from './components/UtitlityMenu';
import LunchMenu from './components/MenuCategory/LunchMenu'; 
import DinnerMenu from './components/MenuCategory/DinnerMenu';
// import BreakfastMenu from './components/MenuCategory/BreakfastMenu';

const allCategories = ['all',...new Set(menu.map(item => item.category))];

function App() {
const [menuItems,setMenuItems] = useState(menu)
const [categories, setCategories] = useState(allCategories)


const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(menu)
    return
  }
  const newItems = menu.filter((item) => item.category === category)
  setMenuItems(newItems)
}
console.log(allCategories)
const Categories = allCategories.map(category => category = <button key= {category.id}> {category}</button>);
   
console.log(Categories)
console.log(categories);
const breakfastItems = menu.filter(item => item.category === 'breakfast')
console.log(breakfastItems);
const breakfastItemsHTML = breakfastItems.map(item => <div><h2>{item.title}</h2><p>{item.price}</p></div>)
console.log(breakfastItemsHTML);

  return (
    <div className="App">
     {Categories}
      {breakfastItemsHTML}

    <LunchMenu />
    <DinnerMenu />
    </div>
  );
}

export default App;

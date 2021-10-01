import menu from './components/UtitlityMenu';


function BreakfastMenu(props){
    const breakfastItems = menu.filter(item => item.category === 'breakfast')
    console.log(breakfastItems);
    return (
        <>

        {breakfastItems}
        </>
    )
}


export default BreakfastMenu
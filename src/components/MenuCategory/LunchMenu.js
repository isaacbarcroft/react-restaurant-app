import menu from "../UtitlityMenu";

function LunchMenu() {
    const LunchItems = menu.filter(item => item.category === 'lunch')
    const LunchItemsHTML = LunchItems.map(item => <div><h2>{item.title}</h2><p>{item.price}</p></div>)

    return (
        <>
        {LunchItemsHTML}
        </>
    )
}

export default LunchMenu;
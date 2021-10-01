import menu from "../UtitlityMenu";

function DinnerMenu() {
    const DinnerItems = menu.filter(item => item.category === 'dinner')
    const DinnerItemsHTML = DinnerItems.map(item => <div><h2>{item.title}</h2><p>{item.price}</p></div>)

    return (
        <>
        {DinnerItemsHTML}
        </>
    )
}

export default DinnerMenu;


import PropTypes from 'prop-types';
function List(props) {

    const itemList = props.items;
    const calory = props.calory;




    //sắp xếp theo chữ cái
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    const listItems = itemList.map((item) =>
    (<li key={item.id}>{item.name}: &nbsp;
        <b>{item.calories}</b> </li>));


    return (<>
        <h2 className="list-category">{calory}</h2>
        <ol className="list-items">{listItems}</ol>
    </>)

}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })),
    calory: PropTypes.string
}

List.defaultProps = {
    items: [],
    calory: "Category"
}

export default List
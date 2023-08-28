const FilterButtons = (props) => {

    return <div className="filter-buttons">
        <button onClick={props.onFilter} className="btn all">All</button>
        <button onClick={props.onFilter} className="btn incomplete">Incomplete</button>
        <button onClick={props.onFilter} className="btn complete">Complete</button>
    </div>
}

export default FilterButtons;
const Checkbox = (props) => {
    const handleCheckboxChange = () => {
        props.markItem(props.id)
    }

    return <input type="checkbox" onChange={handleCheckboxChange} checked={props.isChecked} />
}

export default Checkbox;
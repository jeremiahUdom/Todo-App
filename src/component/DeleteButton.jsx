import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = (props) => {
    const handleDeleteButtonClick = () => {
        props.deleteItem(props.itemToDelete)
    }

    return <button onClick={handleDeleteButtonClick} className="delete-btn" style={props.isCheckedProperty ? { color: "#B2B2B2" } : null}>
                <DeleteIcon />
        </button>
}

export default DeleteButton;
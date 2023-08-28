import CheckBox from "./Checkbox";
import DeleteButton from "./DeleteButton";

const TodoItem = (props) => {

    const { itemToDisplay } = props;
    const customStyle= {
        textDecoration: "line-through",
        color:"#B2B2B2"
    }

    return <div className="todo-item">
        <span className="todo-text">
            <CheckBox markItem={props.onMark} id={itemToDisplay.id} isChecked={itemToDisplay.completed} />
            <span style={itemToDisplay.completed ? customStyle : null}>
                <p className="title">{ itemToDisplay.title }</p>
                <p className="description">{ itemToDisplay.description }</p>
            </span>
        </span>

        <DeleteButton isCheckedProperty={itemToDisplay.completed} deleteItem={props.onDelete} itemToDelete={itemToDisplay.id} />
    </div>
}

export default TodoItem;
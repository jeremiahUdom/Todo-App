import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return <div className="note-list">
        {
            props.itemsToDisplay.map(item => {
                return <TodoItem key={item.id} itemToDisplay={item} onDelete={props.deleteTodoItem} onMark={props.markItemAsComplete} />
            })
        }
    </div>

}

export default TodoList;
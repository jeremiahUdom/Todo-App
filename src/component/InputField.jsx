import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Zoom from '@mui/material/Zoom';

const InputField = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [todo, setTodo] = useState({
        title: "",
        description: ""
    });

    const expand = () => {
        setExpanded(true);
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setTodo(prevNote => {
            return {
            ...prevNote,
            [name]: value
            };
        });
    }

    const submitTodo = (event) => {
        props.onAdd(todo);
        setExpanded(false);
        setTodo({
          title: "",
          description: ""
        });
        event.preventDefault();
    }

    return <form className="create-todo">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={todo.title}
            placeholder="Title"
          />
        )}

        <div className="text-area">
          {!isExpanded && <span><AddIcon /></span>}
          <textarea
            style={{width: isExpanded ? "100%": "80%"}}
            name="description"
            onClick={expand}
            onChange={handleChange}
            value={todo.description}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
        </div>

        <Zoom in={isExpanded}>
          <Fab onClick={submitTodo}>
            <AddIcon />
          </Fab>
        </Zoom>
    </form>

}

export default InputField;
import React, { useEffect, useState } from "react";
import FilterButtons from "./FilterButtons";
import InputField from "./InputField";
import TodoList from "./TodoList";

const MainContent = () => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const [todos, setTodos] = useState([...storedItems]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [inCompleteTodos, setIncompleteTodos] = useState([]);
    const [filter, setFilter] = useState("All");
    let displayedTodos = [];

    const addTodo = (item) => {
        setTodos (prevTodo => {
            return [...prevTodo, {...item, id: Date.now(), completed: false, editing: false, editText: ""}]
        })
    }

    const deleteTodo = (itemToDeleteId) => {
        setTodos(prevTodo => {
            return prevTodo.filter((item) => {
                return item.id !== itemToDeleteId;
            })
        })
    }

    const markAsComplete = (itemToMarkId) => {
        setTodos(prevTodo => {
          const updatedTodos = prevTodo.map(item => {
            if (item.id === itemToMarkId) {
              return { ...item, completed: !item.completed };
            }
            return item;
          });
          return updatedTodos;
        });
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.innerText)
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(todos));
        setCompletedTodos(() => todos.filter(todoItem => todoItem.completed === true));
        setIncompleteTodos(() => todos.filter(todoItem => todoItem.completed === false));
    }, [todos]);

    if (filter.toLowerCase() === "complete") {
        displayedTodos = completedTodos;
    } else if (filter.toLowerCase() === "incomplete") {
        displayedTodos = inCompleteTodos;
    } else {
        displayedTodos = todos
    }

    return <div className="main-content">
        <h2>{filter}</h2>
        <p className="task-count">Tasks Left : {inCompleteTodos.length}</p>

        <FilterButtons onFilter={handleFilterChange} />
        <TodoList itemsToDisplay={displayedTodos} deleteTodoItem={deleteTodo} markItemAsComplete={markAsComplete} />
        <InputField onAdd={addTodo} />
    </div>
}

export default MainContent;
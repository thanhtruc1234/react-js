import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function TodoList(){

const [todos, setTodos] = useState([]);

const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    // console.log(todo, ...todos);
    
}
const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos);
}

    return (
        <div>
            <h1>Kế hoạch của bạn ngày hôm nay?</h1>
            <TodoForm />
            <Todo todos={todos} completeTodo={completeTodo} />
      
           
        </div>
    )
}
export default TodoList;
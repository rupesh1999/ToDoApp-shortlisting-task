import React from "react";
import Todo from "./Todo/Todo";

const TodoList = (props) => {
    const deleteTodo = (id) => {
        props.deleteTodo(id);
    }
    return(
        <div style={{textAlign: "center" , margin: "0 auto !important"}}>
            { props.todos.map((todo , id) =>  <Todo key={id} markDone={(id) => props.markDone(id)} deleteTodo={(id) => deleteTodo(id)} singleTodo = {todo} id={id} />) }
        </div>
    );
}

export default TodoList;
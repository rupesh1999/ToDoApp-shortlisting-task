import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import LoginComponent from "./components/LoginComponent/LoginComponent"


class App extends Component {
  state = {
    Todos: [],
    isLoggedIn: false
  }
  todoChangeHandeler = (Todo, description) => {
    console.log(description);
    const newState = this.state.Todos.concat({ todo: Todo, todoDescription: description, status: 1 })
    this.setState({ Todos: newState });
    console.log(this.state.Todos);
  }
  DeleteTodo = (Todo_id) => {
    const newState = this.state.Todos.filter((el, id) => id !== Todo_id);
    // console.log(newState);
    this.setState({ Todos: newState });
  }
  markDone = (todo_id) => {
    let newState = [];
    this.state.Todos.forEach((el, id) => {
      let temp = {
        todo: el.todo,
        todoDescription: el.todoDescription,
        status: el.status
      }
      if (id == todo_id) {
        temp.status = 0;
      }
      newState.push(temp);
    });
    this.setState({ Todos: newState });
  }
  Login = () => {
    this.setState({isLoggedIn: true});
  } 
  LoginOrNot = () => {
    if (this.state.isLoggedIn === true) {
      return (
        <div className="App" >
          <TodoInput TodoChange={(todo, description) => this.todoChangeHandeler(todo, description)} />
          <TodoList markDone={(id) => this.markDone(id)} deleteTodo={(Todo_id) => this.DeleteTodo(Todo_id)} todos={this.state.Todos} />
        </div>
      );
    } else {
      return (
        <LoginComponent login = {this.Login}/>
      ); 
    }
  }
  render() {
    return (
      <>
        {this.LoginOrNot()}
      </>
    );
  }
}

export default App;

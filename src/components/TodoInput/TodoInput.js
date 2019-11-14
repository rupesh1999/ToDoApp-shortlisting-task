import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from "./TodoInput.module.css";
import Button from '@material-ui/core/Button';

export default class TodoInput extends Component {
    state = {
        Todo: "",
        description: ""
    }
    btnClickHandeler = () => {
        // console.log(this.state.Todo);
        this.props.TodoChange(this.state.Todo , this.state.description);
    }
    todoChangeHandeler = (e) => {
        this.setState({ Todo: e.target.value });
    }
    descriptionChangeHandeler = (e) => {
        console.log(e.target.value);
        this.setState({ description: e.target.value});
    }
    render() {
        return (
            <div style={{ textAlign: "center" }} className="container">
                <h1 style={{color: "buleViolet"}}>Enter a To-Do Item</h1>
                <p>Click on the todo heading to see the description</p>
                <TextField
                    id="outlined-search"
                    label="Add a To-Do Item"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.todoChangeHandeler}
                />
                <TextField
                    id="outlined-search"
                    label="Add a description"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.descriptionChangeHandeler}
                />
                <br />
                <Button onClick = {this.btnClickHandeler} variant="outlined" id={classes.button}>
                    Add To-Do
                </Button>
            </div>
        )
    }
}
